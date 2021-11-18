/*
 * @Author: jinqing
 * @Date: 2021-10-27 17:43:54
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-18 21:22:31
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
  },
  addSongLyric(state, { song, lyric }) {
    state.sequenceList.map(item => {
      if (item.mid === song.mid) {
        item.lyric = lyric
      }
      return item
    })
  }
}

export default mutations
