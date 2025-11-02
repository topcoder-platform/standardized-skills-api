import { Request } from 'express';

export interface AuthUser {
    isMachine: boolean;
    roles: string[];
    userId: number;
    handle: string;
    email: string;
    scopes?: string[];
}

export interface AuthorizedRequest<
    Params = Record<string, any>,
    ResBody = any,
    ReqBody = any,
    ReqQuery = Record<string, any>,
    Locals extends Record<string, any> = Record<string, any>,
> extends Request<Params, ResBody, ReqBody, ReqQuery, Locals> {
    authUser: AuthUser;
    userToken: string;
}
