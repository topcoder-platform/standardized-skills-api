import { Pool } from 'pg';

import { envConfig } from '../config';
import { getOrCreatePool } from './pg';

let challengePool: Pool | null = null;

export function getChallengePool(): Pool {
    if (!envConfig.CHALLENGE_DB.URL) {
        throw new Error('CHALLENGE_DB_URL is not configured');
    }

    if (!challengePool) {
        challengePool = getOrCreatePool(envConfig.CHALLENGE_DB.URL);
    }

    return challengePool;
}
