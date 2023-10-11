import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { skill, skillId } from './skill';

export interface skillCategoryAttributes {
    id: string;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

export type skill_categoryPk = 'id';
export type skill_categoryId = skill_category[skill_categoryPk];
export type skill_categoryOptionalAttributes = 'id' | 'description' | 'created_at' | 'updated_at';
export type skillCategoryCreationAttributes = Optional<skillCategoryAttributes, skill_categoryOptionalAttributes>;

export class skill_category
    extends Model<skillCategoryAttributes, skillCategoryCreationAttributes>
    implements skillCategoryAttributes
{
    id!: string;
    name!: string;
    description?: string;
    created_at!: Date;
    updated_at!: Date;

    // skill_category hasMany skill via category_id
    skills!: skill[];
    getSkills!: Sequelize.HasManyGetAssociationsMixin<skill>;
    setSkills!: Sequelize.HasManySetAssociationsMixin<skill, skillId>;
    addSkill!: Sequelize.HasManyAddAssociationMixin<skill, skillId>;
    addSkills!: Sequelize.HasManyAddAssociationsMixin<skill, skillId>;
    createSkill!: Sequelize.HasManyCreateAssociationMixin<skill>;
    removeSkill!: Sequelize.HasManyRemoveAssociationMixin<skill, skillId>;
    removeSkills!: Sequelize.HasManyRemoveAssociationsMixin<skill, skillId>;
    hasSkill!: Sequelize.HasManyHasAssociationMixin<skill, skillId>;
    hasSkills!: Sequelize.HasManyHasAssociationsMixin<skill, skillId>;
    countSkills!: Sequelize.HasManyCountAssociationsMixin;

    static initModel(sequelize: Sequelize.Sequelize): typeof skill_category {
        return skill_category.init(
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
                    unique: 'uniq_category_name',
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
            } as any,
            {
                sequelize,
                tableName: 'skill_category',
                schema: 'public',
                timestamps: true,
                indexes: [
                    {
                        name: 'skill_category_pkey',
                        unique: true,
                        fields: [{ name: 'id' }],
                    },
                    {
                        name: 'uniq_category_name',
                        unique: true,
                        fields: [{ name: 'name' }],
                    },
                ],
            },
        );
    }
}
