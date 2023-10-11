import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min, MinLength, Max } from 'class-validator';
import { BasePaginatedSortedRequest } from './BaseRequest.dto';
import { Type } from 'class-transformer';
import { DEFAULT_SUGGESTIONS_SIZE } from '../config';

export class GetSkillsQueryRequestDto extends BasePaginatedSortedRequest {
    @IsOptional()
    @IsUUID('all', { each: true })
    @MinLength(1, { each: true })
    skillId: string[];
}

export class GetAutocompleteRequestQueryDto {
    @IsString()
    @IsNotEmpty()
    term: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    @Max(100)
    size = DEFAULT_SUGGESTIONS_SIZE;
}
