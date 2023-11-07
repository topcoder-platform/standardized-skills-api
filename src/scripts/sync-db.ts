import db from '../db';

const syncDbModels = async () => {
    await db.models.Event.sync({ force: false });
    await db.models.SkillCategory.sync({ force: false });
    await db.models.Skill.sync({ force: false });
    await db.models.SkillEventType.sync({ force: false });
    await db.models.SourceType.sync({ force: false });
    await db.models.SkillEvent.sync({ force: false });
    await db.models.WorkSkill.sync({ force: false });
    await db.models.UserSkillType.sync({ force: false });
    await db.models.UserSkillLevel.sync({ force: false });
    await db.models.UserSkill.sync({ force: false });
};

syncDbModels().then(() => {
    console.log('DB Tables synchronized successfully!');
});
