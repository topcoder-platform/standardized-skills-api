import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface skill_replacement_importAttributes {
  skill_name: string;
  replacing_skill_name?: string;
  category_id: string;
  skill_id?: string;
  replacing_skill_id?: string;
}

export type skill_replacement_importPk = "skill_name";
export type skill_replacement_importId = skill_replacement_import[skill_replacement_importPk];
export type skill_replacement_importOptionalAttributes = "replacing_skill_name" | "skill_id" | "replacing_skill_id";
export type skill_replacement_importCreationAttributes = Optional<skill_replacement_importAttributes, skill_replacement_importOptionalAttributes>;

export class skill_replacement_import extends Model<skill_replacement_importAttributes, skill_replacement_importCreationAttributes> implements skill_replacement_importAttributes {
  skill_name!: string;
  replacing_skill_name?: string;
  category_id!: string;
  skill_id?: string;
  replacing_skill_id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof skill_replacement_import {
    return skill_replacement_import.init({
    skill_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    replacing_skill_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    skill_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    replacing_skill_id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'skill_replacement_import',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "skill_replacement_import_pkey",
        unique: true,
        fields: [
          { name: "skill_name" },
        ]
      },
    ]
  });
  }
}
