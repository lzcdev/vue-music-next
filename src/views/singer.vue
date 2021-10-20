<!--
 * @Author: jinqing
 * @Date: 2021-10-18 12:01:53
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-20 17:56:05
 * @Description: 歌手
-->

<template>
  <div class='singer' v-loading='!singers.length'>
    <index-list :data='singers'></index-list>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/base/index-list/index-list'

export default {
  name: 'singer',
  components: {
    IndexList
  },
  data() {
    return {
      singers: []
    }
  },
  async created() {
    const result = await getSingerList()
    this.singers = result.singers
    // console.log(result)
  }
}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
