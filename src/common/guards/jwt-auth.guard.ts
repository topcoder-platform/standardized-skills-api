import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { auth } from 'tc-core-library-js';
import { AuthenticatedRequest } from '../interfaces/auth-user.interface';

/** Authenticates requests through the shared validator before paired role/scope guards run. */
@Injectable()
export class JwtAuthGuard implements CanActivate {
    private readonly validator: ReturnType<typeof auth.createValidator>;

    /** Creates the validator from explicit trust settings; throws for invalid configuration. */
    constructor(private readonly configService: ConfigService) {
        this.validator = auth.createValidator({
            AUTH_SECRET: configService.get<string>('legacyEnv.AUTH_SECRET'),
            VALID_ISSUERS: configService.get('legacyEnv.VALID_ISSUERS'),
        });
    }

    /**
     * Verifies the bearer token and attaches the normalized principal and forwarding token.
     * @param context Nest request execution context.
     * @returns True after successful authentication.
     * @throws UnauthorizedException for missing, malformed or invalid credentials.
     */
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
        const authorization = request.headers.authorization;
        const match = typeof authorization === 'string' ? /^Bearer ([^\s]+)$/i.exec(authorization) : null;
        if (!match) throw new UnauthorizedException('Invalid authorization header');
        try {
            const principal = await this.validator.verify(match[1]);
            request.authUser = { ...principal,
                userId: principal.userId === undefined ? undefined : String(principal.userId),
                handle: principal.kind === 'service'
                    ? this.configService.get<string>('auth.m2mAuditHandle', 'tcwebservice') : principal.handle,
            };
            request.userToken = match[1];
            return true;
        } catch {
            throw new UnauthorizedException('Invalid or expired token');
        }
    }
}
