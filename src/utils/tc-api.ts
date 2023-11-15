import { pick } from 'lodash';
import request, { SuperAgentRequest } from 'superagent';
// we override the default linting and ts rules to allow the use of tc-core-library-js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { auth as tcCoreAuth } from 'tc-core-library-js';

import { envConfig } from '../config';

const { m2m: m2mAuth } = tcCoreAuth;

const m2m = m2mAuth(
    pick(envConfig, [
        'AUTH0_URL',
        'AUTH0_AUDIENCE',
        'AUTH0_CLIENT_ID',
        'AUTH0_CLIENT_SECRET',
        'AUTH0_PROXY_SERVER_URL',
    ]),
);

/**
 * Get a valid M2M authorization token
 */
export const getM2MToken = () => {
    return m2m.getMachineToken(envConfig.AUTH0_CLIENT_ID, envConfig.AUTH0_CLIENT_SECRET);
};

/**
 * Fetches data from any of the v5 topcoder API endpoints,
 * Will automatically authenticate the requests using a new M2M token
 * @param endpoint - The endpoint path to call (including any query params)
 * @returns Promise<SuperAgentRequest>
 */
export async function get(endpoint: string): Promise<SuperAgentRequest> {
    const m2mToken = await getM2MToken();

    return request
        .get(`${envConfig.TC_API}${endpoint}`)
        .set('Authorization', `Bearer ${m2mToken}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');
}

/**
 *
 * @param {string} endpoint - The endpoint path to call including any path parameters
 * @param {any} data - The request body for the PATCH endpoint
 * @returns A promise containing the response or the error
 */
export async function patch(endpoint: string, data: any, userToken: string | undefined): Promise<request.Response> {
    const token = userToken ? userToken : await getM2MToken();

    return request
        .patch(`${envConfig.TC_API}${endpoint}`)
        .send(data)
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');
}
