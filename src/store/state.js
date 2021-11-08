/*
 * @Author: jinqing
 * @Date: 2021-10-27 17:40:13
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-08 14:12:31
 * @Description: state
 */

import { PLAY_MODE, FAVORITE_KEY } from '@/assets/js/constant'
import { load } from '@/assets/js/array-store'

const state = {
  sequenceList: [],
  playList: [],
  playing: false,
  playMode: PLAY_MODE.sequence,
  currentIndex: 0,
  fullScreen: false,
  favoriteList: load(FAVORITE_KEY)
}

export default state
