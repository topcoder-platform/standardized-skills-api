import { Op } from 'sequelize';
import { UserSkillLevels } from '../config';
import db, { Skill, SkillCategory, UserSkill, UserSkillLevel } from '../db';
import { LoggerClient } from '../utils/LoggerClient';
import { GetUserSkillsRequestQueryDto, RemoveUserSkillsRequestBodyDto, UpdateUserSkillsRequestBodyDto } from '../dto';
import { bulkCheckValidIds, findAndCountPaginated } from '../utils/postgres-helper';
import { BadRequestError } from '../utils/errors';
import { AuthUser } from '../types';
import { ensureUserCanManageMemberSkills, ensureUserCanValidateMemberSkills } from '../utils/helpers';

const logger = new LoggerClient('SkillsService');

export async function getUserSkills(userId: string, query: GetUserSkillsRequestQueryDto) {
    try {
        const {skills, ...paginationData} = await findAndCountPaginated(
            Skill,
            'skill',
            query,
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
                            user_id: userId
                        },
                        include: [{
                            model: UserSkillLevel,
                            as: 'user_skill_level',
                            attributes: ['id', 'name', 'description']
                        }],
                        attributes: ['id'],
                    }
                ]
            }
        );

        return {
            ...paginationData,
            skills: (skills as Skill[]).map((skill) => ({
                ...skill.dataValues,
                user_skills: undefined,
                levels: skill.user_skills.map((uskill) => uskill.user_skill_level),
            }))
        };
    } catch (error) {
        logger.error('Unable to fetch all user\'s skills');
        throw error;
    }
}

export async function updateUserSkills(
    currentUser: AuthUser,
    userId: number,
    skillsData: UpdateUserSkillsRequestBodyDto,
) {
    await ensureUserCanManageMemberSkills(currentUser, userId);

    // fetch the DB id for the selfDeclared user skill level
    const selfDeclaredSkillLevel = await UserSkillLevel.findOne({ where: {name: UserSkillLevels.selfDeclared} });
    if (!selfDeclaredSkillLevel) {
        throw new Error('User self-declared skill not found!');
    }
    
    // ensure that only designated users can mark skills as other than "selfDeclared"
    if (skillsData.skills.some(skill => skill.levelId && skill.levelId !== selfDeclaredSkillLevel.id)) {
        ensureUserCanValidateMemberSkills(currentUser);
    }
    
    // ensure passesd skill ids are valid
    if (!(await bulkCheckValidIds(Skill, skillsData.skills.map(s => s.id)))) {
        throw new BadRequestError('Some of the passed \'skills.id\' are invalid!');
    }

    await db.sequelize.transaction(async () => {
        const userSkills = skillsData.skills.map((skill) => ({
            user_id: userId,
            skill_id: skill.id,
            user_skill_level_id: skill.levelId ?? selfDeclaredSkillLevel.id,
        }));

        await UserSkill.bulkCreate(userSkills, {ignoreDuplicates: true});
    });
}

export async function removeUserSkills(
    currentUser: AuthUser,
    userId: number,
    skillsData: RemoveUserSkillsRequestBodyDto,
) {
    await ensureUserCanManageMemberSkills(currentUser, userId);

    // fetch the DB id for the selfDeclared user skill level
    const selfDeclaredSkillLevel = await UserSkillLevel.findOne({ where: {name: UserSkillLevels.selfDeclared} });
    if (!selfDeclaredSkillLevel) {
        throw new Error('User self-declared skill not found!');
    }

    await db.sequelize.transaction(async () => {
        await UserSkill.destroy({
            where: {
                user_id: userId,
                skill_id: {[Op.in]: skillsData.skillIds},
                // only selfDeclared skills can be removed
                user_skill_level_id: selfDeclaredSkillLevel.id,
            }
        });
    });
}
