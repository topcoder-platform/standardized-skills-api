import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';
import { envConfig } from '../config';

const sequelize = new Sequelize(envConfig.DB_URL || '', {
    logging: false,
    define: {
        // instruct sequelize to use snake case for  "created_at" and "updated_at",
        // instead of camel case "createdAt" and "updatedAt"
        underscored: true,
    },
});

// Put models here when needed...
const models = initModels(sequelize);

export default {
    models,
    sequelize,
    Sequelize,
};

export * from './models';
