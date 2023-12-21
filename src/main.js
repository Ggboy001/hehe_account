import { createApp } from 'vue'
import './style.css'
import './assets/css/icon.css'
import './assets/css/common.css'
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
createApp(App).use(router).use(pinia).mount('#app')
