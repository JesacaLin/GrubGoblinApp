import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueLazyload)
app.mount('#app')
