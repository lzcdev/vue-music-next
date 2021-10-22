<!--
 * @Author: jinqing
 * @Date: 2021-10-22 14:37:04
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-22 15:53:27
 * @Description: singer-detail
-->

<template>
  <div class='singer-detail'></div>
</template>

<script>
import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/song'

export default {
  name: 'singer-detail',
  props: {
    singer: Object
  },
  async created() {
    const result = await getSingerDetail(this.singer)
    const songs = await processSongs(result.songs)
    console.log('rrrr====>', songs)
  }

}
</script>

<style lang='scss' scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
