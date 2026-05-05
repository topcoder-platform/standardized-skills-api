#!/bin/bash
set -eo pipefail

export DATABASE_URL=$(echo -e ${DATABASE_URL})

echo "Database - running migrations."
pnpm prisma:migrate:deploy

echo "Starting standardized-skills-api."
pnpm start