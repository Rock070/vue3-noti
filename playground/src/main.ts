import { NotiPlugin } from '@vue3-noti/core'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).use(NotiPlugin).mount('#app')
