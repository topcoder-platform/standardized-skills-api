# Use the current Node.js 22 base image
FROM node:22-alpine

# Set working directory for future use
WORKDIR /usr/standardized-skills-api/app

# Copy the codebase
COPY . .

# Enable pnpm via Corepack and install dependencies
RUN corepack enable pnpm
RUN pnpm install --frozen-lockfile

# Run the lint to check for lint errors and stop further progress
RUN pnpm run lint

# Expose the API on PORT 3000
EXPOSE 3000

# Transpile the codebase
RUN pnpm run transpile

# Execute to start app
CMD [ "node", "dist/index.js" ]
