import '../node_modules/bulma/css/bulma.min.css'
import '../node_modules/@mdi/font/css/materialdesignicons.min.css'
import type { Preview } from '@storybook/react-vite'
// For setting dark/light mode in storybook instance
import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from 'storybook/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
      expanded: true
    },
    docs: {
      theme: themes.dark,
      source: {
        dark: true,
        excludeDecorators: true,
        language: 'tsx'
      }
    }
  },
  tags: ['autodocs'],
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'theme-light',
        dark: 'theme-dark',
      },
      defaultTheme: 'dark',
    }),
  ]
}

export default preview