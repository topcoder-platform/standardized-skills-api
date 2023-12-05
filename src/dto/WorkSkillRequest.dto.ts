import { ArrayNotEmpty, IsArray, IsUUID, ArrayUnique } from 'class-validator';

export class JobIdRequestParamDto {
    @IsUUID('all')
    jobId: string;
}

export class ChallengeIdRequestParamDto {
    @IsUUID('all')
    challengeId: string;
}

export class WorkSkillsRequestBodyDto {
    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsUUID('all', { each: true })
    skillIds: string[];
}
