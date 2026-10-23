import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { resolve, sep } from 'node:path';
import { afterEach, describe, it, mock } from 'node:test';
import { auth } from 'tc-core-library-js';

const saved = { ...process.env };
const auth0Env = {
    AUTH0_URL: 'https://tenant.example/oauth/token',
    AUTH0_AUDIENCE: 'https://m2m.example/',
    AUTH0_PROXY_SERVER_URL: 'https://proxy.example/token',
    AUTH0_CLIENT_ID: 'auth0-skills',
    AUTH0_CLIENT_SECRET: 'auth0-secret',
};
const keycloakEnv = {
    KEYCLOAK_ISSUER: 'https://keycloak.example/realms/m2m',
    KEYCLOAK_AUDIENCE: 'https://api.example',
    KEYCLOAK_TOKEN_URL: 'https://keycloak.example/m2m/token',
    KEYCLOAK_CLIENT_ID: 'm2m-skills',
    KEYCLOAK_CLIENT_SECRET: 'keycloak-secret',
};
// The core's own axios instance carries the Auth0 request; its adapter is replaced below.
const axios = createRequire(require.resolve('tc-core-library-js'))('axios');
const adapter = axios.defaults.adapter;
const srcRoot = resolve(__dirname, '..') + sep;

/** Return an unsigned token-shaped fixture; the Auth0 provider only decodes exp for caching. */
function token(): string {
    const part = (value: object) => Buffer.from(JSON.stringify(value)).toString('base64url');
    return `${part({ alg: 'HS256' })}.${part({ exp: Math.floor(Date.now() / 1000) + 900 })}.fixture`;
}

/** Load tc-api and the config it reads fresh with both providers' settings plus `env`. */
function load(env: Record<string, string>): typeof import('./tc-api') {
    process.env = { ...saved, ...auth0Env, ...keycloakEnv, ...env };
    delete process.env.VALID_ISSUERS;
    delete process.env.AUTH_SCOPE;
    for (const key of Object.keys(require.cache)) {
        if (key.startsWith(srcRoot) && key !== __filename) delete require.cache[key];
    }
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('./tc-api');
}

describe('USE_KEYCLOAK outbound provider selection', () => {
    afterEach(() => {
        process.env = { ...saved };
        axios.defaults.adapter = adapter;
        mock.restoreAll();
    });

    it('requests an Auth0 token with the AUTH0_* settings when USE_KEYCLOAK=false', async () => {
        const { getM2MToken } = load({ USE_KEYCLOAK: 'false' });
        const m2m = mock.method(auth, 'm2m');
        const fetch = mock.method(globalThis, 'fetch');
        const requests: { url: string; data: string }[] = [];
        const jwt = token();
        axios.defaults.adapter = async (config: { url: string; data: string }) => {
            requests.push(config);
            return { data: { access_token: jwt }, status: 200, statusText: 'OK', headers: {}, config };
        };
        assert.equal(await getM2MToken(), jwt);
        assert.deepEqual(m2m.mock.calls[0].arguments, [auth0Env]);
        assert.equal(requests.length, 1);
        assert.equal(requests[0].url, auth0Env.AUTH0_PROXY_SERVER_URL);
        assert.deepEqual(JSON.parse(requests[0].data), {
            grant_type: 'client_credentials',
            client_id: 'auth0-skills',
            client_secret: 'auth0-secret',
            auth0_url: auth0Env.AUTH0_URL,
            audience: auth0Env.AUTH0_AUDIENCE,
        });
        assert.equal(fetch.mock.callCount(), 0);
    });

    it('requests a Keycloak token with the KEYCLOAK_* settings when USE_KEYCLOAK=true', async () => {
        const { getM2MToken } = load({ USE_KEYCLOAK: 'true' });
        const fetch = mock.method(globalThis, 'fetch', async () => new Response('{}', { status: 500 }));
        let auth0Calls = 0;
        axios.defaults.adapter = async () => {
            auth0Calls += 1;
            throw new Error('Auth0 must not be called');
        };
        await assert.rejects(getM2MToken(), /^Error: Keycloak M2M token request failed$/);
        const [url, init] = fetch.mock.calls[0].arguments as [string, { body: string }];
        assert.equal(url, keycloakEnv.KEYCLOAK_TOKEN_URL);
        assert.deepEqual(JSON.parse(init.body), {
            grant_type: 'client_credentials',
            client_id: 'm2m-skills',
            client_secret: 'keycloak-secret',
            audience: keycloakEnv.KEYCLOAK_AUDIENCE,
        });
        assert.equal(auth0Calls, 0);
    });
});
