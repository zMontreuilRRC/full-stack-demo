/// <reference types="vite" />

import { ViteUserConfig, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()] as ViteUserConfig["plugins"],
  server: {
    // look at setting up a proxy so that any requests to the api are redirected
    proxy: {
      '*/api': {
        target: "http://localhost:3000",
        changeOrigin: true,
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