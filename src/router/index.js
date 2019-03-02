import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/page/default'
import Index from '@/page/index'
import About from '../page/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/index',
      component: Default,
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: "/about",
          name: 'about',
          component: About
        }
      ]
    }
  ]
})
