import { Sequelize } from 'sequelize';
import { envConfig } from '../config';

let resourcesSequelize: Sequelize | null = null;

export function getResourcesSequelize(): Sequelize {
    if (!envConfig.RESOURCES_DB.URL) {
        throw new Error('RESOURCES_DB_URL is not configured');
    }

    if (!resourcesSequelize) {
        resourcesSequelize = new Sequelize(envConfig.RESOURCES_DB.URL, {
            logging: false,
            define: {
                underscored: true,
            },
            dialectOptions: {
                prependSearchPath: true,
            },
        });
    }

    return resourcesSequelize;
}
