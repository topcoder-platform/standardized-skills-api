import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AuthenticatedRequest } from '../interfaces/auth-user.interface';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { middleware } = require('tc-core-library-js');

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const response = context.switchToHttp().getResponse();
    const authorization = request.headers['authorization'] ?? request.headers['Authorization'];

    if (!authorization || typeof authorization !== 'string') {
      throw new UnauthorizedException('Authorization header missing');
    }

    const [, token] = authorization.split(' ');
    if (!token) {
      throw new UnauthorizedException('Invalid authorization header format');
    }

    const authSecret = this.configService.get<string>('legacyEnv.AUTH_SECRET');
    const validIssuers = this.configService.get('legacyEnv.VALID_ISSUERS');

    try {
      await new Promise<void>((resolve, reject) => {
        middleware
          .jwtAuthenticator({
            AUTH_SECRET: authSecret,
            VALID_ISSUERS: validIssuers,
          })(request, response, (err?: Error) => {
            if (err) {
              reject(err);
              return;
            }
            resolve();
          });
      });
    } catch (error: any) {
      throw new UnauthorizedException(error?.message ?? 'Unauthorized');
    }

    request.userToken = token;

    if (request.authUser?.isMachine) {
      request.authUser.handle = this.configService.get<string>('auth.m2mAuditHandle', 'tcwebservice');
    } else if (request.authUser) {
      request.authUser.userId = String(request.authUser.userId);
    }

    return true;
  }
}
