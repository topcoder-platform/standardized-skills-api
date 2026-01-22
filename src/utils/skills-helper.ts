import { UserSkillLevels, WorkType } from '../config';
import { SourceType, UserSkillLevel } from '../db';

/**
 * fetch the DB entry for the verified user skill level
 */
export async function fetchVerifiedSkillLevel() {
    const verifiedSkillLevel = await UserSkillLevel.findOne({ where: { name: UserSkillLevels.verified } });
    if (!verifiedSkillLevel) {
        throw new Error('User verified skill level not found!');
    }
    return verifiedSkillLevel;
}

/**
 * fetch the DB entry for the selfDeclared user skill level
 */
export async function fetchSelfDeclaredSkillLevel() {
    const selfDeclaredSkillLevel = await UserSkillLevel.findOne({ where: { name: UserSkillLevels.selfDeclared } });
    if (!selfDeclaredSkillLevel) {
        throw new Error('User self-declared skill level not found!');
    }
    return selfDeclaredSkillLevel;
}

/**
 * fetch the DB entry for the passed source type level
 */
export async function fetchSourceType(sourceTypeName: WorkType) {
    const sourceType = await SourceType.findOne({ where: { name: sourceTypeName } });
    if (!sourceType) {
        throw new Error(`SourceType with name ${sourceTypeName} not found!`);
    }
    return sourceType;
}
