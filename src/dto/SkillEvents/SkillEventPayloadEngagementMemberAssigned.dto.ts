import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';

import { UserSkillDto } from '.';

export class SkillEventPayloadEngagementMemberAssigned {
    @IsString()
    engagementId: string;

    @IsString()
    assignmentId: string;

    @IsNumber()
    memberId: number;

    @IsString()
    memberHandle: string;

    @IsArray()
    @ValidateNested()
    @Type(() => UserSkillDto)
    skills: UserSkillDto[];
}
