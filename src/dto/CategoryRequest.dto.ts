import { IsIn, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateIf } from 'class-validator';
import { BasePaginatedSortedRequest } from '.';

export class AllCategoriesRequestQueryDto extends BasePaginatedSortedRequest {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsIn(['name', 'description', 'created_at', 'updated_at'])
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

    @ValidateIf((o, v) => v !== null)
    @IsString({ message: 'description must be a non-empty string or null' })
    @IsNotEmpty({ message: 'description must be a non-empty string or null' })
    description: string | null;
}

export class UpdateCategoryRequestBodyDto extends NewCategoryRequestBodyDto {}

export class UpdateCategoryPartialRequestDto {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name?: string;

    @ValidateIf((o, v) => v !== null)
    @IsOptional()
    @IsString({ message: 'description must be a non-empty string or null' })
    @IsNotEmpty({ message: 'description must be a non-empty string or null' })
    description?: string | null;
}

export class CategoryIdRequestPathParamDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID('all')
    categoryId: string;
}

export class GetCategorySkillsRequestQueryDto extends BasePaginatedSortedRequest {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsIn(['name', 'description', 'created_at', 'updated_at'])
    sortBy?: string;
}
