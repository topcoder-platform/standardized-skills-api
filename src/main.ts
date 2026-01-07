import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { StandardizedSkillExceptionFilter } from './common/filters';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = new Logger('Bootstrap');

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            skipMissingProperties: false,
        }),
    );

    app.useGlobalFilters(new StandardizedSkillExceptionFilter());

    app.enableCors();

    const configService = app.get(ConfigService);
    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);

    const port = configService.get<number>('app.port', 3000);
    const basePath = configService.get<string>('app.basePath', '').trim();
    const normalizedBasePath = basePath.replace(/\s+/g, '').replace(/\/+$/g, '').replace(/^\/+/, '');

    if (normalizedBasePath) {
        app.setGlobalPrefix(normalizedBasePath);
    }

    await app.listen(port);
    const fullBase = normalizedBasePath ? `/${normalizedBasePath}` : '';
    logger.log(`Server is running on http://localhost:${port}${fullBase}`);
}

bootstrap().catch((error) => {
    console.error('Failed to bootstrap Nest application', error);
    process.exit(1);
});
