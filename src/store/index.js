import { createStore } from 'vuex'
import { setItem,getItem } from '../utils/storage.js'


const TOKEN_KEY = 'NOTE_USER'
const store = createStore({
  state () {
    return {
      user: getItem(TOKEN_KEY),
      curPage: 0
    }
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      setItem(TOKEN_KEY,state.user)
    },
    setCurPage (state,val) {
      state.curPage = val
    }
  }
})

export default store