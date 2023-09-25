import type { Sequelize } from "sequelize";
import { event as _event } from "./event";
import type { eventAttributes, eventCreationAttributes } from "./event";
import { legacy_skill_map as _legacy_skill_map } from "./legacy_skill_map";
import type { legacy_skill_mapAttributes, legacy_skill_mapCreationAttributes } from "./legacy_skill_map";
import { raw_emsi_skills as _raw_emsi_skills } from "./raw_emsi_skills";
import type { raw_emsi_skillsAttributes, raw_emsi_skillsCreationAttributes } from "./raw_emsi_skills";
import { skill as _skill } from "./skill";
import type { skillAttributes, skillCreationAttributes } from "./skill";
import { skill_category as _skill_category } from "./skill_category";
import type { skill_categoryAttributes, skill_categoryCreationAttributes } from "./skill_category";
import { skill_category_import as _skill_category_import } from "./skill_category_import";
import type { skill_category_importAttributes, skill_category_importCreationAttributes } from "./skill_category_import";
import { skill_event as _skill_event } from "./skill_event";
import type { skill_eventAttributes, skill_eventCreationAttributes } from "./skill_event";
import { skill_event_type as _skill_event_type } from "./skill_event_type";
import type { skill_event_typeAttributes, skill_event_typeCreationAttributes } from "./skill_event_type";
import { skill_replacement as _skill_replacement } from "./skill_replacement";
import type { skill_replacementAttributes, skill_replacementCreationAttributes } from "./skill_replacement";
import { skill_replacement_import as _skill_replacement_import } from "./skill_replacement_import";
import type { skill_replacement_importAttributes, skill_replacement_importCreationAttributes } from "./skill_replacement_import";
import { source_type as _source_type } from "./source_type";
import type { source_typeAttributes, source_typeCreationAttributes } from "./source_type";
import { user_skill as _user_skill } from "./user_skill";
import type { user_skillAttributes, user_skillCreationAttributes } from "./user_skill";
import { user_skill_level as _user_skill_level } from "./user_skill_level";
import type { user_skill_levelAttributes, user_skill_levelCreationAttributes } from "./user_skill_level";

export {
  _event as event,
  _legacy_skill_map as legacy_skill_map,
  _raw_emsi_skills as raw_emsi_skills,
  _skill as skill,
  _skill_category as skill_category,
  _skill_category_import as skill_category_import,
  _skill_event as skill_event,
  _skill_event_type as skill_event_type,
  _skill_replacement as skill_replacement,
  _skill_replacement_import as skill_replacement_import,
  _source_type as source_type,
  _user_skill as user_skill,
  _user_skill_level as user_skill_level,
};

export type {
  eventAttributes,
  eventCreationAttributes,
  legacy_skill_mapAttributes,
  legacy_skill_mapCreationAttributes,
  raw_emsi_skillsAttributes,
  raw_emsi_skillsCreationAttributes,
  skillAttributes,
  skillCreationAttributes,
  skill_categoryAttributes,
  skill_categoryCreationAttributes,
  skill_category_importAttributes,
  skill_category_importCreationAttributes,
  skill_eventAttributes,
  skill_eventCreationAttributes,
  skill_event_typeAttributes,
  skill_event_typeCreationAttributes,
  skill_replacementAttributes,
  skill_replacementCreationAttributes,
  skill_replacement_importAttributes,
  skill_replacement_importCreationAttributes,
  source_typeAttributes,
  source_typeCreationAttributes,
  user_skillAttributes,
  user_skillCreationAttributes,
  user_skill_levelAttributes,
  user_skill_levelCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const event = _event.initModel(sequelize);
  const legacy_skill_map = _legacy_skill_map.initModel(sequelize);
  const raw_emsi_skills = _raw_emsi_skills.initModel(sequelize);
  const skill = _skill.initModel(sequelize);
  const skill_category = _skill_category.initModel(sequelize);
  const skill_category_import = _skill_category_import.initModel(sequelize);
  const skill_event = _skill_event.initModel(sequelize);
  const skill_event_type = _skill_event_type.initModel(sequelize);
  const skill_replacement = _skill_replacement.initModel(sequelize);
  const skill_replacement_import = _skill_replacement_import.initModel(sequelize);
  const source_type = _source_type.initModel(sequelize);
  const user_skill = _user_skill.initModel(sequelize);
  const user_skill_level = _user_skill_level.initModel(sequelize);

  skill_event.belongsTo(event, { as: "event", foreignKey: "event_id"});
  event.hasMany(skill_event, { as: "skill_events", foreignKey: "event_id"});
  legacy_skill_map.belongsTo(skill, { as: "skill", foreignKey: "skill_id"});
  skill.hasMany(legacy_skill_map, { as: "legacy_skill_maps", foreignKey: "skill_id"});
  skill_event.belongsTo(skill, { as: "skill", foreignKey: "skill_id"});
  skill.hasMany(skill_event, { as: "skill_events", foreignKey: "skill_id"});
  user_skill.belongsTo(skill, { as: "skill", foreignKey: "skill_id"});
  skill.hasMany(user_skill, { as: "user_skills", foreignKey: "skill_id"});
  skill.belongsTo(skill_category, { as: "category", foreignKey: "category_id"});
  skill_category.hasMany(skill, { as: "skills", foreignKey: "category_id"});
  skill_event.belongsTo(skill_event_type, { as: "skill_event_type", foreignKey: "skill_event_type_id"});
  skill_event_type.hasMany(skill_event, { as: "skill_events", foreignKey: "skill_event_type_id"});
  skill_event.belongsTo(source_type, { as: "source_type", foreignKey: "source_type_id"});
  source_type.hasMany(skill_event, { as: "skill_events", foreignKey: "source_type_id"});
  user_skill.belongsTo(user_skill_level, { as: "user_skill_level", foreignKey: "user_skill_level_id"});
  user_skill_level.hasMany(user_skill, { as: "user_skills", foreignKey: "user_skill_level_id"});

  return {
    event: event,
    legacy_skill_map: legacy_skill_map,
    raw_emsi_skills: raw_emsi_skills,
    skill: skill,
    skill_category: skill_category,
    skill_category_import: skill_category_import,
    skill_event: skill_event,
    skill_event_type: skill_event_type,
    skill_replacement: skill_replacement,
    skill_replacement_import: skill_replacement_import,
    source_type: source_type,
    user_skill: user_skill,
    user_skill_level: user_skill_level,
  };
}
