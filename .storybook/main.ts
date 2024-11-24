import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx', '../src/design/**/*.mdx'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
export default config
