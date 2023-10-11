import { event as Event } from './event';
import { skill as Skill } from './skill';
import { skill_category as SkillCategory } from './skill_category';
import { skill_event as SkillEvent } from './skill_event';
import { skill_event_type as SkillEventType } from './skill_event_type';
import { source_type as SourceType } from './source_type';
import { user_skill as UserSkill } from './user_skill';
import { user_skill_level as UserSkillLevel } from './user_skill_level';
import { work_skill as WorkSkill } from './work_skill';

export type DbModelsType =
    | typeof Event
    | typeof Skill
    | typeof SkillCategory
    | typeof SkillEvent
    | typeof SkillEventType
    | typeof SourceType
    | typeof UserSkill
    | typeof UserSkillLevel
    | typeof WorkSkill;

export { Event, Skill, SkillCategory, SkillEvent, SkillEventType, SourceType, UserSkill, UserSkillLevel, WorkSkill };
