import { SkillEventTopic } from '../../config';
import { SkillEventPayloadChallengeUpdate } from './SkillEventPayloadChallengeUpdate.dto';
import { SkillEventPayloadEngagementMemberAssigned } from './SkillEventPayloadEngagementMemberAssigned.dto';
import { SkillEventPayloadTCAUpdate } from './SkillEventPayloadTCAUpdate.dto';

export type SkillEventPayloadType =
    | SkillEventPayloadChallengeUpdate
    | SkillEventPayloadTCAUpdate
    | SkillEventPayloadEngagementMemberAssigned;

export const topicToPayloadMap = {
    [SkillEventTopic.challengeUpdate]: SkillEventPayloadChallengeUpdate,
    [SkillEventTopic.tcaUpdate]: SkillEventPayloadTCAUpdate,
    [SkillEventTopic.engagementMemberAssigned]: SkillEventPayloadEngagementMemberAssigned,
};
