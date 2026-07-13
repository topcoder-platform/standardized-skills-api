import { envConfig } from '../config';
import { bedrock as amazonBedrock } from '../providers/bedrock';
import { embed } from 'ai';

/**
 * Fetches an embedding vector from the Ollama embeddings endpoint.
 *
 * @param input - Text to embed.
 * @returns A numeric vector, or `null` if the input is empty.
 */
export async function fetchEmbedding(input: string): Promise<number[] | null> {
    const trimmed = input?.trim();
    if (!trimmed) {
        return null;
    }

    console.log(`[fetchEmbedding] Creating model for: ${envConfig.EMBEDDING_MODEL}`);
    const model = amazonBedrock.embedding(envConfig.EMBEDDING_MODEL);

    console.log(`[fetchEmbedding] Calling embed for: "${trimmed.slice(0, 50)}..."`);
    const { embedding } = await embed({
        model,
        value: trimmed,
        experimental_telemetry: { isEnabled: false },
    });
    console.log(`[fetchEmbedding] Got embedding with ${embedding?.length} dimensions`);

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
