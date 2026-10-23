import request, { SuperAgentRequest } from 'superagent';
import { auth as tcCoreAuth } from 'tc-core-library-js';

import { envConfig } from '../config';

let m2m: ReturnType<typeof tcCoreAuth.m2m> | undefined;

/**
 * Maps this service's pre-Keycloak Auth0 settings to the core's Auth0 option names.
 * The core uses them only when USE_KEYCLOAK is not true; in Keycloak mode it ignores them.
 * @returns The `AUTH0_*` options passed to `auth.m2m` by {@link getM2MToken}; takes no arguments.
 */
export const auth0Options = () => ({
    AUTH0_URL: envConfig.AUTH0_URL,
    AUTH0_AUDIENCE: envConfig.AUTH0_AUDIENCE,
    AUTH0_CLIENT_ID: envConfig.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: envConfig.AUTH0_CLIENT_SECRET,
    AUTH0_PROXY_SERVER_URL: envConfig.AUTH0_PROXY_SERVER_URL,
});

/**
 * Obtains a cached or new M2M token for downstream calls (the TaaS job lookup and
 * challenge PATCHes without a user token) from the provider selected by USE_KEYCLOAK.
 * USE_KEYCLOAK=true: a verified Keycloak token using KEYCLOAK_TOKEN_URL, KEYCLOAK_AUDIENCE
 * and KEYCLOAK_CLIENT_ID/SECRET. Otherwise: an Auth0 token using AUTH0_URL, AUTH0_AUDIENCE,
 * AUTH0_PROXY_SERVER_URL and AUTH0_CLIENT_ID/SECRET, as before the Keycloak migration.
 * @returns Machine access token; takes no arguments.
 * @throws TypeError for an invalid USE_KEYCLOAK value or Keycloak settings; rejects for
 * missing credentials, issuance errors or (Keycloak) invalid returned tokens.
 */
export const getM2MToken = () => {
    m2m ??= tcCoreAuth.m2m(auth0Options());
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
