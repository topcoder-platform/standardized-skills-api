CREATE EXTENSION IF NOT EXISTS "uuid-ossp" SCHEMA public;
CREATE EXTENSION IF NOT EXISTS vector SCHEMA public;

-- CreateTable
CREATE TABLE "SequelizeMeta" (
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "event" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "topic" VARCHAR(255) NOT NULL,
    "payload" JSONB NOT NULL,
    "payload_hash" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legacy_skill_map" (
    "legacy_v5_id" UUID NOT NULL,
    "skill_id" UUID NOT NULL,

    CONSTRAINT "pkey" PRIMARY KEY ("legacy_v5_id","skill_id")
);

-- CreateTable
CREATE TABLE "prod_challenge_emsi_skills" (
    "emsi_skill_id" UUID NOT NULL,
    "challenge_id" UUID NOT NULL,

    CONSTRAINT "challenge_emsi_skills_pkey" PRIMARY KEY ("emsi_skill_id","challenge_id")
);

-- CreateTable
CREATE TABLE "prod_job_emsi_skills" (
    "emsi_skill_id" UUID NOT NULL,
    "job_id" UUID NOT NULL,

    CONSTRAINT "job_emsi_skills_pkey" PRIMARY KEY ("emsi_skill_id","job_id")
);

-- CreateTable
CREATE TABLE "prod_user_emsi_skills" (
    "user_id" INTEGER NOT NULL,
    "skill_id" UUID NOT NULL,
    "skill_source_ids" UUID[],
    "std_skill_id" UUID,
    "emsi_id" TEXT,

    CONSTRAINT "prod_user_emsi_skills_pkey" PRIMARY KEY ("skill_id","user_id")
);

-- CreateTable
CREATE TABLE "prod_v5_skills" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255),
    "std_skill_id" UUID,

    CONSTRAINT "temp_prod_v5_skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "category_id" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(6),
    "dev_id" UUID,
    "name_embedding" public.vector,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill_category" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "skill_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill_event" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "event_id" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "skill_id" UUID NOT NULL,
    "skill_event_type_id" UUID NOT NULL,
    "source_id" TEXT NOT NULL,
    "source_type_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "skill_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill_event_type" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "skill_event_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill_replacement" (
    "skill_id" UUID NOT NULL,
    "replacing_skill_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "skill_replacement_pkey" PRIMARY KEY ("skill_id")
);

-- CreateTable
CREATE TABLE "skill_to_emsi_skill_map" (
    "skill_id" UUID NOT NULL,
    "emsi_skill_id" UUID,
    "emsi_id" TEXT
);

-- CreateTable
CREATE TABLE "source_type" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "source_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_skill" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "user_id" INTEGER NOT NULL,
    "skill_id" UUID NOT NULL,
    "user_skill_level_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_skill_display_mode_id" UUID NOT NULL DEFAULT '1555aa05-a764-4f0b-b3e0-51b824382abb'::uuid,

    CONSTRAINT "user_skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_skill_display_mode" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "user_skill_display_mode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_skill_level" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "user_skill_level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_skill" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "work_id" UUID NOT NULL,
    "work_type_id" UUID NOT NULL,
    "skill_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "uniq_payload_hash" ON "event"("payload_hash");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_skill_name" ON "skill"("name");

-- CreateIndex
CREATE INDEX "fki_fk_skill_category" ON "skill"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_category_name" ON "skill_category"("name");

-- CreateIndex
CREATE INDEX "fki_fk_event" ON "skill_event"("event_id");

-- CreateIndex
CREATE INDEX "fki_fk_skill_event_type" ON "skill_event"("skill_event_type_id");

-- CreateIndex
CREATE INDEX "fki_fk_source_type" ON "skill_event"("source_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_skill_source_id" ON "skill_event"("skill_id", "skill_event_type_id", "source_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_event_type_name" ON "skill_event_type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_source_type_name" ON "source_type"("name");

-- CreateIndex
CREATE INDEX "fki_fk_skill" ON "user_skill"("skill_id");

-- CreateIndex
CREATE INDEX "fki_fk_user_skill_level" ON "user_skill"("user_skill_level_id");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_user_skill_type" ON "user_skill"("user_id", "skill_id", "user_skill_level_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_skill_display_mode_name_key" ON "user_skill_display_mode"("name");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_skill_level_name" ON "user_skill_level"("name");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_work_skill" ON "work_skill"("work_id", "work_type_id", "skill_id");

-- AddForeignKey
ALTER TABLE "legacy_skill_map" ADD CONSTRAINT "skill_fkey" FOREIGN KEY ("skill_id") REFERENCES "skill"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skill" ADD CONSTRAINT "fk_skill_category" FOREIGN KEY ("category_id") REFERENCES "skill_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skill_event" ADD CONSTRAINT "fk_event" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skill_event" ADD CONSTRAINT "fk_skill" FOREIGN KEY ("skill_id") REFERENCES "skill"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skill_event" ADD CONSTRAINT "fk_skill_event_type" FOREIGN KEY ("skill_event_type_id") REFERENCES "skill_event_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skill_event" ADD CONSTRAINT "fk_source_type" FOREIGN KEY ("source_type_id") REFERENCES "source_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_skill" ADD CONSTRAINT "fk_skill" FOREIGN KEY ("skill_id") REFERENCES "skill"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_skill" ADD CONSTRAINT "fk_user_skill_level" FOREIGN KEY ("user_skill_level_id") REFERENCES "user_skill_level"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_skill" ADD CONSTRAINT "user_skill_user_skill_display_mode_id_fkey" FOREIGN KEY ("user_skill_display_mode_id") REFERENCES "user_skill_display_mode"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
