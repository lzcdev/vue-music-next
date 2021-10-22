/*
 * @Author: jinqing
 * @Date: 2021-10-14 15:28:07
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-22 14:42:10
 * @Description: router
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend'
import Search from '@/views/search'
import Singer from '@/views/singer'
import TopList from '@/views/top-list'
import SingerDetail from '@/views/singer-detail'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    component: TopList
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
