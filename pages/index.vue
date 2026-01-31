<script setup lang="ts">
// Server-side data fetching
const headers = useRequestHeaders(['host'])
const host = headers.host || 'localhost'

// Fetch from API route
const { data: apiData } = await useFetch('/api/hello')
</script>

<template>
  <div class="container">
    <main>
      <h1>Nuxt 3 on Quant Cloud</h1>

      <div class="card">
        <h2>Server-Side Rendering</h2>
        <p>This page was rendered on the server.</p>
        <p class="highlight">
          <strong>Host Header:</strong> <code>{{ host }}</code>
        </p>
        <p class="info">
          The Host header is automatically translated from <code>Quant-Orig-Host</code>
          by Quant's proxy layer.
        </p>
      </div>

      <div class="card">
        <h2>API Routes</h2>
        <p>Nuxt 3 includes Nitro server for API routes:</p>
        <pre><code>{{ JSON.stringify(apiData, null, 2) }}</code></pre>
        <p>
          <a href="/api/hello" target="_blank">View raw API response</a>
        </p>
      </div>

      <div class="card">
        <h2>Features</h2>
        <ul>
          <li>Vue 3 with Composition API</li>
          <li>Nitro server engine</li>
          <li>File-based routing</li>
          <li>Auto-imports</li>
          <li>TypeScript support</li>
          <li>Server-side rendering</li>
        </ul>
      </div>

      <div class="links">
        <a href="https://nuxt.com/docs" target="_blank" rel="noopener">Nuxt Docs</a>
        <a href="https://docs.quantcdn.io/" target="_blank" rel="noopener">Quant Docs</a>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #00dc82 0%, #1e3a5f 100%);
  color: #fff;
}

main {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.card h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.highlight {
  background: rgba(0, 220, 130, 0.2);
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin: 1rem 0;
}

.info {
  font-size: 0.9rem;
  opacity: 0.8;
}

code {
  background: rgba(0, 0, 0, 0.2);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9em;
}

pre {
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
}

pre code {
  background: none;
  padding: 0;
}

ul {
  margin: 0;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

.links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.links a {
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s;
}

.links a:hover {
  background: rgba(255, 255, 255, 0.3);
}

a {
  color: #00dc82;
}
</style>
