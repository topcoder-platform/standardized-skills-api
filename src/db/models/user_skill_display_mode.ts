import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user_skill, user_skillId } from './user_skill';
import { envConfig } from '../../config';

export interface userSkillDisplayModeAttributes {
    id: string;
    name: string;
    description?: string | null;
    created_at: Date;
    updated_at: Date;
}

export type user_skill_display_modePk = 'id';
export type user_skill_display_modeId = user_skill_display_mode[user_skill_display_modePk];
export type user_skill_display_modeOptionalAttributes = 'description' | 'created_at' | 'updated_at';
export type userSkillDisplayModeCreationAttributes = Optional<
    userSkillDisplayModeAttributes,
    user_skill_display_modeOptionalAttributes
>;

export class user_skill_display_mode
    extends Model<userSkillDisplayModeAttributes, userSkillDisplayModeCreationAttributes>
    implements userSkillDisplayModeAttributes
{
    declare id: string;
    declare name: string;
    declare description?: string | null;
    declare created_at: Date;
    declare updated_at: Date;

    // user_skill_display_mode hasMany user_skill via user_skill_display_mode_id
    user_skills!: user_skill[];
    getUser_skills!: Sequelize.BelongsToManyGetAssociationsMixin<user_skill>;
    setUser_skills!: Sequelize.BelongsToManySetAssociationsMixin<user_skill, user_skillId>;
    addUser_skill!: Sequelize.BelongsToManyAddAssociationMixin<user_skill, user_skillId>;
    addUser_skills!: Sequelize.BelongsToManyAddAssociationsMixin<user_skill, user_skillId>;
    createUser_skill!: Sequelize.BelongsToManyCreateAssociationMixin<user_skill>;
    removeUser_skill!: Sequelize.BelongsToManyRemoveAssociationMixin<user_skill, user_skillId>;
    removeUser_skills!: Sequelize.BelongsToManyRemoveAssociationsMixin<user_skill, user_skillId>;
    hasUser_skill!: Sequelize.BelongsToManyHasAssociationMixin<user_skill, user_skillId>;
    hasUser_skills!: Sequelize.BelongsToManyHasAssociationsMixin<user_skill, user_skillId>;
    countUser_skills!: Sequelize.BelongsToManyCountAssociationsMixin;

    static initModel(sequelize: Sequelize.Sequelize): typeof user_skill_display_mode {
        return user_skill_display_mode.init(
            {
                id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    unique: 'user_skill_display_mode_name_key',
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
            } as any,
            {
                sequelize,
                tableName: 'user_skill_display_mode',
                schema: envConfig.DB_SCHEMA,
                timestamps: true,
                indexes: [
                    {
                        name: 'user_skill_display_mode_name_key',
                        unique: true,
                        fields: [{ name: 'name' }],
                    },
                    {
                        name: 'user_skill_display_mode_pkey',
                        unique: true,
                        fields: [{ name: 'id' }],
                    },
                ],
            },
        );
    }
}
