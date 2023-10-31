import { SkillEventTopic } from '../../config';
import { SkillEventPayloadChallengeUpdate } from './SkillEventPayloadChallengeUpdate.dto';

export type SkillEventPayloadType = SkillEventPayloadChallengeUpdate;

export const topicToPayloadMap = {
    [SkillEventTopic.challengeUpdate]: SkillEventPayloadChallengeUpdate,
};
