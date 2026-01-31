export default defineEventHandler((event) => {
  // Get the host header (automatically translated from Quant-Orig-Host by proxy)
  const host = getRequestHeader(event, 'host') || 'unknown'

  return {
    message: 'Hello from Nuxt 3 on Quant Cloud!',
    host: host,
    timestamp: new Date().toISOString(),
    runtime: 'Nitro',
  }
})
