<!--
 * @Author: jinqing
 * @Date: 2021-10-19 16:10:55
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-20 17:56:50
 * @Description: loading
-->

<template>
  <div class='loading'>
    <div class='loading-content'>
      <img width='24' height='24' src='./loading.gif' alt />
      <p class='desc'>{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      title: '加载中...'
    }
  },
  methods: {
    setTitle(title) {
      this.title = title
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  .loading-content {
    line-height: 20px;
    font-size: $font-size-small;
    color: $color-text-l;
  }
}
</style>
