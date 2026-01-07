import { Module } from '@nestjs/common';

import { SkillEventsController } from './skill-events.controller';

@Module({
  controllers: [SkillEventsController],
})
export class SkillEventsModule {}
