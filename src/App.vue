<!--
 * @Author: jinqing
 * @Date: 2021-10-14 15:28:07
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-18 12:40:15
 * @Description: app
-->
<template>
  <m-header></m-header>
  <tab></tab>
  <router-view></router-view>
</template>

<script>
import Header from '@/components/header/header'
import Tab from '@/components/tab/tab'

export default {
  components: {
    MHeader: Header,
    Tab
  }
}
</script>
