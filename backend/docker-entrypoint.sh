#!/bin/sh
set -e

# Wait for database to be ready
echo "Waiting for database to be ready..."
sleep 5

# Run database migrations if DATABASE_URL is available
if [ -n "$DATABASE_URL" ]; then
  echo "Running database migrations..."
  npx prisma migrate deploy
else
  echo "Warning: DATABASE_URL not set, skipping migrations"
fi

# Execute the passed command
exec "$@"   