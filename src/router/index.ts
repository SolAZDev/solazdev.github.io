import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import PortfolioMenu from '../views/PortfolioMenu.vue'
import Games from '../views/Games.vue'
import GameDetails from '../views/GameDetails.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/portfolio',
    name: 'Visual Works Portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PortfolioMenu.vue')
  },
  { path: '/games/', name: 'Game Projects', component: Games },
  { path: '/games/:id', name: 'Game Details', component: GameDetails },
  // {path: '/other/'}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
