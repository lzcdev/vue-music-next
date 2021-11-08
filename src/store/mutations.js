/*
 * @Author: jinqing
 * @Date: 2021-10-27 17:43:54
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-08 14:08:43
 * @Description: mutations
 */

const mutations = {
  setPlayingState(state, playing) {
    state.playing = playing
  },
  setSequenceList(state, list) {
    state.sequenceList = list
  },
  setPlayList(state, list) {
    state.playList = list
  },
  setPlayMode(state, mode) {
    state.playMode = mode
  },
  setCurrentIndex(state, index) {
    state.currentIndex = index
  },
  setFullScreen(state, fullScreen) {
    state.fullScreen = fullScreen
  },
  setFavoriteList(state, list) {
    state.favoriteList = list
  }
}

export default mutations
