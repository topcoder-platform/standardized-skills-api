# standardized-skills-api
This codebase provides CRUD APIs over the PostgreSQL database containing standardized skills and 
its associations with members, challenges and jobs. It also provides a type-ahead
API for suggestion of probable skills with each input.

## Local deployment
- Run the docker compose file under `./local` directory with `docker-compose up -d`
- Run `npx tsc` to generate the dist script files
- On success, execute `npm run es-init` to initialize the Opensearch index for autocomplete suggestions
- Set env variable (using export, or create an `.env` file) for `TC_SKILLS_DATABASE_URL=<AWS DEV DB URL FOR SKILLS>`
- Set env variable for `CHALLENGE_API_DATABASE_URL=<AWS DEV DB URL FOR CHALLENGE API>` so challenge skills can be synchronized directly in the challenge service database
- Connect to VPN
- Execute `npm run load-data-es` to load all skill data into the created Opensearch index

### Setup local database
- Run `npm run db:init` to create the database tables & seed initial data into it
- Run `npm run db:sync` to create any new tables based on the db models created in `src/db/models`
- Run `npm run db:seed` to insert the seed data into the current db tables

## Verification
- Run the postman collection under `./docs/postman`

## Secuelize DB model generation
npm sequelize-auto -h <dev-db-host-for-skills> -d <dev-db-name-for-skills> -u dbadmin -p 5432 --dialect postgres -o \"./src/db/models\" -l ts -t <table_name>
