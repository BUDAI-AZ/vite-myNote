import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'amfe-flexible'
import 'vant/lib/index.css'
import store from './store/index.js'
import router from './router/index.js'


createApp(App).use(store).use(router).mount('#app')
