import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, relative, extname } from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'
// import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // dts({ include: ['src'] })
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync('src/**/*.{ts,tsx}', {
          ignore: [
            "src/**/*.{stories,test}.{ts,tsx}",
            "src/**/jest.tsx"
          ],
        }).map(file => [
          // 1. The name of the entry point
          // src/nested/foo.js becomes nested/foo
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          // 2. The absolute path to the entry file
          // src/nested/foo.ts becomes /project/src/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    },
  }
})
