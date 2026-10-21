import { Request } from 'express';

/** Shared verified identity adapted for string member IDs and service audit labels. */
export interface AuthUser {
    kind?: 'user' | 'service';
    clientId?: string;
    isMachine: boolean;
    roles: string[];
    userId?: number | string;
    handle?: string;
    email?: string;
    scopes?: string[];
}

export interface AuthenticatedRequest extends Request {
    authUser?: AuthUser;
    userToken?: string;
}
