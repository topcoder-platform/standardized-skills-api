import { Pool } from 'pg';

import { envConfig } from '../config';
import { getOrCreatePool } from './pg';

let memberPool: Pool | null = null;

export function getMemberPool(): Pool {
    if (!envConfig.MEMBER_DB.URL) {
        throw new Error('MEMBER_DB_URL is not configured');
    }

    if (!memberPool) {
        memberPool = getOrCreatePool(envConfig.MEMBER_DB.URL);
    }

    return memberPool;
}
