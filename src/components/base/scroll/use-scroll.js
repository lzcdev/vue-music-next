/*
 * @Author: jinqing
 * @Date: 2021-10-19 15:25:18
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-19 15:47:34
 * @Description: use-scroll
 */

import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { onMounted, onUnmounted, ref } from '@vue/runtime-core'

BScroll.use(ObserveDOM)

export default function useScroll(wrapperRef, options) {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })
}
