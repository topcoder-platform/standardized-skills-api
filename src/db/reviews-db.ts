import { Pool } from 'pg';
import { envConfig } from '../config';
import { getOrCreatePool } from './pg';

let reviewsPool: Pool | null = null;

export function getReviewsPool(): Pool {
    if (!envConfig.REVIEWS_DB.URL || !envConfig.REVIEWS_DB.SCHEMA) {
        throw new Error('REVIEWS_DB_URL is not configured');
    }

    if (!reviewsPool) {
        reviewsPool = getOrCreatePool(envConfig.REVIEWS_DB.URL);
    }

    return reviewsPool;
}
