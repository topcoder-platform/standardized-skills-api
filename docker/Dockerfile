# syntax=docker/dockerfile:1

FROM node:22.13.1-alpine

# Install shell and required OpenSSL 1.1 compatibility libs for Prisma 5.x
# Also update package index (align with review-api)
RUN apk add --no-cache bash openssl1.1-compat && apk update

# Ensure Prisma uses musl-compatible binaries on Alpine
# Note: Prisma 5.x on Alpine may still require OpenSSL 1.1; the compat
# package above satisfies libssl.so.1.1 at runtime.
ENV PRISMA_CLI_BINARY_TARGETS=linux-musl-openssl-3.0.x

# Working directory (align with review-api)
WORKDIR /app

# Copy repository contents
COPY . .

# Install pnpm and dependencies
RUN npm install pnpm -g
RUN pnpm install

# Lint and build
RUN pnpm run lint
RUN pnpm run build

# Expose API port
EXPOSE 3000

# Start the application
CMD [ "node", "dist/main.js" ]
