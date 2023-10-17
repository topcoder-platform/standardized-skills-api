import { Exclude, Type, TypeHelpOptions } from 'class-transformer';
import { IsArray, ArrayNotEmpty, IsNumber, IsEnum, ValidateNested, IsString, IsUUID } from 'class-validator';

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

class ChallengeWinnerDto {
    @IsNumber()
    userId: string;

    // exclude data we're not interested in
    @Exclude()
    handle: string;
    @Exclude()
    placement: string;
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
    status: string;

    // exclude data we're not interested in
    @Exclude()
    description: string;
    @Exclude()
    id: string;
    @Exclude()
    tags: string[];
}

export type SkillEventPayloadType = ChallengeUpdateSkillEventPayload;

const topicToPayloadMap = {
    [SkillEventTopic.challengeUpdate]: ChallengeUpdateSkillEventPayload,
};

export class SkilLEventRequestBodyDto {
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
