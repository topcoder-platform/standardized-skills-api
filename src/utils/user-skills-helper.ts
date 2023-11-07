import { Order } from 'sequelize';
import { UserSkill, UserSkillLevel, SkillCategory, UserSkillType } from '../db';
import { GetUserSkillsQueryDto } from '../dto';
import { BadRequestError } from './errors';
import { MAX_PRINICIPAL_USER_SKILLS_COUNT, UserSkillTypes } from '../config';

/**
 * Get's the sorting criteria based on the url query params
 * For `level` and `category` sorting, a secondary sorting will be applied for the skill name
 * @param query
 * @returns
 */
export function getOrderBy(query: GetUserSkillsQueryDto) {
    let order: Order = [];
    let sortBy: string | undefined = query.sortBy ?? 'name';

    if (query.sortBy === 'level') {
        order = [
            [
                { model: UserSkill, as: 'user_skills' },
                { model: UserSkillLevel, as: 'user_skill_level' },
                'name',
                query.sortOrder || 'asc',
            ],
        ];
    }
    if (query.sortBy === 'category') {
        order = [[{ model: SkillCategory, as: 'category' }, 'name', query.sortOrder || 'asc']];
    }

    if (query.sortBy === 'level' || query.sortBy === 'category') {
        // secondary sort by skill name
        order.push(['name', 'asc']);
        // clear sort criteria as it is unknown to db
        sortBy = undefined;
    }

    return { order, sortBy };
}

/**
 * Ensures that a user does not have more than the max limit (10) of Principal skills associated
 */
export async function ensurePrincipalSkillCountLimit(userId: number | string) {
    const principalCount = await UserSkill.count({
        where: { user_id: userId },
        include: [
            {
                model: UserSkillType,
                as: 'user_skill_type',
                where: { name: UserSkillTypes.principal },
            },
        ],
    });

    if (principalCount > MAX_PRINICIPAL_USER_SKILLS_COUNT) {
        throw new BadRequestError('Max limit for Principal skills reached!');
    }
}

/**
 * Fetches the DB entry for the additional user skill type
 */
export async function fetchAdditionalUserSkillType() {
    const additionalSkillType = await UserSkillLevel.findOne({ where: { name: UserSkillTypes.additional } });
    if (!additionalSkillType) {
        throw new Error('User skill type \'additional\' not found!');
    }
    return additionalSkillType;
}
