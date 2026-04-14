import { Pool } from 'pg';
import { envConfig } from '../config';
import { getOrCreatePool } from './pg';

let resourcesPool: Pool | null = null;

export function getResourcesPool(): Pool {
    if (!envConfig.RESOURCES_DB.URL) {
        throw new Error('RESOURCES_DB_URL is not configured');
    }

    if (!resourcesPool) {
        resourcesPool = getOrCreatePool(envConfig.RESOURCES_DB.URL);
    }

    return resourcesPool;
}
