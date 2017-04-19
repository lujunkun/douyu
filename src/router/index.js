import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hot from '../pages/Hot'
import fenL from '../pages/fenL'
import Game from '../pages/game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hot
    },
    {
    path:"/fenlei",
      component:fenL
    },
    {
      path:"/room/:name/:id",
      component:Game
    }
  ]
})
