import { ArrayNotEmpty, IsArray, IsUUID } from 'class-validator';

export class SetWorkSkillsRequestBodyDto {
    @IsUUID(4)
    workId: string;

    @IsUUID(4)
    workTypeId: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsUUID(4, { each: true })
    skillIds: string[];
}
