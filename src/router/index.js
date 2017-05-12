import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Page1 from '@/components/page01'
import Page2 from '@/components/page02'
import One from '@/components/children/one'
import Foot from '@/components/footer'

/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/footer',
      name: 'Foot',
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
