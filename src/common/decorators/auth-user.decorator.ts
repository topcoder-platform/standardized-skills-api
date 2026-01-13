import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { AuthUser } from '../interfaces/auth-user.interface';

export const AuthUserDecorator = createParamDecorator((data: unknown, ctx: ExecutionContext): AuthUser | undefined => {
    const request = ctx.switchToHttp().getRequest();
    return request.authUser;
});
