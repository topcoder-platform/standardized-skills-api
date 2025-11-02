import { Request } from 'express';

export interface AuthUser {
  isMachine: boolean;
  roles: string[];
  userId: number | string;
  handle: string;
  email: string;
  scopes?: string[];
}

export interface AuthenticatedRequest extends Request {
  authUser?: AuthUser;
  userToken?: string;
}
