/* eslint-disable */
// @ts-nocheck
const dotenv = require('dotenv');
const { resolve, dirname } = require('node:path');
const { QueryTypes } = require('sequelize');
const { find, uniq } = require('lodash');

function getArgValue(flag) {
    const match = process.argv.find((arg) => arg.startsWith(`${flag}=`));
    if (!match) {
        return undefined;
    }
    return match.split('=').slice(1).join('=');
}

function hasFlag(flag) {
    return process.argv.includes(flag) || process.argv.some((arg) => arg.startsWith(`${flag}=`));
}

const envName = getArgValue('--env');
const envFileOverride = getArgValue('--env-file');
const envFileName = envFileOverride ? envFileOverride : envName ? `.env.${envName}` : '.env';

dotenv.config({ path: resolve(__dirname, '..', envFileName) });
console.log(`Using env file: ${envFileName}`);

const dbModule = require('../src/db');
const db = dbModule.default ?? dbModule;
const { getResourcesSequelize } = require('../src/db/resources-db');
const {
    CHALLENGE_COPILOT_ROLE,
    SkillEventTypes,
    WorkType,
    envConfig,
} = require('../src/config');
const { fetchAllSkillEventTypes } = require('../src/utils/skill-events-helper');
const { fetchSourceType } = require('../src/utils/skills-helper');
const { buildQualifiedTable, disableSearchPath } = require('../src/utils/sequelize-query.helpers');

const limit = getArgValue('--limit') ? Number.parseInt(getArgValue('--limit'), 10) : undefined;
const offset = getArgValue('--offset') ? Number.parseInt(getArgValue('--offset'), 10) : 0;
const batchSize = getArgValue('--batch-size') ? Number.parseInt(getArgValue('--batch-size'), 10) : 500;
const includeMarathonMatches = hasFlag('--include-marathon');
const dryRun = hasFlag('--dry-run');

async function getSkillEventTypeIds() {
    const allSkillEventTypes = await fetchAllSkillEventTypes(true);
    const copilotType = find(allSkillEventTypes, { name: SkillEventTypes.challengeCopilot });
    const finisherType = find(allSkillEventTypes, { name: SkillEventTypes.challengeFinisher });

    if (!copilotType) {
        throw new Error(`Missing skill_event_type for ${SkillEventTypes.challengeCopilot}`);
    }
    if (!finisherType) {
        throw new Error(`Missing skill_event_type for ${SkillEventTypes.challengeFinisher}`);
    }

    return { copilotTypeId: copilotType.id, finisherTypeId: finisherType.id };
}

async function loadCopilotResourcesBatch(batchOffset, batchLimit) {
    const resourcesSequelize = getResourcesSequelize();
    const tableName = envConfig.RESOURCES_DB.SCHEMA
        ? buildQualifiedTable(envConfig.RESOURCES_DB.SCHEMA, 'Resource')
        : '"Resource"';

    const rows = await resourcesSequelize.query(
        `
        SELECT "challengeId", "memberId"
        FROM ${tableName}
        WHERE "roleId" = :roleId
        ORDER BY "challengeId" ASC
        LIMIT :limit OFFSET :offset
        `,
        {
            replacements: {
                roleId: CHALLENGE_COPILOT_ROLE,
                limit: batchLimit,
                offset: batchOffset,
            },
            type: QueryTypes.SELECT,
            plain: false,
            ...disableSearchPath,
        },
    );

    return rows ?? [];
}

async function countCopilotChallenges() {
    const resourcesSequelize = getResourcesSequelize();
    const tableName = envConfig.RESOURCES_DB.SCHEMA
        ? buildQualifiedTable(envConfig.RESOURCES_DB.SCHEMA, 'Resource')
        : '"Resource"';

    const rows = await resourcesSequelize.query(
        `
        SELECT COUNT(DISTINCT "challengeId")::int as total
        FROM ${tableName}
        WHERE "roleId" = :roleId
        `,
        {
            replacements: {
                roleId: CHALLENGE_COPILOT_ROLE,
            },
            type: QueryTypes.SELECT,
            plain: false,
            ...disableSearchPath,
        },
    );

    return rows?.[0]?.total ? Number(rows[0].total) : 0;
}

async function updateSkillEvents(skillEventTable, challengeId, memberIds, sourceTypeIds, finisherTypeId, copilotTypeId) {
    const rows = await db.sequelize.query(
        `
        UPDATE ${skillEventTable}
        SET "skill_event_type_id" = :copilotTypeId
        WHERE "source_id" = :challengeId
          AND "source_type_id" IN (:sourceTypeIds)
          AND "user_id" IN (:memberIds)
          AND "skill_event_type_id" = :finisherTypeId
        RETURNING "id"
        `,
        {
            replacements: { challengeId, memberIds, sourceTypeIds, finisherTypeId, copilotTypeId },
            type: QueryTypes.SELECT,
            plain: false,
        },
    );

    return rows?.length ?? 0;
}

async function run() {
    if (!envConfig.DB_URL) {
        throw new Error('TC_SKILLS_DATABASE_URL must be configured.');
    }

    if (!envConfig.RESOURCES_DB.URL) {
        throw new Error('RESOURCES_DB_URL must be configured.');
    }

    const { copilotTypeId, finisherTypeId } = await getSkillEventTypeIds();
    const challengeSourceType = await fetchSourceType(WorkType.challenge);
    const mmSourceType = await fetchSourceType(WorkType.marathonMatch);
    const sourceTypeIds = includeMarathonMatches
        ? [challengeSourceType.id, mmSourceType.id]
        : [challengeSourceType.id];

    const skillEventTable = envConfig.DB_SCHEMA
        ? buildQualifiedTable(envConfig.DB_SCHEMA, 'skill_event')
        : '"skill_event"';

    const totalChallenges = await countCopilotChallenges();
    const totalBatches = batchSize > 0 ? Math.ceil(totalChallenges / batchSize) : 0;
    console.log(
        `Total copilot challenges to process: ${totalChallenges}. Total batches: ${totalBatches}.`,
    );
    if (offset || limit) {
        console.log(`Run constraints: offset=${offset}, limit=${limit ?? 'none'}.`);
    }

    let batchOffset = offset;
    let batchIndex = 0;
    let processedChallenges = 0;
    let totalUpdated = 0;

    while (true) {
        const rows = await loadCopilotResourcesBatch(batchOffset, batchSize);
        if (rows.length === 0) {
            break;
        }

        batchIndex += 1;
        const grouped = new Map();
        for (const row of rows) {
            if (!row.challengeId || row.memberId === null || row.memberId === undefined) {
                continue;
            }
            const list = grouped.get(row.challengeId) ?? [];
            list.push(Number(row.memberId));
            grouped.set(row.challengeId, list);
        }

        console.log(`Loaded batch ${batchIndex} with ${grouped.size} challenges (offset ${batchOffset}).`);

        for (const [challengeId, memberIdsRaw] of grouped.entries()) {
            const memberIds = uniq(memberIdsRaw).filter((id) => Number.isFinite(id));
            if (memberIds.length === 0) {
                continue;
            }

            if (dryRun) {
                console.log(`Dry run: challenge ${challengeId} update skipped.`);
            } else {
                const updated = await updateSkillEvents(
                    skillEventTable,
                    challengeId,
                    memberIds,
                    sourceTypeIds,
                    finisherTypeId,
                    copilotTypeId,
                );
                if (updated > 0) {
                    totalUpdated += updated;
                    console.log(`Updated ${updated} rows for challenge ${challengeId}.`);
                }
            }

            processedChallenges += 1;
            if (limit && processedChallenges >= limit) {
                break;
            }
        }

        if (limit && processedChallenges >= limit) {
            break;
        }

        batchOffset += batchSize;
    }

    if (dryRun) {
        console.log(`Dry run done. Processed ${processedChallenges} challenges. No updates made.`);
    } else {
        console.log(`Done. Updated ${totalUpdated} rows across ${processedChallenges} challenges.`);
    }
}

run()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(async () => {
        const closers = [db.sequelize.close()];
        if (envConfig.RESOURCES_DB.URL) {
            closers.push(getResourcesSequelize().close());
        }
        await Promise.allSettled(closers);
    });
