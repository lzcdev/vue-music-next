/*
 * @Author: jinqing
 * @Date: 2021-10-27 17:48:10
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-28 11:30:36
 * @Description: actions
 */

import { PLAY_MODE } from '@/assets/js/constant'
import { shuffle } from '@/assets/js/utils'

export function selectPlay({ commit }, { list, index }) {
  commit('setPlayMode', PLAY_MODE.sequence)
  commit('setSequenceList', list)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
  commit('setPlayList', list)
  commit('setCurrentIndex', index)
}

export function randomPlay({ commit }, list) {
  commit('setPlayMode', PLAY_MODE.random)
  commit('setSequenceList', list)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
  commit('setPlayList', shuffle(list))
  commit('setCurrentIndex', 0)
}
