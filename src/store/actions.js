/*
 * @Author: jinqing
 * @Date: 2021-10-27 17:48:10
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-27 18:06:13
 * @Description: actions
 */

import { PLAY_MODE } from '@/assets/js/constant'

export function selectPlay({ commit, state }, { list, index }) {
  commit('setPlayMode', PLAY_MODE.sequence)
  commit('setSequenceList', list)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
  commit('setPlayList', list)
  commit('setCurrentIndex', index)
}
