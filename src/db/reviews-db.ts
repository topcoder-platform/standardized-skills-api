import { Sequelize } from 'sequelize';
import { envConfig } from '../config';

let reviewsSequelize: Sequelize | null = null;

export function getReviewsSequelize(): Sequelize {
    if (!envConfig.REVIEWS_DB.URL || !envConfig.REVIEWS_DB.SCHEMA) {
        throw new Error('REVIEWS_DB_URL is not configured');
    }

    if (!reviewsSequelize) {
        reviewsSequelize = new Sequelize(envConfig.REVIEWS_DB.URL, {
            logging: false,
            schema: envConfig.REVIEWS_DB.SCHEMA,
            define: {
                underscored: true,
            },
            dialectOptions: {
                prependSearchPath: true,
            },
        });
    }

    return reviewsSequelize;
}
