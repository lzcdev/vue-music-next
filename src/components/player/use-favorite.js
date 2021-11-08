/*
 * @Author: jinqing
 * @Date: 2021-11-08 11:47:30
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-08 14:06:47
 * @Description: use-favorite
 */

import { computed } from 'vue'
import { useStore } from 'vuex'
import { save, remove } from '@/assets/js/array-store'
import { FAVORITE_KEY } from '@/assets/js/constant'
const maxLen = 100

export default function useFavorite() {
  const store = useStore()
  const favoriteList = computed(() => store.state.favoriteList)

  function getFavoriteIcon(song) {
    return isFavorite(song) ? 'icon-favorite' : 'icon-not-favorite'
  }

  function toggleFavorite(song) {
    let list
    if (isFavorite(song)) {
      list = remove(FAVORITE_KEY, compare)
    } else {
      list = save(song, FAVORITE_KEY, compare, maxLen)
    }
    store.commit('setFavoriteList', list)

    function compare(item) {
      return item.id === song.id
    }
  }

  function isFavorite(song) {
    return favoriteList.value.findIndex((item) => {
      return item.id === song.id
    }) > -1
  }

  return {
    getFavoriteIcon,
    toggleFavorite
  }
}
