import { Prisma, PrismaClient } from '@prisma/client';
import { envConfig } from '../config';
import { getChallengePrismaClient } from '../db/challengePrisma';
import { LoggerClient } from './LoggerClient';

const logger = new LoggerClient('ChallengeSkillSync');

const auditActor = envConfig.M2M_AUDIT_HANDLE || 'tcwebservice';

async function replaceChallengeSkills(
    client: Prisma.TransactionClient,
    challengeId: string,
    skillIds: string[],
    actor: string,
) {
    await client.challengeSkill.deleteMany({
        where: { challengeId },
    });

    if (!skillIds.length) {
        return;
    }

    await client.challengeSkill.createMany({
        data: skillIds.map((skillId) => ({
            challengeId,
            skillId,
            createdBy: actor,
            updatedBy: actor,
        })),
    });
}

async function touchChallengeRecord(client: Prisma.TransactionClient, challengeId: string, actor: string) {
    await client.$executeRaw`UPDATE "Challenge" SET "updatedAt" = NOW(), "updatedBy" = ${actor} WHERE "id" = ${challengeId}`;
}

export async function syncChallengeSkillsInChallengeDb(challengeId: string, skillIds: string[]): Promise<void> {
    const prisma: PrismaClient = getChallengePrismaClient();
    const uniqueSkillIds = [...new Set(skillIds)];

    logger.info(
        `Syncing challenge skill records for challenge ${challengeId} with skills ${JSON.stringify(uniqueSkillIds)}`,
    );

    await prisma.$transaction(async (tx) => {
        await replaceChallengeSkills(tx, challengeId, uniqueSkillIds, auditActor);
        await touchChallengeRecord(tx, challengeId, auditActor);
    });
}
