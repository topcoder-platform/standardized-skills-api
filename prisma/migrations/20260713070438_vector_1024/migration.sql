-- Clear existing embeddings (incompatible with new model anyway)
UPDATE skill SET name_embedding = NULL;

-- Change dimension
ALTER TABLE skill 
  ALTER COLUMN name_embedding TYPE public.vector(1024);
