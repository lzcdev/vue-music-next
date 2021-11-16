/*
 * @Author: jinqing
 * @Date: 2021-11-16 14:27:55
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-16 15:04:40
 * @Description: use-cd
 */

import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default function useCd() {
  const cdRef = ref(null)
  const cdImageRef = ref(null)
  const store = useStore()
  const playing = computed(() => {
    return store.state.playing
  })

  const cdCls = computed(() => {
    return playing.value ? 'playing' : ''
  })

  watch(playing, (newPlaying) => {
    if (!newPlaying) {
      syncTransform(cdRef.value, cdImageRef.value)
    }
  })

  function syncTransform(wrapper, inner) {
    const wrapperTransform = getComputedStyle(wrapper).transform
    const innerTransform = getComputedStyle(inner).transform
    wrapper.style.transform = wrapperTransform === 'none' ? innerTransform : innerTransform.concat(' ', wrapperTransform)
  }
  return {
    cdCls,
    cdRef,
    cdImageRef
  }
}
