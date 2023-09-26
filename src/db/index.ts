import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';
import { envConfig } from '../config';

const sequelize = new Sequelize(envConfig.DB_URL || '', {
    logging: false,
});

// Put models here when needed...
const models = initModels(sequelize);

export default {
    models,
    sequelize,
    Sequelize,
};
