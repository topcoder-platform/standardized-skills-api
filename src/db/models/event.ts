import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { skill_event, skill_eventId } from './skill_event';

export interface eventAttributes {
    id: string;
    topic: string;
    payload: object;
    payload_hash?: string;
    created_at: Date;
}

export type eventPk = "id";
export type eventId = event[eventPk];
export type eventOptionalAttributes = "id" | "payload_hash" | "created_at";
export type eventCreationAttributes = Optional<eventAttributes, eventOptionalAttributes>;

export class event extends Model<eventAttributes, eventCreationAttributes> implements eventAttributes {
    id!: string;
    topic!: string;
    payload!: object;
    payload_hash?: string;
    created_at!: Date;

    // event hasMany skill_event via event_id
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

    static initModel(sequelize: Sequelize.Sequelize): typeof event {
        return event.init({
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            topic: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            payload: {
                type: DataTypes.JSONB,
                allowNull: false
            },
            payload_hash: {
                type: DataTypes.TEXT,
                allowNull: true,
                unique: "uniq_payload_hash"
            }
        } as any, {
            sequelize,
            tableName: 'event',
            schema: 'public',
            timestamps: true,
            indexes: [
                {
                    name: "event_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "uniq_payload_hash",
                    unique: true,
                    fields: [
                        { name: "payload_hash" },
                    ]
                },
            ]
        });
    }
}
