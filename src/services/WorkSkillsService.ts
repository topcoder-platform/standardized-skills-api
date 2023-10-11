import { get } from 'lodash';
import { UniqueConstraintError } from 'sequelize';

import { SetWorkSkillsRequestBodyDto } from '../dto';
import db, { Skill, SourceType, WorkSkill } from '../db';
import { bulkCheckValidIds, checkValidId } from '../utils/postgres-helper';
import { BadRequestError, ConflictError } from '../utils/errors';
import { LoggerClient } from '../utils/LoggerClient';

const logger = new LoggerClient('WorkSkillsService');

/**
 * Create the association for work-skill-skill_source
 * @param workSkillData SetWorkSkillsRequestBodyDto
 */
export async function createWorkSkills(workSkillData: SetWorkSkillsRequestBodyDto) {
    // start a transaction to make sure we don't make partial updates
    await db.sequelize.transaction(async () => {
        if (!(await bulkCheckValidIds(Skill, workSkillData.skillIds))) {
            throw new BadRequestError("Some of the passed 'skillIds' are invalid!");
        }

        if (!(await checkValidId(SourceType, workSkillData.workTypeId))) {
            throw new BadRequestError(`WorkType with id='${workSkillData.workTypeId}' doesn't exist!`);
        }

        const workSkills = workSkillData.skillIds.map((skillId) => ({
            work_id: workSkillData.workId,
            work_type_id: workSkillData.workTypeId,
            skill_id: skillId,
        }));

        try {
            await WorkSkill.bulkCreate(workSkills);
        } catch (error) {
            logger.error('Unable to save new work skills!');
            if (error instanceof UniqueConstraintError) {
                const conflictData = get(error, 'parent.detail', '');
                const [workId, workTypeId, skillId] = (conflictData.match(/=\(([^)]*)\)/)?.[1] || '').split(', ');
                throw new ConflictError(
                    `WorkSkill with ${JSON.stringify({ workId, workTypeId, skillId })} already exists!`,
                );
            }

            throw error;
        }
    });
}
