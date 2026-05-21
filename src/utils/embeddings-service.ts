import { envConfig } from '../config';

/**
 * Embedding helpers for the local Ollama API.
 *
 * Configuration is read from `envConfig.OLLAMA`:
 * - `API_URL`: base URL for Ollama (e.g., http://localhost:11434)
 * - `EMBEDDINGS_PATH`: embedding endpoint path (e.g., /api/embed)
 * - `EMBEDDING_MODEL`: model name (e.g., qwen3-embedding:latest)
 */

/**
 * Normalizes base URLs by removing a trailing slash.
 */
function normalizeApiBase(url: string): string {
    return url.replace(/\/$/, '');
}

/**
 * Fetches an embedding vector from the Ollama embeddings endpoint.
 *
 * @param input - Text to embed.
 * @param dimensions - Optional output dimensionality supported by the model.
 * @returns A numeric vector, or `null` if the input is empty.
 */
export async function fetchOllamaEmbedding(input: string, dimensions = 1536): Promise<number[] | null> {
    const trimmed = input?.trim();
    if (!trimmed) {
        return null;
    }

    const response = await fetch(`${normalizeApiBase(envConfig.OLLAMA.API_URL)}${envConfig.OLLAMA.EMBEDDINGS_PATH}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: envConfig.OLLAMA.EMBEDDING_MODEL,
            input: trimmed,
            dimensions,
        }),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Embedding request failed: ${response.status} ${response.statusText} - ${text}`);
    }

    const payload: any = await response.json();
    const embedding = payload.embeddings || payload.data?.[0]?.embedding || [];

    if (!Array.isArray(embedding)) {
        throw new Error('Embedding response did not include a valid embedding array');
    }

    return embedding as number[];
}

/**
 * Converts a numeric vector into a Postgres `vector` literal.
 *
 * Example: `[0.1,0.2,0.3]`
 */
export function toVectorLiteral(embedding: number[] | null): string | null {
    if (!embedding) {
        return null;
    }
    return `[${embedding.join(',')}]`;
}
