export interface IBasePaginatedRequest {
    page?: number;
    perPage?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}

export interface IAutocompleteRequestQuery {
    term: string;
    size: number;
}

export type IChangeToMandatory<T> = {
    [Property in keyof T]-?: T[Property];
};
