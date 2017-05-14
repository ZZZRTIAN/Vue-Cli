import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Page1 from '@/components/page01'
import Page2 from '@/components/page02'
import One from '@/components/children/one'
import Foot from '@/components/footer'

/* layout */
import Layout from '../views/layout/Layout'

// dashboard
const dashboard = resolve => require(['../views/dashboard/index'], resolve)

/* Introduction */
const Introduction = resolve => require(['../views/introduction/index'], resolve)

/* error page */
const Error404 = resolve => require(['../views/error/404'], resolve)
const Error401 = resolve => require(['../views/error/401'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      hidden: true,
      component: Layout,
      redirect: '/dashboard',
      children: [{ path: 'dashboard', component: dashboard }]
    },
    {path: '/404', component: Error404, hidden: true},
    {path: '/401', component: Error401, hidden: true},
    {
      path: '/introduction',
      component: Layout,
      redirect: '/introduction/index',
      icon: 'xinrenzhinan', // 图标
      noDropdown: true, // 没有子
      children: [{ path: 'index', component: Introduction, name: '简述' }]
    },
    {
      path: '/footer',
      name: 'Foot',
      icon: 'zujian',
      component: Foot
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1,
      children: [
        {
          path: '/one', component: One
        }
      ]
    },
    {
      path: '/page2/:name',
      name: 'Page2',
      component: Page2,
      children: [
        {
          path: 'one', component: One
        }
      ]
    }
  ]
})
