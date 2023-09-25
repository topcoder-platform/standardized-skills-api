import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface skill_replacementAttributes {
  skill_id: string;
  replacing_skill_id: string;
  category_id: string;
  created_at?: Date;
  updated_at?: Date;
}

export type skill_replacementPk = "skill_id";
export type skill_replacementId = skill_replacement[skill_replacementPk];
export type skill_replacementOptionalAttributes = "created_at" | "updated_at";
export type skill_replacementCreationAttributes = Optional<skill_replacementAttributes, skill_replacementOptionalAttributes>;

export class skill_replacement extends Model<skill_replacementAttributes, skill_replacementCreationAttributes> implements skill_replacementAttributes {
  skill_id!: string;
  replacing_skill_id!: string;
  category_id!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof skill_replacement {
    return skill_replacement.init({
    skill_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    replacing_skill_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'skill_replacement',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "skill_replacement_pkey",
        unique: true,
        fields: [
          { name: "skill_id" },
        ]
      },
    ]
  });
  }
}
