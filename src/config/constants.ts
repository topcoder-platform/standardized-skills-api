export enum UserRoles {
    Admin = 'administrator',
    Copilot = 'copilot',
    Manager = 'Connect Manager',
    User = 'Topcoder User',
    SelfServiceCustomer = 'Self-Service Customer',
    Talent = 'Topcoder Talent',
}

export const MAX_SUGGESTIONS_SIZE = 1500;

export const DEFAULT_SUGGESTIONS_SIZE = 20;

export const DEFAULT_PER_PAGE = 20;

export const DEFAULT_PAGE = 1;

export const DEFAULT_SORT_ORDER = 'ASC';

export const SEQUELIZE_CLS_NAMESPACE = 'standardized-skills-api';

export const CHALLENGE_API_VERSION = '1.1.0';

export enum UserSkillLevels {
    selfDeclared = 'self-declared',
    verified = 'verified',
}

export enum UserSkillDisplayModes {
    principal = 'principal',
    additional = 'additional',
}

export const MAX_PRINICIPAL_USER_SKILLS_COUNT = 10;

export enum WorkType {
    challenge = 'challenge',
    marathonMatch = 'marathon match',
    gig = 'gig',
    certification = 'certification',
    course = 'course',
    engagement = 'engagement'
}

export enum SkillEventTopic {
    challengeUpdate = 'challenge.notification.update',
    tcaUpdate = 'tca.notification.update',
    engagementMemberAssigned = 'engagement.member.assigned',
}

export enum SkillEventChallengeUpdateStatus {
    completed = 'COMPLETED',
}

export const CHALLENGE_REVIEWER_ROLES = {
    reviewer: '318b9c07-079a-42d9-a81f-b96be1dc1099',
    iterativeReviewer: 'f6df7212-b9d6-4193-bfb1-b383586fce63',
    checkpointReviewer: '3970272b-85b4-48d8-8439-672b4f6031bd',
};

export const CHALLENGE_COPILOT_ROLE = 'cfe12b3f-2a24-4639-9d8b-ec86726f76bd';

export enum SkillEventTypes {
    challengeWin = 'challenge_win',
    challenge2ndPlace = 'challenge_2nd_place',
    challenge3rdPlace = 'challenge_3rd_place',
    challengeFinisher = 'challenge_finisher',
    challengeReview = 'challenge_review',
    challengeCopilot = 'challenge_copilot',
    gigCompletion = 'gig_completion',
    tcaCertCompleted = 'tca_cert_completion',
    tcaCourseCompleted = 'tca_course_completion',
    engagementAssignment = 'engagement_assignment'
}

export const CHALLENGE_TYPE_BY_ID = new Map([
  ["ecd58c69-238f-43a4-a4bb-d172719b9f31", "Task"],
  ["929bc408-9cf2-4b3e-ba71-adfbf693046c", "Marathon Match"],
  ["927abff4-7af9-4145-8ba1-577c16e64e2e", "Challenge"],
  ["dc876fa4-ef2d-4eee-b701-b555fcc6544c", "First2Finish"],
  ["e76afccb-b6c6-488d-950e-76bddfea5df9", "Topgear Task"],
]);

export const CONTEST_SUBMISSION_TYPE = "CONTEST_SUBMISSION";
