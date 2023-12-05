import { Request } from 'express';

export interface AuthUser {
    isMachine: boolean;
    roles: string[];
    userId: number;
    handle: string;
    email: string;
    scopes?: string[];
}

export interface AuthorizedRequest<T, Te, Tr, Tt, Tu extends Record<string, any>> extends Request<T, Te, Tr, Tt, Tu> {
    authUser: AuthUser;
    userToken: string;
}
