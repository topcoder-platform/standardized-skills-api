import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../src/prisma/prisma.service';
import { fetchOllamaEmbedding, toVectorLiteral } from '../src/utils/embeddings-service';

function getArgValue(flag: string): string | undefined {
    const match = process.argv.find((arg) => arg.startsWith(`${flag}=`));
    if (!match) {
        return undefined;
    }
    return match.split('=').slice(1).join('=');
}

function hasFlag(flag: string): boolean {
    return process.argv.includes(flag) || process.argv.some((arg) => arg.startsWith(`${flag}=`));
}

const batchSize = Number.parseInt(getArgValue('--batch-size') || process.env.EMBEDDINGS_BATCH_SIZE || '50', 10);
const limit = getArgValue('--limit') ? Number.parseInt(getArgValue('--limit') as string, 10) : undefined;
const offset = getArgValue('--offset') ? Number.parseInt(getArgValue('--offset') as string, 10) : 0;
const force = hasFlag('--force');


type SkillRow = {
    id: string;
    name: string;
    description: string | null;
    name_embedding_is_null: boolean;
};

const configService = {
    get: (key: string) => {
        if (key === 'database.url') {
            return process.env.TC_SKILLS_DATABASE_URL ?? '';
        }
        if (key === 'database.schema') {
            return process.env.TC_SKILLS_DATABASE_SCHEMA ?? undefined;
        }
        return undefined;
    },
} as ConfigService;

async function run() {
    if (!process.env.TC_SKILLS_DATABASE_URL) {
        throw new Error('TC_SKILLS_DATABASE_URL must be set in the environment.');
    }

    const prisma = new PrismaService(configService);
    await prisma.$connect();

    let processed = 0;
    let currentOffset = offset;

    while (true) {
        const whereSql = force
            ? Prisma.sql`TRUE`
            : Prisma.sql`("name_embedding" IS NULL)`;

        const rows = await prisma.$queryRaw<SkillRow[]>(Prisma.sql`
            SELECT id,
                   name,
                   description,
                   ("name_embedding" IS NULL) AS name_embedding_is_null
            FROM "skill"
            WHERE ${whereSql}
            ORDER BY id ASC
            LIMIT ${batchSize} OFFSET ${currentOffset}
        `);

        if (rows.length === 0) {
            break;
        }

        for (const row of rows) {
            const currentNameEmbeddingIsNull = row.name_embedding_is_null;

            if (force || currentNameEmbeddingIsNull) {
                const embedding = await fetchOllamaEmbedding(row.name);
                const literal = toVectorLiteral(embedding);
                if (literal === null) {
                    await prisma.$executeRaw(Prisma.sql`
                        UPDATE "skill"
                        SET "name_embedding" = NULL
                        WHERE id = ${row.id}::uuid
                    `);
                } else {
                    await prisma.$executeRaw(Prisma.sql`
                        UPDATE "skill"
                        SET "name_embedding" = ${literal}::public.vector
                        WHERE id = ${row.id}::uuid
                    `);
                }
            }

            processed += 1;
            if (limit && processed >= limit) {
                break;
            }
        }

        if (limit && processed >= limit) {
            break;
        }

        currentOffset += batchSize;
    }

    await prisma.$disconnect();
    console.log(`Done. Processed ${processed} skill records.`);
}

run().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
