/*
 * @Author: jinqing
 * @Date: 2021-10-18 13:59:44
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-18 14:03:05
 * @Description: base
 */

import axios from 'axios'

const ERR_OK = 0
const baseURL = '/'

axios.defaults.baseURL = baseURL

export function get(url, params) {
  return axios.get(url, {
    params
  }).then(res => {
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    }
  }).catch(e => {
    console.log(e)
  })
}
