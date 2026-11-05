#!/bin/bash
set -eo pipefail

export TC_SKILLS_DATABASE_URL=$(printf '%b' "$TC_SKILLS_DATABASE_URL")

echo "Database - running migrations."
node node_modules/prisma/build/index.js migrate deploy

echo "Starting standardized-skills-api."
exec node dist/main.js
