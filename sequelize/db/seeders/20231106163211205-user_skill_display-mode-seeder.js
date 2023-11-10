'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user_skill_display_mode', [
            {
                id: '8c302488-aa23-4caf-8baa-f9cc02abb086',
                name: 'principal',
                description: 'This is a principal user skill',
                created_at: '2023-11-05T20:46:58.000Z',
                updated_at: '2023-11-05T20:46:58.000Z',
            },
            {
                id: '1555aa05-a764-4f0b-b3e0-51b824382abb',
                name: 'additional',
                description: 'This is an additional user skill',
                created_at: '2023-11-05T20:46:58.000Z',
                updated_at: '2023-11-05T20:46:58.000Z',
            },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user_skill_display_mode', null, {});
    },
};
