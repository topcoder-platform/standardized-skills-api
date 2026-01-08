import db from '../db';

/**
 * Checks the database, and creates any new tables based on the db models we have
 * NOTE: order is important
 */
const syncDbModels = async () => {
    await db.models.Event.sync({ force: false });
    await db.models.SkillCategory.sync({ force: false });
    await db.models.Skill.sync({ force: false });
    await db.models.SkillEventType.sync({ force: false });
    await db.models.SourceType.sync({ force: false });
    await db.models.SkillEvent.sync({ force: false });
    await db.models.WorkSkill.sync({ force: false });
    await db.models.UserSkillDisplayMode.sync({ force: false });
    await db.models.UserSkillLevel.sync({ force: false });
    try {
        await db.models.UserSkill.sync({ force: false });
    } catch (error) {
        console.error('Failed to sync UserSkill model', error);
        throw error;
    }
};

syncDbModels().then(() => {
    console.log('DB Tables synchronized successfully!');
});
