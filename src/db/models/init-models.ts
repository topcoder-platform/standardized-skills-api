import type { Sequelize } from 'sequelize';
import { event as _event } from './event';
import type { eventAttributes, eventCreationAttributes } from './event';
import { skill as _skill } from './skill';
import type { skillAttributes, skillCreationAttributes } from './skill';
import { skill_category as _skill_category } from './skill_category';
import type { skill_categoryAttributes, skill_categoryCreationAttributes } from './skill_category';
import { skill_event as _skill_event } from './skill_event';
import type { skill_eventAttributes, skill_eventCreationAttributes } from './skill_event';
import { skill_event_type as _skill_event_type } from './skill_event_type';
import type { skill_event_typeAttributes, skill_event_typeCreationAttributes } from './skill_event_type';
import { source_type as _source_type } from './source_type';
import type { source_typeAttributes, source_typeCreationAttributes } from './source_type';
import { user_skill as _user_skill } from './user_skill';
import type { user_skillAttributes, user_skillCreationAttributes } from './user_skill';
import { user_skill_level as _user_skill_level } from './user_skill_level';
import type { user_skill_levelAttributes, user_skill_levelCreationAttributes } from './user_skill_level';

export {
    _event as event,
    _skill as skill,
    _skill_category as skill_category,
    _skill_event as skill_event,
    _skill_event_type as skill_event_type,
    _source_type as source_type,
    _user_skill as user_skill,
    _user_skill_level as user_skill_level,
};

export type {
    eventAttributes,
    eventCreationAttributes,
    skillAttributes,
    skillCreationAttributes,
    skill_categoryAttributes,
    skill_categoryCreationAttributes,
    skill_eventAttributes,
    skill_eventCreationAttributes,
    skill_event_typeAttributes,
    skill_event_typeCreationAttributes,
    source_typeAttributes,
    source_typeCreationAttributes,
    user_skillAttributes,
    user_skillCreationAttributes,
    user_skill_levelAttributes,
    user_skill_levelCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
    const event = _event.initModel(sequelize);
    const skill = _skill.initModel(sequelize);
    const skill_category = _skill_category.initModel(sequelize);
    const skill_event = _skill_event.initModel(sequelize);
    const skill_event_type = _skill_event_type.initModel(sequelize);
    const source_type = _source_type.initModel(sequelize);
    const user_skill = _user_skill.initModel(sequelize);
    const user_skill_level = _user_skill_level.initModel(sequelize);

    skill_event.belongsTo(event, { as: 'event', foreignKey: 'event_id' });
    event.hasMany(skill_event, { as: 'skill_events', foreignKey: 'event_id' });
    skill_event.belongsTo(skill, { as: 'skill', foreignKey: 'skill_id' });
    skill.hasMany(skill_event, { as: 'skill_events', foreignKey: 'skill_id' });
    user_skill.belongsTo(skill, { as: 'skill', foreignKey: 'skill_id' });
    skill.hasMany(user_skill, { as: 'user_skills', foreignKey: 'skill_id' });
    skill.belongsTo(skill_category, { as: 'category', foreignKey: 'category_id' });
    skill_category.hasMany(skill, { as: 'skills', foreignKey: 'category_id' });
    skill_event.belongsTo(skill_event_type, { as: 'skill_event_type', foreignKey: 'skill_event_type_id' });
    skill_event_type.hasMany(skill_event, { as: 'skill_events', foreignKey: 'skill_event_type_id' });
    skill_event.belongsTo(source_type, { as: 'source_type', foreignKey: 'source_type_id' });
    source_type.hasMany(skill_event, { as: 'skill_events', foreignKey: 'source_type_id' });
    user_skill.belongsTo(user_skill_level, { as: 'user_skill_level', foreignKey: 'user_skill_level_id' });
    user_skill_level.hasMany(user_skill, { as: 'user_skills', foreignKey: 'user_skill_level_id' });

    return {
        Event: event,
        Skill: skill,
        SkillCategory: skill_category,
        SkillEvent: skill_event,
        SkillEventType: skill_event_type,
        SourceType: source_type,
        UserSkill: user_skill,
        UserSkillLevel: user_skill_level,
    };
}
