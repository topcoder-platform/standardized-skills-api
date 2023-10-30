import { map, toString } from 'lodash';

import { SkillEventChallengeUpdateStatus, SkillEventTopic, WorkType } from '../config';
import { ChallengeUpdateSkillEventPayload, GetUserSkillsQueryDto, SkillEventRequestBodyDto } from '../dto';
import { AuthUser } from '../types';
import { ensureUserHasAdminPrivilege } from '../utils/helpers';
import { getUserSkills } from './UserSkillsService';
import db, { Skill, UserSkill } from '../db';
import { bulkCheckValidIds } from '../utils/postgres-helper';
import { NotFoundError } from '../utils/errors';
import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import { fetchSourceType, fetchVerifiedSkillLevel } from '../utils/skills-helper';
import {
    createAndEnsureEventNotProcessedAlready,
    ensurePayloadWinnersAreValidUsers,
    createSkillEventsForUser,
    ensurePayloadChallengeExists,
} from '../utils/skill-events-helper';

const logger = new LoggerClient('SkillEventsService');

/**
 * Processes challenge completed events and
 * assigns any challenge skills to the winners of the challange
 * It also records specific SkillEvents for each added UserSkill to keep track of the source of the event
 *
 * @param eventId
 * @param payload
 * @returns
 */
export async function processChallengeCompletedSkillEvent(eventId: string, payload: ChallengeUpdateSkillEventPayload) {
    logger.info(`Handling challenge update skill event using payload ${JSON.stringify(payload)}`);

    if (payload.status !== SkillEventChallengeUpdateStatus.completed) {
        logger.info('Exiting challenge update skill event because status is not \'completed\'');
        return;
    }

    // ensure the payload.id is an existent challenge
    await ensurePayloadChallengeExists(payload.id);

    // ensure passed skill ids are valid
    if (!(await bulkCheckValidIds(Skill, map(payload.skills, 'id')))) {
        throw new NotFoundError('Some of the passed \'skills.id\' don\'t exist!');
    }

    // ensure all users in the payload exist
    await ensurePayloadWinnersAreValidUsers(payload.winners);

    // fetch sourceType & verifiedSkillLevel entries necessary later on for SkillEvent creation
    const sourceType = await fetchSourceType(WorkType.challenge);
    const verifiedSkillLevel = await fetchVerifiedSkillLevel();

    return db.sequelize.transaction(async (tx) => {
        const allSkills = [];
        // update each user with the skills data
        for (const user of payload.winners) {
            const userSkills = payload.skills.map((skill) => ({
                user_id: Number(user.userId),
                skill_id: skill.id,
                user_skill_level_id: verifiedSkillLevel.id,
            }));

            await UserSkill.bulkCreate(userSkills, { ignoreDuplicates: true });

            await createSkillEventsForUser(user, payload.skills, eventId, payload.id, sourceType.id, tx);

            const allUserSkills = await getUserSkills(user.userId, {
                ...new GetUserSkillsQueryDto(),
                disablePagination: true,
            });

            allSkills.push({ userId: toString(user.userId), skills: allUserSkills.skills });
        }

        // do the Elasticsearch index update only after we make sure all user skill db updates have been successful,
        // otherwise we can't revert Elasticsearch index updates if db update fails
        for (const { userId, skills } of allSkills) {
            await esHelper.updateSkillsInMemberES(userId, skills);
        }

        logger.info('Successfully associated user skills via challenge completed skill event');
    });
}

export async function processSkillEvent(currentUser: AuthUser, { topic, payload }: SkillEventRequestBodyDto) {
    // Ensure skill-events are only executed by admins or machine users
    ensureUserHasAdminPrivilege(currentUser);

    const event = await createAndEnsureEventNotProcessedAlready(topic, payload);

    // handle each event topic differently
    switch (topic) {
        case SkillEventTopic.challengeUpdate:
            return processChallengeCompletedSkillEvent(event.id, payload);
        default:
            logger.info(`Skill event with topic ${topic} not handled!`);
    }
}
