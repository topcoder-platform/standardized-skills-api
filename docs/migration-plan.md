# NestJS + Prisma Migration Plan

## Goal

Complete the transition from the legacy Express + Sequelize implementation to a fully NestJS + Prisma codebase, then remove the old routing, controller, service, middleware, and Sequelize database layers.

## Current State

- Active runtime: NestJS only
- Fully migrated modules: `health`, `skill-categories`, `skills`, `user-skills`, `skill-events`, `work-skills`
- Removed so far: legacy `src/services/`, `src/controllers/`, `src/routes/`, `src/middlewares/` files
- Still blocking Sequelize removal: the old `src/db/` Sequelize model layer and external DB wrappers used by integration helpers

## Migration Phases

### Phase 1: Finish `work-skills`

Objective: replace the last Nest controller that still calls a legacy Sequelize service directly.

Status: completed on April 14, 2026.

- Create `src/modules/work-skills/work-skills.service.ts` as a NestJS `@Injectable()`
- Reimplement `createJobSkills` using `PrismaService.$transaction()`
- Reimplement `createChallengeSkills` using `PrismaService.$transaction()`
- Keep cross-system sync logic intact for now:
  - `src/utils/challenge-skill-sync.ts`
  - `src/utils/challenge-db-helper.ts`
- Update `src/modules/work-skills/work-skills.controller.ts` to inject the new service instead of importing `../../services/WorkSkillsService`
- Update `src/modules/work-skills/work-skills.module.ts` to import `PrismaModule` and register `WorkSkillsService`

Notes:

- The main work-skill persistence path now uses Prisma for `source_type`, `skill`, and `work_skill`
- External challenge validation and challenge DB sync remain on the legacy helper path for now and are deferred to later cleanup phases

### Phase 2: Finish `skill-events`

Objective: replace the remaining Nest controller that still depends on legacy Sequelize business logic.

Status: completed on April 14, 2026.

- Create `src/modules/skill-events/skill-events.service.ts` as a NestJS `@Injectable()`
- Port `processSkillEvent` and related handlers from the legacy service into the new service
- Rewrite Sequelize-backed helpers used by skill event processing:
  - `src/utils/skills-helper.ts`
  - `src/utils/skill-events-helper.ts`
  - `src/utils/postgres-helper.ts`
- Replace Sequelize model lookups with Prisma queries
- Replace Sequelize transactions with Prisma transactions
- Update `src/modules/skill-events/skill-events.controller.ts` to inject the new service instead of importing `../../services/SkillEventsService`
- Update `src/modules/skill-events/skill-events.module.ts` to import `PrismaModule` and register `SkillEventsService`

Notes:

- The active skill-events path now uses Nest dependency injection and Prisma-backed event, user-skill, source-type, and skill-event-type access
- External challenge, member, resources, and reviews database helpers remain unchanged and are still isolated behind their current integration utilities
- Legacy helper fallbacks were kept temporarily so dead Sequelize services continue to compile until Phase 3 removes them

### Phase 3: Remove old service layer

Objective: delete legacy business logic once all endpoints are served by Nest modules using Prisma.

Status: completed on April 14, 2026.

- Delete `src/services/SkillsService.ts`
- Delete `src/services/SkillCategoryService.ts`
- Delete `src/services/UserSkillsService.ts`
- Delete `src/services/WorkSkillsService.ts` after Phase 1 is complete
- Delete `src/services/SkillEventsService.ts` after Phase 2 is complete
- Delete `src/services/` if it becomes empty

Notes:

- The legacy service files were removed once all active endpoints were served by NestJS module services
- Deleting the service layer required deleting the dead Express stack in the same change, because those unused controllers and routes still imported the old services and were part of the TypeScript build

### Phase 4: Remove dead Express layer

Objective: remove the unused Express application structure that is no longer part of runtime startup.

Status: completed on April 14, 2026.

- Delete all files under `src/controllers/`
- Delete all files under `src/routes/`
- Delete all files under `src/middlewares/`

These files are already dead code because `src/main.ts` boots NestJS directly and does not import the old router stack.

### Phase 5: Remove Sequelize model layer

Objective: remove the old main-database ORM layer after all remaining services stop importing it.

Status: completed on April 14, 2026.

- Delete `src/db/models/`
- Delete `src/db/index.ts`
- Audit and then remove Sequelize-based external DB wrappers if no longer needed:
  - `src/db/member-db.ts`
  - `src/db/challenge-db.ts`
  - `src/db/resources-db.ts`
  - `src/db/reviews-db.ts`
- Delete `src/db/` when nothing depends on it
- Delete `sequelize/` after confirming nothing still depends on Sequelize CLI config or migrations

Notes:

- `src/db/index.ts` and Sequelize-generated model access are no longer part of the code path
- External DB wrappers under `src/db/` were migrated from Sequelize clients to Prisma-based external clients and retained as integration adapters

### Phase 6: Remove Sequelize-only helpers and scripts

Objective: clean up utility code that only exists to support the legacy implementation.

Status: completed on April 14, 2026.

- Delete or rewrite `src/utils/sequelize-query.helpers.ts`
- Delete or rewrite `src/utils/user-skills-helper.ts`
- Keep `src/utils/skills-helper.ts` only if retained as a Prisma-backed helper after Phase 2
- Keep `src/utils/skill-events-helper.ts` only if retained as a Prisma-backed helper after Phase 2
- Delete or rewrite `src/scripts/sync-db.ts` because it imports the old Sequelize db layer

Notes:

- `src/utils/sequelize-query.helpers.ts` was replaced with `src/utils/db-query.helpers.ts`
- `src/utils/user-skills-helper.ts`, `src/utils/skills-helper.ts`, and `src/utils/skill-events-helper.ts` were retained as Prisma-backed utilities
- `src/scripts/sync-db.ts` is no longer part of the source tree

### Phase 7: Remove Sequelize dependencies

Objective: remove obsolete packages after code cleanup is complete.

Status: completed on April 14, 2026.

- Remove `sequelize` from `package.json`
- Remove `sequelize-typescript` if present
- Remove `cls-hooked`
- Remove any Sequelize-specific type packages if present
- Remove `SEQUELIZE_CLS_NAMESPACE` from config/constants if no longer used
- Run install to refresh lockfile
- Build and verify the application still compiles cleanly

Notes:

- Removed `sequelize`, `cls-hooked`, `sequelize-cli`, `@types/sequelize`, and `@types/cls-hooked`
- Removed `SEQUELIZE_CLS_NAMESPACE` from `src/config/constants.ts`
- Lockfile refreshed and `pnpm build` passes

### Phase 8: Final config cleanup

Objective: remove temporary bridging code introduced during the migration.

Status: completed on April 15, 2026.

- Audit `src/config/config.ts` vs `src/config/configuration.ts`
- Move all remaining consumers to `ConfigService`
- Delete old dotenv-style bridging code if no longer needed
- Audit `src/types.ts` and remove legacy request/auth types replaced by Nest interfaces

Notes:

- Removed `legacyEnv` from `src/config/configuration.ts`
- Updated `src/common/guards/jwt-auth.guard.ts` to read `auth.secret` and `auth.validIssuers` from `ConfigService`
- Kept `envConfig` exports for non-DI utility modules and external-db adapters; these can be migrated incrementally to injected config where practical

## Todo Checklist

- [x] Create `src/modules/work-skills/work-skills.service.ts`
- [x] Move `createJobSkills` to Prisma transactions
- [x] Move `createChallengeSkills` to Prisma transactions
- [x] Update `work-skills.controller.ts` to use dependency injection
- [x] Register `WorkSkillsService` in `work-skills.module.ts`
- [x] Import `PrismaModule` in `work-skills.module.ts`
- [x] Create `src/modules/skill-events/skill-events.service.ts`
- [x] Move `processSkillEvent` flow to Nest service + Prisma
- [x] Rewrite `skills-helper.ts` to use Prisma
- [x] Rewrite `skill-events-helper.ts` to use Prisma
- [x] Rewrite `postgres-helper.ts` to remove Sequelize dependency from the active skill-events path
- [x] Update `skill-events.controller.ts` to use dependency injection
- [x] Register `SkillEventsService` in `skill-events.module.ts`
- [x] Import `PrismaModule` in `skill-events.module.ts`
- [x] Delete `src/services/SkillsService.ts`
- [x] Delete `src/services/SkillCategoryService.ts`
- [x] Delete `src/services/UserSkillsService.ts`
- [x] Delete `src/services/WorkSkillsService.ts`
- [x] Delete `src/services/SkillEventsService.ts`
- [x] Delete `src/controllers/`
- [x] Delete `src/routes/`
- [x] Delete `src/middlewares/`
- [x] Delete `src/db/models/`
- [x] Delete `src/db/index.ts`
- [x] Audit and remove external Sequelize DB wrappers in `src/db/`
- [x] Delete `sequelize/`
- [x] Remove Sequelize-only helpers and scripts
- [x] Remove Sequelize packages from `package.json`
- [x] Refresh dependencies and lockfile
- [x] Run build and fix migration regressions
- [x] Remove legacy config bridge code

Additional cleanup completed on April 15, 2026:

- Archived legacy Sequelize scripts to `scripts/archive/`:
  - `scripts/archive/fix-copilot-skill-events.ts`
  - `scripts/archive/process-challenge-winners.ts`
- Removed obsolete `.sequelizerc`
- Updated README to remove Sequelize model-generation and deprecated `db:*` setup instructions

## Suggested Execution Order

1. Finish `work-skills`
2. Finish `skill-events`
3. Delete legacy services
4. Delete Express layer
5. Delete Sequelize DB layer
6. Delete Sequelize-only helpers/scripts
7. Remove dependencies
8. Do final config cleanup and verification

## Risks and Constraints

- `skill-events` is the highest-risk migration area because it coordinates multiple helpers, user-skill writes, and event de-duplication logic
- Some helpers interact with external Topcoder databases; those integrations may remain outside Prisma and should be isolated rather than forced into the main schema
- `challenge-skill-sync.ts` likely remains as integration code even after Sequelize is removed from the main application DB layer
- The old config bridge exists for migration support; remove it only after the remaining legacy code is gone

## Definition of Done

- No runtime imports remain from `src/services/` legacy Sequelize services
- No runtime imports remain from `src/db/index.ts` or Sequelize models
- `src/controllers/`, `src/routes/`, and `src/middlewares/` are removed
- `sequelize/` is removed
- `package.json` has no Sequelize runtime dependency
- `pnpm build` succeeds
- All API endpoints are served by NestJS modules with Prisma-backed services