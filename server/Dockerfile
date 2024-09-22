
# Base image: Use official Node.js 19.6 image (Debian Bullseye Slim variant)
FROM node:19.6-bullseye-slim AS base

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Development stage
FROM base AS dev

# Cache npm dependencies to speed up builds
RUN --mount=type=cache,target=/.npm \
  npm set cache /.npm && \
  npm install

# Copy the remaining application files
COPY . .

# Command to start the app in development mode
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS production

# Set environment to production
ENV NODE_ENV=production

# Cache npm dependencies and install only production packages
RUN --mount=type=cache,target=/.npm \
  npm set cache /.npm && \
  npm ci --only=production

# Switch to non-root user 'node' for better security
USER node

# Copy application code with correct ownership for the 'node' user
COPY --chown=node:node . .

# Expose the app on port 4000
EXPOSE 4000

# Command to start the app in production mode
CMD ["node", "index.js"]

