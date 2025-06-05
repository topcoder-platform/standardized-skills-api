import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { skill_category, skill_categoryId } from './skill_category';
import type { skill_event, skill_eventId } from './skill_event';
import type { user_skill, user_skillId } from './user_skill';
import { envConfig } from '../../config';

export interface skillAttributes {
    id: string;
    name: string;
    description?: string | null;
    category_id?: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
}

export type skillPk = 'id';
export type skillId = skill[skillPk];
export type skillOptionalAttributes = 'id' | 'description' | 'category_id' | 'created_at' | 'updated_at' | 'deleted_at';
export type skillCreationAttributes = Optional<skillAttributes, skillOptionalAttributes>;

export class skill extends Model<skillAttributes, skillCreationAttributes> implements skillAttributes {
    id!: string;
    name!: string;
    description?: string;
    category_id?: string;
    created_at!: Date;
    updated_at!: Date;
    deleted_at?: Date;

    countLegacy_skill_maps!: Sequelize.HasManyCountAssociationsMixin;
    // skill hasMany skill_event via skill_id
    skill_events!: skill_event[];
    getSkill_events!: Sequelize.HasManyGetAssociationsMixin<skill_event>;
    setSkill_events!: Sequelize.HasManySetAssociationsMixin<skill_event, skill_eventId>;
    addSkill_event!: Sequelize.HasManyAddAssociationMixin<skill_event, skill_eventId>;
    addSkill_events!: Sequelize.HasManyAddAssociationsMixin<skill_event, skill_eventId>;
    createSkill_event!: Sequelize.HasManyCreateAssociationMixin<skill_event>;
    removeSkill_event!: Sequelize.HasManyRemoveAssociationMixin<skill_event, skill_eventId>;
    removeSkill_events!: Sequelize.HasManyRemoveAssociationsMixin<skill_event, skill_eventId>;
    hasSkill_event!: Sequelize.HasManyHasAssociationMixin<skill_event, skill_eventId>;
    hasSkill_events!: Sequelize.HasManyHasAssociationsMixin<skill_event, skill_eventId>;
    countSkill_events!: Sequelize.HasManyCountAssociationsMixin;
    // skill hasMany user_skill via skill_id
    user_skills!: user_skill[];
    getUser_skills!: Sequelize.HasManyGetAssociationsMixin<user_skill>;
    setUser_skills!: Sequelize.HasManySetAssociationsMixin<user_skill, user_skillId>;
    addUser_skill!: Sequelize.HasManyAddAssociationMixin<user_skill, user_skillId>;
    addUser_skills!: Sequelize.HasManyAddAssociationsMixin<user_skill, user_skillId>;
    createUser_skill!: Sequelize.HasManyCreateAssociationMixin<user_skill>;
    removeUser_skill!: Sequelize.HasManyRemoveAssociationMixin<user_skill, user_skillId>;
    removeUser_skills!: Sequelize.HasManyRemoveAssociationsMixin<user_skill, user_skillId>;
    hasUser_skill!: Sequelize.HasManyHasAssociationMixin<user_skill, user_skillId>;
    hasUser_skills!: Sequelize.HasManyHasAssociationsMixin<user_skill, user_skillId>;
    countUser_skills!: Sequelize.HasManyCountAssociationsMixin;
    // skill belongsTo skill_category via category_id
    category!: skill_category;
    getCategory!: Sequelize.BelongsToGetAssociationMixin<skill_category>;
    setCategory!: Sequelize.BelongsToSetAssociationMixin<skill_category, skill_categoryId>;
    createCategory!: Sequelize.BelongsToCreateAssociationMixin<skill_category>;

    static initModel(sequelize: Sequelize.Sequelize): typeof skill {
        return skill.init(
            {
                id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    unique: 'uniq_skill_name',
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                category_id: {
                    type: DataTypes.UUID,
                    allowNull: true,
                    references: {
                        model: 'skill_category',
                        key: 'id',
                    },
                },
                deletedAt: {
                    field: 'deleted_at',
                    type: Sequelize.DATE,
                },
            } as any,
            {
                sequelize,
                tableName: 'skill',
                schema: envConfig.DB_SCHEMA,
                timestamps: true,
                paranoid: true,
                indexes: [
                    {
                        name: 'fki_fk_skill_category',
                        fields: [{ name: 'category_id' }],
                    },
                    {
                        name: 'skill_pkey',
                        unique: true,
                        fields: [{ name: 'id' }],
                    },
                    {
                        name: 'uniq_skill_name',
                        unique: true,
                        fields: [{ name: 'name' }],
                    },
                ],
            },
        );
    }
}
