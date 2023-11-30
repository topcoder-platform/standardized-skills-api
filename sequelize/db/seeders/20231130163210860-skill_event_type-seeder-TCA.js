'use strict';

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('skill_event_type', [
            {
                id: 'f10df8f7-8514-4226-abe0-4ef32fe95a14',
                name: 'tca_cert_completion',
                description: 'Completed TCA certification',
                created_at: '2023-11-14T20:58:36.000Z',
                updated_at: '2023-11-14T20:58:36.000Z',
            },
            {
                id: 'f3d6a93f-8c60-4a36-81aa-d029b331086c',
                name: 'tca_course_completion',
                description: 'Completed TCA course',
                created_at: '2023-11-14T20:58:36.000Z',
                updated_at: '2023-11-14T20:58:36.000Z',
            },
        ]);
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('skill_event_type', {
            id: [
                'f10df8f7-8514-4226-abe0-4ef32fe95a14',
                'f3d6a93f-8c60-4a36-81aa-d029b331086c',
            ],
        }, {});
    },
};
