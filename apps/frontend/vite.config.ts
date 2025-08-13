/// <reference types="vite" />

import { ViteUserConfig, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// This configuration is required for making requests to a local server
export default defineConfig({
  plugins: [react()] as ViteUserConfig["plugins"],
  test: {
    environment: 'jsdom'
  }
})