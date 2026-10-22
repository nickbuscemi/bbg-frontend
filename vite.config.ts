import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import netlify from '@netlify/vite-plugin'
import path from "path"


// https://vitejs.dev/config/
// The netlify plugin serves netlify/functions (the quote form API) during `npm run dev`.
// Edge functions are unused, and their Deno-based emulator crashes the dev server.
export default defineConfig({
  plugins: [react(), netlify({ edgeFunctions: { enabled: false } })],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
