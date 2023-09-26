import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';
import { envConfig } from '../config';

const sequelize = new Sequelize(envConfig.DB_URL || '', {
    logging: false,
});

// Put models here when needed...
const db: any = initModels(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
