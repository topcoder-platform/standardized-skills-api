import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

    // Swagger docs (available in all envs for now; gate with NODE_ENV if needed)
    const swaggerConfig = new DocumentBuilder()
        .setTitle('Standardized Skills API')
        .setDescription('API documentation for the Standardized Skills service.')
        .setVersion('1.0.0')
        .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name: 'JWT',
            description: 'Enter JWT access token',
            in: 'header',
        })
        .build();

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
    const docsPath = [normalizedBasePath, 'api-docs'].filter(Boolean).join('/');
    SwaggerModule.setup(docsPath || 'api-docs', app, swaggerDocument);

    await app.listen(port);
    const fullBase = normalizedBasePath ? `/${normalizedBasePath}` : '';
    logger.log(`Server is running on http://localhost:${port}${fullBase}`);
    logger.log(`Swagger docs available at http://localhost:${port}${fullBase}/${docsPath ? docsPath : 'api-docs'}`);
}

bootstrap().catch((error) => {
    console.error('Failed to bootstrap Nest application', error);
    process.exit(1);
});
