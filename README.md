# standardized-skills-api
This codebase provides CRUD APIs over the PostgreSQL database containing standardized skills and 
its associations with members, challenges and jobs. It also provides a type-ahead
API for suggestion of probable skills with each input.

## Prerequisites
- Node.js v22+
- pnpm (enable via `corepack enable pnpm` if you use Node's bundled Corepack)

## Local deployment
- Run `pnpm install`
- Run `pnpm prisma:generate` to emit the Prisma client
- Run `pnpm prisma:migrate:deploy` to apply the latest database schema
- Run the docker compose file under `./local` directory with `docker-compose up -d`
- Set env variable (using export, or create an `.env` file) for `TC_SKILLS_DATABASE_URL=<AWS DEV DB URL FOR SKILLS>`
- Set env variable for `CHALLENGE_API_DATABASE_URL=<AWS DEV DB URL FOR CHALLENGE API>` so challenge skills can be synchronized directly in the challenge service database
- Set env variable for `MEMBER_DB_URL=<AWS DEV DB URL FOR MEMBERS>` so member validations run directly against the member database (`MEMBER_DB_SCHEMA`, `MEMBER_DB_TABLE`, and `MEMBER_DB_ID_COLUMN` can be provided when the defaults do not apply)
- Connect to VPN
- Autocomplete endpoints now query PostgreSQL directly; OpenSearch is no longer required
- Start the API with `pnpm run start:dev` for watch mode or `pnpm run start` after running `pnpm run build`

### Setup local database
- Run `pnpm prisma:migrate:deploy` to apply schema changes to your database
- Run `pnpm prisma:studio` if you want to inspect data locally

## Verification
- Run the postman collection under `./docs/postman`
