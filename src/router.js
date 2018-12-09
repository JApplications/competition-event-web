import Vue from 'vue'
import Router from 'vue-router'
import Competitions from './components/Competitions.vue'
import CompetitionDetails from './components/CompetitionDetails.vue'
import NewCompetition from './components/NewCompetition.vue'
import Events from './components/Events.vue'
import NewEvent from './components/NewEvent.vue'
import EventDetails from './components/EventDetails.vue'
import Contestants from './components/Contestants.vue'
import NewContestant from './components/NewContestant.vue'
import ContestantDetails from './components/ContestantDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Competitions
    },
    {
      path: '/competitions',
      name: 'competitions',
      component: Competitions
    },
    {
      path: '/new-competition',
      name: 'new-competition',
      component: NewCompetition
    },
    {
      path: '/competition-details/:id',
      name: 'competition-details',
      component: CompetitionDetails
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/new-event',
      name: 'new-event',
      component: NewEvent
    },
    {
      path: '/event-details/:id',
      name: 'event-details',
      component: EventDetails
    },
    {
      path: '/contestants',
      name: 'contestants',
      component: Contestants
    },
    {
      path: '/new-contestant',
      name: 'new-contestant',
      component: NewContestant
    },
    {
      path: '/contestant-details/:id',
      name: 'contestant-details',
      component: ContestantDetails
    }
  ]
})
