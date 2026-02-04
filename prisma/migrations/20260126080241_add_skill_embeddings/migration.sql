CREATE EXTENSION IF NOT EXISTS vector WITH SCHEMA public;

ALTER TABLE "skill" ADD COLUMN "name_embedding" public.vector(1536);