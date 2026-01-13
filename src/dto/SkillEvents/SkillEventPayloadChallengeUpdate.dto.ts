import { Type } from 'class-transformer';
import { IsArray, ValidateNested, ArrayNotEmpty, IsEnum, IsUUID } from 'class-validator';
import { ChallengeWinnerDto } from './ChallengeWinner.dto';
import { SkillEventChallengeUpdateStatus } from '../../config';

export class UserSkillDto {
    @IsUUID('all')
    id: string;
}

export class SkillEventPayloadChallengeUpdate {
    @IsArray()
    @ValidateNested()
    @Type(() => UserSkillDto)
    skills: UserSkillDto[];

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
    @Type(() => ChallengeWinnerDto)
    winners: ChallengeWinnerDto[];

    @IsEnum(SkillEventChallengeUpdateStatus)
    status: string;

    @IsUUID('all')
    id: string;
}
