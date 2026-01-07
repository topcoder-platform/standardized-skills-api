import { QueryTypes } from 'sequelize';

import { envConfig } from '../config';
import { getMemberSequelize } from '../db/member-db';
import { InternalServerError, NotFoundError } from './errors';
import { LoggerClient } from './LoggerClient';

const logger = new LoggerClient('MemberDbHelper');
const disableSearchPath = { supportsSearchPath: false } as any;

function formatError(error: unknown): string {
    if (error instanceof Error) {
        return error.stack ?? `${error.name}: ${error.message}`;
    }

    try {
        return JSON.stringify(error);
    } catch {
        return String(error);
    }
}

function assertMemberDbConfig() {
    if (!envConfig.MEMBER_DB.URL) {
        throw new InternalServerError('MEMBER_DB_URL must be configured to validate member ids');
    }
}

function buildQualifiedTable(): string {
    const schema = envConfig.MEMBER_DB.SCHEMA;
    const table = envConfig.MEMBER_DB.TABLE;

    validateIdentifier(schema, 'schema');
    validateIdentifier(table, 'table');

    return `"${schema}"."${table}"`;
}

function validateIdentifier(value: string, kind: 'schema' | 'table' | 'column') {
    if (!/^[A-Za-z0-9_]+$/.test(value)) {
        throw new InternalServerError(`Invalid ${kind} name for member database access`);
    }
}

export async function memberExists(memberId: string | number): Promise<boolean> {
    assertMemberDbConfig();

    try {
        const sequelize = getMemberSequelize();
        const idColumn = envConfig.MEMBER_DB.ID_COLUMN;
        const qualifiedTable = buildQualifiedTable();

        validateIdentifier(idColumn, 'column');

        const record = await sequelize.query<{ [key: string]: unknown }>(
            `SELECT "${idColumn}" FROM ${qualifiedTable} WHERE "${idColumn}" = $1 LIMIT 1`,
            {
                bind: [memberId],
                type: QueryTypes.SELECT,
                plain: true,
                ...disableSearchPath,
            },
        );

        return Boolean(record);
    } catch (error) {
        logger.error(`Error verifying member ${memberId} via member database`);
        logger.error(formatError(error));
        throw new InternalServerError('Unable to validate member! Please retry.');
    }
}

export async function ensureMemberExists(memberId: string | number): Promise<void> {
    if (!(await memberExists(memberId))) {
        throw new NotFoundError(`Member ${memberId} does not exist!`);
    }
}
