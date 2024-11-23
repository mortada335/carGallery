
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from './plugins/axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(axios)
app.use(router)

app.mount('#app')


