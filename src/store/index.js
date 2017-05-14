import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  // state 状态树
  // state: {
  //   f: '123'
  // },
  modules: {
    app
  },
  getters
})

export default store
