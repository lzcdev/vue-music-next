/*
 * @Author: jinqing
 * @Date: 2021-10-20 17:40:22
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-22 14:36:45
 * @Description: singer
 */

import { get } from './base'

export function getSingerList() {
  return get('/api/getSingerList')
}

export function getSingerDetail(singer) {
  return get('/api/getSingerDetail', {
    mid: singer.mid
  })
}
