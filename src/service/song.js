/*
 * @Author: jinqing
 * @Date: 2021-10-22 15:24:55
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-27 11:27:10
 * @Description: song
 */

import { get } from './base'

export function processSongs(songs) {
  if (!songs.length) {
    return Promise.resolve(songs)
  }

  return get('/api/getSongsUrl', {
    mid: songs.map((song) => {
      return song.mid
    })
  }).then((result) => {
    const map = result.map
    return songs.map((song) => {
      song.url = map[song.mid]
      return song
    })
    // .filter((song) => {
    //   return song.url && song.url.indexOf('vkey') > -1
    // })
  })
}
