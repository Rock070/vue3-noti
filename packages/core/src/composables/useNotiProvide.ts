import { provide, ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { DEFAULT_SETTING, INJECT_KEY } from '../constant'

export function useNotiProvide() {
  const notifications = ref('')
  const option = ref(DEFAULT_SETTING)
  const [isShow, toggleShow] = useToggle(false)

  provide(INJECT_KEY, {
    option,
    isShow,
    toggleShow,
    notifications,
  })

  return {
    option,
    isShow,
    toggleShow,
    notifications,
  }
}
