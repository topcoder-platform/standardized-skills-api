import { Order } from 'sequelize';
import { UserSkill, UserSkillLevel, SkillCategory } from '../db';
import { GetUserSkillsQueryDto } from '../dto';

export function getOrderBy(query: GetUserSkillsQueryDto) {
    let order: Order = [];
    let sortBy = query.sortBy;

    if (query.sortBy) {
        switch (query.sortBy) {
            case 'level':
                order = [
                    [
                        { model: UserSkill, as: 'user_skills' },
                        { model: UserSkillLevel, as: 'user_skill_level' },
                        'name',
                        query.sortOrder || 'asc',
                    ],
                ];
            case 'category':
                order = [[{ model: SkillCategory, as: 'category' }, 'name', query.sortOrder || 'asc']];
            case 'level':
            case 'category':
                // secondary sort by skill name
                order.push(['name', 'asc']);
                // clear sort criteria as it is unknown to db
                sortBy = undefined;
                break;
            default:
                break;
        }
    }

    return { order, sortBy };
}
