'use strict';

const { DataTypes } = require('sequelize');

/**
 * Migration to add a new `user_skill_type` field to the `user_skill` table
 */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.addColumn('user_skill', 'user_skill_type_id', {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: '1555aa05-a764-4f0b-b3e0-51b824382abb',
            references: {
                model: 'user_skill_type',
                key: 'id',
            },
            unique: 'uniq_user_skill_type',
        });
    },

    async down(queryInterface) {
        await queryInterface.removeColumn('user_skill', 'user_skill_type_id');
    },
};
