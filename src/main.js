/*
 * @Author: jinqing
 * @Date: 2021-10-14 15:28:07
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-27 15:47:26
 * @Description: lzc
 */

import { createApp } from 'vue'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'
import router from './router'
import store from './store'
import LoadingDirective from '@/components/base/loading/directive'
import noResultDirective from '@/components/base/no-result/directive'

// 引入全局样式文件
import '@/assets/scss/index.scss'

const app = createApp(App)
app.use(lazyPlugin, {
  loading: require('@/assets/images/default.png')
})
app.directive('loading', LoadingDirective).directive('no-result', noResultDirective)
app.use(store).use(router).mount('#app')
