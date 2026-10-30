import assert from 'node:assert/strict';
import test from 'node:test';
import { createHmac } from 'node:crypto';
import { ConfigService } from '@nestjs/config';
import type { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import type { AuthenticatedRequest } from '../interfaces/auth-user.interface';

const secret = 'test-only-secret-with-at-least-32-bytes-long';
/** Signs isolated test claims for the shared verifier; returns a compact JWT without any network I/O. */
function token(claims: Record<string, unknown> = {}): string {
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
    const body = Buffer.from(JSON.stringify({ iss: 'https://issuer.test/', sub: '42', userId: '42', exp: Math.floor(Date.now() / 1000) + 300, ...claims })).toString('base64url');
    return `${header}.${body}.${createHmac('sha256', secret).update(`${header}.${body}`).digest('base64url')}`;
}

/** Creates a guard and request context from a bearer value; all settings are test-owned. */
function fixture(bearer: string) {
    const guard = new JwtAuthGuard(new ConfigService({ legacyEnv: { AUTH_SECRET: secret, VALID_ISSUERS: ['https://issuer.test/'] } }));
    const request = { headers: { authorization: `Bearer ${bearer}` } } as AuthenticatedRequest;
    const context = { switchToHttp: () => ({ getRequest: () => request }) } as ExecutionContext;
    return { guard, request, context };
}

test('shared guard keeps a scoped human identity human', async () => {
    const { guard, request, context } = fixture(token({ scope: 'all:skills', roles: ['Topcoder User'] }));
    assert.equal(await guard.canActivate(context), true);
    assert.equal(request.authUser?.isMachine, false);
    assert.equal(request.authUser?.userId, '42');
});

test('shared guard rejects invalid tokens and untrusted issuers', async () => {
    for (const bearer of ['malformed', token({ iss: 'https://untrusted.test/' }), token({ exp: 1 })]) {
        const { guard, context } = fixture(bearer);
        await assert.rejects(guard.canActivate(context), /Invalid or expired/);
    }
});
