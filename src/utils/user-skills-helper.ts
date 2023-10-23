import { Order } from 'sequelize';
import { UserSkill, UserSkillLevel, SkillCategory } from '../db';
import { GetUserSkillsQueryDto } from '../dto';

/**
 * Get's the sorting criteria based on the url query params
 * For `level` and `category` sorting, a secondary sorting will be applied for the skill name
 * @param query
 * @returns
 */
export function getOrderBy(query: GetUserSkillsQueryDto) {
    let order: Order = [];
    let sortBy = query.sortBy;

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
