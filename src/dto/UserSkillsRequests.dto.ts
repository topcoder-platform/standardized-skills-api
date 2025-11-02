import { Type } from 'class-transformer';
import {
    IsArray,
    IsIn,
    IsNotEmpty,
    IsNumberString,
    IsOptional,
    IsString,
    IsUUID,
    ValidateNested,
} from 'class-validator';

import { BasePaginatedSortedRequest } from './BaseRequest.dto';

export class GetUserSkillsQueryDto extends BasePaginatedSortedRequest {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsIn(['name', 'category', 'level'])
    override sortBy?: string = undefined;
}

class UserSkillSkillRequestDto {
    @IsUUID('all')
    id: string;

    @IsOptional()
    @IsUUID('all')
    levelId: string;

    @IsUUID('all')
    displayModeId: string;
}

export class UserIdParamDto {
    @IsNumberString()
    userId: string;
}

export class UpdateUserSkillsRequestBodyDto {
    @IsArray()
    @ValidateNested()
    @Type(() => UserSkillSkillRequestDto)
    skills: UserSkillSkillRequestDto[];
}

export class GetUserSkillsDisplayModesQueryDto extends BasePaginatedSortedRequest {
    @IsOptional()
    @IsIn(['name'])
    override sortBy?: string = undefined;
}

export class GetUserSkillsDisplayModeParamDto {
    @IsString()
    name: string;
}
