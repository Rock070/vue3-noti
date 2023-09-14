import { NotiPlugin } from '@vue3-noti/core'
import type { NotiOptions } from '@vue3-noti/core'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const notiOptions: NotiOptions = {
  message: 'Hello',
  type: 'success',
  duration: 1000,
  position: 'top-right',
  hoverPause: true,
  showProgressBar: true,
}

createApp(App).use(NotiPlugin, notiOptions).mount('#app')
