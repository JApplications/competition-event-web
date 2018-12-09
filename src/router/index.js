import Vue from 'vue'
import Router from 'vue-router'
import Events from './components/Events.vue'
import Competitions from '@/components/Competitions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Competitions
    },
    {
      path: '/competitions',
      name: 'competitions',
      component:Competitions
    },
    {
      path: '/events',
      name: 'events',
      component:Events
    }
  ]
})
