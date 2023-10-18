import { isEmpty, isNull } from 'lodash';
import { SkillCategory } from '../db';
import { AllCategoryRequestDto, NewCategoryRequestDto } from '../dto/CategoryRequest.dto';
import { LoggerClient } from '../utils/LoggerClient';
import { ConflictError, NotFoundError } from '../utils/errors';
import { findAndCountPaginated } from '../utils/postgres-helper';
import { AuthUser } from '../types';
import { ensureUserCanCreateCategory } from '../utils/helpers';

const logger = new LoggerClient('SkillCategoryService');

export const getAllCategories = async (query: AllCategoryRequestDto) => {
    logger.info(`Fetching all categories with query: ${JSON.stringify(query)}`);
    const { categories, ...paginationValues } = await findAndCountPaginated<SkillCategory>(
        SkillCategory,
        'categorie',
        query,
        {
            attributes: ['id', 'name', 'description'],
        },
    );
    if (isEmpty(categories)) {
        throw new NotFoundError('No categories exist!');
    }
    logger.info(`Fethced categories successfully: ${JSON.stringify(categories)}`);

    return {
        categories,
        ...paginationValues,
    };
};

export const createNewCategory = async (user: AuthUser, body: NewCategoryRequestDto) => {
    logger.info(`Creating new category as per data ${JSON.stringify(body)}`);

    ensureUserCanCreateCategory(user);

    if (
        !isNull(
            await SkillCategory.findOne({
                where: {
                    name: body.name,
                },
            }),
        )
    ) {
        throw new ConflictError(`Category with name ${body.name} already exists!`);
    }

    const category = await SkillCategory.create({
        name: body.name,
        description: body.description ?? undefined,
    });

    logger.info(`New category successfully created ${JSON.stringify(category)}`);
    return {
        id: category.id,
        name: category.name,
        description: category.description,
    };
};
