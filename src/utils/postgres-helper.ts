import { isNull } from 'lodash';
import { WhereOptions, Op } from 'sequelize';
import { Model, ModelCtor } from 'sequelize-typescript';

import { BadRequestError, ConflictError } from './errors';
import { DbModelsType } from '../db';

/**
 * Convert types for fixing typescript types looping
 */
const getModelCtor = (model: DbModelsType): ModelCtor => (
    model as unknown as ModelCtor
);

/**
 * Finds the record matching the given search criteria in the database
 *
 * @param model
 * @param where
 */
const findByCriteria = async (model: DbModelsType, criteria: WhereOptions): Promise<Model | null> => {
    return getModelCtor(model).findOne({ where: criteria });
};

/**
 * Validates the uniqueness of the model record satisfying the given criteria in the database
 *
 * @param model
 * @param criteria
 */
export const checkIsUnique = async (model: DbModelsType, criteria: WhereOptions): Promise<boolean> => {
    const record = await findByCriteria(model, criteria);
    return isNull(record);
};

/**
 * Check if given id is a valid existing entry
 * @param model 
 * @param id 
 */
export const checkValidId = async (model: DbModelsType, id: string): Promise<boolean> => {
    const data = await findByCriteria(model, { id });
    return !isNull(data);
};

/**
 * Check if given ids list are valid existing entries
 * @param model
 * @param ids
 */
export const bulkCheckValidIds = async (model: DbModelsType, ids: string[]): Promise<boolean> => {
    const count = await getModelCtor(model).count({where: {id: {[Op.in]: ids}}});
    return count === ids.length;
};
