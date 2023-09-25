import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';

const sequelize = new Sequelize(process.env.TC_SKILLS_DATABASE_URL || '', {
    logging: false,
});

// Put models here when needed...
const db: any = initModels(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
