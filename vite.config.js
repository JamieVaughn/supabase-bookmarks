import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    base: "/supabase-bookmarks",
    build: {
      outDir: 'docs'
    },
    define: {
      __VITE_SITE_URL__: env.VITE_SITE_URL,
      __VITE_ANON_KEY__: env.VITE_ANON_KEY,
    },
  }
})
