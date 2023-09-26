import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { event, eventId } from './event';
import type { skill, skillId } from './skill';
import type { skill_event_type, skill_event_typeId } from './skill_event_type';
import type { source_type, source_typeId } from './source_type';

export interface skill_eventAttributes {
    id: string;
    event_id: string;
    user_id: number;
    skill_id: string;
    skill_event_type_id: string;
    source_id: string;
    source_type_id: string;
    created_at: Date;
}

export type skill_eventPk = 'id';
export type skill_eventId = skill_event[skill_eventPk];
export type skill_eventOptionalAttributes = 'id' | 'created_at';
export type skill_eventCreationAttributes = Optional<skill_eventAttributes, skill_eventOptionalAttributes>;

export class skill_event extends Model<skill_eventAttributes, skill_eventCreationAttributes> implements skill_eventAttributes {
    id!: string;
    event_id!: string;
    user_id!: number;
    skill_id!: string;
    skill_event_type_id!: string;
    source_id!: string;
    source_type_id!: string;
    created_at!: Date;

    // skill_event belongsTo event via event_id
    event!: event;
    getEvent!: Sequelize.BelongsToGetAssociationMixin<event>;
    setEvent!: Sequelize.BelongsToSetAssociationMixin<event, eventId>;
    createEvent!: Sequelize.BelongsToCreateAssociationMixin<event>;
    // skill_event belongsTo skill via skill_id
    skill!: skill;
    getSkill!: Sequelize.BelongsToGetAssociationMixin<skill>;
    setSkill!: Sequelize.BelongsToSetAssociationMixin<skill, skillId>;
    createSkill!: Sequelize.BelongsToCreateAssociationMixin<skill>;
    // skill_event belongsTo skill_event_type via skill_event_type_id
    skill_event_type!: skill_event_type;
    getSkill_event_type!: Sequelize.BelongsToGetAssociationMixin<skill_event_type>;
    setSkill_event_type!: Sequelize.BelongsToSetAssociationMixin<skill_event_type, skill_event_typeId>;
    createSkill_event_type!: Sequelize.BelongsToCreateAssociationMixin<skill_event_type>;
    // skill_event belongsTo source_type via source_type_id
    source_type!: source_type;
    getSource_type!: Sequelize.BelongsToGetAssociationMixin<source_type>;
    setSource_type!: Sequelize.BelongsToSetAssociationMixin<source_type, source_typeId>;
    createSource_type!: Sequelize.BelongsToCreateAssociationMixin<source_type>;

    static initModel(sequelize: Sequelize.Sequelize): typeof skill_event {
        return skill_event.init({
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            event_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'event',
                    key: 'id'
                }
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            skill_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'skill',
                    key: 'id'
                }
            },
            skill_event_type_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'skill_event_type',
                    key: 'id'
                }
            },
            source_id: {
                type: DataTypes.UUID,
                allowNull: false
            },
            source_type_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'source_type',
                    key: 'id'
                }
            }
        } as any, {
            sequelize,
            tableName: 'skill_event',
            schema: 'public',
            timestamps: true,
            indexes: [
                {
                    name: 'fki_fk_event',
                    fields: [
                        { name: 'event_id' },
                    ]
                },
                {
                    name: 'fki_fk_skill_event_type',
                    fields: [
                        { name: 'skill_event_type_id' },
                    ]
                },
                {
                    name: 'fki_fk_source_type',
                    fields: [
                        { name: 'source_type_id' },
                    ]
                },
                {
                    name: 'skill_event_pkey',
                    unique: true,
                    fields: [
                        { name: 'id' },
                    ]
                },
            ]
        });
    }
}
