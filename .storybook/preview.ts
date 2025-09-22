import '../node_modules/bulma/css/bulma.min.css'
import '../node_modules/@mdi/font/css/materialdesignicons.min.css'
import type { Preview } from '@storybook/react-vite'
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
      expanded: true
    }
  },
  tags: ['autodocs'],
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'theme-light',
        dark: 'theme-dark',
      },
      defaultTheme: 'light',
    }),
  ]
}

export default preview
