import { PrismaClient } from '@prisma/client';
import { envConfig } from '../config';

let challengePrisma: PrismaClient | null = null;

export function getChallengePrismaClient(): PrismaClient {
    if (!challengePrisma) {
        const challengeDatabaseUrl = envConfig.CHALLENGE_DB_URL;

        if (!challengeDatabaseUrl) {
            throw new Error('Challenge database connection is not configured.');
        }

        challengePrisma = new PrismaClient({
            datasources: {
                db: {
                    url: challengeDatabaseUrl,
                },
            },
        });
    }

    return challengePrisma;
}
