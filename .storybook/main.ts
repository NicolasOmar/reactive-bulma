// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { mergeConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx', '../src/design/**/*.mdx'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-themes'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        // vite.config.ts lives in configs/, not the project root where
        // @storybook/builder-vite would otherwise auto-discover it.
        viteConfigPath: resolve(__dirname, '../configs/vite.config.ts')
      }
    }
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  // Storybook's own preview runtime (iframe chunk) exceeds Vite's default
  // 500 kB warning limit; it's a docs site, not part of the library bundle.
  viteFinal: config =>
    mergeConfig(config, { build: { chunkSizeWarningLimit: 1500 } })
}
export default config
