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
    ArrayUnique,
} from 'class-validator';
import { BasePaginatedSortedRequest } from './BaseRequest.dto';
import { Transform, Type } from 'class-transformer';
import { DEFAULT_SUGGESTIONS_SIZE } from '../config';
import { isArray } from 'lodash';

export class SkillIdRequestPathParamDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID('all')
    skillId: string;
}

export class GetSkillsQueryRequestDto extends BasePaginatedSortedRequest {
    @Transform(({ value }) => (!isArray(value) ? [value] : value))
    @IsOptional()
    @IsUUID('all', { each: true })
    @MinLength(1, { each: true })
    @ArrayUnique({ message: 'Provided skill ids are not unique!' })
    skillId?: string[];

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsIn(['name', 'description', 'created_at', 'updated_at'])
    sortBy?: string;

    @Transform(({ value }) => (!isArray(value) ? [value] : value))
    @IsOptional()
    @IsString({ each: true })
    @MinLength(1, { each: true })
    @ArrayUnique({ message: 'Provided skill names are not unique!' })
    name?: string[];
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
    @Transform(({ value }) => (!isArray(value) ? [value] : value))
    @IsUUID('all', { each: true })
    @MinLength(1, { each: true })
    @ArrayUnique({ message: 'Provided skill ids are not unique!' })
    skillIds: string[];
}
