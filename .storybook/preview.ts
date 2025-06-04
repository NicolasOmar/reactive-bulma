import '../node_modules/bulma/css/bulma.min.css'
import '../node_modules/@mdi/font/css/materialdesignicons.min.css'
import type { Preview } from '@storybook/react-vite'

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
  tags: ['autodocs']
}

export default preview
