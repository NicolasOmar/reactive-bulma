import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, relative, extname } from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'
import dts from 'vite-plugin-dts'

// This config lives in configs/, so every project-relative path is resolved
// against the repo root rather than __dirname (which would point at configs/).
const projectRoot = fileURLToPath(new URL('..', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  root: projectRoot,
  plugins: [
    react(),
    dts({ include: ['src'] })
  ],
  build: {
    outDir: resolve(projectRoot, 'dist'),
    emptyOutDir: false,
    lib: {
      entry: resolve(projectRoot, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync('src/**/*.{ts,tsx}', {
          cwd: projectRoot,
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
          resolve(projectRoot, file)
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    },
  },
  resolve: {
    alias: {
      '@constants': resolve(projectRoot, 'src/constants'),
      '@components': resolve(projectRoot, 'src/components'),
      '@design': resolve(projectRoot, 'src/design'),
      '@functions': resolve(projectRoot, 'src/functions'),
      '@interfaces': resolve(projectRoot, 'src/interfaces'),
      '@customTypes': resolve(projectRoot, 'src/types')
    }
  }
})
