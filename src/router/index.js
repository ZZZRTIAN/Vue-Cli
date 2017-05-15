import Vue from 'vue'
import Router from 'vue-router'
/* layout */
import Layout from '../views/layout/Layout'

// dashboard
const dashboard = resolve => require(['../views/dashboard/index'], resolve)

/* Introduction */
const Introduction = resolve => require(['../views/introduction/index'], resolve)

/* error page */
const Error401 = resolve => require(['../views/error/401'], resolve)
const Error404 = resolve => require(['../views/error/404'], resolve)

/* news */
const Form = resolve => require(['../views/news/form'], resolve)
const Table = resolve => require(['../views/news/table'], resolve)

/* components*/

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
      path: '/errorpage',
      component: Layout,
      redirect: 'noredirect',
      name: '错误页面',
      icon: '404',
      children: [
        { path: '401', component: Error401, name: '401' },
        { path: '404', component: Error404, name: '404' }
      ]
    },
    {
      path: '/news',
      component: Layout,
      redirect: 'noredirect',
      name: '新闻管理',
      icon: '',
      children: [
        { path: 'table', component: Table, name: '新闻列表' },
        { path: 'form', component: Form, name: '发布新闻' }
      ]
    }
  ]
})
