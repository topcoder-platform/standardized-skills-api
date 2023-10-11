import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user_skill, user_skillId } from './user_skill';

export interface userSkillLevelAttributes {
    id: string;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

export type user_skill_levelPk = 'id';
export type user_skill_levelId = user_skill_level[user_skill_levelPk];
export type user_skill_levelOptionalAttributes = 'id' | 'description' | 'created_at' | 'updated_at';
export type userSkillLevelCreationAttributes = Optional<userSkillLevelAttributes, user_skill_levelOptionalAttributes>;

export class user_skill_level
    extends Model<userSkillLevelAttributes, userSkillLevelCreationAttributes>
    implements userSkillLevelAttributes
{
    id!: string;
    name!: string;
    description?: string;
    created_at!: Date;
    updated_at!: Date;

    // user_skill_level hasMany user_skill via user_skill_level_id
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

    static initModel(sequelize: Sequelize.Sequelize): typeof user_skill_level {
        return user_skill_level.init(
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
                    unique: 'uniq_skill_level_name',
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
            } as any,
            {
                sequelize,
                tableName: 'user_skill_level',
                schema: 'public',
                timestamps: true,
                indexes: [
                    {
                        name: 'uniq_skill_level_name',
                        unique: true,
                        fields: [{ name: 'name' }],
                    },
                    {
                        name: 'user_skill_level_pkey',
                        unique: true,
                        fields: [{ name: 'id' }],
                    },
                ],
            },
        );
    }
}
