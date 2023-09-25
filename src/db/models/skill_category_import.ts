import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface skill_category_importAttributes {
  skill_name: string;
  category_name?: string;
  suggested_category?: string;
  skill_id?: string;
  category_id?: string;
}

export type skill_category_importPk = "skill_name";
export type skill_category_importId = skill_category_import[skill_category_importPk];
export type skill_category_importOptionalAttributes = "category_name" | "suggested_category" | "skill_id" | "category_id";
export type skill_category_importCreationAttributes = Optional<skill_category_importAttributes, skill_category_importOptionalAttributes>;

export class skill_category_import extends Model<skill_category_importAttributes, skill_category_importCreationAttributes> implements skill_category_importAttributes {
  skill_name!: string;
  category_name?: string;
  suggested_category?: string;
  skill_id?: string;
  category_id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof skill_category_import {
    return skill_category_import.init({
    skill_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    suggested_category: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    skill_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'skill_category_import',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "skill_category_import_pkey",
        unique: true,
        fields: [
          { name: "skill_name" },
        ]
      },
    ]
  });
  }
}
