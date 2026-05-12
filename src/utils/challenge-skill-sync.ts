import { randomUUID } from 'crypto';
import { envConfig } from '../config';
import { Prisma } from '@prisma/client';

import { getChallengePrisma } from '../db/challenge-db';
import { LoggerClient } from './LoggerClient';

const logger = new LoggerClient('ChallengeSkillSync');

const auditActor = envConfig.M2M_AUDIT_HANDLE || 'tcwebservice';

async function replaceChallengeSkills(
    tx: Prisma.TransactionClient,
    challengeId: string,
    skillIds: string[],
    actor: string,
) {
    logger.info('Deleting existing challenge skill records if any for challenge id: ' + challengeId);
    await tx.$executeRawUnsafe('DELETE FROM challenges."ChallengeSkill" WHERE "challengeId" = $1', challengeId);

    if (!skillIds.length) {
        return;
    }

    const bindValues: string[] = [];
    const valuePlaceholders = skillIds.map((skillId, index) => {
        const offset = index * 5;
        bindValues.push(randomUUID(), challengeId, skillId, actor, actor);
        return `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5}, NOW(), NOW())`;
    });
    logger.info(
        `Inserting challenge skill records for challenge id: ${challengeId} with skills ${JSON.stringify(
            skillIds,
        )}, values: ${bindValues}`,
    );
    await tx.$executeRawUnsafe(
        `INSERT INTO challenges."ChallengeSkill" ("id", "challengeId", "skillId", "createdBy", "updatedBy", "createdAt", "updatedAt") VALUES ${valuePlaceholders.join(
            ', ',
        )}`,
        ...bindValues,
    );
}

async function touchChallengeRecord(
    tx: Prisma.TransactionClient,
    challengeId: string,
    actor: string,
) {
    await tx.$executeRawUnsafe('UPDATE challenges."Challenge" SET "updatedAt" = NOW(), "updatedBy" = $1 WHERE "id" = $2',
        actor,
        challengeId,
    );
}

export async function syncChallengeSkillsInChallengeDb(challengeId: string, skillIds: string[]): Promise<void> {
    const challengesDb = getChallengePrisma();
    const uniqueSkillIds = [...new Set(skillIds)];

    logger.info(
        `Syncing challenge skill records for challenge ${challengeId} with skills ${JSON.stringify(uniqueSkillIds)}`,
    );

    await challengesDb.$transaction(async (tx) => {
        await replaceChallengeSkills(tx, challengeId, uniqueSkillIds, auditActor);
        await touchChallengeRecord(tx, challengeId, auditActor);
    });
}
