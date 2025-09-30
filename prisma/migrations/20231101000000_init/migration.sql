-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create table: event
CREATE TABLE "event" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "topic" VARCHAR(255) NOT NULL,
    "payload" JSONB NOT NULL,
    "payload_hash" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "event_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "uniq_payload_hash" UNIQUE ("payload_hash")
);

-- Create table: skill_category
CREATE TABLE "skill_category" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "skill_category_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "uniq_category_name" UNIQUE ("name")
);

-- Create table: skill
CREATE TABLE "skill" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "category_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    CONSTRAINT "skill_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "uniq_skill_name" UNIQUE ("name")
);

-- Create table: skill_event_type
CREATE TABLE "skill_event_type" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "skill_event_type_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "uniq_event_type_name" UNIQUE ("name")
);

-- Create table: source_type
CREATE TABLE "source_type" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "source_type_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "uniq_source_type_name" UNIQUE ("name")
);

-- Create table: user_skill_level
CREATE TABLE "user_skill_level" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_skill_level_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "uniq_skill_level_name" UNIQUE ("name")
);

-- Create table: user_skill_display_mode
CREATE TABLE "user_skill_display_mode" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_skill_display_mode_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "user_skill_display_mode_name_key" UNIQUE ("name")
);

-- Create table: user_skill
CREATE TABLE "user_skill" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" INTEGER NOT NULL,
    "skill_id" UUID NOT NULL,
    "user_skill_level_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_skill_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "uniq_user_skill_type" UNIQUE ("user_id", "skill_id", "user_skill_level_id")
);

-- Create table: skill_event
CREATE TABLE "skill_event" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "event_id" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "skill_id" UUID NOT NULL,
    "skill_event_type_id" UUID NOT NULL,
    "source_id" UUID NOT NULL,
    "source_type_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "skill_event_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "uniq_skill_source_id" UNIQUE ("skill_id", "source_id", "skill_event_type_id", "user_id")
);

-- Create table: work_skill
CREATE TABLE "work_skill" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "work_id" UUID NOT NULL,
    "work_type_id" UUID NOT NULL,
    "skill_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "work_skill_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "uniq_work_skill" UNIQUE ("work_id", "work_type_id", "skill_id")
);

-- Add foreign keys
ALTER TABLE "skill"
    ADD CONSTRAINT "skill_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "skill_category" ("id") ON DELETE SET NULL;

ALTER TABLE "user_skill"
    ADD CONSTRAINT "user_skill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skill" ("id"),
    ADD CONSTRAINT "user_skill_user_skill_level_id_fkey" FOREIGN KEY ("user_skill_level_id") REFERENCES "user_skill_level" ("id");

ALTER TABLE "skill_event"
    ADD CONSTRAINT "skill_event_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "event" ("id"),
    ADD CONSTRAINT "skill_event_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skill" ("id"),
    ADD CONSTRAINT "skill_event_skill_event_type_id_fkey" FOREIGN KEY ("skill_event_type_id") REFERENCES "skill_event_type" ("id"),
    ADD CONSTRAINT "skill_event_source_type_id_fkey" FOREIGN KEY ("source_type_id") REFERENCES "source_type" ("id");

-- Create indexes
CREATE INDEX "fki_fk_skill_category" ON "skill" ("category_id");
CREATE INDEX "fki_fk_skill" ON "user_skill" ("skill_id");
CREATE INDEX "fki_fk_user_skill_level" ON "user_skill" ("user_skill_level_id");
CREATE INDEX "fki_fk_event" ON "skill_event" ("event_id");
CREATE INDEX "fki_fk_skill_event_type" ON "skill_event" ("skill_event_type_id");
CREATE INDEX "fki_fk_source_type" ON "skill_event" ("source_type_id");
