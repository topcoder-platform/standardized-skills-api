import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';
import { AuthUser } from '../../common/interfaces/auth-user.interface';
import {
    GetAutocompleteRequestQueryDto,
    GetSkillsQueryRequestDto,
    SemanticSearchRequestQueryDto,
    SkillCreationRequestBodyDto,
    SkillUpdatePatchRequestBodyDto,
    SkillUpdatePutRequestBodyDto,
} from '../../dto';
import { BadRequestError, ConflictError, InternalServerError, NotFoundError } from '../../utils/errors';
import { DEFAULT_SUGGESTIONS_SIZE, MAX_SUGGESTIONS_SIZE } from '../../config';
import { fetchOllamaEmbedding, toVectorLiteral } from '../../utils/embeddings-service';

type SkillWithCategory = Prisma.SkillGetPayload<{
    include: { category: true };
}>;

type AutocompleteSkill = SkillWithCategory;

@Injectable()
export class SkillsService {
    private readonly logger = new Logger(SkillsService.name);

    constructor(private readonly prisma: PrismaService) {}

    private clampSuggestionSize(size?: number) {
        const requested = size ?? DEFAULT_SUGGESTIONS_SIZE;
        return Math.min(requested, MAX_SUGGESTIONS_SIZE);
    }

    private mapSkillToAutocompleteResult(skill: AutocompleteSkill) {
        return {
            id: skill.id,
            name: skill.name,
            category: skill.category
                ? {
                      id: skill.category.id,
                      name: skill.category.name,
                  }
                : null,
        };
    }

    /**
     * Performs a semantic search over skills using pgvector distance.
     *
     * Workflow:
     * 1) Generate an embedding for the input text.
     * 2) Compute distance against `name_embedding` .
     *
     * Returns a list of skills ordered by increasing distance, including `weighted_distance`.
     */
    async semanticSearch(payload: SemanticSearchRequestQueryDto) {
        this.logger.log(`Semantic skills search based on request ${JSON.stringify(payload)}`);

        const embeddingQuery = await fetchOllamaEmbedding(payload.text);
        
        if (!embeddingQuery || !embeddingQuery.length) {
            return [];
        }

        this.logger.log('Succesfully generated embeddings from the search text.');

        const vectorLiteral = toVectorLiteral(embeddingQuery);

        const results = await this.prisma.$queryRaw<
            { id: string; name: string; description: string | null; weighted_distance: number }[]
        >(Prisma.sql`
            SELECT id,
                   name,
                   description,
                   "name_embedding" OPERATOR(public.<->) ${vectorLiteral}::public.vector AS weighted_distance
            FROM "skill"
            WHERE "deleted_at" IS NULL
            ORDER BY weighted_distance ASC
            LIMIT 10
        `);

        return results;
    }

    async getAllSkills(query: GetSkillsQueryRequestDto) {
        this.logger.log(`Fetching skills based on request ${JSON.stringify(query)}`);

        const showArchived = query.showArchived !== undefined && `${query.showArchived}` !== 'false';
        const disablePagination = query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

        const where: Prisma.SkillWhereInput = {};

        if (!showArchived) {
            where.deletedAt = null;
        }

        if (query.skillId?.length) {
            where.id = { in: query.skillId };
        } else if (query.name?.length) {
            where.name = { in: query.name };
        }

        const orderBy = this.buildOrderBy(query.sortBy, query.sortOrder);

        const commonArgs = {
            where,
            include: {
                category: true,
            },
            orderBy,
        };

        let skills: SkillWithCategory[] = [];
        let total = 0;

        if (disablePagination) {
            skills = await this.prisma.skill.findMany(commonArgs);
            total = skills.length;
        } else {
            const skip = (query.page - 1) * query.perPage;
            const [queriedSkills, count] = await this.prisma.$transaction([
                this.prisma.skill.findMany({
                    ...commonArgs,
                    skip,
                    take: query.perPage,
                }),
                this.prisma.skill.count({ where }),
            ]);
            skills = queriedSkills;
            total = count;
        }

        const serializedSkills = skills.map((skill) => this.serializeSkill(skill, showArchived));

        if (disablePagination) {
            return {
                skills: serializedSkills,
            };
        }

        const totalPages = total === 0 ? 0 : Math.ceil(total / query.perPage);

        return {
            skills: serializedSkills,
            page: query.page,
            perPage: query.perPage,
            total,
            totalPages,
        };
    }

    async getSkillById(skillId: string) {
        this.logger.log(`Fetching skill by id ${skillId}`);

        const skill = await this.prisma.skill.findUnique({
            where: { id: skillId },
            include: { category: true },
        });

        if (!skill || skill.deletedAt) {
            throw new NotFoundError(`Skill with id ${skillId} does not exist!`);
        }

        return this.serializeSkill(skill);
    }

    async createSkill(_user: AuthUser, newSkill: SkillCreationRequestBodyDto) {
        this.logger.log(`Creating skill from data ${JSON.stringify(newSkill)}`);

        return this.prisma.$transaction(async (tx) => {
            if (!(await this.isSkillNameUnique(tx, newSkill.name))) {
                throw new ConflictError(`Skill with name ${newSkill.name} already exists!`);
            }

            const category = await tx.skillCategory.findUnique({
                where: { id: newSkill.categoryId },
            });

            if (!category) {
                throw new BadRequestError(`The category with id ${newSkill.categoryId} does not exist!`);
            }

            const nameEmbedding = await fetchOllamaEmbedding(newSkill.name);
            const nameEmbeddingLiteral = toVectorLiteral(nameEmbedding);

            const skill = await tx.skill.create({
                data: {
                    name: newSkill.name,
                    description: newSkill.description,
                    categoryId: newSkill.categoryId,
                },
                include: {
                    category: true,
                },
            });

            if (nameEmbeddingLiteral) {
                await tx.$executeRaw(Prisma.sql`
                    UPDATE "skill"
                    SET "name_embedding" = ${nameEmbeddingLiteral}::public.vector
                    WHERE id = ${skill.id}::uuid
                `);
            }

            if (!skill.category) {
                throw new InternalServerError('Unable to load category information for created skill');
            }

            this.logger.log(`Skill created successfully ${JSON.stringify({ id: skill.id })}`);
            return this.serializeSkill(skill);
        });
    }

    async updateSkill(_user: AuthUser, body: SkillUpdatePutRequestBodyDto, id: string) {
        this.logger.log(`Update skill ${id} as per data ${JSON.stringify(body)}`);

        return this.prisma.$transaction(async (tx) => {
            const existingSkill = await tx.skill.findUnique({
                where: { id },
                include: { category: true },
            });

            if (!existingSkill || existingSkill.deletedAt) {
                throw new NotFoundError(`Skill with id ${id} does not exist!`);
            }

            if (!(await this.isSkillNameUnique(tx, body.name, id))) {
                throw new ConflictError(`Skill with name ${body.name} already exists!`);
            }

            const category = await tx.skillCategory.findUnique({
                where: { id: body.categoryId },
            });

            if (!category) {
                throw new NotFoundError(`Category with id ${body.categoryId} does not exist!`);
            }

            const nameEmbedding = await fetchOllamaEmbedding(body.name);
            const nameEmbeddingLiteral = toVectorLiteral(nameEmbedding);

            const updatedSkill = await tx.skill.update({
                where: { id },
                data: {
                    name: body.name,
                    description: body.description,
                    categoryId: body.categoryId,
                },
                include: { category: true },
            });

            if (nameEmbeddingLiteral) {
                await tx.$executeRaw(Prisma.sql`
                    UPDATE "skill"
                    SET "name_embedding" = ${nameEmbeddingLiteral}::public.vector
                    WHERE id = ${updatedSkill.id}::uuid
                `);
            }

            if (!updatedSkill.category) {
                throw new InternalServerError('Unable to load category information for updated skill');
            }

            this.logger.log(`Skill with id ${id} updated successfully`);
            return this.serializeSkill(updatedSkill);
        });
    }

    async patchSkill(_user: AuthUser, body: SkillUpdatePatchRequestBodyDto, id: string) {
        this.logger.log(`Update skill ${id} as per data ${JSON.stringify(body)}`);

        if (!body.name && body.description === undefined && !body.categoryId) {
            throw new BadRequestError('No data provded for skill update');
        }

        return this.prisma.$transaction(async (tx) => {
            const existingSkill = await tx.skill.findUnique({
                where: { id },
                include: { category: true },
            });

            if (!existingSkill || existingSkill.deletedAt) {
                throw new NotFoundError(`Skill with id ${id} does not exist!`);
            }

            if (body.name && !(await this.isSkillNameUnique(tx, body.name, id))) {
                throw new ConflictError(`Skill with name ${body.name} already exists!`);
            }

            if (body.categoryId) {
                const categoryExists = await tx.skillCategory.findUnique({
                    where: { id: body.categoryId },
                });

                if (!categoryExists) {
                    throw new NotFoundError(`Category with id ${body.categoryId} does not exist!`);
                }
            }

            const nameEmbedding = body.name ? await fetchOllamaEmbedding(body.name) : null;
            const nameEmbeddingLiteral = body.name ? toVectorLiteral(nameEmbedding) : null;

            const updatedSkill = await tx.skill.update({
                where: { id },
                data: {
                    name: body.name ?? existingSkill.name,
                    description: body.description ?? existingSkill.description,
                    categoryId: body.categoryId ?? existingSkill.categoryId,
                },
                include: { category: true },
            });

            if (nameEmbeddingLiteral) {
                await tx.$executeRaw(Prisma.sql`
                    UPDATE "skill"
                    SET "name_embedding" = ${nameEmbeddingLiteral}::public.vector
                    WHERE id = ${updatedSkill.id}::uuid
                `);
            }

            if (!updatedSkill.category) {
                throw new InternalServerError('Unable to load category information for updated skill');
            }

            this.logger.log(`Skill with id ${id} updated successfully`);
            return this.serializeSkill(updatedSkill);
        });
    }

    async deleteSkill(_user: AuthUser, id: string): Promise<void> {
        this.logger.log(`Deleting skill with id ${id}`);

        await this.prisma.$transaction(async (tx) => {
            const skill = await tx.skill.findUnique({ where: { id } });

            if (!skill || skill.deletedAt) {
                throw new NotFoundError(`The skill with id ${id} does not exist!`);
            }

            await tx.skill.update({
                where: { id },
                data: {
                    deletedAt: new Date(),
                },
            });

            this.logger.log(`Successfully deleted skill with id ${id}`);
        });
    }

    async restoreSkill(id: string) {
        this.logger.log(`Restoring archived skill with id ${id}`);

        return this.prisma.$transaction(async (tx) => {
            const skill = await tx.skill.findUnique({
                where: { id },
                include: { category: true },
            });

            if (!skill) {
                throw new NotFoundError(`The skill with id ${id} does not exist!`);
            }

            if (!skill.deletedAt) {
                return this.serializeSkill(skill);
            }

            const restoredSkill = await tx.skill.update({
                where: { id },
                data: {
                    deletedAt: null,
                },
                include: { category: true },
            });

            if (!restoredSkill.category) {
                throw new InternalServerError('Unable to fetch updated skill details from database!');
            }

            this.logger.log(`Successfully restored archived skill with id ${id}`);
            return this.serializeSkill(restoredSkill);
        });
    }

    async autocompleteSkills(query: GetAutocompleteRequestQueryDto) {
        this.logger.log(`Fetching autocomplete suggestions based on ${JSON.stringify(query)}`);
        const term = query.term.trim();

        if (!term) {
            return [];
        }

        const limit = this.clampSuggestionSize(query.size);

        const prefixMatches = await this.prisma.skill.findMany({
            where: {
                deletedAt: null,
                name: {
                    startsWith: term,
                    mode: 'insensitive',
                },
            },
            include: {
                category: true,
            },
            orderBy: {
                name: 'asc',
            },
            take: limit,
        });

        const results: AutocompleteSkill[] = [...prefixMatches];
        const seenIds = new Set(prefixMatches.map((skill) => skill.id));

        if (results.length < limit) {
            const additionalMatches = await this.prisma.skill.findMany({
                where: {
                    deletedAt: null,
                    name: {
                        contains: term,
                        mode: 'insensitive',
                    },
                    ...(seenIds.size
                        ? {
                              id: {
                                  notIn: Array.from(seenIds),
                              },
                          }
                        : {}),
                },
                include: {
                    category: true,
                },
                orderBy: {
                    name: 'asc',
                },
                take: limit - results.length,
            });

            results.push(...additionalMatches);
        }

        return results.map((skill) => this.mapSkillToAutocompleteResult(skill));
    }

    async fuzzyMatch(query: GetAutocompleteRequestQueryDto) {
        this.logger.log(`Fetching fuzzyMatch suggestions based on ${JSON.stringify(query)}`);
        const term = query.term.trim();

        if (!term) {
            return [];
        }

        const limit = this.clampSuggestionSize(query.size);

        const matches = await this.prisma.skill.findMany({
            where: {
                deletedAt: null,
                name: {
                    contains: term,
                    mode: 'insensitive',
                },
            },
            orderBy: {
                name: 'asc',
            },
            take: limit,
            select: {
                id: true,
                name: true,
            },
        });

        return matches.map((skill) => ({
            id: skill.id,
            name: skill.name,
        }));
    }

    private buildOrderBy(sortBy?: string, sortOrder?: 'ASC' | 'DESC') {
        if (!sortBy) {
            return undefined;
        }

        const mapping: Record<string, keyof Prisma.SkillOrderByWithRelationInput> = {
            name: 'name',
            description: 'description',
            created_at: 'createdAt',
            updated_at: 'updatedAt',
        };

        const field = mapping[sortBy];

        if (!field) {
            return undefined;
        }

        const direction = sortOrder === 'DESC' ? 'desc' : 'asc';

        return [{ [field]: direction } as Prisma.SkillOrderByWithRelationInput];
    }

    private serializeSkill(skill: SkillWithCategory, includeDeleted = false) {
        return {
            id: skill.id,
            name: skill.name,
            description: skill.description ?? undefined,
            ...(includeDeleted ? { deletedAt: skill.deletedAt ?? undefined } : {}),
            category: skill.category
                ? {
                      id: skill.category.id,
                      name: skill.category.name,
                      description: skill.category.description ?? undefined,
                  }
                : null,
        };
    }

    private async isSkillNameUnique(client: Prisma.TransactionClient | PrismaService, name: string, id?: string) {
        const existingSkill = await client.skill.findFirst({
            where: {
                name,
            },
        });

        if (!existingSkill) {
            return true;
        }

        if (id && existingSkill.id === id) {
            return true;
        }

        return false;
    }
}
