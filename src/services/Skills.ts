import db from '../db';

/**
 * Get all skills from RDS
 */
export async function getAllSkills() {
    const skills = await db.models.Skill.findAll({});

    return skills;
}
