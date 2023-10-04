import { get } from 'lodash';
import db from '../db';
import { FindAndCountOptions } from 'sequelize';
import { NotFoundError } from './ApiError';

/**
 * Generic function to fetch records from a table and count all records
 */
export const findAndCountAll = async (model: string, opts: FindAndCountOptions = {}) => {
    const dbmodel = get(db.models, model);

    if (!dbmodel) throw new NotFoundError(`Model ${model} not found!`);

    return dbmodel.findAndCountAll(opts);
};
