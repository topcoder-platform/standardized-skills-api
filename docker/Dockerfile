# syntax=docker/dockerfile:1
FROM node:26.13.1-alpine3.24 AS build
RUN apk upgrade --no-cache && apk add --no-cache 'zlib>=1.4-r0' openssl
WORKDIR /app
COPY . .
RUN npm install --global pnpm@11.15.1
RUN pnpm install --frozen-lockfile
RUN pnpm run prisma:generate
RUN pnpm run test:dependency-compat && pnpm run lint && pnpm run build
RUN pnpm prune --prod --ignore-scripts

FROM alpine:3.24
RUN apk upgrade --no-cache \
    && apk add --no-cache 'zlib>=1.4-r0' 'nodejs-current~26' 'nodejs-current>=26.13.1-r0' openssl bash ca-certificates \
    && addgroup -S -g 10001 app && adduser -S -D -u 10001 -G app app
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build --chown=app:app /app/dist ./dist
COPY --from=build --chown=app:app /app/node_modules ./node_modules
COPY --from=build --chown=app:app /app/prisma ./prisma
COPY --from=build --chown=app:app /app/package.json ./package.json
COPY --from=build --chown=app:app --chmod=755 /app/appStartUp.sh ./appStartUp.sh
EXPOSE 3000
USER app
CMD ["./appStartUp.sh"]
