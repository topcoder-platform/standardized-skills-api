import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, Max } from 'class-validator';
import { BasePaginatedSortedRequest } from './BaseRequest.dto';
import { Type } from 'class-transformer';
import { DEFAULT_SUGGESTIONS_SIZE } from '../config';

export class GetSkillsQueryRequestDto extends BasePaginatedSortedRequest {
    // TODO: add any other fields that need to get validated for this request, for example filtering by name and etc.
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
