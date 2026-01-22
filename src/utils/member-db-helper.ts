import { QueryTypes } from 'sequelize';

import { envConfig } from '../config';
import { getMemberSequelize } from '../db/member-db';
import { InternalServerError, NotFoundError } from './errors';
import { LoggerClient } from './LoggerClient';
import { buildQualifiedTable, disableSearchPath, formatError, validateIdentifier } from './sequelize-query.helpers';

const logger = new LoggerClient('MemberDbHelper');

function assertMemberDbConfig() {
    if (!envConfig.MEMBER_DB.URL) {
        throw new InternalServerError('MEMBER_DB_URL must be configured to validate member ids');
    }
}

export async function memberExists(memberId: string | number): Promise<boolean> {
    assertMemberDbConfig();

    try {
        const sequelize = getMemberSequelize();
        const idColumn = envConfig.MEMBER_DB.ID_COLUMN;
        const qualifiedTable = buildQualifiedTable(
            envConfig.MEMBER_DB.SCHEMA,
            envConfig.MEMBER_DB.TABLE,
        );

        validateIdentifier(idColumn, 'column');

        logger.info(`Validating member ${memberId} using ${qualifiedTable}.${idColumn}`);

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
