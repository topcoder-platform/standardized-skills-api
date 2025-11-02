import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { skill_event, skill_eventId } from './skill_event';
import { envConfig } from '../../config';

export interface skillEventTypeAttributes {
    id: string;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

export type skill_event_typePk = 'id';
export type skill_event_typeId = skill_event_type[skill_event_typePk];
export type skill_event_typeOptionalAttributes = 'id' | 'description' | 'created_at' | 'updated_at';
export type skillEventTypeCreationAttributes = Optional<skillEventTypeAttributes, skill_event_typeOptionalAttributes>;

export class skill_event_type
    extends Model<skillEventTypeAttributes, skillEventTypeCreationAttributes>
    implements skillEventTypeAttributes
{
    declare id: string;
    declare name: string;
    declare description?: string;
    declare created_at: Date;
    declare updated_at: Date;

    // skill_event_type hasMany skill_event via skill_event_type_id
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

    static initModel(sequelize: Sequelize.Sequelize): typeof skill_event_type {
        return skill_event_type.init(
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
                    unique: 'uniq_event_type_name',
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
            } as any,
            {
                sequelize,
                tableName: 'skill_event_type',
                schema: envConfig.DB_SCHEMA,
                timestamps: true,
                indexes: [
                    {
                        name: 'skill_event_type_pkey',
                        unique: true,
                        fields: [{ name: 'id' }],
                    },
                    {
                        name: 'uniq_event_type_name',
                        unique: true,
                        fields: [{ name: 'name' }],
                    },
                ],
            },
        );
    }
}
