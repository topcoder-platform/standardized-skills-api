export interface basePaginatedRequest {
    page: number;
    perPage: number;
    sortBy: string;
    sortOrder: string;
}

export interface autocompleteQuery {
    term: string;
    size: number;
}
