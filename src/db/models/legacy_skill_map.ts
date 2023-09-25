import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { skill, skillId } from './skill';

export interface legacy_skill_mapAttributes {
  id: string;
  name?: string;
  external_id?: string;
  taxonomy_id?: string;
  taxonomy_name?: string;
  skill_id?: string;
}

export type legacy_skill_mapPk = "id";
export type legacy_skill_mapId = legacy_skill_map[legacy_skill_mapPk];
export type legacy_skill_mapOptionalAttributes = "name" | "external_id" | "taxonomy_id" | "taxonomy_name" | "skill_id";
export type legacy_skill_mapCreationAttributes = Optional<legacy_skill_mapAttributes, legacy_skill_mapOptionalAttributes>;

export class legacy_skill_map extends Model<legacy_skill_mapAttributes, legacy_skill_mapCreationAttributes> implements legacy_skill_mapAttributes {
  id!: string;
  name?: string;
  external_id?: string;
  taxonomy_id?: string;
  taxonomy_name?: string;
  skill_id?: string;

  // legacy_skill_map belongsTo skill via skill_id
  skill!: skill;
  getSkill!: Sequelize.BelongsToGetAssociationMixin<skill>;
  setSkill!: Sequelize.BelongsToSetAssociationMixin<skill, skillId>;
  createSkill!: Sequelize.BelongsToCreateAssociationMixin<skill>;

  static initModel(sequelize: Sequelize.Sequelize): typeof legacy_skill_map {
    return legacy_skill_map.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    external_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxonomy_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    taxonomy_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    skill_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'skill',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'legacy_skill_map',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "legacy_skill_map_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
