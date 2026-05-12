import { envConfig } from '../config';
import { ExternalPrismaClient } from './external-prisma-client';

let resourcesPrisma: ExternalPrismaClient | null = null;

export function getResourcesPrisma(): ExternalPrismaClient {
    if (!envConfig.RESOURCES_DB.URL) {
        throw new Error('RESOURCES_DB_URL is not configured');
    }

    if (!resourcesPrisma) {
        resourcesPrisma = new ExternalPrismaClient('ResourcesExternalDb', envConfig.RESOURCES_DB.URL);
    }

    return resourcesPrisma;
}
