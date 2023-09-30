import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

import { useNoti } from '../src'
import { NotiPlugin } from '../src/plugins/noti'
import App from './App.vue'

describe('message', () => {
  it('trigger noti', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [NotiPlugin],
      },
    })

    await wrapper.find('button[type="button"]').trigger('click')
    const notiEl = wrapper.get('[data-test-id="vue3-noti-group__item"]')
    expect(notiEl.text()).contain('Hello Noti Test')
  })
})

describe.todo('type', () => {

})

describe.todo('duration', () => {

})

describe.todo('showProgressBar', () => {

})
describe.todo('closeOnClick', () => {

})
describe.todo('hoverPause', () => {

})
