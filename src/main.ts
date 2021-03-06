import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import pinia from './store'
import { loadFonts } from './plugins/webfontloader'

await loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app')
