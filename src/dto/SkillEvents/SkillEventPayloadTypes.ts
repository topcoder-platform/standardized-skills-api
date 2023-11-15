import { SkillEventTopic } from '../../config';
import { SkillEventPayloadChallengeUpdate } from './SkillEventPayloadChallengeUpdate.dto';
import { SkillEventPayloadTCAUpdate } from './SkillEventPayloadTCAUpdate.dto';

export type SkillEventPayloadType = SkillEventPayloadChallengeUpdate | SkillEventPayloadTCAUpdate;

export const topicToPayloadMap = {
    [SkillEventTopic.challengeUpdate]: SkillEventPayloadChallengeUpdate,
    [SkillEventTopic.tcaUpdate]: SkillEventPayloadTCAUpdate,
};
