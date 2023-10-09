import dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.TC_SKILLS_DATABASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SECRET: process.env.AUTH_SECRET || 'mysecret',
    TOKEN_CACHE_TIME: process.env.TOKEN_CACHE_TIME || 60,
    AUTH0_PROXY_SERVER_URL: process.env.AUTH0_PROXY_SERVER_URL || 'https://auth0proxy.topcoder-dev.com/token',
    AUTH0_URL: process.env.AUTH0_URL || 'https://topcoder-dev.auth0.com/oauth/token',
    VALID_ISSUERS:
        process.env.VALID_ISSUERS ||
        '["https://api.topcoder-dev.com", "https://api.topcoder.com", "https://topcoder-dev.auth0.com/", "https://auth.topcoder-dev.com/"]',
    M2M_AUDIT_HANDLE: process.env.M2M_AUDIT_HANDLE || 'tcwebservice',
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
    API_BASE: '/v5/standardized-skills',
};
