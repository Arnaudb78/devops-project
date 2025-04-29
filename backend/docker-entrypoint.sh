#!/bin/sh
echo "DATABASE_URL=postgresql://postgres:postgres@postgres:5432/nestjs_db?schema=public" > .env
echo "Running Prisma migrations..."
npx prisma migrate deploy
echo "Generating Prisma client..."
npx prisma generate
exec "$@"   