import { QueryTypes } from 'sequelize';

import db from '../db';
import { LoggerClient } from './LoggerClient';
import { InternalServerError, NotFoundError } from './errors';

const logger = new LoggerClient('ChallengeDbHelper');

const disableSearchPath = { supportsSearchPath: false } as any;

function formatError(error: unknown): string {
    if (error instanceof Error) {
        return `${error.name}: ${error.message}`;
    }

    try {
        return JSON.stringify(error);
    } catch {
        return String(error);
    }
}

export async function challengeExists(challengeId: string): Promise<boolean> {
    try {
        const record = await db.sequelize.query<{ id: string }>(
            'SELECT "id" FROM challenges."Challenge" WHERE "id" = $1 LIMIT 1',
            {
                bind: [challengeId],
                type: QueryTypes.SELECT,
                plain: true,
                ...disableSearchPath,
            },
        );

        return Boolean(record);
    } catch (error) {
        logger.error(`Error verifying challenge ${challengeId} via challenge database`);
        logger.error(formatError(error));
        throw new InternalServerError('Unable to validate challenge! Please retry.');
    }
}

export async function ensureChallengeExists(challengeId: string): Promise<void> {
    if (!(await challengeExists(challengeId))) {
        throw new NotFoundError(`challenge with id='${challengeId}' does not exist!`);
    }
}
