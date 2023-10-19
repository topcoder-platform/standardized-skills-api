import { IsIn, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { BasePaginatedSortedRequest } from '.';

export class AllCategoriesRequestQueryDto extends BasePaginatedSortedRequest {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsIn(['name', 'description', 'createdAt', 'updatedAt'])
    sortBy?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string;
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
    @IsOptional()
    @IsString()
    description: string;
}

export class UpdateCategoryPartialRequestDto {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description?: string;
}

export class CategoryIdRequestPathParamDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID('all')
    categoryId: string;
}
