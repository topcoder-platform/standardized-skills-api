import { ArrayNotEmpty, IsArray, IsUUID, ArrayUnique } from 'class-validator';

export class SetWorkSkillsRequestBodyDto {
    @IsUUID('all')
    workId: string;

    @IsUUID('all')
    workTypeId: string;

    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsUUID('all', { each: true })
    skillIds: string[];
}
