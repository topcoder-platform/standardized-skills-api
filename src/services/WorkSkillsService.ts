import { SetWorkSkillsRequestBodyDto } from '../dto';
import db, { Skill, SkillCategory, SourceType, WorkSkill } from '../db';
import { bulkCheckValidIds, checkValidId } from '../utils/postgres-helper';
import { NotFoundError } from '../utils/errors';
import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import _ from 'lodash';
import { Op } from 'sequelize';

const logger = new LoggerClient('WorkSkillsService');

/**
 * Create the association for work-skill-skill_source
 * @param workSkillData SetWorkSkillsRequestBodyDto
 */
export async function createWorkSkills(workSkillData: SetWorkSkillsRequestBodyDto) {
    logger.info(
        `Associating skills to work type based on the following data: ${JSON.stringify(SetWorkSkillsRequestBodyDto)}`,
    );
    await db.sequelize.transaction(async () => {
        if (!(await bulkCheckValidIds(Skill, workSkillData.skillIds))) {
            throw new NotFoundError('Skill(s) to be associated do not exist!');
        }

        if (!(await checkValidId(SourceType, workSkillData.workTypeId))) {
            throw new NotFoundError(`WorkType with id='${workSkillData.workTypeId}' doesn't exist!`);
        }

        const workTypeDetail = await SourceType.findOne({
            where: {
                id: workSkillData.workTypeId,
            },
        });

        if (
            _.isNull(workTypeDetail) ||
            (workTypeDetail.name === 'challenge' && _.isEmpty(await esHelper.getChallengeById(workSkillData.workId)))
        ) {
            throw new NotFoundError(`Challenge with id: ${workSkillData.workId} found in ES`);
        }

        if (
            _.isNull(workTypeDetail) ||
            (workTypeDetail.name === 'gig' && _.isEmpty(await esHelper.getJobById(workSkillData.workId)))
        ) {
            throw new NotFoundError(`Job with id: ${workSkillData.workId} found in ES`);
        }

        const workSkills = workSkillData.skillIds.map((skillId) => ({
            work_id: workSkillData.workId,
            work_type_id: workSkillData.workTypeId,
            skill_id: skillId,
        }));

        const skillsToAssociate = await Skill.findAll({
            attributes: ['name', 'id'],
            include: {
                model: SkillCategory,
                as: 'category',
                attributes: ['name', 'id'],
            },
            where: {
                id: {
                    [Op.in]: workSkillData.skillIds,
                },
            },
        });

        await WorkSkill.bulkCreate(workSkills);
        if (workTypeDetail.name === 'challenge') {
            await esHelper.updateSkillsInChallengeES(workSkillData.workId, skillsToAssociate);
        }
        if (workTypeDetail.name === 'gig') {
            await esHelper.updateSkillsInJobES(workSkillData.workId, skillsToAssociate);
        }
    });
}
