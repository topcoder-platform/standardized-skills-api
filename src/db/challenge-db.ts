import { Sequelize } from 'sequelize';

import { envConfig } from '../config';

let challengeSequelize: Sequelize | null = null;

export function getChallengeSequelize(): Sequelize {
    if (!envConfig.CHALLENGE_DB.URL) {
        throw new Error('CHALLENGE_DB_URL is not configured');
    }

    if (!challengeSequelize) {
        challengeSequelize = new Sequelize(envConfig.CHALLENGE_DB.URL, {
            logging: false,
            define: {
                underscored: true,
            },
            dialectOptions: {
                prependSearchPath: true,
            },
        });
    }

    return challengeSequelize;
}
