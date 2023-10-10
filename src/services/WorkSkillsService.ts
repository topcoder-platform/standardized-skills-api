import { get } from 'lodash';

import { LoggerClient } from '../utils/LoggerClient';
import { SetWorkSkillsRequestBodyDto } from '../dto';
import db, { WorkSkill } from '../db';

const logger = new LoggerClient('WorkSkillsService');

/**
 * Create the association for work-skill-skill_source
 * @param workSkillData SetWorkSkillsRequestBodyDto
 */
export async function createWorkSkills(workSkillData: SetWorkSkillsRequestBodyDto) {
    // start a transaction to make sure we don't make partial updates
    const tx = await db.sequelize.transaction();

    try {
        const creationPromises = workSkillData.skillIds.map((skillId) => (
            WorkSkill.create({
                work_id: workSkillData.workId,
                work_type_id: workSkillData.workTypeId,
                skill_id: skillId,
            }, {transaction: tx})
        ));

        await Promise.all(creationPromises);
        await tx.commit();
    } catch (error: any) {
        logger.error(`Unable to assign skills to workId '${workSkillData.workId}': ${get(error, 'message', error || '')}`);
        await tx.rollback();
        throw error;
    }
}
