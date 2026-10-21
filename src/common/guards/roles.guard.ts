import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { ROLES_KEY, SCOPES_KEY } from '../decorators';
import { AuthenticatedRequest } from '../interfaces/auth-user.interface';

/** Applies member roles and requires explicit scope metadata for service alternatives. */
@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    /** Checks route metadata against the verified request; returns true or throws ForbiddenException. */
    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
        const user = request.authUser;

        if (!user) {
            throw new ForbiddenException('Missing authentication context');
        }

        const scopes = this.reflector.getAllAndOverride<string[]>(SCOPES_KEY, [context.getHandler(), context.getClass()]);
        if (user.kind === 'service' && user.isMachine) {
            if (scopes?.length) return true;
            throw new ForbiddenException('Service access requires route scopes');
        }
        if (!requiredRoles?.length) {
            if (!scopes?.length) return true;
            throw new ForbiddenException('This endpoint requires a service token');
        }

        const normalizedRoles = user.roles?.map((role) => role.toLowerCase()) ?? [];
        const matches = requiredRoles.some((role) => normalizedRoles.includes(role.toLowerCase()));

        if (!matches) {
            throw new ForbiddenException('You are not allowed to perform this action');
        }

        return true;
    }
}
