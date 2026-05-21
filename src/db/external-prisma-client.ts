import { Prisma, PrismaClient } from '@prisma/client';

import { LoggerClient } from '../utils/LoggerClient';

/**
 * Generic Prisma client for external databases that are queried via raw SQL.
 */
export class ExternalPrismaClient extends PrismaClient {
    private readonly logger: LoggerClient;

    constructor(clientName: string, databaseUrl: string) {
        super({
            transactionOptions: {
                timeout: 10000,
            },
            log: [
                { level: 'query', emit: 'event' },
                { level: 'info', emit: 'event' },
                { level: 'warn', emit: 'event' },
                { level: 'error', emit: 'event' },
            ],
            datasources: {
                db: {
                    url: databaseUrl,
                },
            },
        });

        this.logger = new LoggerClient(clientName);

        this.$on('info' as never, (event: Prisma.LogEvent) => {
            this.logger.info(`Prisma info: ${event.message}`);
        });
        this.$on('warn' as never, (event: Prisma.LogEvent) => {
            this.logger.warn(`Prisma warning: ${event.message}`);
        });
        this.$on('error' as never, (event: Prisma.LogEvent) => {
            this.logger.error(`Prisma error: ${event.message}`);
        });
    }
}
