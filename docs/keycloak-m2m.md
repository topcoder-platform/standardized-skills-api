# Keycloak M2M migration branch

This code is isolated on `keycloak_m2M`. Do not deploy this branch until the
workload and its callers are ready. Existing DEV services continue using Auth0.
The core dependency is pinned to a reviewed Keycloak prerelease commit, including
transitive wrapper uses through the pnpm override. No npm latest dependency is used.
`pnpm-lock.yaml` resolves a single 4.0.0-keycloak.2 (core commit `112d54a`).

## Provider switch: `USE_KEYCLOAK`

The service's only outbound M2M token (`getM2MToken` in `src/utils/tc-api.ts`, used
for the TaaS job lookup and for challenge PATCHes without a user token) follows
`USE_KEYCLOAK`. `true` gets it from Keycloak, using `KEYCLOAK_TOKEN_URL`,
`KEYCLOAK_AUDIENCE`, `KEYCLOAK_CLIENT_ID` and `KEYCLOAK_CLIENT_SECRET` (optional
`KEYCLOAK_SCOPE` narrows the client's defaults); `KEYCLOAK_ISSUER` is also required.
Unset or `false` restores the Auth0 behaviour from before the migration: `AUTH0_URL`,
`AUTH0_AUDIENCE`, `AUTH0_PROXY_SERVER_URL` (defaults to `AUTH0_URL`), `AUTH0_CLIENT_ID`
and `AUTH0_CLIENT_SECRET`.

`tc-core-library-js` reads the flag (`auth.useKeycloak`), so the service and the core
always agree. Any value other than `true`/`false` fails when the first token is
requested (or at startup for the inbound validator). The CircleCI deploy loads only
`/config/standardized-skills-api/appvar` (not `/config/common/global-appvar`), so the
flag is `/config/standardized-skills-api/appvar/USE_KEYCLOAK`, next to the Auth0 and
Keycloak settings above.

Incoming machine tokens: with `true`, Keycloak tokens are accepted, plus Auth0 tokens
while `LEGACY_M2M_ISSUERS`/`LEGACY_M2M_AUDIENCE` are set. With `false`, Auth0 tokens
are accepted through `LEGACY_M2M_*`, plus Keycloak tokens while `KEYCLOAK_ISSUER` and
`KEYCLOAK_AUDIENCE` are set, so callers that have not switched yet keep working.

**Rollback:** set `USE_KEYCLOAK=false` and force a new deployment so tasks re-read SSM.
No code or dependency change is needed. Keep the Auth0 settings above in SSM until
Keycloak has been accepted.

The DEV issuer is `https://keycloak.topcoder-dev.com/realms/topcoder-m2m-dev`,
audience `https://api.topcoder-dev.com`, and managed endpoint
`https://keycloak.topcoder-dev.com/m2m/token`.

Member sessions remain Auth0. Keep `VALID_ISSUERS` and `AUTH_SECRET` where legacy
member HMAC tokens are supported. Set `AUTH_USER_AUDIENCES` to a JSON array, or
explicitly retain existing user-token audience behavior with
`ALLOW_LEGACY_USER_AUDIENCE=true`. Never apply that exception to M2M tokens.
`LEGACY_M2M_ISSUERS` and `LEGACY_M2M_AUDIENCE` let Auth0 machine tokens pass the same
normalizer (see the provider switch above).

`tc-core-library-js` owns signature, issuer, audience, lifetime, and machine/user
classification. Service adapters must use its verified `kind`, `isMachine`, and
`scopes` rather than decode/reclassify claims. Scope guards delegate exact matching
to the library with explicit all/any policy. Existing business roles and documented
scope aliases remain endpoint policy; adding OAuth scopes to a user token never
grants machine access. No permissive fallback or synthetic token path is available.

Before rollout run this project's `nvm use`, `pnpm lint`, `pnpm build`, and targeted
authentication tests. Validate real authorized/unauthorized routes with both a
Keycloak service token and a member token, including wrong audiences and insufficient
scopes. Switch only after every downstream receiver accepts the issuer. The core never
retries a failed Keycloak request against Auth0; rolling back is the explicit
`USE_KEYCLOAK=false` change above.

Service routes now require explicit `all:standardized-skills` or the corresponding
read/create/update/delete scope, including skill/category maintenance and member
skill reads that previously bypassed scopes. Role-only routes deny machines and
scope-only routes deny members. Existing member roles and ownership checks remain.
Machine audit handles remain labels, not member IDs or authorization roles.

Validation: Lint/build, four compiled authentication/scope checks (`pnpm test:keycloak`, after `pnpm build`) and the unit tests (`pnpm test`, including both providers in `src/utils/tc-api.spec.ts`) pass. The compiled adapter accepted a real DEV Keycloak token. Generated Prisma outputs restored; no database schema changes.
