import { Type } from 'class-transformer';
import { IsArray, ValidateNested, IsUUID, IsEnum } from 'class-validator';
import { TCAWinnerDto } from './TCAWinner.dto';
import { WorkType } from '../../config';
import { UserSkillDto } from '.';

export class SkillEventPayloadTCAUpdate {
    @IsArray()
    @ValidateNested()
    @Type(() => UserSkillDto)
    skills: UserSkillDto[];

    @ValidateNested()
    @Type(() => TCAWinnerDto)
    winner: TCAWinnerDto;

    @IsUUID('all')
    id: string;

    @IsEnum(WorkType)
    type: WorkType;
}
