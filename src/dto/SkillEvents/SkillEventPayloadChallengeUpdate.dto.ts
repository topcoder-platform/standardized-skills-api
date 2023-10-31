import { Type } from 'class-transformer';
import { IsArray, ValidateNested, ArrayNotEmpty, IsString, IsIn, IsUUID } from 'class-validator';
import { ChallengeWinnerDto } from './ChallengeWinner.dto';

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

    @IsString()
    @IsIn(['Completed'])
    status: string;

    @IsUUID('all')
    id: string;
}
