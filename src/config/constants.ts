export enum UserRoles {
    Admin = 'administrator',
    Copilot = 'copilot',
    Manager = 'Connect Manager',
    User = 'Topcoder User',
    SelfServiceCustomer = 'Self-Service Customer',
    Talent = 'Topcoder Talent',
}
export const ES_SKILL_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const MAX_SUGGESTIONS_SIZE = 1500;

export const DEFAULT_SUGGESTIONS_SIZE = 20;

export const DEFAULT_PER_PAGE = 20;

export const DEFAULT_PAGE = 1;

export const DEFAULT_SORT_ORDER = 'ASC';

export const SEQUELIZE_CLS_NAMESPACE = 'standardized-skills-api';

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
    gig = 'gig',
    certification = 'certification',
    course = 'course',
}

export enum SkillEventTopic {
    challengeUpdate = 'challenge.notification.update',
    tcaUpdate = 'tca.notification.update',
}

export enum SkillEventChallengeUpdateStatus {
    completed = 'Completed',
}

export const CHALLENGE_REVIEWER_ROLES = {
    reviewer: '318b9c07-079a-42d9-a81f-b96be1dc1099',
    iterativeReviewer: 'f6df7212-b9d6-4193-bfb1-b383586fce63',
    checkpointReviewer: '3970272b-85b4-48d8-8439-672b4f6031bd',
};

export enum SkillEventTypes {
    challengeWin = 'challenge_win',
    challenge2ndPlace = 'challenge_2nd_place',
    challenge3rdPlace = 'challenge_3rd_place',
    challengeFinisher = 'challenge_finisher',
    challengeReview = 'challenge_review',
    tcaCertCompleted = 'tca_cert_completion',
    tcaCourseCompleted = 'tca_course_completion',
}
