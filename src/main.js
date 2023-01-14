import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/styles/LoginPageStyle.css';
import './assets/styles/MainPageStyle.css';
import './assets/styles/GetStartedStyle.css';
import './assets/styles/NavBarStyle.css';
import "./axios.js";



loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
