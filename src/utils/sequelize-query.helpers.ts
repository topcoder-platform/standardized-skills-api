import { InternalServerError } from "./errors";


export function validateIdentifier(value: string, kind: 'schema' | 'table' | 'column') {
    if (!/^[A-Za-z0-9_]+$/.test(value)) {
        throw new InternalServerError(`Invalid ${kind} name for member database access`);
    }
}

export function buildQualifiedTable(schema: string, table: string): string {
    validateIdentifier(schema, 'schema');
    validateIdentifier(table, 'table');

    return `"${schema}"."${table}"`;
}

export function formatError(error: unknown): string {
    if (error instanceof Error) {
        return error.stack ?? `${error.name}: ${error.message}`;
    }

    try {
        return JSON.stringify(error);
    } catch {
        return String(error);
    }
}

export const disableSearchPath = { supportsSearchPath: false } as any;