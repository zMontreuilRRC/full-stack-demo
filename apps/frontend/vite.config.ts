/// <reference types="vite" />

import { ViteUserConfig, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()] as ViteUserConfig["plugins"],
  server: {
    // look at setting up a proxy so that any requests to the api are redirected
    proxy: {
      // proxy all requests that start with "/api" that are made to backend
      // This will need to be updated in prod, and use a secure option
      '/api': {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        headers: {
          // vite strips the Origin header in the local environment
          // include to allow complex requests to backend around CORS
          Origin: "http://localhost:5173"
        }
      }
    }
  },
  test: {
    environment: 'jsdom'
  }
})


// server: {
  // port: 3000,
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:3001',
  //     changeOrigin: true,
  //     secure: false,
  //   },
  // },