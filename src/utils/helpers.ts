import { Response } from 'express';
import { IBasePaginatedRequest, IChangeToMandatory } from '../interfaces';
import * as constant from '../config/constants';

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

export const supplyDefaultPaginationValues = (pagination: IBasePaginatedRequest, sortOn: string) => {
    const defaultPagination: IChangeToMandatory<IBasePaginatedRequest> = {
        page: pagination.page ?? constant.defaultPage,
        perPage: pagination.perPage ?? constant.defaultPerPage,
        sortBy: pagination.sortBy ?? sortOn,
        sortOrder: pagination.sortOrder ?? constant.defaultSortOrder,
    };
    return defaultPagination;
};
