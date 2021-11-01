/*
 * @Author: jinqing
 * @Date: 2021-10-27 17:42:54
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-01 19:39:43
 * @Description: getters
 */

export const currentSong = state => {
  return state.playList[state.currentIndex] || {}
}
