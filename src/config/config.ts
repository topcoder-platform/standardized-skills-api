import dotenv from 'dotenv';
dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

export const envConfig = {
    PORT: process.env.PORT,
    DB_URL: process.env.TC_SKILLS_DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET || 'mysecret',
    VALID_ISSUERS: process.env.VALID_ISSUERS || '["https://api.topcoder-dev.com", "https://api.topcoder.com", "https://topcoder-dev.auth0.com/", "https://auth.topcoder-dev.com/"]',
    M2M_AUDIT_HANDLE: process.env.M2M_AUDIT_HANDLE,
    SCOPES: {
        READ: process.env.SCOPE_EMSI_SKILLS_READ || 'read:emsi-skills',
        CREATE: process.env.SCOPE_EMSI_SKILLS_CREATE || 'create:emsi-skills',
        UPDATE: process.env.SCOPE_EMSI_SKILLS_UPDATE || 'update:emsi-skills',
        DELETE: process.env.SCOPE_EMSI_SKILLS_DELETE || 'delete:emsi-skills',
        ALL: process.env.SCOPE_EMSI_SKILLS_ALL || 'all:emsi-skills',
        SETUP_ELASTICSEARCH: process.env.SCOPE_SETUP_ELASTICSEARCH || 'setup:elasticsearch'
    },
};
