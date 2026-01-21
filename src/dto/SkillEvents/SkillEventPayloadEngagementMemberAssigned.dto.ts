import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';

import { UserSkillDto } from '.';

export class SkillEventPayloadEngagementMemberAssigned {
    @IsUUID('all')
    engagementId: string;

    @IsOptional()
    @IsUUID('all')
    assignmentId?: string;

    @IsNumber()
    memberId: number;

    @IsString()
    memberHandle: string;

    @IsArray()
    @ValidateNested()
    @Type(() => UserSkillDto)
    skills: UserSkillDto[];
}
