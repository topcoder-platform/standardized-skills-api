import { Type, TypeHelpOptions } from 'class-transformer';
import { IsArray, ArrayNotEmpty, IsNumber, IsEnum, ValidateNested, IsUUID } from 'class-validator';

import { SkillEventChallengeUpdateStatus, SkillEventTopic } from '../config';
import { SkillEventPayloadEngagementMemberAssigned, SkillEventPayloadTCAUpdate } from './SkillEvents';

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

    @IsEnum(SkillEventChallengeUpdateStatus)
    status: string;

    @IsUUID('all')
    id: string;
}

export type SkillEventPayloadType =
    | ChallengeUpdateSkillEventPayload
    | SkillEventPayloadTCAUpdate
    | SkillEventPayloadEngagementMemberAssigned;

const topicToPayloadMap = {
    [SkillEventTopic.challengeUpdate]: ChallengeUpdateSkillEventPayload,
    [SkillEventTopic.tcaUpdate]: SkillEventPayloadTCAUpdate,
    [SkillEventTopic.engagementMemberAssigned]: SkillEventPayloadEngagementMemberAssigned,
};

export class SkillEventRequestBodyDto {
    @IsEnum(SkillEventTopic)
    topic: SkillEventTopic;

    @ValidateNested()
    @Type((d?: TypeHelpOptions) => topicToPayloadMap[d?.object.topic as SkillEventTopic])
    payload: SkillEventPayloadType;
}
