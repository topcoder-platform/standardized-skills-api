'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('source_type', [
            {
                id: '4d2bdbc8-eb3b-4156-8d20-98a46589cc5d',
                name: 'challenge',
                description: 'Competitive programming challenge',
                created_at: '2023-09-12T20:53:37.000Z',
                updated_at: '2023-09-12T20:53:37.000Z',
            },
            {
                id: 'e50ffd9c-1462-493c-91a7-2b9be510625c',
                name: 'marathon match',
                description: 'Long-duration competitive programming event',
                created_at: '2023-09-12T20:53:37.000Z',
                updated_at: '2023-09-12T20:53:37.000Z',
            },
            {
                id: '71198dc7-dc63-40fd-8502-c005133e7149',
                name: 'rapid development match',
                description: 'High-speed competitive programming event',
                created_at: '2023-09-12T20:53:37.000Z',
                updated_at: '2023-09-12T20:53:37.000Z',
            },
            {
                id: '90f76653-6859-4122-9a20-c2aa42889a2f',
                name: 'single round match',
                description: 'Single competitive programming event',
                created_at: '2023-09-12T20:53:37.000Z',
                updated_at: '2023-09-12T20:53:37.000Z',
            },
            {
                id: '413340e8-f56f-4061-8796-c916dfa82770',
                name: 'gig',
                description: 'Customer project work',
                created_at: '2023-09-12T20:53:37.000Z',
                updated_at: '2023-09-12T20:53:37.000Z',
            },
            {
                id: '51a3b821-f95b-4f56-b508-0f3891f5bc5f',
                name: 'certification',
                description: 'Topdbadmin Academy certification',
                created_at: '2023-09-12T20:53:37.000Z',
                updated_at: '2023-09-12T20:53:37.000Z',
            },
            {
                id: '2a8c0dcb-830c-4b5f-80e2-6278742dd3af',
                name: 'course',
                description: 'Topdbadmin Academy course',
                created_at: '2023-09-12T20:53:37.000Z',
                updated_at: '2023-09-12T20:53:37.000Z',
            },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('source_type', null, {});
    },
};
