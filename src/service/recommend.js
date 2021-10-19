/*
 * @Author: jinqing
 * @Date: 2021-10-18 14:03:48
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-18 14:03:48
 * @Description: recommend
 */

import { get } from './base'

export function getRecommend() {
  return get('/api/getRecommend')
}
