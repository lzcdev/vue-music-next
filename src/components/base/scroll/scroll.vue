<!--
 * @Author: jinqing
 * @Date: 2021-10-19 15:24:02
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-21 11:54:53
 * @Description: scroll
-->

<template>
  <div ref='rootRef'>
    <slot></slot>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useScroll from './use-scroll'

export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const rootRef = ref(null)
    const { scroll } = useScroll(rootRef, props, emit)

    return {
      rootRef,
      scroll
    }
  }

}
</script>
