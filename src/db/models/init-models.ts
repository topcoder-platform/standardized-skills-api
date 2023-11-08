import type { Sequelize } from 'sequelize';
import { event as Event } from './event';
import type { eventAttributes, eventCreationAttributes } from './event';
import { skill as Skill } from './skill';
import type { skillAttributes, skillCreationAttributes } from './skill';
import { skill_category as SkillCategory } from './skill_category';
import type { skillCategoryAttributes, skillCategoryCreationAttributes } from './skill_category';
import { skill_event as SkillEvent } from './skill_event';
import type { skillEventAttributes, skillEventCreationAttributes } from './skill_event';
import { skill_event_type as SkillEventType } from './skill_event_type';
import type { skillEventTypeAttributes, skillEventTypeCreationAttributes } from './skill_event_type';
import { source_type as SourceType } from './source_type';
import type { sourceTypeAttributes, sourceTypeCreationAttributes } from './source_type';
import { user_skill as UserSkill } from './user_skill';
import type { userSkillAttributes, userSkillCreationAttributes } from './user_skill';
import { user_skill_level as UserSkillLevel } from './user_skill_level';
import type { userSkillLevelAttributes, userSkillLevelCreationAttributes } from './user_skill_level';
import { user_skill_display_mode as UserSkillDisplayMode } from './user_skill_display_mode';
import type { userSkillDisplayModeAttributes, userSkillDisplayModeCreationAttributes } from './user_skill_display_mode';
import { work_skill as WorkSkill } from './work_skill';
import type { workSkillAttributes, workSkillCreationAttributes } from './work_skill';

export type {
    eventAttributes,
    eventCreationAttributes,
    skillAttributes,
    skillCreationAttributes,
    skillCategoryAttributes,
    skillCategoryCreationAttributes,
    skillEventAttributes,
    skillEventCreationAttributes,
    skillEventTypeAttributes,
    skillEventTypeCreationAttributes,
    sourceTypeAttributes,
    sourceTypeCreationAttributes,
    userSkillAttributes,
    userSkillCreationAttributes,
    userSkillLevelAttributes,
    userSkillLevelCreationAttributes,
    userSkillDisplayModeAttributes,
    userSkillDisplayModeCreationAttributes,
    workSkillAttributes,
    workSkillCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
    const event = Event.initModel(sequelize);
    const skill = Skill.initModel(sequelize);
    const skillCategory = SkillCategory.initModel(sequelize);
    const skillEvent = SkillEvent.initModel(sequelize);
    const skillEventType = SkillEventType.initModel(sequelize);
    const sourceType = SourceType.initModel(sequelize);
    const userSkill = UserSkill.initModel(sequelize);
    const userSkillLevel = UserSkillLevel.initModel(sequelize);
    const userSkillDisplayMode = UserSkillDisplayMode.initModel(sequelize);
    const workSkill = WorkSkill.initModel(sequelize);

    skillEvent.belongsTo(event, { as: 'event', foreignKey: 'event_id' });
    event.hasMany(skillEvent, { as: 'skill_events', foreignKey: 'event_id' });
    skillEvent.belongsTo(skill, { as: 'skill', foreignKey: 'skill_id' });
    skill.hasMany(skillEvent, { as: 'skill_events', foreignKey: 'skill_id' });
    userSkill.belongsTo(skill, { as: 'skill', foreignKey: 'skill_id' });
    skill.hasMany(userSkill, { as: 'user_skills', foreignKey: 'skill_id' });
    skill.belongsTo(skillCategory, { as: 'category', foreignKey: 'category_id' });
    skillCategory.hasMany(skill, { as: 'skills', foreignKey: 'category_id' });
    skillEvent.belongsTo(skillEventType, { as: 'skill_event_type', foreignKey: 'skill_event_type_id' });
    skillEventType.hasMany(skillEvent, { as: 'skill_events', foreignKey: 'skill_event_type_id' });
    skillEvent.belongsTo(sourceType, { as: 'source_type', foreignKey: 'source_type_id' });
    sourceType.hasMany(skillEvent, { as: 'skill_events', foreignKey: 'source_type_id' });
    userSkill.belongsTo(userSkillLevel, { as: 'user_skill_level', foreignKey: 'user_skill_level_id' });
    userSkillLevel.hasMany(userSkill, { as: 'user_skills', foreignKey: 'user_skill_level_id' });
    userSkill.belongsTo(userSkillDisplayMode, { as: 'user_skill_display_mode', foreignKey: 'user_skill_display_mode_id' });
    userSkillDisplayMode.hasMany(userSkill, { as: 'user_skills', foreignKey: 'user_skill_display_mode_id' });

    return {
        Event: event,
        Skill: skill,
        SkillCategory: skillCategory,
        SkillEvent: skillEvent,
        SkillEventType: skillEventType,
        SourceType: sourceType,
        UserSkill: userSkill,
        UserSkillLevel: userSkillLevel,
        UserSkillDisplayMode: userSkillDisplayMode,
        WorkSkill: workSkill,
    };
}
