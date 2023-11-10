import { IsNumber } from 'class-validator';

export class ChallengeWinnerDto {
    @IsNumber()
    userId: number;

    @IsNumber()
    placement: number;
}
