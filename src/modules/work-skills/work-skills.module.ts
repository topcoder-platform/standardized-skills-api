import { Module } from '@nestjs/common';

import { WorkSkillsController } from './work-skills.controller';

@Module({
    controllers: [WorkSkillsController],
})
export class WorkSkillsModule {}
