#!/bin/bash
set -eo pipefail

export TC_SKILLS_DATABASE_URL=$(echo -e ${TC_SKILLS_DATABASE_URL})

echo "Database - running migrations."
npx prisma migrate deploy

echo "Starting standardized-skills-api."
pnpm start