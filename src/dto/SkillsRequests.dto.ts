import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    Min,
    MinLength,
    Max,
    IsIn,
    ValidateIf,
} from 'class-validator';
import { BasePaginatedSortedRequest } from './BaseRequest.dto';
import { Type } from 'class-transformer';
import { DEFAULT_SUGGESTIONS_SIZE } from '../config';

export class SkillIdRequestPathParamDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID('all')
    skillId: string;
}

export class GetSkillsQueryRequestDto extends BasePaginatedSortedRequest {
    @IsOptional()
    @IsUUID('all', { each: true })
    @MinLength(1, { each: true })
    skillId?: string[];

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

export class SkillCreationRequestBodyDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @ValidateIf((o, v) => v !== null)
    @IsString({ message: 'description must be a non-empty string or null' })
    @IsNotEmpty({ message: 'description must be a non-empty string or null' })
    description: string | null;

    @IsString()
    @IsUUID('all')
    @IsNotEmpty()
    categoryId: string;
}

export class SkillUpdatePutRequestBodyDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @ValidateIf((o, v) => v !== null)
    @IsString({ message: 'description must be a non-empty string or null' })
    @IsNotEmpty({ message: 'description must be a non-empty string or null' })
    description: string | null;

    @IsString()
    @IsUUID('all')
    @IsNotEmpty()
    categoryId: string;
}

export class SkillUpdatePatchRequestBodyDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?: string;

    @ValidateIf((o, v) => v !== null)
    @IsString({ message: 'description must be a non-empty string or null' })
    @IsNotEmpty({ message: 'description must be a non-empty string or null' })
    @IsOptional()
    description?: string | null;

    @IsString()
    @IsUUID('all')
    @IsNotEmpty()
    @IsOptional()
    categoryId?: string;
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

export class SkillIdsRequestBodyDto {
    @IsUUID('all', { each: true })
    @MinLength(1, { each: true })
    skillIds: string[];
}
