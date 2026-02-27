############################
# 1. Dependencies
############################
FROM node:20-alpine AS deps

WORKDIR /app

# Необходимые системные зависимости
RUN apk add --no-cache libc6-compat

# Копируем только файлы зависимостей
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile


############################
# 2. Builder
############################
FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NEXT_TELEMETRY_DISABLED=1

# Копируем node_modules из предыдущего слоя
COPY --from=deps /app/node_modules ./node_modules

# Копируем исходники
COPY . .

# Production build
RUN yarn build


############################
# 3. Runner (production)
############################
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Создаём non-root пользователя
RUN addgroup -S nodejs -g 1001 \
    && adduser -S nextjs -u 1001

# Копируем standalone сборку
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]