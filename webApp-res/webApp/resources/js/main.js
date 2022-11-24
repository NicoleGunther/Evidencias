import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './components/App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')