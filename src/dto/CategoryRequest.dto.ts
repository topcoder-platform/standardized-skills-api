import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BasePaginatedSortedRequest } from '.';

export class AllCategoryRequestDto extends BasePaginatedSortedRequest {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsIn(['name', 'description', 'createdAt', 'updatedAt'])
    sortBy?: string;
}
