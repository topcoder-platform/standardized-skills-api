import { map } from 'lodash';

import { SkillEventChallengeUpdateStatus, SkillEventTopic, SkillEventTypes, WorkType } from '../config';
import {
    SkillEventPayloadChallengeUpdate,
    SkillEventPayloadEngagementMemberAssigned,
    SkillEventPayloadTCAUpdate,
    SkillEventRequestBodyDto,
    UserSkillDto,
} from '../dto';
import { AuthUser } from '../types';
import { ensureUserHasAdminPrivilege } from '../utils/helpers';
import db, { Skill, UserSkill } from '../db';
import { bulkCheckValidIds } from '../utils/postgres-helper';
import { NotFoundError } from '../utils/errors';
import { LoggerClient } from '../utils/LoggerClient';
import { fetchSourceType, fetchVerifiedSkillLevel } from '../utils/skills-helper';
import {
    createAndEnsureEventNotProcessedAlready,
    createSkillEventsForUser,
    ensurePayloadChallengeExists,
    ensureMembersExist,
    ensurePayloadWinnersAreValidUsers,
    REVIEWER_TYPE_KEY,
} from '../utils/skill-events-helper';
import { fetchAdditionalUserSkillDisplayMode } from '../utils/user-skills-helper';
import { fetchChallengeReviewers } from '../utils/challenge-helper';

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
export async function processChallengeCompletedSkillEvent(eventId: string, payload: SkillEventPayloadChallengeUpdate) {
    logger.info(`Handling challenge update skill event using payload ${JSON.stringify(payload)}`);

    if (payload.status !== SkillEventChallengeUpdateStatus.completed) {
        logger.info('Exiting challenge update skill event because status is not \'completed\'');
        return;
    }

    // ensure the payload.id is an existent challenge
    await ensurePayloadChallengeExists(payload.id);

    // ensure passed skill ids are valid
    await checkSkillIds(payload.skills);

    // ensure all users in the payload exist
    await ensurePayloadWinnersAreValidUsers(payload.winners);

    // fetch sourceType & verifiedSkillLevel entries necessary later on for SkillEvent creation
    const sourceType = await fetchSourceType(WorkType.challenge);
    const verifiedSkillLevel = await fetchVerifiedSkillLevel();
    const additionalSkillType = await fetchAdditionalUserSkillDisplayMode();

    // fetch challenge reviewers so we assign the challenge skills to them as well
    const reviewers = await fetchChallengeReviewers(payload.id);

    await ensureMembersExist(reviewers.map((reviewer) => reviewer.memberId));

    return db.sequelize.transaction(async (tx) => {
        const users = [
            ...payload.winners,
            ...reviewers.map((p) => ({
                userId: p.memberId,
                type: REVIEWER_TYPE_KEY,
            })),
        ];

        // update each user with the skills data
        for (const user of users) {
            const userSkills = prepareUserSkillsUpdate(
                payload.skills,
                Number(user.userId),
                verifiedSkillLevel.id,
                additionalSkillType.id,
            );

            await UserSkill.bulkCreate(userSkills, { ignoreDuplicates: true });

            await createSkillEventsForUser(user, payload.skills, eventId, payload.id, sourceType.id, tx);
        }

        logger.info('Successfully associated user skills via challenge completed skill event');
    });
}

/**
 * Processes TCA completed events
 * Assigns any TCA skills to the winners of the course or certification
 *
 * @param eventId
 * @param payload
 */
export async function processTCACompletedSkillEvent(eventId: string, payload: SkillEventPayloadTCAUpdate) {
    logger.info(`Handling TCA completed skill event using payload ${JSON.stringify(payload)}`);

    // ensure passed skill ids are valid
    await checkSkillIds(payload.skills);

    // ensure all users in the payload exist
    await ensurePayloadWinnersAreValidUsers([payload.graduate]);

    // fetch sourceType & verifiedSkillLevel entries necessary later on for SkillEvent creation
    const sourceType = await fetchSourceType(payload.type);
    const verifiedSkillLevel = await fetchVerifiedSkillLevel();
    const additionalSkillType = await fetchAdditionalUserSkillDisplayMode();
    const eventType =
        payload.type === WorkType.certification ? SkillEventTypes.tcaCertCompleted : SkillEventTypes.tcaCourseCompleted;

    return db.sequelize.transaction(async (tx) => {
        const user = payload.graduate;

        // update each user with the skills data
        const userSkills = prepareUserSkillsUpdate(
            payload.skills,
            Number(user.userId),
            verifiedSkillLevel.id,
            additionalSkillType.id,
        );

        await UserSkill.bulkCreate(userSkills, { ignoreDuplicates: true });

        await createSkillEventsForUser(user, payload.skills, eventId, payload.id, sourceType.id, tx, eventType);

        logger.info('Successfully associated user skills via TCA completed skill event');
    });
}

/**
 * Processes engagement member assigned events
 * Assigns engagement skills to the assigned member as verified
 *
 * @param eventId
 * @param payload
 */
export async function processEngagementMemberAssignedSkillEvent(
    eventId: string,
    payload: SkillEventPayloadEngagementMemberAssigned,
) {
    logger.info(`Handling engagement member assigned skill event using payload ${JSON.stringify(payload)}`);

    if (!Array.isArray(payload.skills) || payload.skills.length === 0) {
        logger.info('Exiting engagement member assigned skill event because no skills were provided');
        return;
    }

    // ensure passed skill ids are valid
    await checkSkillIds(payload.skills);

    // ensure member exists
    await ensureMembersExist([payload.memberId]);

    // fetch sourceType & verifiedSkillLevel entries necessary later on for SkillEvent creation
    const sourceType = await fetchSourceType(WorkType.engagement);
    const verifiedSkillLevel = await fetchVerifiedSkillLevel();
    const additionalSkillType = await fetchAdditionalUserSkillDisplayMode();

    return db.sequelize.transaction(async (tx) => {
        const userSkills = prepareUserSkillsUpdate(
            payload.skills,
            Number(payload.memberId),
            verifiedSkillLevel.id,
            additionalSkillType.id,
        );

        await UserSkill.bulkCreate(userSkills, { ignoreDuplicates: true });
        logger.info(`Creating engagement skill event: ${sourceType.id}, ${payload.skills}`);
        await createSkillEventsForUser(
            { userId: payload.memberId },
            payload.skills,
            eventId,
            payload.assignmentId,
            sourceType.id,
            tx,
            SkillEventTypes.engagementAssignment,
        );

        logger.info('Successfully associated user skills via engagement member assigned skill event');
    });
}

/**
 * Processes skill events incoming from the Skill Event API
 *
 * @param {AuthUser} currentUser - the currently authenticated user making this request
 * @param {SkillEventTopic} topic - the kafka topic for processing skill events
 * @param {SkillEventPayloadType} payload - the data received in the kafka topic that needs to be processed
 */
export async function processSkillEvent(currentUser: AuthUser, { topic, payload }: SkillEventRequestBodyDto) {
    // Ensure skill-events are only executed by admins or machine users
    ensureUserHasAdminPrivilege(currentUser);

    const event = await createAndEnsureEventNotProcessedAlready(topic, payload);

    // handle each event topic differently
    switch (topic) {
        case SkillEventTopic.challengeUpdate:
            return processChallengeCompletedSkillEvent(event.id, payload as SkillEventPayloadChallengeUpdate);
        case SkillEventTopic.tcaUpdate:
            return processTCACompletedSkillEvent(event.id, payload as SkillEventPayloadTCAUpdate);
        case SkillEventTopic.engagementMemberAssigned:
            return processEngagementMemberAssignedSkillEvent(event.id, payload as SkillEventPayloadEngagementMemberAssigned);
        default:
            logger.info(`Skill event with topic ${topic} not handled!`);
    }
}

/**
 * Checks if the passed skill ids are valid
 *
 * @param skills
 */
async function checkSkillIds(skills: UserSkillDto[]) {
    if (!(await bulkCheckValidIds(Skill, map(skills, 'id')))) {
        throw new NotFoundError('Some of the passed \'skills.id\' don\'t exist!');
    }
}

/**
 * Prepares the UserSkill entries to be inserted in the db
 *
 * @param skills
 * @param userId
 * @param userSkillLevelId
 * @param userSkillDisplayModeId
 * @returns
 */
function prepareUserSkillsUpdate(
    skills: UserSkillDto[],
    userId: number,
    userSkillLevelId: string,
    userSkillDisplayModeId: string,
) {
    return skills.map((skill) => ({
        user_id: userId,
        skill_id: skill.id,
        user_skill_level_id: userSkillLevelId,
        user_skill_display_mode_id: userSkillDisplayModeId,
    }));
}
