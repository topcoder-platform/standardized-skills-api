import { Op } from 'sequelize';
import { uniqBy, map, toString, isEmpty, pick } from 'lodash';

import db, { Skill, SkillCategory, UserSkill, UserSkillLevel, UserSkillDisplayMode } from '../db';
import { LoggerClient } from '../utils/LoggerClient';
import { GetUserSkillsQueryDto, UpdateUserSkillsRequestBodyDto } from '../dto';
import { bulkCheckValidIds, findAndCountPaginated } from '../utils/postgres-helper';
import { BadRequestError, NotFoundError } from '../utils/errors';
import { AuthUser } from '../types';
import { ensureUserCanManageMemberSkills, ensureUserHasAdminPrivilege } from '../utils/helpers';
import * as esHelper from '../utils/es-helper';
import { getOrderBy, updateDisplayModeForUserSkills } from '../utils/user-skills-helper';
import { fetchSelfDeclaredSkillLevel } from '../utils/skills-helper';
import { UserSkillLevels } from '../config';

const logger = new LoggerClient('UserSkillsService');

/**
 * Gets user's skills with the attached skill category, skill levels, and type
 */
export async function fetchDbUserSkills(userId: string | number, query: GetUserSkillsQueryDto) {
    try {
        // manually handle sortBy in here
        const { order, sortBy } = getOrderBy(query);

        const { skills, ...paginationData } = await findAndCountPaginated(
            Skill,
            'skills',
            { ...query, sortBy },
            {
                attributes: ['id', 'name'],
                include: [
                    {
                        model: SkillCategory,
                        as: 'category',
                        attributes: ['id', 'name'],
                    },
                    {
                        model: UserSkill,
                        as: 'user_skills',
                        where: {
                            user_id: userId,
                        },
                        include: [
                            {
                                model: UserSkillLevel,
                                as: 'user_skill_level',
                                attributes: ['id', 'name', 'description'],
                            },
                            {
                                model: UserSkillDisplayMode,
                                as: 'user_skill_display_mode',
                                attributes: ['id', 'name'],
                            },
                        ],
                        attributes: ['id'],
                    },
                ],
                order,
            },
        );

        // Map the database data into skill items that contain category, levels objects, type (principal/additional)
        const allSkills: {
            id: string;
            name: string;
            category: { id: string; name: string };
            levels: { id: string; name: string; description: string }[];
            displayMode: any;
        }[] = [];
        for (const skill of skills as Skill[]) {
            const levels: { id: string; name: string; description: string }[] = [];

            // `userSkill` is used to retrieve the type of skill (principal/additional)
            // it we have a "verified" skill level, we get the type from that entry
            const userSkill =
                skill.user_skills.find((d) => d.user_skill_level.name === UserSkillLevels.verified) ||
                skill.user_skills[0];

            for (const uskill of skill.user_skills) {
                levels.push({
                    id: uskill.user_skill_level.id,
                    name: uskill.user_skill_level.name,
                    description: uskill.user_skill_level.description ?? '',
                });
            }

            allSkills.push({
                id: skill.id,
                name: skill.name,
                category: {
                    id: skill.category.id,
                    name: skill.category.name,
                },
                levels,
                displayMode: {
                    id: userSkill.user_skill_display_mode.id,
                    name: userSkill.user_skill_display_mode.name,
                },
            });
        }

        return {
            ...paginationData,
            skills: allSkills,
        };
    } catch (error) {
        logger.error('Unable to fetch all user\'s skills');
        throw error;
    }
}

/**
 * Takes care of updating the db records for the user skills
 */
export async function updateDbUserSkills(
    currentUser: AuthUser,
    userId: number,
    skillsData: UpdateUserSkillsRequestBodyDto,
) {
    const selfDeclaredSkillLevel = await fetchSelfDeclaredSkillLevel();

    // ensure that only designated users can mark skills as other than "selfDeclared"
    if (skillsData.skills.some((skill) => skill.levelId && skill.levelId !== selfDeclaredSkillLevel.id)) {
        ensureUserHasAdminPrivilege(currentUser);
    }

    // ensure passesd skill ids are valid
    if (
        !(await bulkCheckValidIds(
            Skill,
            skillsData.skills.map((s) => s.id),
        ))
    ) {
        throw new BadRequestError('Some of the passed \'skills.id\' are invalid!');
    }

    // ensure no duplicates
    if (skillsData.skills.length !== uniqBy(skillsData.skills, (skill) => skill.id).length) {
        throw new BadRequestError(`List of skills to be associated with member:${userId} has duplicate values`);
    }

    return db.sequelize.transaction(async () => {
        // remove all previously owned selfDeclared skills that have been removed by the user
        await UserSkill.destroy({
            where: {
                user_id: userId,
                skill_id: { [Op.notIn]: map(skillsData.skills, 'id') },
                // only selfDeclared skills can be removed
                user_skill_level_id: selfDeclaredSkillLevel.id,
            },
        });

        const userSkills = skillsData.skills.map((skill) => ({
            user_id: userId,
            skill_id: skill.id,
            user_skill_level_id: skill.levelId ?? selfDeclaredSkillLevel.id,
            user_skill_display_mode_id: skill.displayModeId,
        }));

        await UserSkill.bulkCreate(userSkills, { ignoreDuplicates: true });

        await updateDisplayModeForUserSkills(userId, skillsData);

        logger.info('Successfully associated user skills');
        const allSkills = await fetchDbUserSkills(userId, {
            ...new GetUserSkillsQueryDto(),
            disablePagination: 'true',
        });

        await esHelper.updateSkillsInMemberES(toString(userId), allSkills.skills);

        return allSkills;
    });
}

/**
 * Handles requests to fetch the associated user skills for the passed userId
 */
export async function getUserSkills(currentUser: AuthUser, userId: number, query: GetUserSkillsQueryDto) {
    logger.info(
        `Fetching associated user skills based on the following request data: ${JSON.stringify({
            userId,
            ...query,
        })}`,
    );
    ensureUserCanManageMemberSkills(currentUser, userId);

    const member = await esHelper.getMemberById(toString(userId));
    if (isEmpty(member)) {
        throw new NotFoundError(`Member ${userId} does not exist!`);
    }

    return fetchDbUserSkills(userId, query);
}

/**
 * Handles requests to create the initial set of user skills
 */
export async function createUserSkills(
    currentUser: AuthUser,
    userId: number,
    skillsData: UpdateUserSkillsRequestBodyDto,
) {
    logger.info(
        `Creating association for user skills based on the following request data: ${JSON.stringify({
            userId,
            ...skillsData,
        })}`,
    );

    ensureUserCanManageMemberSkills(currentUser, userId);

    const member = await esHelper.getMemberById(toString(userId));
    if (isEmpty(member)) {
        throw new NotFoundError(`Member ${userId} does not exist!`);
    }

    const hasUserSkillsAlready = Boolean(await UserSkill.findOne({ where: { user_id: userId } }));
    if (hasUserSkillsAlready) {
        throw new BadRequestError(`Member:${userId} already has skills associated with it`);
    }

    return updateDbUserSkills(currentUser, userId, skillsData);
}

/**
 * Handles requests to update an existing set of user skills
 */
export async function updateUserSkills(
    currentUser: AuthUser,
    userId: number,
    skillsData: UpdateUserSkillsRequestBodyDto,
) {
    logger.info(
        `Updating association for user skills based on the following request data: ${JSON.stringify({
            userId,
            ...skillsData,
        })}`,
    );

    ensureUserCanManageMemberSkills(currentUser, userId);

    const member = await esHelper.getMemberById(toString(userId));
    if (isEmpty(member)) {
        throw new NotFoundError(`Member ${userId} does not exist!`);
    }

    const hasUserSkillsAssociated = Boolean(await UserSkill.findOne({ where: { user_id: userId } }));
    if (!hasUserSkillsAssociated) {
        throw new NotFoundError(`Member:${userId} association does not exist`);
    }

    return updateDbUserSkills(currentUser, userId, skillsData);
}

export async function getUserSkillsDisplayModes() {
    const displayModes = await UserSkillDisplayMode.findAll();
    return map(displayModes, displayMode => pick(displayMode, ['id', 'name']));
}
