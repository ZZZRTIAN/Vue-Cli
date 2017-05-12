import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
<<<<<<< 0aeaf71b5b38e51c34cfe995e012f8d9b118ce41
=======
import getters from './getters'
>>>>>>> 学习vuex

Vue.use(Vuex)

const store = new Vuex.Store({
<<<<<<< 0aeaf71b5b38e51c34cfe995e012f8d9b118ce41
  modules: {
    app
  }
=======
  // state 状态树
  // state: {
  //   f: '123'
  // },
  modules: {
    app
  },
  getters
>>>>>>> 学习vuex
})

export default store
