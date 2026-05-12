import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

type PrismaIdClient = Prisma.TransactionClient | PrismaService;

export const bulkCheckValidIdsWithPrisma = async (
    client: PrismaIdClient,
    modelName: 'skill',
    ids: string[],
): Promise<boolean> => {
    if (ids.length === 0) {
        return true;
    }

    const uniqueIds = [...new Set(ids)];

    switch (modelName) {
        case 'skill': {
            const count = await client.skill.count({ where: { id: { in: uniqueIds } } });
            return count === uniqueIds.length;
        }
    }
};
