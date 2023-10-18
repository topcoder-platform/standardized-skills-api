import { SkillCategory } from '../db';
import { AllCategoryRequestDto } from '../dto/CategoryRequest.dto';
import { LoggerClient } from '../utils/LoggerClient';
import { NotFoundError } from '../utils/errors';
import { findAndCountPaginated } from '../utils/postgres-helper';

const logger = new LoggerClient('SkillCategoryService');

export const getAllCategories = async (query: AllCategoryRequestDto) => {
    logger.info(`Fetching all categories with query: ${JSON.stringify(query)}`);
    const { categories, ...paginationValues } = await findAndCountPaginated(SkillCategory, 'categorie', query, {
        attributes: ['id', 'name', 'description'],
    });
    if (paginationValues.total === 0) {
        throw new NotFoundError('No categories exist!');
    }
    logger.info(`Fethced categories successfully: ${JSON.stringify(categories)}`);

    return {
        categories,
        ...paginationValues,
    };
};
