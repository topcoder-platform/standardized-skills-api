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
