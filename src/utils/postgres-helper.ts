import { isEmpty, isNull, isUndefined } from 'lodash';
import { WhereOptions, Op, FindAndCountOptions, Model, ModelCtor } from 'sequelize';

import { DbModelsType } from '../db';
import { BasePaginatedSortedRequest } from '../dto';

/**
 * Convert types for fixing typescript types looping
 * Sequelize's ModelCtor requires a model type parameter. Use a broad Model
 * instance type here to satisfy the generic constraint across all models.
 */
type AnyModelCtor = ModelCtor<Model<any, any>>;
const getModelCtor = (model: DbModelsType): AnyModelCtor => model as unknown as AnyModelCtor;

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
    const count = await getModelCtor(model).count({ where: { id: { [Op.in]: ids } } });
    return count === ids.length;
};

export async function findAndCountPaginated<T>(
    model: DbModelsType,
    recordName: string,
    queryOptions: BasePaginatedSortedRequest,
    extraQueryOptions?: FindAndCountOptions,
) {
    const DbModel = getModelCtor(model);

    const isPaginationDisabled = `${queryOptions.disablePagination}` === 'true';

    const pgQuery: FindAndCountOptions = isPaginationDisabled
        ? { ...extraQueryOptions }
        : {
              limit: queryOptions.perPage,
              offset: (queryOptions.page - 1) * queryOptions.perPage,
              ...extraQueryOptions,
          };

    if (queryOptions.sortBy) {
        // sorting is optional
        pgQuery.order = [
            [queryOptions.sortBy, queryOptions.sortOrder],
            // secondary custom order by
            ...((extraQueryOptions?.order as any[]) ?? []),
        ];
    }

    if ((queryOptions as any).showArchived === 'true') {
        pgQuery.paranoid = false;
        pgQuery.attributes = [...((pgQuery.attributes as string[]) ?? []), 'deleted_at'];
    }

    const [count, rows] = await Promise.all([
        DbModel.count({ ...pgQuery, attributes: [], distinct: true, col: 'id' }),
        DbModel.findAll(pgQuery),
    ]);

    if (isEmpty(rows) || isUndefined(rows)) {
        return {
            [recordName]: [] as T[],
            page: 1,
            perPage: 0,
            total: 0,
            totalPages: 0,
        };
    }

    const results = {
        [recordName]: rows as unknown as T[],
    };

    return isPaginationDisabled
        ? results
        : {
              ...results,
              page: queryOptions.page,
              perPage: queryOptions.perPage,
              total: count,
              totalPages: Math.ceil(count / queryOptions.perPage),
          };
}
