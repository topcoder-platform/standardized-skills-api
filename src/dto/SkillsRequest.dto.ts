import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class SkillsRequestDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(9)
    public name: string;
}
