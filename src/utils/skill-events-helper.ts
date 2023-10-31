import crypto, { BinaryToTextEncoding } from 'crypto';
import { envConfig } from '../config';
import { Event, SkillEvent, SkillEventType } from '../db';
import { Transaction, UniqueConstraintError } from 'sequelize';
import { ConflictError, NotFoundError } from './errors';
import { find, get, isEmpty, toNumber, toString } from 'lodash';
import * as esHelper from '../utils/es-helper';
import { ChallengeWinnerDto, UserSkillDto } from '../dto';

let localSkillEventTypes: Promise<SkillEventType[]>;

/**
 * Create a hash string for the passed in data
 */
export const hashData = (data: any, digest: BinaryToTextEncoding = 'base64', secret = envConfig.HASHING_SECRET) =>
    crypto.createHmac('sha1', secret).update(JSON.stringify(data)).digest(digest);

/**
 * Ensures event was not processed already based on the passed payload
 * If event was not processed already, create and return an event db entry
 * If event was processed already, throws a conflict error
 * @param topic
 * @param payload
 * @returns
 */
export async function createAndEnsureEventNotProcessedAlready(topic: string, payload: any) {
    const payloadHash = hashData(payload);

    try {
        return await Event.create({ topic, payload, payload_hash: payloadHash });
    } catch (error) {
        if (error instanceof UniqueConstraintError) {
            throw new ConflictError('Event has already been processed!');
        }
        throw error;
    }
}

/**
 * Checks the payload id (which is a challenge.id) to make sure the linked challenge exists in ES
 */
export async function ensurePayloadChallengeExists(id: string) {
    const challenge = await esHelper.getChallengeById(id);

    if (!challenge || isEmpty(challenge)) {
        throw new NotFoundError(`Challenge with id '${id}' does not exist!`);
    }
}

/**
 * Checks each payload winner's id against Elasticsearch index and make sure they exist
 */
export async function ensurePayloadWinnersAreValidUsers(winners: { userId: string }[]) {
    const membersPromises = winners.map((winner) => esHelper.getMemberById(toString(winner.userId)));
    const members = await Promise.all(membersPromises);

    const notFoundMembers = members.filter(isEmpty);
    if (notFoundMembers.length > 0) {
        throw new NotFoundError('Some members have invalid userIds!');
    }
}

/**
 * Fetch all SkillEventTypes and cache locally
 */
export async function fetchAllSkillEventTypes(freshFetch = false) {
    if (localSkillEventTypes && !freshFetch) {
        return localSkillEventTypes;
    }

    return (localSkillEventTypes = SkillEventType.findAll());
}

/**
 * Get a map of SkillEventTypes based on:
 * - all possible places a user can receive if they win a challenge
 * - if they're reviewers or not
 */
async function getSkillEventTypesMap() {
    const allSkillEventTypes = await fetchAllSkillEventTypes();

    return {
        // reviewer type
        reviewer: find(allSkillEventTypes, { name: 'challenge_review' }),
        // winners placements types
        '1': find(allSkillEventTypes, { name: 'challenge_win' }),
        '2': find(allSkillEventTypes, { name: 'challenge_2nd_place' }),
        '3': find(allSkillEventTypes, { name: 'challenge_3rd_place' }),
        default: find(allSkillEventTypes, { name: 'challenge_finisher' }),
    };
}

/**
 * Get the SkillEventType based on the placement a user received on a challenge
 * If placement is different than [1,2,3], then check if user is a reviewer,
 * then we return the "challenge finisher" type as a fallback
 */
export function getSkillEventType(
    eventTypesMap: { [key: string]: SkillEventType | undefined },
    eventTypeSelector: number | string,
) {
    return get(eventTypesMap, `[${eventTypeSelector}]`, eventTypesMap.default) as SkillEventType;
}

/**
 * Creates the SkillEvents specific to each earned skill for a challenge winner (user)
 * @param user the winner that's earning the skills
 * @param payloadSkills The skills from the event payload
 * @param eventId The event id that triggered the skill event
 * @param sourceId The challenge id that the user won
 * @param sourceTypeId The challenge specific SourceType's id
 * @param tx The context transaction that this update is taking place into
 * @returns Promise<SkillEvent[]>
 */
export async function createSkillEventsForUser(
    user: Partial<ChallengeWinnerDto & { type: string }>,
    payloadSkills: UserSkillDto[],
    eventId: string,
    sourceId: string,
    sourceTypeId: string,
    tx: Transaction,
) {
    const eventTypesMap = await getSkillEventTypesMap();
    const skillEvents = [];

    for (const skill of payloadSkills) {
        skillEvents.push({
            event_id: eventId,
            user_id: toNumber(user.userId),
            skill_id: skill.id,
            source_id: sourceId,
            source_type_id: sourceTypeId,
            skill_event_type_id: getSkillEventType(eventTypesMap, user.placement ?? user.type ?? '').id,
        });
    }

    return SkillEvent.bulkCreate(skillEvents, { transaction: tx });
}
