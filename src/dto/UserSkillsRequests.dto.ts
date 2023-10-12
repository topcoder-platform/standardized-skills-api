import { ArrayNotEmpty, IsArray, IsNumber, IsNumberString, IsOptional, IsUUID } from 'class-validator';
import { BasePaginatedSortedRequest } from './BaseRequest.dto';

export class GetUserSkillsRequestQueryDto extends BasePaginatedSortedRequest {
}


class UserSkillSkillRequestDto {
    @IsUUID('all')
    id: string;
    
    @IsOptional()
    @IsUUID('all')
    levelId: string;
}

export class UserIdParamDto {
    @IsNumberString()
    userId: string;
}

export class UpdateUserSkillsRequestBodyDto extends BasePaginatedSortedRequest {
    @IsArray()
    @ArrayNotEmpty()
    skills: UserSkillSkillRequestDto[];
}

export class RemoveUserSkillsRequestBodyDto extends BasePaginatedSortedRequest {
    @IsArray()
    @ArrayNotEmpty()
    @IsUUID('all', { each: true })
    skillIds: string[];
}
