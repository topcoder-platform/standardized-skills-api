import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { configuration } from './config';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './modules/health/health.module';
import { SkillCategoriesModule } from './modules/skill-categories/skill-categories.module';
import { SkillsModule } from './modules/skills/skills.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      expandVariables: true,
    }),
    PrismaModule,
    HealthModule,
    SkillsModule,
    SkillCategoriesModule,
  ],
})
export class AppModule {}
