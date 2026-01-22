import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';

import { UserSkillDto } from '.';

export class SkillEventPayloadEngagementMemberAssigned {
    engagementId: string;

    @IsOptional()
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
