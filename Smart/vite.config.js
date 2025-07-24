import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    {
      name: 'load-jsx-in-js',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.match(/\/src\/.*\.js$/)) return null
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic'
        })
      }
    },
    react()
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' }
    }
  },
  server: {
    proxy: {
      '/goals': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})

