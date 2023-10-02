import { Response } from 'express';

export function checkIfExists<T>(arr1: T[], arr2: T[]): boolean {
    return arr1.some((item) => arr2.includes(item));
}

export const generateEmsiSkillSuggestionInputs = (skillName: string) => {
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
