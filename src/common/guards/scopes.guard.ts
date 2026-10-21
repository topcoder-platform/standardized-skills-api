import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { auth, Principal } from 'tc-core-library-js';

import { SCOPES_KEY } from '../decorators';
import { AuthenticatedRequest } from '../interfaces/auth-user.interface';

/** Applies exact shared scope checks to services; member access is decided by RolesGuard. */
@Injectable()
export class ScopesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    /** Checks route scopes for the request context; returns true or throws ForbiddenException. */
    canActivate(context: ExecutionContext): boolean {
        const requiredScopes = this.reflector.getAllAndOverride<string[]>(SCOPES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
        const user = request.authUser;

        if (!user) {
            throw new ForbiddenException('Missing authentication context');
        }

        if (!user.isMachine) {
            return true;
        }

        const hasScope = !!requiredScopes?.length && auth.hasScopes(user as unknown as Principal, requiredScopes, 'any');

        if (!hasScope) {
            throw new ForbiddenException('You are not allowed to perform this action');
        }

        return true;
    }
}
