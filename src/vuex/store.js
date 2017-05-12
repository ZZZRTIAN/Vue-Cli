import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
  state: {author: 'ZZZRTIAN'},
  mutations: {
    newAuthor (state, msg) {
      state.author = msg
    }
  }
})

export default store
