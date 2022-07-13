import '@mdi/font/css/materialdesignicons.css'
import '../styles/_variables.scss'
import { createVuetify, ThemeDefinition } from 'vuetify'

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#232429',
    surface: '#4953de',
    'on-surfance': '#ffffff',
    primary: '#4953de',
    'on-primary': '#ffffff',
    secondary: '#9da2a6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#00d452',
    warning: '#FB8C00',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark
    }
  },
  defaults: {
    VBtn: {
      elevation: 0
    }
  }
})
