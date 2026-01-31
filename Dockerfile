# Build stage - runs natively (not emulated) for faster builds
ARG NODE_VERSION=22
ARG BUILDPLATFORM=linux/amd64
FROM --platform=$BUILDPLATFORM node:${NODE_VERSION}-bookworm-slim AS builder

WORKDIR /build

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application with Nitro preset for Node.js server
RUN npm run build

# Production stage
FROM ghcr.io/quantcdn-templates/app-node:${NODE_VERSION}

WORKDIR /app

# Copy entrypoint scripts
COPY quant/entrypoints/ /quant-entrypoint.d/
RUN find /quant-entrypoint.d -name "*.sh" -exec chmod +x {} \; 2>/dev/null || true

# Copy built application from builder
# Nuxt builds to .output directory with Nitro (self-contained, no node_modules needed)
COPY --from=builder --chown=node:node /build/.output ./

# CRITICAL: App port must be 3001 (proxy runs on 3000)
ENV PORT=3001
ENV HOST=0.0.0.0
ENV NITRO_PORT=3001
ENV NITRO_HOST=0.0.0.0

# Expose proxy port
EXPOSE 3000

# Start the Nuxt/Nitro server
CMD ["node", "server/index.mjs"]
