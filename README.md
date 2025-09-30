# standardized-skills-api
This codebase provides CRUD APIs over the PostgreSQL database containing standardized skills and 
its associations with members, challenges and jobs. It also provides a type-ahead
API for suggestion of probable skills with each input.

## Prerequisites
- Node.js v22+
- pnpm (enable via `corepack enable pnpm` if you use Node's bundled Corepack)

## Local deployment
- Run `pnpm install`
- Run the docker compose file under `./local` directory with `docker-compose up -d`
- Run `pnpm run transpile` to generate the dist script files
- On success, execute `pnpm run es-init` to initialize the Opensearch index for autocomplete suggestions
- Set env variable (using export, or create an `.env` file) for `TC_SKILLS_DATABASE_URL=<AWS DEV DB URL FOR SKILLS>`
- Set env variable for `CHALLENGE_API_DATABASE_URL=<AWS DEV DB URL FOR CHALLENGE API>` so challenge skills can be synchronized directly in the challenge service database
- Set env variable for `MEMBER_DB_URL=<AWS DEV DB URL FOR MEMBERS>` so member validations run directly against the member database (`MEMBER_DB_SCHEMA`, `MEMBER_DB_TABLE`, and `MEMBER_DB_ID_COLUMN` can be provided when the defaults do not apply)
- Connect to VPN
- Execute `pnpm run load-data-es` to load all skill data into the created Opensearch index

### Setup local database
- Run `pnpm run db:init` to create the database tables & seed initial data into it
- Run `pnpm run db:sync` to create any new tables based on the db models created in `src/db/models`
- Run `pnpm run db:seed` to insert the seed data into the current db tables

## Verification
- Run the postman collection under `./docs/postman`

## Secuelize DB model generation
pnpm dlx sequelize-auto -h <dev-db-host-for-skills> -d <dev-db-name-for-skills> -u dbadmin -p 5432 --dialect postgres -o \"./src/db/models\" -l ts -t <table_name>
