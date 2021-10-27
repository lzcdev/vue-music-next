/*
 * @Author: jinqing
 * @Date: 2021-10-27 17:40:13
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-27 18:07:14
 * @Description: state
 */

import { PLAY_MODE } from '@/assets/js/constant'

const state = {
  sequenceList: [],
  playList: [],
  playing: false,
  playMode: PLAY_MODE.sequence,
  currentIndex: 0,
  fullScreen: false
}

export default state
