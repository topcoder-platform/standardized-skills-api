-- Composite index to support member search skill filtering:
-- queries filter by skill_id = ANY(...) then group/join by user_id.
CREATE INDEX "idx_user_skill_skill_user"
  ON "user_skill" ("skill_id", "user_id");
