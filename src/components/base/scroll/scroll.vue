<!--
 * @Author: jinqing
 * @Date: 2021-10-19 15:24:02
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-19 15:50:05
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
    }
  },
  setup(props) {
    const rootRef = ref(null)
    useScroll(rootRef, props)

    return {
      rootRef
    }
  }

}
</script>
