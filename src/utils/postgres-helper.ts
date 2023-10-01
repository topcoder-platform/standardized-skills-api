import db from '../db';
import { FindAndCountOptions } from 'sequelize';

export const findAndCountAllSkills = async (opts: FindAndCountOptions) => {
    return await db.models.Skill.findAndCountAll(opts);
};
