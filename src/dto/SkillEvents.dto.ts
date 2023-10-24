import { Exclude, Type, TypeHelpOptions } from 'class-transformer';
import { IsArray, ArrayNotEmpty, IsNumber, IsIn, IsEnum, ValidateNested, IsString, IsUUID, Allow } from 'class-validator';

import { SkillEventTopic } from '../config';

export class UserSkillDto {
    @IsUUID('all')
    id: string;

    // exclude data we're not interested in
    @Exclude()
    name: string;
    @Exclude()
    category: any;
}

export class ChallengeWinnerDto {
    @IsNumber()
    userId: string;

    @IsNumber()
    placement: number;

    // exclude data we're not interested in
    @Exclude()
    handle: string;
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

    @IsString()
    id: string;

    // exclude data we're not interested in
    @Allow()
    description: string;
    @Allow()
    tags: string[];
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

    // exclude data we're not interested in
    @Exclude()
    originator: string;
    @Exclude()
    timestamp: string;
    @Exclude()
    'mime-type': string;
}
