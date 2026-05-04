import { envConfig } from '../config';
import { ExternalPrismaClient } from './external-prisma-client';

let challengePrisma: ExternalPrismaClient | null = null;

export function getChallengePrisma(): ExternalPrismaClient {
    if (!envConfig.CHALLENGE_DB.URL) {
        throw new Error('CHALLENGE_DB_URL is not configured');
    }

    if (!challengePrisma) {
        challengePrisma = new ExternalPrismaClient('ChallengeExternalDb', envConfig.CHALLENGE_DB.URL);
    }

    return challengePrisma;
}
