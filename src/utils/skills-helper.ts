import { Prisma } from '@prisma/client';

import { UserSkillLevels, WorkType } from '../config';
import { PrismaService } from '../prisma/prisma.service';

type PrismaLookupClient = Prisma.TransactionClient | PrismaService;

/**
 * fetch the DB entry for the verified user skill level
 */
export async function fetchVerifiedSkillLevel(client: PrismaLookupClient) {
    const verifiedSkillLevel = await client.userSkillLevel.findUnique({
        where: { name: UserSkillLevels.verified },
        select: { id: true, name: true },
    });
    if (!verifiedSkillLevel) {
        throw new Error('User verified skill level not found!');
    }
    return verifiedSkillLevel;
}

/**
 * fetch the DB entry for the selfDeclared user skill level
 */
export async function fetchSelfDeclaredSkillLevel(client: PrismaLookupClient) {
    const selfDeclaredSkillLevel = await client.userSkillLevel.findUnique({
        where: { name: UserSkillLevels.selfDeclared },
        select: { id: true, name: true },
    });
    if (!selfDeclaredSkillLevel) {
        throw new Error('User self-declared skill level not found!');
    }
    return selfDeclaredSkillLevel;
}

/**
 * fetch the DB entry for the passed source type level
 */
export async function fetchSourceType(sourceTypeName: WorkType, client: PrismaLookupClient) {
    const sourceType = await client.sourceType.findUnique({
        where: { name: sourceTypeName },
        select: { id: true, name: true },
    });
    if (!sourceType) {
        throw new Error(`SourceType with name ${sourceTypeName} not found!`);
    }
    return sourceType;
}
