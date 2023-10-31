import { Type, TypeHelpOptions } from 'class-transformer';
import { IsEnum, ValidateNested } from 'class-validator';

import { SkillEventTopic } from '../../config';
import { SkillEventPayloadType, topicToPayloadMap } from './SkillEventPayloadTypes';

export class SkillEventRequestBodyDto {
    @IsEnum(SkillEventTopic)
    topic: SkillEventTopic;

    @ValidateNested()
    @Type((d?: TypeHelpOptions) => topicToPayloadMap[d?.object.topic as SkillEventTopic])
    payload: SkillEventPayloadType;
}
