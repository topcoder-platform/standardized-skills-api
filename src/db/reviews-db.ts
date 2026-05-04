import { envConfig } from '../config';
import { ExternalPrismaClient } from './external-prisma-client';

let reviewsPrisma: ExternalPrismaClient | null = null;

export function getReviewsPrisma(): ExternalPrismaClient {
    if (!envConfig.REVIEWS_DB.URL || !envConfig.REVIEWS_DB.SCHEMA) {
        throw new Error('REVIEWS_DB_URL is not configured');
    }

    if (!reviewsPrisma) {
        reviewsPrisma = new ExternalPrismaClient('ReviewsExternalDb', envConfig.REVIEWS_DB.URL);
    }

    return reviewsPrisma;
}
