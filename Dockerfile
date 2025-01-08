FROM node:18.17.0-alpine AS base

WORKDIR /app

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache python3 make g++ gcc libc-dev linux-headers

# Copy package files
COPY cube/package.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY cube .

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV NEXT_PUBLIC_SOLANA_NETWORK devnet
ENV NEXT_PUBLIC_SOLANA_RPC_HOST https://api.devnet.solana.com
ENV NODE_OPTIONS="--max_old_space_size=4096"

# Build the application
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000
ENV HOST 0.0.0.0
ENV NEXT_PUBLIC_SOLANA_NETWORK devnet
ENV NEXT_PUBLIC_SOLANA_RPC_HOST https://api.devnet.solana.com
ENV NAPI_BINARY false

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# Copy built files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set permissions
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"] 