import dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.TC_SKILLS_DATABASE_URL,
    AUTH0_URL: process.env.AUTH0_URL,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_PROXY_SERVER_URL: process.env.AUTH0_PROXY_SERVER_URL,
    AUTH_SECRET: process.env.AUTH_SECRET || 'mysecret',
    VALID_ISSUERS:
        process.env.VALID_ISSUERS ||
        '["https://api.topcoder-dev.com", "https://api.topcoder.com", "https://topcoder-dev.auth0.com/", "https://auth.topcoder-dev.com/"]',
    M2M_AUDIT_HANDLE: process.env.M2M_AUDIT_HANDLE || 'tcwebservice',
    TC_API: process.env.TC_API || 'https://api.topcoder-dev.com/v5',
    SCOPES: {
        READ: process.env.SCOPE_STANDARDIZED_SKILLS_READ || 'read:standardized-skills',
        CREATE: process.env.SCOPE_STANDARDIZED_SKILLS_CREATE || 'create:standardized-skills',
        UPDATE: process.env.SCOPE_STANDARDIZED_SKILLS_UPDATE || 'update:standardized-skills',
        DELETE: process.env.SCOPE_STANDARDIZED_SKILLS_DELETE || 'delete:standardized-skills',
        ALL: process.env.SCOPE_STANDARDIZED_SKILLS_ALL || 'all:standardized-skills',
    },
    SKILLS_ES: {
        HOST: process.env.SKILL_ES_HOST || 'http://localhost:9200',
        INDEX: process.env.SKILL_ES_INDEX || 'standardized_skills_suggester',
        DOCUMENT_TYPE: process.env.SKILL_ES_DOCUMENT_TYPE || '_doc',
        REFRESH: process.env.SKILL_ES_REFRESH || false,
    },
    CHALLENGES_ES: {
        HOST: process.env.CHALLENGES_ES_HOST || 'http://localhost:9201',
        CHALLENGES_INDEX: process.env.CHALLENGES_ES_INDEX || 'challenge',
        CHALLENGES_DOCUMENT_TYPE: process.env.CHALLENGES_ES_DOCUMENT_TYPE || '_doc',
        REFRESH: process.env.CHALLENGES_ES_REFRESH || false,
    },
    JOBS_ES: {
        HOST: process.env.JOBS_ES_HOST || 'http://localhost:9200',
        JOB_INDEX: process.env.JOBS_ES_INDEX || 'job',
        JOB_DOCUMENT_TYPE: process.env.JOBS_ES_DOCUMENT_TYPE || '_doc',
        REFRESH: process.env.JOBS_ES_REFRESH || false,
    },
    MEMBERS_ES: {
        HOST: process.env.MEMBERS_ES_HOST || 'http://localhost:9201',
        MEMBERS_INDEX: process.env.MEMBERS_ES_INDEX || 'members-2020-01',
        MEMBERS_DOCUMENT_TYPE: process.env.MEMBERS_ES_DOCUMENT_TYPE || 'profiles',
        REFRESH: process.env.MEMBERS_ES_REFRESH || false,
    },
    API_BASE: '/v5/standardized-skills',

    HASHING_SECRET: process.env.HASHING_SECRET || 'thisissecret',
};
