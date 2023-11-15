import { IsNumber } from 'class-validator';

export class TCAGraduateDto {
    @IsNumber()
    userId: number;
}
