import { randomUUID } from 'crypto';
import db from '../db';
import { Sequelize, Transaction } from 'sequelize';
import { envConfig } from '../config';
import { LoggerClient } from './LoggerClient';

const logger = new LoggerClient('ChallengeSkillSync');

const auditActor = envConfig.M2M_AUDIT_HANDLE || 'tcwebservice';

async function replaceChallengeSkills(
    sequelize: Sequelize,
    transaction: Transaction,
    challengeId: string,
    skillIds: string[],
    actor: string,
) {
    logger.info('Deleting existing challenge skill records if any for challenge id: ' + challengeId);
    await sequelize.query('DELETE FROM challenges."ChallengeSkill" WHERE "challengeId" = $1', {
        bind: [challengeId],
        transaction,
        // pg errors if Sequelize prepends SET search_path within prepared statements
        ...({ supportsSearchPath: false } as any),
    });

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
    await sequelize.query(
        `INSERT INTO challenges."ChallengeSkill" ("id", "challengeId", "skillId", "createdBy", "updatedBy", "createdAt", "updatedAt") VALUES ${valuePlaceholders.join(
            ', ',
        )}`,
        {
            bind: bindValues,
            transaction,
            ...({ supportsSearchPath: false } as any),
        },
    );
}

async function touchChallengeRecord(
    sequelize: Sequelize,
    transaction: Transaction,
    challengeId: string,
    actor: string,
) {
    await sequelize.query('UPDATE challenges."Challenge" SET "updatedAt" = NOW(), "updatedBy" = $1 WHERE "id" = $2', {
        bind: [actor, challengeId],
        transaction,
        ...({ supportsSearchPath: false } as any),
    });
}

export async function syncChallengeSkillsInChallengeDb(challengeId: string, skillIds: string[]): Promise<void> {
    const sequelize = db.sequelize;
    const uniqueSkillIds = [...new Set(skillIds)];

    logger.info(
        `Syncing challenge skill records for challenge ${challengeId} with skills ${JSON.stringify(uniqueSkillIds)}`,
    );

    await sequelize.transaction(async (tx) => {
        await replaceChallengeSkills(sequelize, tx, challengeId, uniqueSkillIds, auditActor);
        await touchChallengeRecord(sequelize, tx, challengeId, auditActor);
    });
}
