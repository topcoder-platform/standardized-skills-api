import { IsArray, IsNumberString, IsOptional, IsUUID } from 'class-validator';
import { BasePaginatedSortedRequest } from './BaseRequest.dto';

export class GetUserSkillsQueryDto extends BasePaginatedSortedRequest {
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
    skills: UserSkillSkillRequestDto[];
}

