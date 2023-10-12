import { ArrayNotEmpty, IsArray, IsUUID } from 'class-validator';

export class SetWorkSkillsRequestBodyDto {
    @IsUUID('all')
    workId: string;

    @IsUUID('all')
    workTypeId: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsUUID('all', { each: true })
    skillIds: string[];
}
