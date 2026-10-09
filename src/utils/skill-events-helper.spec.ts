import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { COPILOT_TYPE_KEY, FINISHER_TYPE_KEY, REVIEWER_TYPE_KEY, dedupeSkillEventUsers } from './skill-events-helper';

describe('dedupeSkillEventUsers', () => {
    it('keeps a single finisher entry for a member with several passing submissions', () => {
        // PM-3798: a member with two passing submissions was listed twice as a finisher,
        // which broke the skill_event unique index and rolled back the skills for everyone
        const users = dedupeSkillEventUsers([
            { userId: 100000039, placement: 1 },
            { userId: 100000218, placement: 2 },
            { userId: 22655076, type: REVIEWER_TYPE_KEY },
            { userId: 100000130, type: COPILOT_TYPE_KEY },
            { userId: 89770312, type: FINISHER_TYPE_KEY },
            { userId: 89770312, type: FINISHER_TYPE_KEY },
        ]);

        assert.deepEqual(users, [
            { userId: 100000039, placement: 1 },
            { userId: 100000218, placement: 2 },
            { userId: 22655076, type: REVIEWER_TYPE_KEY },
            { userId: 100000130, type: COPILOT_TYPE_KEY },
            { userId: 89770312, type: FINISHER_TYPE_KEY },
        ]);
    });

    it('keeps a single reviewer entry for a member holding several reviewer roles', () => {
        const users = dedupeSkillEventUsers([
            { userId: 22655076, type: REVIEWER_TYPE_KEY },
            { userId: '22655076', type: REVIEWER_TYPE_KEY },
        ]);

        assert.deepEqual(users, [{ userId: 22655076, type: REVIEWER_TYPE_KEY }]);
    });

    it('keeps entries of the same member that earn different skill event types', () => {
        const users = dedupeSkillEventUsers([
            { userId: 100000039, placement: 1 },
            { userId: 100000039, placement: 2 },
            { userId: 100000130, type: REVIEWER_TYPE_KEY },
            { userId: 100000130, type: COPILOT_TYPE_KEY },
        ]);

        assert.equal(users.length, 4);
    });
});
