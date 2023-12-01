import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface userGigSkillsTrackerAttributes {
    id: string;
    job_id: string;
    user_id: number;
    payload: object;
    placement_date: Date;
    last_sent_event_date?: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
}

export type user_gig_skills_trackerOptionalAttributes = 'id' | 'last_sent_event_date' | 'deleted_at';
export type userGigSkillsTrackerCreationAttributes = Optional<
    userGigSkillsTrackerAttributes,
    user_gig_skills_trackerOptionalAttributes
>;

export class user_gig_skills_tracker
    extends Model<userGigSkillsTrackerAttributes, userGigSkillsTrackerCreationAttributes>
    implements userGigSkillsTrackerAttributes {
    id!: string;
    job_id!: string;
    user_id!: number;
    payload!: object;
    placement_date!: Date;
    last_sent_event_date?: Date;
    created_at!: Date;
    updated_at!: Date;
    deleted_at?: Date;

    static initModel(sequelize: Sequelize.Sequelize): typeof user_gig_skills_tracker {
        return user_gig_skills_tracker.init(
            {
                id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                },
                job_id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    unique: 'unique_user_gig_skills'
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    unique: 'unique_user_gig_skills'
                },
                payload: {
                    type: DataTypes.JSONB,
                    allowNull: false,
                },
                placement_date: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    default: DataTypes.NOW
                },
                last_sent_event_date: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                deletedAt: {
                    field: 'deleted_at',
                    type: DataTypes.DATE,
                }
            ,
            } as any,
            {
                sequelize,
                tableName: 'user_gig_skills_tracker',
                schema: 'public',
                timestamps: true,
                indexes: [
                    {
                        name: 'unique_user_gig_skills',
                        unique: true,
                        fields: [{ name: 'job_id' }, { name: 'user_id' }],
                    },
                    {
                        name: 'user_gig_skills_tracker_pkey',
                        unique: true,
                        fields: [{ name: 'id' }],
                    },
                ],
            },
        );
    }
}
