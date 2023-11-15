'use strict';

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('skill_event_type', [
            {
                id: '34004342-c15f-49af-ad4b-71fedc9f6a98',
                name: 'challenge_win',
                description: 'Challenge winner',
                created_at: '2023-09-12T20:58:36.000Z',
                updated_at: '2023-09-12T20:58:36.000Z',
            },
            {
                id: '0eaa258b-7456-445d-97b9-41862e4531ef',
                name: 'challenge_2nd_place',
                description: 'Second place challenge finisher',
                created_at: '2023-09-12T20:58:36.000Z',
                updated_at: '2023-09-12T20:58:36.000Z',
            },
            {
                id: 'd3ff7919-5dce-415a-8698-c61f00aad67d',
                name: 'challenge_3rd_place',
                description: 'Third place challenge finisher',
                created_at: '2023-09-12T20:58:36.000Z',
                updated_at: '2023-09-12T20:58:36.000Z',
            },
            {
                id: '34279888-49d1-4b10-b1b9-4acf37861ccb',
                name: 'challenge_finisher',
                description: 'Successful challenge finisher',
                created_at: '2023-09-12T20:58:36.000Z',
                updated_at: '2023-09-12T20:58:36.000Z',
            },
            {
                id: 'c41ec386-1667-4321-b9f4-69a20104a5c7',
                name: 'gig_completion',
                description: 'Completed customer project work',
                created_at: '2023-09-12T20:58:36.000Z',
                updated_at: '2023-09-12T20:58:36.000Z',
            },
            {
                id: 'f6bddb8a-8f1a-4624-bd3d-164a8ebaa3bb',
                name: 'mm_win',
                description: 'Marathon Match winner',
                created_at: '2023-09-12T20:58:36.000Z',
                updated_at: '2023-09-12T20:58:36.000Z',
            },
            {
                id: 'e60e7b7f-3ea5-41c1-806d-29332bdd558e',
                name: 'srm_win',
                description: 'Single Round Match winner',
                created_at: '2023-09-12T20:58:36.000Z',
                updated_at: '2023-09-12T20:58:36.000Z',
            },
            {
                id: 'f5b4090d-8b39-41f9-aa3c-a5ae4caa4d66',
                name: 'rdm_win',
                description: 'Rapid Development Match winner',
                created_at: '2023-09-12T20:58:36.000Z',
                updated_at: '2023-09-12T20:58:36.000Z',
            },
            {
                id: 'd412bc60-9188-4514-b72b-058f2f3d4a88',
                name: 'copilot_review',
                description: 'Copilot submission reviewer',
                created_at: '2023-09-12T20:58:36.000Z',
                updated_at: '2023-09-12T20:58:36.000Z',
            },
            {
                id: '982f5178-7778-4af8-acd6-4aca37dca4a3',
                name: 'challenge_review',
                description: 'Challenge submissions reviewer',
                created_at: '2023-09-12T20:58:36.000Z',
                updated_at: '2023-09-12T20:58:36.000Z',
            },
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
        return queryInterface.bulkDelete('skill_event_type', null, {});
    },
};
