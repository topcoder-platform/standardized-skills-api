import { filter } from 'lodash';
import { CHALLENGE_REVIEWER_ROLES } from '../config';
import * as tcApi from './tc-api';

/**
 * Fetch all challenge resources that have a roleId matching with one of the configured CHALLENGE_REVIEWER_ROLES
 * @param challengeId Challenge's id that we search for resources
 * @returns Promise<{memberId: string|number, memberHandle: string, roleId: string}>
 */
export async function fetchChallengeReviewers(challengeId: string) {
    const resources = (await tcApi.fetch(`/resources?challengeId=${challengeId}`)).body;

    return filter(resources, (r) => Object.values(CHALLENGE_REVIEWER_ROLES).includes(r.roleId));
}
