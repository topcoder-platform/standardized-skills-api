import { IsNumber } from 'class-validator';

export class TCAWinnerDto {
    @IsNumber()
    userId: number;
}
