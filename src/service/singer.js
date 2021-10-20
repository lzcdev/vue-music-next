/*
 * @Author: jinqing
 * @Date: 2021-10-20 17:40:22
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-20 17:40:22
 * @Description: singer
 */

import { get } from './base'

export function getSingerList() {
  return get('/api/getSingerList')
}
