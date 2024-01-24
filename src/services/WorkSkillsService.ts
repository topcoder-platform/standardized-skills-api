import db, { Skill, SkillCategory, SourceType, WorkSkill } from '../db';
import { bulkCheckValidIds } from '../utils/postgres-helper';
import { InternalServerError, NotFoundError } from '../utils/errors';
import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import _, { isNull } from 'lodash';
import { Op, Transaction } from 'sequelize';
import * as constants from '../config';
import * as tcAPI from '../utils/tc-api';
import * as errorHelper from '../utils/error-helper';

const logger = new LoggerClient('WorkSkillsService');

/**
 * Associates the given skills with the given job/gig id
 * @param {string} jobId - the id of the job/gig to associate skills with
 * @param {Array<string>} skillIds - the array of skill ids to be associated with the specified job/gig
 */
export async function createJobSkills(jobId: string, skillIds: string[]) {
    logger.info(
        `Associating skills to job/gig with id ${jobId} based on the following skills data: ${JSON.stringify(
            skillIds,
        )}`,
    );

    await db.sequelize.transaction(async (tx) => {
        // validate request
        await validateRequestForWorkType('gig', jobId, skillIds);

        // find the work type for gig/job
        const workTypeDetail = await findWorkType('gig');

        // create the association between job/gig and skill
        await associateSkillsToWorkId(jobId, workTypeDetail, skillIds, tx);

        logger.info(`Successfully associated skills to job with id ${jobId}`);
    });
}
/**
 * Associates the given skills with the given challenge id
 * @param {string} userToken - the JWT token belonging to the user
 * @param {string} challengeId - the id of the challenge to associate skills with
 * @param {Array<string>} skillIds - the array of skill ids to be associated with the specified job/gig
 */
export async function createChallengeSkills(userToken: any, challengeId: string, skillIds: string[]) {
    logger.info(
        `Associating skills to challenge with id ${challengeId} based on the following skills data: ${JSON.stringify(
            skillIds,
        )}`,
    );

    await db.sequelize.transaction(async (tx) => {
        // validate request
        await validateRequestForWorkType('challenge', challengeId, skillIds);

        // find the work type for challenge
        const workTypeDetail = await findWorkType('challenge');

        // create the association between challenge and skill
        await associateSkillsToWorkId(challengeId, workTypeDetail, skillIds, tx);

        const associatedSkills = await Skill.findAll({
            attributes: ['name', 'id'],
            include: {
                model: SkillCategory,
                as: 'category',
                attributes: ['name', 'id'],
            },
            where: {
                id: {
                    [Op.in]: skillIds,
                },
            },
        });

        // call the challenge API to update the Elasticsearch challenge index
        try {
            // set the app-version header to 1.1.0 for challenge API to deal with the standardized skills
            await tcAPI.patch(`/challenges/${challengeId}`, { skills: associatedSkills }, userToken, {
                'app-version': constants.CHALLENGE_API_VERSION,
            });

            logger.info(`Successfully associated skills to challenge with id ${challengeId}`);
        } catch (error: any) {
            logger.error(`Error encountered in associating skills to challenge with id ${challengeId}`);
            logger.error(`${JSON.stringify(error)}`);

            errorHelper.handleAndTransformAPIError(
                error.status,
                error.response?.text ? JSON.parse(error.response.text).message : error.message,
                'Unable to associate skills to challenge! Please retry.',
            );
        }
    });
}

/**
 * Verifies the request data is valid
 * @param {string} workType - the type of work which can be either 'gig' or 'challenge'
 * @param {string} workId - the uuid id of job or challenge
 * @param {Array<string>} skillIds - the array of uuid skill ids
 */
async function validateRequestForWorkType(workType: 'gig' | 'challenge', workId: string, skillIds: string[]) {
    logger.info(`Validating request for work type ${workType} with id ${workId} and skillIds ${JSON.stringify(skillIds)}}`);

    switch (workType) {
        case 'gig':
            // check valid gig id
            const jobId = (await tcAPI.get(`/jobs/${workId}`)).body.id as string;
            
            logger.info(`jobId from TaaS API: ${jobId}`);

            if (jobId !== workId) {
                throw new NotFoundError(`job/gig with id='${workId}' does not exist!`);
            }

            break;

        case 'challenge':
            // check valid challenge id
            if (_.isEmpty(await esHelper.getChallengeById(workId))) {
                throw new NotFoundError(`challenge with id='${workId}' does not exist!`);
            }

            break;
    }

    // check valid skills ids
    if (!(await bulkCheckValidIds(Skill, skillIds))) {
        throw new NotFoundError('Skill(s) to be associated do not exist!');
    }
}

/**
 * Gets the work type detail from the PostgreSQL database
 * @param {string} workType - the type of work which can be either 'gig' or 'challenge'
 * @returns {Promise<SourceType>} the work type detail
 */
async function findWorkType(workType: 'gig' | 'challenge'): Promise<SourceType> {
    // find the work type for challenge/gig
    const workTypeDetail = await SourceType.findOne({
        where: {
            name: workType,
        },
    });
    if (isNull(workTypeDetail)) {
        throw new InternalServerError(`Unable to fetch work type id for ${workType}!`);
    }

    return workTypeDetail;
}

/**
 * Associates the given work id with the given skill ids
 * @param {string} workId - the challenge or gig id
 * @param {SourceType} workTypeDetail - the work detail record from PostgreSQL database
 * @param {Array<string>} skillIds - the array of skill uuid ids
 * @param {Transaction} tx - the transaction object
 */
async function associateSkillsToWorkId(
    workId: string,
    workTypeDetail: SourceType,
    skillIds: string[],
    tx: Transaction,
) {
    // prepare the job skill association data for bulk insert
    const workSkills = skillIds.map((skillId) => ({
        work_id: workId,
        work_type_id: workTypeDetail.id,
        skill_id: skillId,
    }));

    // remove existing association and create new skills association
    await WorkSkill.destroy({
        where: {
            work_id: workId,
            work_type_id: workTypeDetail.id,
        },
        transaction: tx,
    });
    await WorkSkill.bulkCreate(workSkills, { transaction: tx });
}
