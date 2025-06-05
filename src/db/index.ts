import { Sequelize } from 'sequelize';
import { createNamespace } from 'cls-hooked';
import { initModels } from './models/init-models';
import { SEQUELIZE_CLS_NAMESPACE, envConfig } from '../config';

const namespace = createNamespace(SEQUELIZE_CLS_NAMESPACE);
Sequelize.useCLS(namespace);

const sequelize = new Sequelize(envConfig.DB_URL || '', {
    logging: false,
    define: {
        // instruct sequelize to use snake case for  "created_at" and "updated_at",
        // instead of camel case "createdAt" and "updatedAt"
        underscored: true,
    },
    dialect: 'postgres',
    dialectOptions: {
      prependSearchPath: true
    },
    schema: process.env.DB_SCHEMA,
    searchPath: process.env.DB_SCHEMA,
});

// Put models here when needed...
const models = initModels(sequelize);

export default {
    models,
    sequelize,
    Sequelize,
};

export * from './models';
