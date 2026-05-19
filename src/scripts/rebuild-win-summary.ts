/**
 * Standalone rebuild script for user_skill_win_summary.
 *
 * Rebuilds the entire table from the raw skill_event data, using the same win
 * logic as the reports-api member-search query.
 *
 * Run with:
 *   pnpm exec ts-node -r tsconfig-paths/register src/scripts/rebuild-win-summary.ts
 *
 * Safe to re-run at any time; uses INSERT … ON CONFLICT DO UPDATE so it never
 * leaves the table in a partial state.
 */

import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from '../app.module';
import { PrismaService } from '../prisma/prisma.service';

async function bootstrap() {
    const logger = new Logger('rebuild-win-summary');
    const app = await NestFactory.createApplicationContext(AppModule, { logger: ['error', 'warn', 'log'] });
    const prisma = app.get(PrismaService);

    logger.log('Rebuilding user_skill_win_summary from skill_event …');

    const result = await prisma.$executeRaw`
        WITH type_counts AS (
            SELECT
                se.user_id,
                se.skill_id,
                set_t.name AS event_type,
                COUNT(*)::integer AS cnt
            FROM skill_event se
            JOIN skill_event_type set_t ON set_t.id = se.skill_event_type_id
            GROUP BY se.user_id, se.skill_id, set_t.name
        ),
        aggregated AS (
            SELECT
                user_id,
                skill_id,
                jsonb_object_agg(event_type, cnt) AS event_type_counts
            FROM type_counts
            GROUP BY user_id, skill_id
        ),
        totals AS (
            SELECT
                se.user_id,
                se.skill_id,
                COUNT(*) FILTER (
                    WHERE set_t.name IN (
                        'challenge_win', 'challenge_2nd_place', 'challenge_3rd_place',
                        'gig_completion', 'engagement_assignment'
                    )
                    OR sest.name = 'engagement'
                )::integer AS wins,
                COUNT(*)::integer AS submitted
            FROM skill_event se
            JOIN skill_event_type set_t ON set_t.id = se.skill_event_type_id
            JOIN source_type       sest ON sest.id  = se.source_type_id
            GROUP BY se.user_id, se.skill_id
        )
        INSERT INTO user_skill_win_summary (user_id, skill_id, wins, submitted, event_type_counts, updated_at)
        SELECT t.user_id, t.skill_id, t.wins, t.submitted, a.event_type_counts, NOW()
        FROM totals t
        JOIN aggregated a USING (user_id, skill_id)
        ON CONFLICT (user_id, skill_id) DO UPDATE
            SET wins              = EXCLUDED.wins,
                submitted         = EXCLUDED.submitted,
                event_type_counts = EXCLUDED.event_type_counts,
                updated_at        = EXCLUDED.updated_at`;

    logger.log(`Done — ${result} rows upserted.`);
    await app.close();
}

bootstrap().catch((err) => {
    console.error(err);
    process.exit(1);
});
