import { Module } from '@nestjs/common';

import { UserSkillsController } from './user-skills.controller';
import { UserSkillsService } from './user-skills.service';

@Module({
  controllers: [UserSkillsController],
  providers: [UserSkillsService],
  exports: [UserSkillsService],
})
export class UserSkillsModule {}
