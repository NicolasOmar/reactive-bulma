import '../node_modules/bulma/css/bulma.min.css'
import '../node_modules/@mdi/font/css/materialdesignicons.min.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true
  },
}