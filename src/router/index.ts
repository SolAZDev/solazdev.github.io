import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Portfolio from '../views/PortfolioMain.vue'
import Projects from '../views/Projects.vue'
import ProjectView from '../views/ProjectView.vue'
import Portfolio3D from '../views/Portfolio3D.vue'
import PortfolioLevels from '../views/PortfolioLevels.vue'
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
    path: '/3Dporfolio',
    name: '3Dportfolio',
    component: Portfolio3D
  },
  {
    path: '/mapportfolio',
    name: 'mapportfolio',
    component: PortfolioLevels
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
  }
]

const router = new VueRouter({
  routes
})

export default router
