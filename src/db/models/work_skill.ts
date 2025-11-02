import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import { envConfig } from '../../config';

export interface workSkillAttributes {
    id: string;
    work_id: string;
    work_type_id: string;
    skill_id: string;
    created_at?: Date;
    updated_at?: Date;
}

export type work_skillPk = 'id';
export type work_skillId = work_skill[work_skillPk];
export type work_skillOptionalAttributes = 'id' | 'created_at' | 'updated_at';
export type workSkillCreationAttributes = Optional<workSkillAttributes, work_skillOptionalAttributes>;

export class work_skill extends Model<workSkillAttributes, workSkillCreationAttributes> implements workSkillAttributes {
    declare id: string;
    declare work_id: string;
    declare work_type_id: string;
    declare skill_id: string;
    declare created_at?: Date;
    declare updated_at?: Date;

    static initModel(sequelize: Sequelize.Sequelize): typeof work_skill {
        return work_skill.init(
            {
                id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                },
                work_id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    unique: 'uniq_work_skill',
                },
                work_type_id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    unique: 'uniq_work_skill',
                },
                skill_id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    unique: 'uniq_work_skill',
                },
            },
            {
                sequelize,
                tableName: 'work_skill',
                schema: envConfig.DB_SCHEMA,
                timestamps: true,
                indexes: [
                    {
                        name: 'uniq_work_skill',
                        unique: true,
                        fields: [{ name: 'work_id' }, { name: 'work_type_id' }, { name: 'skill_id' }],
                    },
                    {
                        name: 'work_skill_pkey',
                        unique: true,
                        fields: [{ name: 'id' }],
                    },
                ],
            },
        );
    }
}
