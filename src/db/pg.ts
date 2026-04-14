import { Pool } from 'pg';

const pools = new Map<string, Pool>();

export function getOrCreatePool(connectionString: string): Pool {
    const existing = pools.get(connectionString);
    if (existing) {
        return existing;
    }

    const pool = new Pool({
        connectionString,
        max: 10,
    });

    pools.set(connectionString, pool);
    return pool;
}
