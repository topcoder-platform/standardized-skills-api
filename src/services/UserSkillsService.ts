import { Op } from 'sequelize';
import { map, uniqBy } from 'lodash';

import { UserSkillLevels } from '../config';
import db, { Skill, SkillCategory, UserSkill, UserSkillLevel } from '../db';
import { LoggerClient } from '../utils/LoggerClient';
import { GetUserSkillsQueryDto, UpdateUserSkillsRequestBodyDto } from '../dto';
import { bulkCheckValidIds, findAndCountPaginated } from '../utils/postgres-helper';
import { BadRequestError, NotFoundError } from '../utils/errors';
import { AuthUser } from '../types';
import { ensureUserCanManageMemberSkills, ensureUserCanValidateMemberSkills } from '../utils/helpers';

const logger = new LoggerClient('UserSkillsService');

export async function getUserSkills(userId: string | number, query: GetUserSkillsQueryDto) {
    try {
        const { skills, ...paginationData } = await findAndCountPaginated(Skill, 'skill', query, {
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
                    ],
                    attributes: ['id'],
                },
            ],
        });

        return {
            ...paginationData,
            skills: (skills as Skill[]).map((skill) => ({
                ...skill.dataValues,
                user_skills: undefined,
                levels: skill.user_skills.map((uskill) => uskill.user_skill_level),
            })),
        };
    } catch (error) {
        logger.error('Unable to fetch all user\'s skills');
        throw error;
    }
}

export async function updateDbUserSkills(
    currentUser: AuthUser,
    userId: number,
    skillsData: UpdateUserSkillsRequestBodyDto,
) {
    // fetch the DB id for the selfDeclared user skill level
    const selfDeclaredSkillLevel = await UserSkillLevel.findOne({ where: { name: UserSkillLevels.selfDeclared } });
    if (!selfDeclaredSkillLevel) {
        throw new Error('User self-declared skill not found!');
    }

    // ensure that only designated users can mark skills as other than "selfDeclared"
    if (skillsData.skills.some((skill) => skill.levelId && skill.levelId !== selfDeclaredSkillLevel.id)) {
        ensureUserCanValidateMemberSkills(currentUser);
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
        // remove all previously owned selfDeclared skills
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
        }));

        await UserSkill.bulkCreate(userSkills, { ignoreDuplicates: true });

        logger.info('Successfully associated user skills')
        return getUserSkills(userId, new GetUserSkillsQueryDto());
    });
}

export async function createUserSkills(
    currentUser: AuthUser,
    userId: number,
    skillsData: UpdateUserSkillsRequestBodyDto,
) {
    logger.info(
        `Creating association for user skills based on the following request data: ${JSON.stringify(
            {userId, ...UpdateUserSkillsRequestBodyDto},
        )}`,
    );

    ensureUserCanManageMemberSkills(currentUser, userId);

    const hasUserSkillsAlready = Boolean(await UserSkill.findOne({ where: { user_id: userId } }));
    if (hasUserSkillsAlready) {
        throw new BadRequestError(`Member:${userId} already has skills associated with it`);
    }

    return updateDbUserSkills(currentUser, userId, skillsData);
}

export async function updateUserSkills(
    currentUser: AuthUser,
    userId: number,
    skillsData: UpdateUserSkillsRequestBodyDto,
) {
    logger.info(
        `Updating association for user skills based on the following request data: ${JSON.stringify(
            {userId, ...UpdateUserSkillsRequestBodyDto},
        )}`,
    );

    ensureUserCanManageMemberSkills(currentUser, userId);

    const hasUserSkillsAssociated = Boolean(await UserSkill.findOne({ where: { user_id: userId } }));
    if (!hasUserSkillsAssociated) {
        throw new NotFoundError(`Member:${userId} association does not exist`);
    }

    return updateDbUserSkills(currentUser, userId, skillsData);
}
