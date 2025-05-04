# Use Node.js LTS version
FROM node:20-alpine

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install 

# Copy Prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy entrypoint script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Copy source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set the entrypoint
ENTRYPOINT ["/docker-entrypoint.sh"]

# Start the application
CMD ["pnpm", "start:prod"] 