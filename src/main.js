// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
// import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import permission from './store/permission'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './styles/index.scss'
import './components/Icon-svg/index'
import './assets/iconfont/iconfont'

Vue.use(Vuex)
Vue.use(ElementUi)

Vue.config.productionTip = false

// vue-router 提供的导航钩子主要用来拦截导航，让它完成跳转或取消。
// 使用 router.beforeEach 注册一个全局的 before 钩子
// 当一个导航触发时，全局的 before 钩子按照创建顺序调用。每个钩子方法接收三个参数：
// 1）to:   Route: 即将要进入的目标路由对象
// 2）from: Route: 当前导航正要离开的路由
// 3）next: Function: 一定要调用该方法来 resolve 这个钩子。
router.beforeEach((to, from, next) => {
  // NProgress.start() // 开启Progress
  permission.init({ // 初始化权限
    roles: 'admin',
    router: router.options.routes
  })
  next()
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
