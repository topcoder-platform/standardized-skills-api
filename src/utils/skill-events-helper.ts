import crypto, { BinaryToTextEncoding } from 'crypto';
import { Prisma } from '@prisma/client';
import { SkillEventTypes, envConfig } from '../config';
import { ConflictError } from './errors';
import { find, get, toNumber } from 'lodash';
import { ensureChallengeExists } from './challenge-db-helper';
import { ensureMemberExists } from './member-db-helper';
import { ChallengeWinnerDto, UserSkillDto } from '../dto';
import { PrismaService } from '../prisma/prisma.service';

type SkillEventTypeRecord = { id: string; name: string };
type PrismaSkillEventsClient = Prisma.TransactionClient | PrismaService;

let localSkillEventTypes: Promise<SkillEventTypeRecord[]>;
export const REVIEWER_TYPE_KEY = 'reviewer';
export const COPILOT_TYPE_KEY = 'copilot';
export const FINISHER_TYPE_KEY = 'finisher';

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
export async function createAndEnsureEventNotProcessedAlready(
    topic: string,
    payload: any,
    client: PrismaSkillEventsClient,
) {
    const payloadHash = hashData(payload);

    try {
        return await client.event.create({
            data: {
                topic,
                payload: payload as Prisma.InputJsonValue,
                payloadHash,
                createdAt: new Date(),
            },
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            throw new ConflictError('Event has already been processed!');
        }
        throw error;
    }
}

/**
 * Checks the payload id (which is a challenge.id) to make sure the linked challenge exists in Postgres
 */
export async function ensurePayloadChallengeExists(id: string) {
    await ensureChallengeExists(id);
}

/**
 * Ensures all provided member ids exist in the member database
 */
export async function ensureMembersExist(memberIds: Array<number | string>) {
    if (memberIds.length === 0) {
        return;
    }

    await Promise.all(memberIds.map((memberId) => ensureMemberExists(memberId)));
}

export async function ensurePayloadWinnersAreValidUsers(winners: { userId: number }[]) {
    await ensureMembersExist(winners.map((winner) => winner.userId));
}

/**
 * Fetch all SkillEventTypes and cache locally
 */
export async function fetchAllSkillEventTypes(client: PrismaSkillEventsClient, freshFetch = false) {
    if (localSkillEventTypes && !freshFetch) {
        return localSkillEventTypes;
    }

    return (localSkillEventTypes = client.skillEventType.findMany({
        select: { id: true, name: true },
    }));
}

/**
 * Get a map of SkillEventTypes based on:
 * - all possible places a user can receive if they win a challenge
 * - if they're reviewers or not
 */
async function getSkillEventTypesMapForClient(client: PrismaSkillEventsClient) {
    const allSkillEventTypes = await fetchAllSkillEventTypes(client, false);

    return buildSkillEventTypesMap(allSkillEventTypes);
}

function buildSkillEventTypesMap(allSkillEventTypes: SkillEventTypeRecord[]) {

    return {
        // reviewer type
        [REVIEWER_TYPE_KEY]: find(allSkillEventTypes, { name: SkillEventTypes.challengeReview }),
        // copilot type
        [COPILOT_TYPE_KEY]: find(allSkillEventTypes, { name: SkillEventTypes.challengeCopilot }),
        // finisher type
        [FINISHER_TYPE_KEY]: find(allSkillEventTypes, { name: SkillEventTypes.challengeFinisher }),
        // winners placements types
        '1': find(allSkillEventTypes, { name: SkillEventTypes.challengeWin }),
        '2': find(allSkillEventTypes, { name: SkillEventTypes.challenge2ndPlace }),
        '3': find(allSkillEventTypes, { name: SkillEventTypes.challenge3rdPlace }),
        // tca
        [SkillEventTypes.tcaCertCompleted]: find(allSkillEventTypes, { name: SkillEventTypes.tcaCertCompleted }),
        [SkillEventTypes.tcaCourseCompleted]: find(allSkillEventTypes, { name: SkillEventTypes.tcaCourseCompleted }),
        // engagement
        [SkillEventTypes.engagementAssignment]: find(allSkillEventTypes, { name: SkillEventTypes.engagementAssignment }),
        // fallback type
        default: find(allSkillEventTypes, { name: SkillEventTypes.challengeFinisher }),
    };
}

/**
 * Get the SkillEventType based on the placement a user received on a challenge
 * If placement is different than [1,2,3], then check if user is a reviewer,
 * then we return the "challenge finisher" type as a fallback
 */
export function getSkillEventType(
    eventTypesMap: { [key: string]: SkillEventTypeRecord | undefined },
    eventTypeSelector: number | string,
) {
    return get(eventTypesMap, `[${eventTypeSelector}]`, eventTypesMap.default) as SkillEventTypeRecord;
}

/**
 * Creates the SkillEvents specific to each earned skill for a user
 *
 * @param user - the winner that's earning the skills
 * @param payloadSkills - The skills from the event payload
 * @param eventId - The event id that triggered the skill event
 * @param sourceId - The event source id that the user won/completed
 * @param sourceTypeId - The event specific SourceType's id
 * @param tx - The context transaction that this update is taking place into
 * @param skillEventType - The skill event type name to use for the skill event
 * @returns Promise<SkillEvent[]>
 */
export async function createSkillEventsForUser(
    user: Partial<ChallengeWinnerDto & { type: string }>,
    payloadSkills: UserSkillDto[],
    eventId: string,
    sourceId: string,
    sourceTypeId: string,
    tx: Prisma.TransactionClient,
    skillEventType?: SkillEventTypes,
) {
    const eventTypesMap = await getSkillEventTypesMapForClient(tx);
    const now = new Date();
    const skillEvents = payloadSkills.map((skill) => ({
        eventId,
        userId: toNumber(user.userId),
        skillId: skill.id,
        sourceId,
        sourceTypeId,
        skillEventTypeId: getSkillEventType(eventTypesMap, skillEventType ?? user.placement ?? user.type ?? '')
            .id,
        createdAt: now,
    }));

    return tx.skillEvent.createMany({
        data: skillEvents,
    });
}
