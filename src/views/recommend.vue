<!--
 * @Author: jinqing
 * @Date: 2021-10-18 12:01:36
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-19 14:28:17
 * @Description: 推荐
-->

<template>
  <div class='recommend'>
    <div class='slider-wrapper'>
      <div class='slider-content'>
        <slider v-if='sliders.length' :sliders='sliders'></slider>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommend } from '@/service/recommend'
import Slider from '@/components/base/slider/slider'

export default {
  name: 'recommend',
  components: {
    Slider
  },
  data() {
    return {
      sliders: []
    }
  },
  async created() {
    const result = await getRecommend()
    console.log(result)
    this.sliders = result.sliders
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  // overflow: scroll;
  .recommend-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 40%;
    overflow: hidden;
    .slider-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
