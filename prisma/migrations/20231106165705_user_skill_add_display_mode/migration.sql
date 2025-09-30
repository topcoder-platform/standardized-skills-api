ALTER TABLE "user_skill"
    ADD COLUMN "user_skill_display_mode_id" UUID NOT NULL DEFAULT '1555aa05-a764-4f0b-b3e0-51b824382abb';

ALTER TABLE "user_skill"
    ADD CONSTRAINT "user_skill_user_skill_display_mode_id_fkey"
        FOREIGN KEY ("user_skill_display_mode_id") REFERENCES "user_skill_display_mode" ("id");

CREATE INDEX "fki_fk_user_skill_display_mode" ON "user_skill" ("user_skill_display_mode_id");
