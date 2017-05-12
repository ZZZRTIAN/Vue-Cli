// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
<<<<<<< 0aeaf71b5b38e51c34cfe995e012f8d9b118ce41
import store from './vuex/store'
=======
import store from './store'
>>>>>>> 学习vuex

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './styles/index.scss'

Vue.use(Vuex)
Vue.use(ElementUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
