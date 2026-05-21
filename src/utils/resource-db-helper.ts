import { CHALLENGE_REVIEWER_ROLES, CHALLENGE_COPILOT_ROLE, envConfig } from '../config';
import { getResourcesPrisma } from '../db/resources-db';
import { LoggerClient } from './LoggerClient';
import { InternalServerError } from './errors';
import { buildQualifiedTable, formatError } from './db-query.helpers';

const logger = new LoggerClient('ResourceDbHelper');

function assertDbConfig() {
    if (!envConfig.RESOURCES_DB.URL) {
        throw new InternalServerError('RESOURCES_DB_URL must be configured');
    }
}

/**
 * Fetch all challenge resources that have a roleId matching with one of the profided roleIds[]
 * @param {string} challengeId - Challenge's id that we search for resources
 * @param {string} roleIds
 * @returns Promise<{memberId: string|number, memberHandle: string, roleId: string}[]>
 */
export async function fetchResourcesForChallenge(challengeId: string, ...roleIds: string[]) {
    assertDbConfig();

    try {
        const resourcesDb = getResourcesPrisma();
        const resourceTable = buildQualifiedTable(
            envConfig.RESOURCES_DB.SCHEMA,
            'Resource',
        );

        const result = await resourcesDb.$queryRawUnsafe<{ memberId: string; roleId: string; memberHandle: string }[]>(
            `SELECT "memberId", "memberHandle", "roleId" FROM ${resourceTable} WHERE "roleId" = ANY($1::text[]) and "challengeId" = $2`,
            roleIds,
            challengeId,
        );

        return result || [] as { memberId: string; roleId: string; memberHandle: string }[];
    } catch (error) {
        logger.error(`Error fetching ${JSON.stringify(roleIds)} roles for challenge ${challengeId} via resources database`);
        logger.error(formatError(error));
        throw new InternalServerError('Unable to fetch roles for challenge! Please retry.');
    }
}

/**
 * Fetch all challenge resources that have a roleId matching with one of the configured CHALLENGE_REVIEWER_ROLES
 * @param {string} challengeId - Challenge's id that we search for resources
 * @returns Promise<{memberId: string|number, memberHandle: string, roleId: string}[]>
 */
export async function fetchReviewersForChallenge(challengeId: string) {
    return fetchResourcesForChallenge(challengeId, ...Object.values(CHALLENGE_REVIEWER_ROLES));
}

/**
 * Fetch the challenge copilot
 * @param {string} challengeId - Challenge's id that we search for copilots
 * @returns Promise<{memberId: string|number, memberHandle: string, roleId: string}[]>
 */
export async function fetchCopilotsForChallenge(challengeId: string) {
    return fetchResourcesForChallenge(challengeId, CHALLENGE_COPILOT_ROLE);
}
