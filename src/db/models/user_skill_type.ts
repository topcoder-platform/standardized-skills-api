import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user_skill, user_skillId } from './user_skill';

export interface userSkillTypeAttributes {
    id: string;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

export type user_skill_typePk = 'id';
export type user_skill_typeId = user_skill_type[user_skill_typePk];
export type user_skill_typeOptionalAttributes = 'description' | 'created_at' | 'updated_at';
export type userSkillTypeCreationAttributes = Optional<userSkillTypeAttributes, user_skill_typeOptionalAttributes>;

export class user_skill_type extends Model<userSkillTypeAttributes, userSkillTypeCreationAttributes> implements userSkillTypeAttributes {
    id!: string;
    name!: string;
    description?: string;
    created_at!: Date;
    updated_at!: Date;
    
    // user_skill_type belongsToMany user_skill via user_skill_type_id and user_skill_id
    user_skills!: user_skill[];
    getUserSkills!: Sequelize.BelongsToManyGetAssociationsMixin<user_skill>;
    setUserSkills!: Sequelize.BelongsToManySetAssociationsMixin<user_skill, user_skillId>;
    addUserSkill!: Sequelize.BelongsToManyAddAssociationMixin<user_skill, user_skillId>;
    addUserSkills!: Sequelize.BelongsToManyAddAssociationsMixin<user_skill, user_skillId>;
    createUserSkill!: Sequelize.BelongsToManyCreateAssociationMixin<user_skill>;
    removeUserSkill!: Sequelize.BelongsToManyRemoveAssociationMixin<user_skill, user_skillId>;
    removeUserSkills!: Sequelize.BelongsToManyRemoveAssociationsMixin<user_skill, user_skillId>;
    hasUserSkill!: Sequelize.BelongsToManyHasAssociationMixin<user_skill, user_skillId>;
    hasUserSkills!: Sequelize.BelongsToManyHasAssociationsMixin<user_skill, user_skillId>;
    countUserSkills!: Sequelize.BelongsToManyCountAssociationsMixin;
    
    static initModel(sequelize: Sequelize.Sequelize): typeof user_skill_type {
        return user_skill_type.init(
            {
                id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    primaryKey: true
                },
                name: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    unique: 'user_skill_type_name_key'
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: true
                }
            } as any,
            {
                sequelize,
                tableName: 'user_skill_type',
                schema: 'public',
                timestamps: true,
                indexes: [
                    {
                        name: 'uniq_skill_type_name',
                        unique: true,
                        fields: [
                            { name: 'name' },
                        ]
                    },
                    {
                        name: 'user_skill_type_name_key',
                        unique: true,
                        fields: [
                            { name: 'name' },
                        ]
                    },
                    {
                        name: 'user_skill_type_pkey',
                        unique: true,
                        fields: [
                            { name: 'id' },
                        ]
                    },
                ]
            }
        );
    }
}
