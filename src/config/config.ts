import dotenv from 'dotenv';
dotenv.config();

function resolveDbSchema(): string | undefined {
    const explicitSchema = process.env.TC_SKILLS_DATABASE_SCHEMA;
    if (explicitSchema) {
        return explicitSchema;
    }

    const dbUrl = process.env.TC_SKILLS_DATABASE_URL;
    if (!dbUrl) {
        return undefined;
    }

    try {
        const parsed = new URL(dbUrl);
        return parsed.searchParams.get('schema') ?? undefined;
    } catch {
        return undefined;
    }
}

export const envConfig = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.TC_SKILLS_DATABASE_URL,
    DB_SCHEMA: resolveDbSchema(),
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
    SKILLS_ES: process.env.SKILLS_ES,
    CHALLENGES_ES: process.env.CHALLENGES_ES,
    MEMBERS_ES: process.env.MEMBERS_ES,
    MEMBER_DB: {
        URL: process.env.MEMBER_DB_URL,
        SCHEMA: process.env.MEMBER_DB_SCHEMA || 'member',
        TABLE: process.env.MEMBER_DB_TABLE || 'member_profile',
        ID_COLUMN: process.env.MEMBER_DB_ID_COLUMN || 'user_id',
    },
    API_BASE: '/v5/standardized-skills',

    HASHING_SECRET: process.env.HASHING_SECRET || 'thisissecret',
};
