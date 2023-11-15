import { Type } from 'class-transformer';
import { IsArray, ValidateNested, IsUUID, IsEnum } from 'class-validator';
import { TCAGraduateDto } from './TCAGraduate.dto';
import { WorkType } from '../../config';
import { UserSkillDto } from '.';

export class SkillEventPayloadTCAUpdate {
    @IsArray()
    @ValidateNested()
    @Type(() => UserSkillDto)
    skills: UserSkillDto[];

    @ValidateNested()
    @Type(() => TCAGraduateDto)
    graduate: TCAGraduateDto;

    @IsUUID('all')
    id: string;

    @IsEnum(WorkType)
    type: WorkType;
}
