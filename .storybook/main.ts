// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

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
  }
}
export default config
