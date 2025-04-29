#!/bin/bash

# Create backend directory if it doesn't exist
mkdir -p backend

# Run NestJS container to create a new project
docker run --rm -v "$(pwd)/backend:/usr/src/app" nestjs/cli:latest nest new . --package-manager npm --skip-git

# Set proper permissions
chmod -R 777 backend 