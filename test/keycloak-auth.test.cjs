/* Synthetic local authentication boundary checks; no real secrets or network calls. */
const assert = require('node:assert/strict');
const { createHmac } = require('node:crypto');
const { test } = require('node:test');
const { JwtAuthGuard } = require('../dist/common/guards/jwt-auth.guard');

Object.assign(process.env, {
  M2M_PROVIDER: 'keycloak',
  KEYCLOAK_ISSUER: 'https://keycloak.example.test/realms/test',
  KEYCLOAK_AUDIENCE: 'https://api.example.test',
  KEYCLOAK_TOKEN_URL: 'https://keycloak.example.test/m2m/token',
  VALID_ISSUERS: '["https://members.example.test"]',
  AUTH_SECRET: 'synthetic-unit-test-key',
  ALLOW_LEGACY_USER_AUDIENCE: 'true',
});

/** Signs supplied synthetic claims with a test HMAC key; returns a JWT; throws for invalid JSON data. */
function signed(claims, secret = process.env.AUTH_SECRET) {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify({ iss: 'https://members.example.test', sub: '42',
    userId: 42, roles: ['Member'], iat: now, exp: now + 120, ...claims })).toString('base64url');
  const value = `${header}.${body}`;
  return `${value}.${createHmac('sha256', secret).update(value).digest('base64url')}`;
}

/** Runs the compiled HTTP adapter with a supplied token; returns the principal or rejects on authentication failure. */
async function authenticate(token) {
  const guard = new JwtAuthGuard({get: (key, fallback) => key === 'legacyEnv.AUTH_SECRET' ? process.env.AUTH_SECRET : key === 'legacyEnv.VALID_ISSUERS' ? process.env.VALID_ISSUERS : fallback});
  const request = {headers:{authorization:'Bearer '+token}};
  await guard.canActivate({switchToHttp: () => ({getRequest: () => request})});
  return request.authUser;
}

test('member OAuth scopes cannot create a service identity', async () => {
  const user = await authenticate(signed({ scope: 'read:groups write:bus_api' }));
  assert.equal(user.kind, 'user');
  assert.equal(user.isMachine, false);
  assert.equal(user.userId, '42');
  assert.deepEqual(user.scopes, []);
});

test('invalid signatures and machine-like member claims are rejected', async () => {
  await assert.rejects(authenticate(signed({}, 'wrong-key')));
  await assert.rejects(authenticate(signed({ gty: 'client-credentials', azp: 'm2m-test' })));
  await assert.rejects(authenticate(signed({ isMachine: true })));
});

test('Keycloak issuer cannot authenticate using the member HMAC key', async () => {
  await assert.rejects(authenticate(signed({ iss: process.env.KEYCLOAK_ISSUER,
    gty: 'client-credentials', azp: 'm2m-test', scope: 'read:groups',
    aud: process.env.KEYCLOAK_AUDIENCE, userId: undefined, roles: undefined })));
});

const { ScopesGuard } = require('../dist/common/guards/scopes.guard');
const { RolesGuard } = require('../dist/common/guards/roles.guard');
/** Runs paired guards for the supplied principal and metadata; returns true or throws on denied access. */
function check(user, roles, scopes) {
  const reflector = {getAllAndOverride: key => key === 'scopes' ? scopes : roles};
  const context = {getHandler: () => check, getClass: () => RolesGuard,
    switchToHttp: () => ({getRequest: () => ({authUser:user})})};
  return new RolesGuard(reflector).canActivate(context) && new ScopesGuard(reflector).canActivate(context);
}
test('skills permissions require explicit exact grants, separate from member roles', () => {
  const service={kind:'service',isMachine:true,roles:[],scopes:['read:standardized-skills']};
  assert.equal(check(service,['administrator'],['read:standardized-skills']),true);
  assert.throws(()=>check(service,['administrator'],['create:standardized-skills']));
  assert.throws(()=>check(service,['administrator'],undefined));
  assert.throws(()=>check({...service,scopes:['READ:STANDARDIZED-SKILLS']},[],['read:standardized-skills']));
  assert.throws(()=>check({...service,kind:'user',isMachine:false},[],['read:standardized-skills']));
  assert.equal(check({kind:'user',isMachine:false,roles:['administrator'],scopes:[]},['administrator'],['read:standardized-skills']),true);
});
