import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createJwtVerifier, type JwtVerifier } from 'tc-core-library-js';

import { AuthenticatedRequest } from '../interfaces/auth-user.interface';

/** Verifies bearer tokens through the shared client and attaches the Skills request identity. */
@Injectable()
export class JwtAuthGuard implements CanActivate {
    private verifier?: JwtVerifier;

    /** Stores deployment settings; verifier creation is lazy and validates configuration on first authentication. */
    constructor(private readonly configService: ConfigService) {}

    /** Authenticates a request and supplies the service audit handle for machines.
     * @param context Nest request context. @returns True after verified identity attachment.
     * @throws UnauthorizedException for missing, malformed, invalid or expired tokens.
     */
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
        const authorization = request.headers.authorization;
        const match = typeof authorization === 'string' ? /^Bearer ([^\s]+)$/i.exec(authorization) : null;
        if (!match) throw new UnauthorizedException('A bearer token is required');
        try {
            this.verifier ??= createJwtVerifier({
                AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
                JWT_AUDIENCE: process.env.JWT_AUDIENCE,
                AUTH_SECRET: this.configService.get<string>('legacyEnv.AUTH_SECRET'),
                VALID_ISSUERS: this.configService.get('legacyEnv.VALID_ISSUERS'),
            });
            const user = await this.verifier.verify(match[1]);
            if (!user.isMachine && user.userId === undefined) throw new Error('A member ID is required');
            request.authUser = {
                ...user,
                userId: user.userId === undefined ? '' : String(user.userId),
                handle: user.isMachine ? this.configService.get<string>('auth.m2mAuditHandle', 'tcwebservice') : user.handle ?? '',
                email: user.email ?? '',
            };
            request.userToken = match[1];
            return true;
        } catch { throw new UnauthorizedException('Invalid or expired access token'); }
    }
}
