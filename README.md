# Nuxt 3 SSR Template for Quant Cloud

A Nuxt 3 server-rendered application template configured for deployment to Quant Cloud.

[![Deploy to Quant Cloud](https://www.quantcdn.io/img/quant-deploy-btn-sml.svg)](https://dashboard.quantcdn.io/cloud-apps/create/starter-kit/app-nuxt)

## Features

- **Nuxt 3** - Latest version with Vue 3
- **Server-Side Rendering** - Full SSR with universal rendering
- **Nitro Server** - High-performance server engine
- **API Routes** - Server routes for backend functionality
- **TypeScript** - Full type safety
- **Auto-imports** - Components and composables auto-imported
- **Docker Optimized** - Minimal production image
- **Proxy Integration** - Automatic Host header handling

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Docker Development

```bash
# Copy the override file
cp docker-compose.override.yml.example docker-compose.override.yml

# Build and run
docker-compose up --build

# Visit http://localhost:3000
```

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── build-deploy.yaml   # CI/CD workflow
├── pages/
│   └── index.vue               # Home page (SSR)
├── server/
│   └── api/
│       └── hello.ts            # API endpoint
├── quant/
│   ├── meta.json               # Template metadata
│   └── entrypoints/            # Custom startup scripts
├── public/                     # Static assets
├── app.vue                     # Root component
├── nuxt.config.ts              # Nuxt configuration
├── Dockerfile                  # Production build
├── docker-compose.yml          # Production config
└── docker-compose.override.yml.example  # Local dev template
```

## Architecture

The application runs behind Quant's proxy layer:

```
Internet → Edge → :3000 (proxy) → :3001 (Nuxt/Nitro)
```

The proxy automatically handles:
- `Quant-Orig-Host` → `Host` header translation
- `X-Forwarded-Proto` for HTTPS detection
- `X-Forwarded-For` for client IP

Your application sees the correct `Host` header without any configuration.

## Deployment

This template uses GitHub Actions for CI/CD:

1. Builds a Docker image with Nuxt/Nitro output
2. Pushes to Quant's container registry
3. Deploys to Quant Cloud

### Required Secrets

- `QUANT_API_KEY` - Your Quant API key
- `QUANT_ORGANIZATION` - Your organization slug

## API Routes

Example API endpoint at `/api/hello`:

```typescript
// GET /api/hello
{
  "message": "Hello from Nuxt 3 on Quant Cloud!",
  "host": "your-domain.com",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "runtime": "Nitro"
}
```

## Configuration

### Environment Variables

Configure via `runtimeConfig` in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  runtimeConfig: {
    // Server-only (use NUXT_API_SECRET env var)
    apiSecret: '',
    // Public (use NUXT_PUBLIC_API_BASE env var)
    public: {
      apiBase: '/api',
    },
  },
})
```

Access in your code:

```typescript
const config = useRuntimeConfig()
// Server: config.apiSecret
// Client & Server: config.public.apiBase
```

## Learn More

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [Nitro Documentation](https://nitro.unjs.io/)
- [Quant Cloud Documentation](https://docs.quantcdn.io/)
