import { defineConfig, loadEnv } from 'vite'
import { HvAppShellVitePlugin } from '@hitachivantara/app-shell-vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      HvAppShellVitePlugin(
        {
          mode,
          externalImportMap: false,
          autoViewsAndRoutes: false
        },
        env
      ),
    ],
    server: {
      port: 5184,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})