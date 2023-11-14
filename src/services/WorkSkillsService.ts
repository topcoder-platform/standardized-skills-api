import { SetWorkSkillsRequestBodyDto } from '../dto';
import db, { Skill, SkillCategory, SourceType, WorkSkill } from '../db';
import { bulkCheckValidIds, checkValidId } from '../utils/postgres-helper';
import { BadRequestError, InternalServerError, NotFoundError } from '../utils/errors';
import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import _, { isNull } from 'lodash';
import { Op } from 'sequelize';
import * as constants from '../config';

const logger = new LoggerClient('WorkSkillsService');

/**
 * Create the association for work-skill-skill_source
 * @param workSkillData SetWorkSkillsRequestBodyDto
 */
export async function createWorkSkills(workSkillData: SetWorkSkillsRequestBodyDto) {
    logger.info(
        `Associating skills to work type based on the following request data: ${JSON.stringify(workSkillData)}`,
    );
    await db.sequelize.transaction(async () => {
        // valid worktype id
        if (!(await checkValidId(SourceType, workSkillData.workTypeId))) {
            throw new NotFoundError(`WorkType with id='${workSkillData.workTypeId}' does not exist!`);
        }

        //valid skills ids
        if (!(await bulkCheckValidIds(Skill, workSkillData.skillIds))) {
            throw new NotFoundError('Skill(s) to be associated do not exist!');
        }

        const workTypeDetail = await SourceType.findOne({
            where: {
                id: workSkillData.workTypeId,
            },
        });

        // currently only gig and challenge is supported
        if (
            _.isNull(workTypeDetail) ||
            (workTypeDetail.name !== constants.WorkType.challenge && workTypeDetail.name !== constants.WorkType.gig)
        ) {
            throw new BadRequestError(`${workTypeDetail?.name ?? 'Work type'} is currently not supported!`);
        }

        if (
            workTypeDetail.name === constants.WorkType.challenge &&
            _.isEmpty(await esHelper.getChallengeById(workSkillData.workId))
        ) {
            throw new NotFoundError(`Challenge with id: ${workSkillData.workId} does not exist!`);
        }

        if (
            workTypeDetail.name === constants.WorkType.gig &&
            _.isEmpty(await esHelper.getJobById(workSkillData.workId))
        ) {
            throw new NotFoundError(`Job with id: ${workSkillData.workId} does not exist!`);
        }

        const workSkills = workSkillData.skillIds.map((skillId) => ({
            work_id: workSkillData.workId,
            work_type_id: workSkillData.workTypeId,
            skill_id: skillId,
        }));

        // remove existing association and create new skills association
        await WorkSkill.destroy({
            where: {
                work_id: workSkillData.workId,
                work_type_id: workSkillData.workTypeId,
            },
        });
        await WorkSkill.bulkCreate(workSkills);

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

        // update Elasticsearch index to reflect the new association
        if (workTypeDetail.name === constants.WorkType.challenge) {
            await esHelper.updateSkillsInChallengeES(workSkillData.workId, skillsToAssociate);
        }
        if (workTypeDetail.name === constants.WorkType.gig) {
            await esHelper.updateSkillsInJobES(
                workSkillData.workId,
                _.map(skillsToAssociate, (skills) => skills.id),
            );
        }

        logger.info('Successfully associated work skills');
    });
}

/**
 * Associates the given skills with the given job/gig id
 * @param {string} jobId the id of the job/gig to associate skills with
 * @param {Array<string>} skillIds the array of skill ids to be associated with the specified job/gig
 */
export async function createJobSkills(jobId: string, skillIds: string[]) {
    logger.info(
        `Associating skills to job/gig with id ${jobId} based on the following skills data: ${JSON.stringify(
            skillIds,
        )}`,
    );

    await db.sequelize.transaction(async () => {
        // check valid gig id
        if (_.isEmpty(await esHelper.getJobById(jobId))) {
            throw new NotFoundError(`job/gig with id='${jobId}' does not exist!`);
        }

        // check valid skills ids
        if (!(await bulkCheckValidIds(Skill, skillIds))) {
            throw new NotFoundError('Skill(s) to be associated do not exist!');
        }

        // find the work type for gig/job
        const workTypeDetail = await SourceType.findOne({
            where: {
                name: constants.WorkType.gig,
            },
        });
        if (isNull(workTypeDetail)) {
            throw new InternalServerError('Unable to fetch work type id for job/gig!');
        }

        // prepare the job skill association data for bulk insert
        const workSkills = skillIds.map((skillId) => ({
            work_id: jobId,
            work_type_id: workTypeDetail.id,
            skill_id: skillId,
        }));

        // remove existing association and create new skills association
        await WorkSkill.destroy({
            where: {
                work_id: jobId,
                work_type_id: workTypeDetail.id,
            },
        });
        await WorkSkill.bulkCreate(workSkills);

        const associatedSkillIds = await Skill.findAll({
            attributes: ['id'],
            where: {
                id: {
                    [Op.in]: skillIds,
                },
            },
        });

        // update Elasticsearch job index to reflect the new association
        await esHelper.updateSkillsInJobES(
            jobId,
            _.map(associatedSkillIds, (skill) => skill.id),
        );

        logger.info(`Successfully associated skills to job with id ${jobId}`);
    });
}
