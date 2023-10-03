import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { skill_event, skill_eventId } from './skill_event';

export interface source_typeAttributes {
    id: string;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

export type source_typePk = 'id';
export type source_typeId = source_type[source_typePk];
export type source_typeOptionalAttributes = 'id' | 'description' | 'created_at' | 'updated_at';
export type source_typeCreationAttributes = Optional<source_typeAttributes, source_typeOptionalAttributes>;

export class source_type
    extends Model<source_typeAttributes, source_typeCreationAttributes>
    implements source_typeAttributes
{
    id!: string;
    name!: string;
    description?: string;
    created_at!: Date;
    updated_at!: Date;

    // source_type hasMany skill_event via source_type_id
    skill_events!: skill_event[];
    getSkill_events!: Sequelize.HasManyGetAssociationsMixin<skill_event>;
    setSkill_events!: Sequelize.HasManySetAssociationsMixin<skill_event, skill_eventId>;
    addSkill_event!: Sequelize.HasManyAddAssociationMixin<skill_event, skill_eventId>;
    addSkill_events!: Sequelize.HasManyAddAssociationsMixin<skill_event, skill_eventId>;
    createSkill_event!: Sequelize.HasManyCreateAssociationMixin<skill_event>;
    removeSkill_event!: Sequelize.HasManyRemoveAssociationMixin<skill_event, skill_eventId>;
    removeSkill_events!: Sequelize.HasManyRemoveAssociationsMixin<skill_event, skill_eventId>;
    hasSkill_event!: Sequelize.HasManyHasAssociationMixin<skill_event, skill_eventId>;
    hasSkill_events!: Sequelize.HasManyHasAssociationsMixin<skill_event, skill_eventId>;
    countSkill_events!: Sequelize.HasManyCountAssociationsMixin;

    static initModel(sequelize: Sequelize.Sequelize): typeof source_type {
        return source_type.init(
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
                    unique: 'uniq_source_type_name',
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
            } as any,
            {
                sequelize,
                tableName: 'source_type',
                schema: 'public',
                timestamps: true,
                indexes: [
                    {
                        name: 'source_type_pkey',
                        unique: true,
                        fields: [{ name: 'id' }],
                    },
                    {
                        name: 'uniq_source_type_name',
                        unique: true,
                        fields: [{ name: 'name' }],
                    },
                ],
            },
        );
    }
}
