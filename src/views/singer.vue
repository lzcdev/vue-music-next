<!--
 * @Author: jinqing
 * @Date: 2021-10-18 12:01:53
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-22 14:47:38
 * @Description: 歌手
-->

<template>
  <div class='singer' v-loading='!singers.length'>
    <index-list :data='singers' @select='selectSinger'></index-list>
    <router-view :singer='selectedSinger'></router-view>
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
      singers: [],
      selectedSinger: null
    }
  },
  async created() {
    const result = await getSingerList()
    this.singers = result.singers
    // console.log(result)
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    }
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
