import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { vShake } from '@/directives/index'
import './style.css'

const app = createApp(App)
app.directive('shake', vShake)
app.use(router).mount('#app')
