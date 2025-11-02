import { INestApplication, Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor(private readonly configService: ConfigService) {
    const databaseUrl = configService.get<string>('database.url') ?? '';
    const schema = configService.get<string>('database.schema');

    const resolvedUrl = schema
      ? `${databaseUrl}${databaseUrl.includes('?') ? '&' : '?'}schema=${schema}`
      : databaseUrl;

    super({
      datasources: {
        db: {
          url: resolvedUrl,
        },
      },
    });
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication): Promise<void> {
    const shutdown = async () => {
      this.logger.log('Prisma connection shutting down');
      await app.close();
    };

    // Prisma 5 library engine no longer supports $on('beforeExit'), so rely on the process event instead.
    process.once('beforeExit', shutdown);
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
