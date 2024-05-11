import './assets/main.css'

import { createApp } from 'vue'
import '@vue3-noti/core/style.css'
import { NotiPlugin } from '@vue3-noti/core'
import type { NotiOptions } from '@vue3-noti/core'
import App from './App.vue'

const defaultOptions: NotiOptions = {
  message: 'Hello',
  type: 'success',
  duration: 1000,
  position: 'top-right',
  hoverPause: true,
  showProgressBar: true,
}

const app = createApp(App)

app
  .use(NotiPlugin, defaultOptions)
  .mount('#app')
