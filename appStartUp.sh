#!/bin/bash
set -eo pipefail

export TC_SKILLS_DATABASE_URL=$(echo -e ${TC_SKILLS_DATABASE_URL})

echo "Database - running migrations."
pnpm prisma:migrate:deploy

echo "Starting standardized-skills-api."
pnpm start