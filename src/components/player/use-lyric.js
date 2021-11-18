/*
 * @Author: jinqing
 * @Date: 2021-11-18 21:11:10
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-18 22:15:35
 * @Description: use lyric
 */

import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'
import { getLyric } from '@/service/song'
import Lyric from 'lyric-parser'

export default function useLyric() {
  const currentLyric = ref(null)

  const store = useStore()
  const currentSong = computed(() => store.getters.currentSong)

  watch(currentSong, async (newSong) => {
    if (!newSong.url || !newSong.id) {
      return
    }
    const lyric = await getLyric(newSong)
    store.commit('addSongLyric', {
      song: newSong,
      lyric: lyric
    })
    if (currentSong.value.lyric !== lyric) {
      return
    }
    currentLyric.value = new Lyric(lyric, handleLyric)
    console.log('123', lyric)
  })

  const handleLyric = () => {
  }
}
