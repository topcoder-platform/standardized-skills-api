import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { skill, skillId } from './skill';
import type { user_skill_level, user_skill_levelId } from './user_skill_level';
import type { user_skill_display_mode, user_skill_display_modeId } from './user_skill_display_mode';
import { envConfig } from '../../config';

export interface userSkillAttributes {
    id: string;
    user_id: number;
    skill_id: string;
    user_skill_level_id: string;
    user_skill_display_mode_id: string;
    created_at: Date;
    updated_at: Date;
}

export type user_skillPk = 'id';
export type user_skillId = user_skill[user_skillPk];
export type user_skillOptionalAttributes = 'id' | 'created_at' | 'updated_at';
export type userSkillCreationAttributes = Optional<userSkillAttributes, user_skillOptionalAttributes>;

export class user_skill extends Model<userSkillAttributes, userSkillCreationAttributes> implements userSkillAttributes {
    declare id: string;
    declare user_id: number;
    declare skill_id: string;
    declare user_skill_level_id: string;
    declare user_skill_display_mode_id: string;
    declare created_at: Date;
    declare updated_at: Date;

    // user_skill belongsTo skill via skill_id
    skill!: skill;
    getSkill!: Sequelize.BelongsToGetAssociationMixin<skill>;
    setSkill!: Sequelize.BelongsToSetAssociationMixin<skill, skillId>;
    createSkill!: Sequelize.BelongsToCreateAssociationMixin<skill>;
    // user_skill belongsTo user_skill_level via user_skill_level_id
    user_skill_level!: user_skill_level;
    getUser_skill_level!: Sequelize.BelongsToGetAssociationMixin<user_skill_level>;
    setUser_skill_level!: Sequelize.BelongsToSetAssociationMixin<user_skill_level, user_skill_levelId>;
    createUser_skill_level!: Sequelize.BelongsToCreateAssociationMixin<user_skill_level>;
    // user_skill belongsTo user_skill_display_mode via user_skill_display_mode_id
    user_skill_display_mode!: user_skill_display_mode;
    getUser_skill_display_mode!: Sequelize.BelongsToGetAssociationMixin<user_skill_display_mode>;
    setUser_skill_display_mode!: Sequelize.BelongsToSetAssociationMixin<
        user_skill_display_mode,
        user_skill_display_modeId
    >;
    createUser_skill_display_mode!: Sequelize.BelongsToCreateAssociationMixin<user_skill_display_mode>;

    static initModel(sequelize: Sequelize.Sequelize): typeof user_skill {
        return user_skill.init(
            {
                id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    unique: 'uniq_user_skill_type',
                },
                skill_id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    references: {
                        model: 'skill',
                        key: 'id',
                    },
                    unique: 'uniq_user_skill_type',
                },
                user_skill_level_id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    references: {
                        model: 'user_skill_level',
                        key: 'id',
                    },
                    unique: 'uniq_user_skill_type',
                },
                user_skill_display_mode_id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    references: {
                        model: 'user_skill_display_mode',
                        key: 'id',
                    },
                },
            } as any,
            {
                sequelize,
                tableName: 'user_skill',
                schema: envConfig.DB_SCHEMA,
                timestamps: true,
                indexes: [
                    {
                        name: 'fki_fk_skill',
                        fields: [{ name: 'skill_id' }],
                    },
                    {
                        name: 'fki_fk_user_skill_level',
                        fields: [{ name: 'user_skill_level_id' }],
                    },
                    {
                        name: 'fki_fk_user_skill_display_mode',
                        fields: [{ name: 'user_skill_display_mode_id' }],
                    },
                    {
                        name: 'uniq_user_skill_type',
                        unique: true,
                        fields: [{ name: 'user_id' }, { name: 'skill_id' }, { name: 'user_skill_level_id' }],
                    },
                    {
                        name: 'user_skill_pkey',
                        unique: true,
                        fields: [{ name: 'id' }],
                    },
                ],
            },
        );
    }
}
