import db from '../db';

const syncDbModels = async () => {
    await db.sequelize.sync({ force: false });
};

syncDbModels().then(() => {
    console.log('DB Tables synchronized successfully!');
    process.exit(1);
});
