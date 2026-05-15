-- Pre-computed win/submission counts per (user_id, skill_id).
-- Maintained incrementally by the application on each skill_event insert.
-- Eliminates the multi-CTE aggregation in the reports-api member search.
CREATE TABLE "user_skill_win_summary" (
  "user_id"            INTEGER     NOT NULL,
  "skill_id"           UUID        NOT NULL,
  "wins"               INTEGER     NOT NULL DEFAULT 0,
  "submitted"          INTEGER     NOT NULL DEFAULT 0,
  "event_type_counts"  JSONB       NOT NULL DEFAULT '{}',
  "updated_at"         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("user_id", "skill_id")
);

-- Supports the (skill_id, user_id) access pattern used by member search
CREATE INDEX "idx_user_skill_win_summary_skill_user"
  ON "user_skill_win_summary" ("skill_id", "user_id");

-- Backfill from existing skill_event rows so that production history is captured.
-- Uses the same win logic as the reports-api member-search query:
--   a "win" is any event whose type name is one of the known win types,
--   or whose source type name is 'engagement'.
-- event_type_counts is a JSONB map of {event_type_name: count} — no schema
-- changes needed when new event types are added.
WITH type_counts AS (
  SELECT
    se.user_id,
    se.skill_id,
    set_t.name AS event_type,
    COUNT(*)::integer AS cnt
  FROM skill_event se
  JOIN skill_event_type set_t ON set_t.id = se.skill_event_type_id
  GROUP BY se.user_id, se.skill_id, set_t.name
),
aggregated AS (
  SELECT
    user_id,
    skill_id,
    jsonb_object_agg(event_type, cnt) AS event_type_counts
  FROM type_counts
  GROUP BY user_id, skill_id
),
totals AS (
  SELECT
    se.user_id,
    se.skill_id,
    COUNT(*) FILTER (
      WHERE set_t.name IN (
        'challenge_win', 'challenge_2nd_place', 'challenge_3rd_place',
        'gig_completion', 'engagement_assignment'
      )
      OR sest.name = 'engagement'
    )::integer AS wins,
    COUNT(*)::integer AS submitted
  FROM skill_event se
  JOIN skill_event_type set_t ON set_t.id = se.skill_event_type_id
  JOIN source_type       sest ON sest.id  = se.source_type_id
  GROUP BY se.user_id, se.skill_id
)
INSERT INTO "user_skill_win_summary" ("user_id", "skill_id", "wins", "submitted", "event_type_counts", "updated_at")
SELECT t.user_id, t.skill_id, t.wins, t.submitted, a.event_type_counts, NOW()
FROM totals t
JOIN aggregated a USING (user_id, skill_id)
ON CONFLICT ("user_id", "skill_id") DO UPDATE
  SET wins               = EXCLUDED.wins,
      submitted          = EXCLUDED.submitted,
      event_type_counts  = EXCLUDED.event_type_counts,
      updated_at         = EXCLUDED.updated_at;
