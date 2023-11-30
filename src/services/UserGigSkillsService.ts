import {AuthUser} from '../types';

import db, { UserGigSkillsTracker} from '../db';
import {UserGigSkillsRequestBodyDto} from '../dto';
import {LoggerClient} from '../utils/LoggerClient';
import {ConflictError} from '../utils/errors';
const logger = new LoggerClient('SkillCategoryService');


/**
 * Creates an entry in the user_gig_skills_tracker database for the provided userId/jobId
 *
 * @param user - The user who performs the operation
 * @param payload - The Kafka event payload related to job candidate update
 */
export const createUserGigSkillsRecord = async (
    user: AuthUser,
    { payload }: UserGigSkillsRequestBodyDto,
): Promise< UserGigSkillsTracker > => {
    logger.info(`Creating new user gig skills tracker entry with the following data ${JSON.stringify(payload)}`);

    // Check if the userId/job combination already exists in the database
    const existingRecordsCount = await UserGigSkillsTracker.count({
        where: {
            job_id: payload.jobId,
            user_id: payload.tcUserId
        }
    });
    if(existingRecordsCount > 0) {
        throw new ConflictError(
            `User gig skills record already exists for { 'userId': ${payload.tcUserId}, 'jobId': ${payload.jobId}`);
    }

    return await db.sequelize.transaction(async () => {

        const userGigSkillsRecord = await UserGigSkillsTracker.create({
            job_id: payload.jobId,
            user_id: payload.tcUserId,
            payload: payload,
            placement_date: new Date(),
            created_at: new Date(),
            updated_at: new Date()
        });

        logger.info(`New user gig skills tracker entry successfully created ${JSON.stringify(userGigSkillsRecord)}`);
        return userGigSkillsRecord;
    });
};
