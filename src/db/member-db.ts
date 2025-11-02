import { Sequelize } from 'sequelize';

import { envConfig } from '../config';

let memberSequelize: Sequelize | null = null;

export function getMemberSequelize(): Sequelize {
    if (!envConfig.MEMBER_DB.URL) {
        throw new Error('MEMBER_DB_URL is not configured');
    }

    if (!memberSequelize) {
        memberSequelize = new Sequelize(envConfig.MEMBER_DB.URL, {
            logging: false,
            define: {
                underscored: true,
            },
            dialectOptions: {
                prependSearchPath: true,
            },
        });
    }

    return memberSequelize;
}
