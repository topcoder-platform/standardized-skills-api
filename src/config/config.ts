import dotenv from 'dotenv';
dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

export const envConfig = {
    PORT: process.env.PORT,
    DB_URL: process.env.TC_SKILLS_DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET || 'mysecret',
    VALID_ISSUERS: process.env.VALID_ISSUERS || '["https://api.topcoder-dev.com", "https://api.topcoder.com", "https://topcoder-dev.auth0.com/", "https://auth.topcoder-dev.com/"]',
    M2M_AUDIT_HANDLE: process.env.M2M_AUDIT_HANDLE,
    SCOPES: {
        // TODO: check on do we need M2M access? If not, remove these scopes and the M2M_AUDIT_HANDLE,
        // otherwise, create new app in Auth0 and use its client id and secret. Also, define the scopes in Auth0.
        READ: process.env.SCOPE_EMSI_SKILLS_READ || 'read:tc-skills',
        CREATE: process.env.SCOPE_EMSI_SKILLS_CREATE || 'create:ts-skills',
        UPDATE: process.env.SCOPE_EMSI_SKILLS_UPDATE || 'update:ts-skills',
        DELETE: process.env.SCOPE_EMSI_SKILLS_DELETE || 'delete:ts-skills',
        ALL: process.env.SCOPE_EMSI_SKILLS_ALL || 'all:ts-skills',
        SETUP_ELASTICSEARCH: process.env.SCOPE_SETUP_ELASTICSEARCH || 'setup:elasticsearch'
    },
};
