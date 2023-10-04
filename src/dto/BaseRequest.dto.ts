import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { DEFAULT_PAGE, DEFAULT_PER_PAGE, DEFAULT_SORT_ORDER } from '../config';
import { Type } from 'class-transformer';

export abstract class BasePaginatedSortedRequest {
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    page = DEFAULT_PAGE;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    perPage = DEFAULT_PER_PAGE;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    sortBy?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsIn(['ASC', 'DESC'])
    sortOrder: 'ASC' | 'DESC' = DEFAULT_SORT_ORDER;
}
