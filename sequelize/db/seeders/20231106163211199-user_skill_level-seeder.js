'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user_skill_level', [
            {
                id: '5641bd98-784f-4f42-ad38-3ec2fc23de16',
                name: 'self-declared',
                description: 'Skill declared directly by user',
                created_at: '2023-09-12T20:46:58.000Z',
                updated_at: '2023-09-12T20:46:58.000Z',
            },
            {
                id: '0f27234f-d89e-4b07-9ea1-649afbb29841',
                name: 'verified',
                description: 'Skill verified by proof of capability',
                created_at: '2023-09-12T20:46:58.000Z',
                updated_at: '2023-09-12T20:46:58.000Z',
            },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user_skill_level', null, {});
    },
};
