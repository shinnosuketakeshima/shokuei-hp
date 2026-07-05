import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://shokuei-hp.web.app',
  // 現行URL（trailing slashなし）を厳守 — Firebase Hosting の cleanUrls と対で運用する
  trailingSlash: 'never',
  build: { format: 'file' },
  // カットオーバー（Phase 5）までは旧Viteビルド（dist/）と分離する
  outDir: './dist-astro',
  integrations: [react(), sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  vite: { plugins: [tailwindcss()] },
})
