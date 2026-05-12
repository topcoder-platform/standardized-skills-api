import { envConfig } from '../config';
import { getMemberPrisma } from '../db/member-db';
import { InternalServerError, NotFoundError } from './errors';
import { LoggerClient } from './LoggerClient';
import { buildQualifiedTable, formatError, validateIdentifier } from './db-query.helpers';

const logger = new LoggerClient('MemberDbHelper');

function assertMemberDbConfig() {
    if (!envConfig.MEMBER_DB.URL) {
        throw new InternalServerError('MEMBER_DB_URL must be configured to validate member ids');
    }
}

export async function memberExists(memberId: string | number): Promise<boolean> {
    assertMemberDbConfig();

    try {
        const memberDb = getMemberPrisma();
        const idColumn = envConfig.MEMBER_DB.ID_COLUMN;
        const qualifiedTable = buildQualifiedTable(
            envConfig.MEMBER_DB.SCHEMA,
            envConfig.MEMBER_DB.TABLE,
        );

        validateIdentifier(idColumn, 'column');

        logger.info(`Validating member ${memberId} using ${qualifiedTable}.${idColumn}`);

        const result = await memberDb.$queryRawUnsafe<{ [key: string]: unknown }[]>(
            `SELECT "${idColumn}" FROM ${qualifiedTable} WHERE "${idColumn}" = $1::bigint LIMIT 1`,
            memberId,
        );

        return Boolean(result[0]);
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
