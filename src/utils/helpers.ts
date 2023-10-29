import { Response } from 'express';
import { UserRoles } from '../config';
import { AuthUser } from '../types';
import { ForbiddenError } from './errors';

/**
 * Checks whether the given user has admin role or no
 * @param user
 */
export const hasAdminRole = (currentUser: AuthUser) => {
    for (const userRole of currentUser.roles) {
        if (userRole.toLowerCase() === UserRoles.Admin.toLowerCase()) {
            return true;
        }
    }
    return false;
};

export const ensureUserCanManageMemberSkills = (currentUser: AuthUser, memberId: number) => {
    if (!currentUser.isMachine && !hasAdminRole(currentUser) && Number(currentUser.userId) !== memberId) {
        throw new ForbiddenError('You are not allowed to perform this action');
    }
};

export const ensureUserHasAdminPrivilege = (currentUser: AuthUser) => {
    if (!currentUser.isMachine && !hasAdminRole(currentUser)) {
        throw new ForbiddenError('You are not allowed to perform this action');
    }
};

export function checkIfExists<T>(arr1: Array<T>, arr2: Array<T>): boolean {
    return arr1.some((item) => arr2.includes(item));
}

export const generateEmsiSkillSuggestionInputs = (skillName: string): Array<string> => {
    const result = [];
    const tokens = skillName.trim().split(/\s+/);
    let tempStr = skillName;

    for (const token of tokens) {
        tempStr = tempStr.substring(tempStr.indexOf(token));
        result.push(tempStr.substring(tempStr.indexOf(token)));
    }
    return result;
};

export const setResHeaders = (res: Response, result: any) => {
    res.set('X-Page', result.page);
    res.set('X-Per-Page', result.perPage);
    res.set('X-Total', result.total);
    res.set('X-Total-Pages', result.totalPages);
};
