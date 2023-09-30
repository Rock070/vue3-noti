import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { NotiPositionEnum, NotificationEnum } from '../src/types'
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

describe('default options', () => {
  it('trigger noti', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [[NotiPlugin, {
          position: NotiPositionEnum.TOP_LEFT,
        }]],
      },
    })

    await wrapper.find('button[type="button"]').trigger('click')
    const notiGroupEl = wrapper.get('[data-test-id="vue3-noti-group"]')

    expect(notiGroupEl.classes()).contain('vue3-noti-group--top-left')
  })
})

describe('type', () => {
  it('trigger noti', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [[NotiPlugin, { type: NotificationEnum.ERROR }]],
      },
    })

    await wrapper.find('button[type="button"]').trigger('click')
    const notiEl = wrapper.get('[data-test-id="vue3-noti-group__item"]')

    expect(notiEl.classes()).contain('vue3-noti-group__item--error')
  })
})

describe.todo('duration', () => {

})

describe.todo('showProgressBar', () => {

})
describe.todo('closeOnClick', () => {

})
describe.todo('hoverPause', () => {

})
