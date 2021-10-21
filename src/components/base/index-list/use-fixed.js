/*
 * @Author: jinqing
 * @Date: 2021-10-20 18:03:18
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-21 11:28:19
 * @Description: use-fixed
 */

import { computed, ref } from '@vue/reactivity'
import { nextTick, watch } from '@vue/runtime-core'

export default function useFixed(props) {
  const TITLE_HEIGHT = 30
  const groupRef = ref(null)
  const listHeights = ref([])
  const scrollY = ref(0)
  const currentIndex = ref(0)
  const distance = ref(0)

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return ''
    }
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })

  const fixedStyle = computed(() => {
    const distanceVal = distance.value
    const diff = (distanceVal > 0 && distanceVal < TITLE_HEIGHT) ? distanceVal - TITLE_HEIGHT : 0
    return {
      transform: `translate(0, ${diff}px)`
    }
  })
  watch(() => props.data, async () => {
    await nextTick()
    calculate()
  })

  watch((scrollY), (newY) => {
    const listHeightsVal = listHeights.value
    for (let i = 0; i < listHeightsVal.length - 1; i++) {
      const heightTop = listHeightsVal[i]
      const heightBottom = listHeightsVal[i + 1]
      if (newY >= heightTop && newY <= heightBottom) {
        currentIndex.value = i
        distance.value = heightBottom - newY
      }
    }
  })

  const calculate = () => {
    const list = groupRef.value.children
    const listHeightVal = listHeights.value
    let height = 0

    listHeightVal.length = 0
    listHeightVal.push(height)

    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
      listHeightVal.push(height)
    }
  }

  const onScroll = (pos) => {
    scrollY.value = -pos.y
  }

  return {
    groupRef,
    onScroll,
    fixedTitle,
    fixedStyle,
    currentIndex
  }
}
