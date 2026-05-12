import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { SkillEventsController } from './skill-events.controller';
import { SkillEventsService } from './skill-events.service';

@Module({
  imports: [PrismaModule],
  controllers: [SkillEventsController],
  providers: [SkillEventsService],
})
export class SkillEventsModule {}
