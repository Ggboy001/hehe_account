import { createApp } from 'vue'
import './style.css'
import './assets/css/icon.css'
import './assets/css/common.css'
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
