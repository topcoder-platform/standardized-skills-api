import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { WorkSkillsController } from './work-skills.controller';
import { WorkSkillsService } from './work-skills.service';

@Module({
    imports: [PrismaModule],
    controllers: [WorkSkillsController],
    providers: [WorkSkillsService],
})
export class WorkSkillsModule {}
