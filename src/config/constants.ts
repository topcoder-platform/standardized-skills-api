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

export enum WORK_TYPE {
    challenge = 'challenge',
    gig = 'gig',
}
