import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Portfolio from '../views/PortfolioMain.vue'
import Projects from '../views/Projects.vue'
import ProjectView from '../views/ProjectView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    // name: 'projects',
    component: ProjectView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
