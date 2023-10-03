# standardized-skills-api
This codebase provides CRUD APIs over the PostgreSQL database containing standardized skills and 
its associations with members, challenges, jobs and resumes. It also provides a type-ahead
API for suggestion of probable skills with each input.

## local deployment
- Run the docker compose file under `./local` directory with `docker-compose up -d`
- On success, execute `npm run es-init` to initialize the ES for autocomplete suggestions
- Connect VPN and set two environment variables `export PORT=3000` and `TC_SKILLS_DATABASE_URL=<AWS DEV DB URL FOR SKILLS>` 
- Execute `npm run load-data-es` to load all skill data into the created ES index
- Execute `npx tsc` and `node dist/index.js`

## verification
- Run the postman collection under `./docs/postman`