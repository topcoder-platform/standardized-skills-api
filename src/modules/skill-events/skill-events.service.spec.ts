import assert from 'node:assert/strict';
import { afterEach, describe, it, mock } from 'node:test';
import { Prisma } from '@prisma/client';

import { AuthUser } from '../../common/interfaces/auth-user.interface';
import { SkillEventTopic, SkillEventTypes, WorkType } from '../../config';
import { SkillEventRequestBodyDto } from '../../dto';
import { PrismaService } from '../../prisma/prisma.service';
import * as challengeHelper from '../../utils/challenge-db-helper';
import * as resourceHelper from '../../utils/resource-db-helper';
import * as reviewsHelper from '../../utils/reviews-db-helper';
import * as eventHelper from '../../utils/skill-events-helper';
import { SkillEventsService } from './skill-events.service';

const currentUser = { isMachine: true } as AuthUser;
const request: SkillEventRequestBodyDto = {
    topic: SkillEventTopic.challengeUpdate,
    payload: {
        id: '0131aa9a-48bb-45db-adce-7cd9832d7714',
        status: 'COMPLETED',
        skills: [{ id: 'skill-1' }],
        winners: [{ userId: 1001, placement: 1 }],
    },
};

/**
 * Creates a transactional in-memory Prisma substitute for challenge award tests.
 * Takes no arguments and returns the service, committed rows, and a write-failure
 * switch. External database reads are mocked; event uniqueness and transaction
 * rollback are enforced so replay tests exercise the real event/award helpers.
 * Throws only when a test invokes a duplicate event or enables a simulated failure.
 */
function createFixture() {
    const state = {
        events: [] as Array<{ id: string; payloadHash: string }>,
        skills: [] as Array<{ userId: number; skillId: string }>,
        skillEvents: [] as Array<{ eventId: string; userId: number; sourceTypeId: string }>,
        summaryWrites: 0,
    };
    const failures = { award: false };

    mock.method(eventHelper, 'ensurePayloadChallengeExists', async () => {});
    mock.method(eventHelper, 'ensurePayloadWinnersAreValidUsers', async () => {});
    mock.method(eventHelper, 'ensureMembersExist', async () => {});
    mock.method(challengeHelper, 'checkIsMarathonMatch', async () => true);
    mock.method(resourceHelper, 'fetchReviewersForChallenge', async () => []);
    mock.method(resourceHelper, 'fetchCopilotsForChallenge', async () => []);
    mock.method(reviewsHelper, 'loadPassingSubmissions', async () => []);

    /**
     * Binds Prisma operations to the supplied committed or transaction state.
     * Returns the subset used by the award service; create operations throw on
     * duplicate event hashes or the fixture's simulated skill-write failure.
     */
    function createClient(rows: typeof state) {
        return {
            event: {
                create: async ({ data }: { data: { payloadHash: string } }) => {
                    if (rows.events.some((event) => event.payloadHash === data.payloadHash)) {
                        throw new Prisma.PrismaClientKnownRequestError('Duplicate payload', {
                            code: 'P2002',
                            clientVersion: 'test',
                        });
                    }
                    const event = { ...data, id: `event-${rows.events.length + 1}` };
                    rows.events.push(event);
                    return event;
                },
            },
            skill: { count: async () => 1 },
            sourceType: { findUnique: async ({ where }: { where: { name: string } }) => ({ id: where.name }) },
            userSkillLevel: { findUnique: async () => ({ id: 'verified' }) },
            userSkillDisplayMode: { findUnique: async () => ({ id: 'additional' }) },
            skillEventType: {
                findMany: async () => Object.values(SkillEventTypes).map((name) => ({ id: name, name })),
            },
            userSkill: {
                createMany: async ({ data }: { data: typeof rows.skills }) => rows.skills.push(...data),
            },
            skillEvent: {
                createMany: async ({ data }: { data: typeof rows.skillEvents }) => {
                    if (failures.award) {
                        throw new Error('Temporary skill write failure');
                    }
                    rows.skillEvents.push(...data);
                },
            },
            $executeRaw: async () => { rows.summaryWrites += 1; },
        };
    }

    const client = {
        ...createClient(state),
        $transaction: async (callback: (tx: ReturnType<typeof createClient>) => Promise<void>) => {
            const pending = structuredClone(state);
            await callback(createClient(pending));
            Object.assign(state, pending);
        },
    };

    return { state, failures, service: new SkillEventsService(client as unknown as PrismaService) };
}

describe('completed Marathon Match skill events', () => {
    afterEach(() => mock.restoreAll());

    it('allows the same completion payload to succeed after a temporary validation failure', async () => {
        const { service, state } = createFixture();
        mock.method(eventHelper, 'ensurePayloadChallengeExists', async () => {
            throw new Error('Temporary challenge lookup failure');
        }, { times: 1 });

        await assert.rejects(service.processSkillEvent(currentUser, request), /Temporary challenge lookup failure/);
        assert.equal(state.events.length, 0);
        await service.processSkillEvent(currentUser, request);
        assert.equal(state.skills.length, 1);
        assert.equal(state.events.length, 1);
    });

    it('rolls back the event marker and awards together so failed writes can be replayed', async () => {
        const { service, state, failures } = createFixture();
        failures.award = true;

        await assert.rejects(service.processSkillEvent(currentUser, request), /Temporary skill write failure/);
        assert.deepEqual(structuredClone(state), { events: [], skills: [], skillEvents: [], summaryWrites: 0 });

        failures.award = false;
        await service.processSkillEvent(currentUser, request);
        assert.equal(state.events.length, 1);
        assert.equal(state.skills.length, 1);
        assert.equal(state.skillEvents.length, 1);
        assert.equal(state.skillEvents[0].eventId, state.events[0].id);
        assert.equal(state.skillEvents[0].sourceTypeId, WorkType.marathonMatch);
        assert.equal(state.summaryWrites, 1);
    });

    it('keeps successful completion events protected against duplicate awards', async () => {
        const { service, state } = createFixture();
        await service.processSkillEvent(currentUser, request);
        const committed = structuredClone(state);

        await assert.rejects(service.processSkillEvent(currentUser, request), /Event has already been processed/);
        assert.deepEqual(state, committed);
    });

    it('keeps ordinary challenge awards working with the challenge source type', async () => {
        const { service, state } = createFixture();
        mock.method(challengeHelper, 'checkIsMarathonMatch', async () => false);

        await service.processSkillEvent(currentUser, request);
        assert.equal(state.events.length, 1);
        assert.equal(state.skills.length, 1);
        assert.equal(state.skillEvents[0].sourceTypeId, WorkType.challenge);
    });
});
