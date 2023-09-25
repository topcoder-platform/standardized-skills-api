import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface raw_emsi_skillsAttributes {
  id: string;
  name?: string;
  description?: string;
  category_id?: number;
  category_name?: string;
  subcategory_id?: number;
  subcategory_name?: string;
  isSoftware?: boolean;
  type_id?: string;
  type_name?: string;
}

export type raw_emsi_skillsPk = "id";
export type raw_emsi_skillsId = raw_emsi_skills[raw_emsi_skillsPk];
export type raw_emsi_skillsOptionalAttributes = "name" | "description" | "category_id" | "category_name" | "subcategory_id" | "subcategory_name" | "isSoftware" | "type_id" | "type_name";
export type raw_emsi_skillsCreationAttributes = Optional<raw_emsi_skillsAttributes, raw_emsi_skillsOptionalAttributes>;

export class raw_emsi_skills extends Model<raw_emsi_skillsAttributes, raw_emsi_skillsCreationAttributes> implements raw_emsi_skillsAttributes {
  id!: string;
  name?: string;
  description?: string;
  category_id?: number;
  category_name?: string;
  subcategory_id?: number;
  subcategory_name?: string;
  isSoftware?: boolean;
  type_id?: string;
  type_name?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof raw_emsi_skills {
    return raw_emsi_skills.init({
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subcategory_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subcategory_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isSoftware: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    type_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'raw_emsi_skills',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "raw_emsi_skills_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
