import Vue from 'vue'
import Router from 'vue-router'
import Competitions from './components/Competitions.vue'
import CompetitionDetails from './components/CompetitionDetails.vue'
import NewCompetition from './components/NewCompetition.vue'
import CompetitionEvents from './components/CompetitionEvents.vue'
import NewCompetitionEvent from './components/NewCompetitionEvent.vue'
import CompetitionEventDetails from './components/CompetitionEventDetails.vue'
import Contestants from './components/Contestants.vue'
import NewContestant from './components/NewContestant.vue'
import ContestantDetails from './components/ContestantDetails.vue'
import Scores from './components/Scores.vue'
import ScoresForEvaluation from './components/ScoresForEvaluation.vue'
import ScoreRate from './components/ScoreRate.vue'
import PostDetails from './components/PostDetails.vue'
import NewPost from './components/NewPost.vue'

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
      component: CompetitionEvents
    },
    {
      path: '/new-event',
      name: 'new-event',
      component: NewCompetitionEvent
    },
    {
      path: '/event-details/:id',
      name: 'event-details',
      component: CompetitionEventDetails
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
    },
    {
      path: '/scores',
      name: 'scores',
      component: Scores
    },
    {
      path: '/scores-for-evaluation',
      name: 'scores-for-evaluation',
      component: ScoresForEvaluation
    },
    {
      path: '/score-rate/:id',
      name: 'score-rate',
      component: ScoreRate
    },
    {
      path: '/post-details/:id',
      name: 'post-details',
      component: PostDetails
    },
    {
      path: '/new-post',
      name: 'new-post',
      component: NewPost
    }
  ]
})
