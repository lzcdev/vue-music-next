/*
 * @Author: jinqing
 * @Date: 2021-10-14 15:28:07
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-14 15:58:45
 * @Description: lzc
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式文件
import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).mount('#app')
