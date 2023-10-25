import { Exclude, Type, TypeHelpOptions } from 'class-transformer';
import {
    IsArray,
    ArrayNotEmpty,
    IsNumber,
    IsIn,
    IsEnum,
    ValidateNested,
    IsString,
    IsUUID,
    Allow,
} from 'class-validator';

import { SkillEventTopic } from '../config';

export class UserSkillDto {
    @IsUUID('all')
    id: string;
}

export class ChallengeWinnerDto {
    @IsNumber()
    userId: string;

    @IsNumber()
    placement: number;
}

export class ChallengeUpdateSkillEventPayload {
    @IsArray()
    @ValidateNested()
    @Type(() => UserSkillDto)
    skills: UserSkillDto[];

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
    @Type(() => ChallengeWinnerDto)
    winners: ChallengeWinnerDto[];

    @IsString()
    @IsIn(['Completed'])
    status: string;

    @IsUUID('all')
    id: string;
}

export type SkillEventPayloadType = ChallengeUpdateSkillEventPayload;

const topicToPayloadMap = {
    [SkillEventTopic.challengeUpdate]: ChallengeUpdateSkillEventPayload,
};

export class SkillEventRequestBodyDto {
    @IsEnum(SkillEventTopic)
    topic: SkillEventTopic;

    @ValidateNested()
    @Type((d?: TypeHelpOptions) => topicToPayloadMap[d?.object.topic as SkillEventTopic])
    payload: SkillEventPayloadType;
}
