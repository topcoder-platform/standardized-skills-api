import { IsIn, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { BasePaginatedSortedRequest } from '.';

export class AllCategoryRequestQueryDto extends BasePaginatedSortedRequest {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsIn(['name', 'description', 'createdAt', 'updatedAt'])
    sortBy?: string;
}

export class NewCategoryRequestBodyDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;
}

export class UpdateCategoryRequestBodyDto extends NewCategoryRequestBodyDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID('all')
    id: string;

    @IsOptional()
    @IsString()
    description: string;
}
