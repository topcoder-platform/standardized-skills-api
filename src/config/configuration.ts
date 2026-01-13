import { envConfig } from './config';

type MaybeArray = string | string[] | undefined;

const parseJsonList = (value: MaybeArray): string[] => {
    if (!value) {
        return [];
    }

    if (Array.isArray(value)) {
        return value;
    }

    try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
            return parsed;
        }
        return [];
    } catch {
        return [];
    }
};

export const configuration = () => ({
    app: {
        port: Number(envConfig.PORT ?? 3000),
        basePath: envConfig.API_BASE ?? '',
        hashingSecret: envConfig.HASHING_SECRET,
    },
    database: {
        url: envConfig.DB_URL ?? '',
        schema: envConfig.DB_SCHEMA,
    },
    auth: {
        secret: envConfig.AUTH_SECRET,
        validIssuers: parseJsonList(envConfig.VALID_ISSUERS),
        m2mAuditHandle: envConfig.M2M_AUDIT_HANDLE,
        scopes: envConfig.SCOPES,
    },
    search: {
        skills: envConfig.SKILLS_ES,
        challenges: envConfig.CHALLENGES_ES,
        members: envConfig.MEMBERS_ES,
    },
    tcApi: envConfig.TC_API,
    legacyEnv: envConfig,
});

export type AppConfiguration = ReturnType<typeof configuration>;
