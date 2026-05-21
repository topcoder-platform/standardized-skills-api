-- Indexes to support reports-api member search access patterns against skills schema.
CREATE INDEX "idx_skill_event_member_search"
ON "skill_event"("skill_id", "user_id", "source_type_id", "skill_event_type_id");

CREATE INDEX "idx_user_skill_user_display_mode"
ON "user_skill"("user_id", "user_skill_display_mode_id");
