import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { SCOPES_KEY } from '../decorators';
import { AuthenticatedRequest } from '../interfaces/auth-user.interface';

@Injectable()
export class ScopesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredScopes = this.reflector.getAllAndOverride<string[]>(SCOPES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredScopes || requiredScopes.length === 0) {
            return true;
        }

        const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
        const user = request.authUser;

        if (!user) {
            throw new ForbiddenException('Missing authentication context');
        }

        if (!user.isMachine) {
            return true;
        }

        const tokenScopes = user.scopes ?? [];
        const hasScope = requiredScopes.some((scope) => tokenScopes.includes(scope));

        if (!hasScope) {
            throw new ForbiddenException('You are not allowed to perform this action');
        }

        return true;
    }
}
