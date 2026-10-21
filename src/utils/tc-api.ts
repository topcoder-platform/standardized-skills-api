import request, { SuperAgentRequest } from 'superagent';
import { auth as tcCoreAuth } from 'tc-core-library-js';

import { envConfig } from '../config';

let m2m: ReturnType<typeof tcCoreAuth.m2m> | undefined;

/**
 * Obtains a cached, verified Keycloak token for downstream calls using configured credentials.
 * @returns Machine access token; takes no arguments.
 * @throws Error for missing Keycloak settings, issuance errors or invalid returned tokens.
 */
export const getM2MToken = () => {
    m2m ??= tcCoreAuth.m2m();
    return m2m.getMachineToken();
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
 * Performs a PATCH request to any of the v5 topcoder API endpoints
 * @param {string} endpoint - The endpoint path to call including any path parameters
 * @param {any} data - The request body for the PATCH endpoint
 * @param {{[key: string]: string}} headers - The custom headers for the request
 * @returns A promise containing the response or the error
 */
export async function patch(
    endpoint: string,
    data: any,
    userToken: string | undefined,
    headers: { [key: string]: string } = {},
): Promise<request.Response> {
    const token = userToken ? userToken : await getM2MToken();

    // add the mandatory headers
    headers['Authorization'] = `Bearer ${token}`;
    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';

    return request.patch(`${envConfig.TC_API}${endpoint}`).send(data).set(headers);
}
