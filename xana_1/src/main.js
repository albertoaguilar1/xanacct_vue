import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


createApp(App).use(store).use(router).mount('#app')
