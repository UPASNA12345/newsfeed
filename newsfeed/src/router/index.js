import Vue from 'vue'
import Router from 'vue-router'
import NewsFeed from '@/components/NewsFeed'
import SourceSelection from '@/components/SourceSelection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewsFeed',
      component: NewsFeed
    },
    {
      path: '/',
      name: 'SourceSelection',
      component: SourceSelection
    }
  ]
})
