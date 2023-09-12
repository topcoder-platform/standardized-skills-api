--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14
-- Dumped by pg_dump version 15.3

-- Started on 2023-09-12 15:54:46 PDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', 'public', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


-- CREATE ROLE dbadmin SUPERUSER;

CREATE SCHEMA IF NOT EXISTS public;

GRANT usage on schema public to public;
GRANT create on schema public to public;

--- create extension for UUID functions 

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--
-- TOC entry 218 (class 1259 OID 24910)
-- Name: event; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE "public".event (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    topic character varying(255) NOT NULL,
    payload jsonb NOT NULL,
    payload_hash text,
    created_at timestamp with time zone NOT NULL
);


ALTER TABLE "public".event OWNER TO dbadmin;

--
-- TOC entry 216 (class 1259 OID 24884)
-- Name: skill; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE "public".skill (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    category_id uuid,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE "public".skill OWNER TO dbadmin;

--
-- TOC entry 223 (class 1259 OID 24960)
-- Name: skill_category; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE "public".skill_category (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE "public".skill_category OWNER TO dbadmin;

--
-- TOC entry 220 (class 1259 OID 24929)
-- Name: skill_event; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE "public".skill_event (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    event_id uuid NOT NULL,
    user_id integer NOT NULL,
    skill_id uuid NOT NULL,
    skill_event_type_id uuid NOT NULL,
    source_id uuid NOT NULL,
    source_type_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL
);


ALTER TABLE "public".skill_event OWNER TO dbadmin;

--
-- TOC entry 221 (class 1259 OID 24935)
-- Name: skill_event_type; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE "public".skill_event_type (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE "public".skill_event_type OWNER TO dbadmin;

--
-- TOC entry 219 (class 1259 OID 24919)
-- Name: source_type; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE "public".source_type (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE "public".source_type OWNER TO dbadmin;

--
-- TOC entry 217 (class 1259 OID 24892)
-- Name: user_skill; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE "public".user_skill (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_id integer NOT NULL,
    skill_id uuid NOT NULL,
    user_skill_level_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE "public".user_skill OWNER TO dbadmin;

--
-- TOC entry 222 (class 1259 OID 24944)
-- Name: user_skill_level; Type: TABLE; Schema: public; Owner: dbadmin
--

CREATE TABLE "public".user_skill_level (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE "public".user_skill_level OWNER TO dbadmin;

--
-- TOC entry 3938 (class 0 OID 24910)
-- Dependencies: 218
-- Data for Name: event; Type: TABLE DATA; Schema: public; Owner: dbadmin
--



--
-- TOC entry 3936 (class 0 OID 24884)
-- Dependencies: 216
-- Data for Name: skill; Type: TABLE DATA; Schema: public; Owner: dbadmin
--



--
-- TOC entry 3943 (class 0 OID 24960)
-- Dependencies: 223
-- Data for Name: skill_category; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

INSERT INTO "public".skill_category VALUES ('481b5ebc-2fe6-45ed-a90c-736936d458d7', 'Programming and Development', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('5aadafad-da63-488e-8499-32b596215789', 'Web Development', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('38fadd80-8721-4ce0-9387-cb6ad3ce48da', 'Database Management', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('cc346829-c9e4-44a9-996b-34054cf20fec', 'Cloud Computing', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('e2429c1b-7609-49e0-93cc-341a89e12269', 'DevOps and Automation', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('cfb17211-2abd-41e1-b169-e90cf038c6a7', 'Networking', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('221f4e3f-1ac8-438b-9dc1-977e30656789', 'Cybersecurity', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('4064574c-befa-4fb3-a8e2-34038d7f845b', 'Data Analysis and Big Data', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('185f4bf3-50de-46af-aaa6-9011872395cf', 'Operating Systems', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('07a0abe3-2791-4068-b5b5-be48fefa3551', 'Project Management', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('e50b1794-e08d-4dc3-a4b1-6b5213c7da8e', 'Databases and Data Warehousing', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('aa495f25-2f2d-4334-9b6f-2ffe11d835d2', 'Software Development Lifecycle (SDLC)', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('0ae22576-48ed-4ffd-9319-058b6fd80675', 'Mobile App Development', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('35e9e3c6-3480-4fdb-9f77-91e667923a01', 'Virtualization', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('831ed28d-c20f-40c8-a348-d1d3739e9046', 'Hardware and Systems Administration', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('1f5ed3e8-8d22-44ea-b75d-ea85147a04da', 'Scripting and Automation', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('e4a51b10-ecba-46eb-89e2-5908bb324a8c', 'IoT (Internet of Things)', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('f1daa100-b63b-45c1-a638-90fbfc817200', 'Blockchain', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');
INSERT INTO "public".skill_category VALUES ('2b0c092f-a139-4cc2-b1cf-6e8b136f7b8c', 'Cloud Security', NULL, '2023-09-12 20:43:25.318782+00', '2023-09-12 20:43:25.318782+00');


--
-- TOC entry 3940 (class 0 OID 24929)
-- Dependencies: 220
-- Data for Name: skill_event; Type: TABLE DATA; Schema: public; Owner: dbadmin
--



--
-- TOC entry 3941 (class 0 OID 24935)
-- Dependencies: 221
-- Data for Name: skill_event_type; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

INSERT INTO "public".skill_event_type VALUES ('34004342-c15f-49af-ad4b-71fedc9f6a98', 'challenge_win', 'Challenge winner', '2023-09-12 20:58:36.018285+00', '2023-09-12 20:58:36.018285+00');
INSERT INTO "public".skill_event_type VALUES ('0eaa258b-7456-445d-97b9-41862e4531ef', 'challenge_2nd_place', 'Second place challenge finisher', '2023-09-12 20:58:36.018285+00', '2023-09-12 20:58:36.018285+00');
INSERT INTO "public".skill_event_type VALUES ('d3ff7919-5dce-415a-8698-c61f00aad67d', 'challenge_3rd_place', 'Third place challenge finisher', '2023-09-12 20:58:36.018285+00', '2023-09-12 20:58:36.018285+00');
INSERT INTO "public".skill_event_type VALUES ('34279888-49d1-4b10-b1b9-4acf37861ccb', 'challenge_finisher', 'Successful challenge finisher', '2023-09-12 20:58:36.018285+00', '2023-09-12 20:58:36.018285+00');
INSERT INTO "public".skill_event_type VALUES ('c41ec386-1667-4321-b9f4-69a20104a5c7', 'gig_completion', 'Completed customer project work', '2023-09-12 20:58:36.018285+00', '2023-09-12 20:58:36.018285+00');
INSERT INTO "public".skill_event_type VALUES ('f6bddb8a-8f1a-4624-bd3d-164a8ebaa3bb', 'mm_win', 'Marathon Match winner', '2023-09-12 20:58:36.018285+00', '2023-09-12 20:58:36.018285+00');
INSERT INTO "public".skill_event_type VALUES ('e60e7b7f-3ea5-41c1-806d-29332bdd558e', 'srm_win', 'Single Round Match winner', '2023-09-12 20:58:36.018285+00', '2023-09-12 20:58:36.018285+00');
INSERT INTO "public".skill_event_type VALUES ('f5b4090d-8b39-41f9-aa3c-a5ae4caa4d66', 'rdm_win', 'Rapid Development Match winner', '2023-09-12 20:58:36.018285+00', '2023-09-12 20:58:36.018285+00');
INSERT INTO "public".skill_event_type VALUES ('d412bc60-9188-4514-b72b-058f2f3d4a88', 'copilot_review', 'Copilot submission reviewer', '2023-09-12 20:58:36.018285+00', '2023-09-12 20:58:36.018285+00');


--
-- TOC entry 3939 (class 0 OID 24919)
-- Dependencies: 219
-- Data for Name: source_type; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

INSERT INTO "public".source_type VALUES ('4d2bdbc8-eb3b-4156-8d20-98a46589cc5d', 'challenge', 'Competitive programming challenge', '2023-09-12 20:53:37.349086+00', '2023-09-12 20:53:37.349086+00');
INSERT INTO "public".source_type VALUES ('e50ffd9c-1462-493c-91a7-2b9be510625c', 'marathon match', 'Long-duration competitive programming event', '2023-09-12 20:53:37.349086+00', '2023-09-12 20:53:37.349086+00');
INSERT INTO "public".source_type VALUES ('71198dc7-dc63-40fd-8502-c005133e7149', 'rapid development match', 'High-speed competitive programming event', '2023-09-12 20:53:37.349086+00', '2023-09-12 20:53:37.349086+00');
INSERT INTO "public".source_type VALUES ('90f76653-6859-4122-9a20-c2aa42889a2f', 'single round match', 'Single competitive programming event', '2023-09-12 20:53:37.349086+00', '2023-09-12 20:53:37.349086+00');
INSERT INTO "public".source_type VALUES ('413340e8-f56f-4061-8796-c916dfa82770', 'gig', 'Customer project work', '2023-09-12 20:53:37.349086+00', '2023-09-12 20:53:37.349086+00');
INSERT INTO "public".source_type VALUES ('51a3b821-f95b-4f56-b508-0f3891f5bc5f', 'certification', 'Topdbadmin Academy certification', '2023-09-12 20:53:37.349086+00', '2023-09-12 20:53:37.349086+00');
INSERT INTO "public".source_type VALUES ('2a8c0dcb-830c-4b5f-80e2-6278742dd3af', 'course', 'Topdbadmin Academy course', '2023-09-12 20:53:37.349086+00', '2023-09-12 20:53:37.349086+00');


--
-- TOC entry 3937 (class 0 OID 24892)
-- Dependencies: 217
-- Data for Name: user_skill; Type: TABLE DATA; Schema: public; Owner: dbadmin
--



--
-- TOC entry 3942 (class 0 OID 24944)
-- Dependencies: 222
-- Data for Name: user_skill_level; Type: TABLE DATA; Schema: public; Owner: dbadmin
--

INSERT INTO "public".user_skill_level VALUES ('5641bd98-784f-4f42-ad38-3ec2fc23de16', 'self-declared', 'Skill declared directly by user', '2023-09-12 20:46:58.889607+00', '2023-09-12 20:46:58.889607+00');
INSERT INTO "public".user_skill_level VALUES ('0f27234f-d89e-4b07-9ea1-649afbb29841', 'verified', 'Skill verified by proof of capability', '2023-09-12 20:46:58.889607+00', '2023-09-12 20:46:58.889607+00');


--
-- TOC entry 3789 (class 2606 OID 24918)
-- Name: event event_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);


--
-- TOC entry 3802 (class 2606 OID 24968)
-- Name: skill_category skill_category_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".skill_category
    ADD CONSTRAINT skill_category_pkey PRIMARY KEY (id);


--
-- TOC entry 3796 (class 2606 OID 24934)
-- Name: skill_event skill_event_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".skill_event
    ADD CONSTRAINT skill_event_pkey PRIMARY KEY (id);


--
-- TOC entry 3798 (class 2606 OID 24943)
-- Name: skill_event_type skill_event_type_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".skill_event_type
    ADD CONSTRAINT skill_event_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3783 (class 2606 OID 24891)
-- Name: skill skill_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".skill
    ADD CONSTRAINT skill_pkey PRIMARY KEY (id);


--
-- TOC entry 3791 (class 2606 OID 24927)
-- Name: source_type source_type_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".source_type
    ADD CONSTRAINT source_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3800 (class 2606 OID 24952)
-- Name: user_skill_level user_skill_level_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".user_skill_level
    ADD CONSTRAINT user_skill_level_pkey PRIMARY KEY (id);


--
-- TOC entry 3787 (class 2606 OID 24896)
-- Name: user_skill user_skill_pkey; Type: CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".user_skill
    ADD CONSTRAINT user_skill_pkey PRIMARY KEY (id);


--
-- TOC entry 3792 (class 1259 OID 25009)
-- Name: fki_fk_event; Type: INDEX; Schema: public; Owner: dbadmin
--

CREATE INDEX fki_fk_event ON "public".skill_event USING btree (event_id);


--
-- TOC entry 3784 (class 1259 OID 24980)
-- Name: fki_fk_skill; Type: INDEX; Schema: public; Owner: dbadmin
--

CREATE INDEX fki_fk_skill ON "public".user_skill USING btree (skill_id);


--
-- TOC entry 3781 (class 1259 OID 24974)
-- Name: fki_fk_skill_category; Type: INDEX; Schema: public; Owner: dbadmin
--

CREATE INDEX fki_fk_skill_category ON "public".skill USING btree (category_id);


--
-- TOC entry 3793 (class 1259 OID 24992)
-- Name: fki_fk_skill_event_type; Type: INDEX; Schema: public; Owner: dbadmin
--

CREATE INDEX fki_fk_skill_event_type ON "public".skill_event USING btree (skill_event_type_id);


--
-- TOC entry 3794 (class 1259 OID 25003)
-- Name: fki_fk_source_type; Type: INDEX; Schema: public; Owner: dbadmin
--

CREATE INDEX fki_fk_source_type ON "public".skill_event USING btree (source_type_id);


--
-- TOC entry 3785 (class 1259 OID 24986)
-- Name: fki_fk_user_skill_level; Type: INDEX; Schema: public; Owner: dbadmin
--

CREATE INDEX fki_fk_user_skill_level ON "public".user_skill USING btree (user_skill_level_id);


--
-- TOC entry 3806 (class 2606 OID 25004)
-- Name: skill_event fk_event; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".skill_event
    ADD CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES "public".event(id) NOT VALID;


--
-- TOC entry 3804 (class 2606 OID 24975)
-- Name: user_skill fk_skill; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".user_skill
    ADD CONSTRAINT fk_skill FOREIGN KEY (skill_id) REFERENCES "public".skill(id) NOT VALID;


--
-- TOC entry 3807 (class 2606 OID 24993)
-- Name: skill_event fk_skill; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".skill_event
    ADD CONSTRAINT fk_skill FOREIGN KEY (skill_id) REFERENCES "public".skill(id) NOT VALID;


--
-- TOC entry 3803 (class 2606 OID 24969)
-- Name: skill fk_skill_category; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".skill
    ADD CONSTRAINT fk_skill_category FOREIGN KEY (category_id) REFERENCES "public".skill_category(id) NOT VALID;


--
-- TOC entry 3808 (class 2606 OID 24987)
-- Name: skill_event fk_skill_event_type; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".skill_event
    ADD CONSTRAINT fk_skill_event_type FOREIGN KEY (skill_event_type_id) REFERENCES "public".skill_event_type(id) NOT VALID;


--
-- TOC entry 3809 (class 2606 OID 24998)
-- Name: skill_event fk_source_type; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".skill_event
    ADD CONSTRAINT fk_source_type FOREIGN KEY (source_type_id) REFERENCES "public".source_type(id) NOT VALID;


--
-- TOC entry 3805 (class 2606 OID 24981)
-- Name: user_skill fk_user_skill_level; Type: FK CONSTRAINT; Schema: public; Owner: dbadmin
--

ALTER TABLE ONLY "public".user_skill
    ADD CONSTRAINT fk_user_skill_level FOREIGN KEY (user_skill_level_id) REFERENCES "public".user_skill_level(id) NOT VALID;


-- Completed on 2023-09-12 15:54:55 PDT

--
-- PostgreSQL database dump complete
--

