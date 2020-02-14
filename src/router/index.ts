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
    component: Home,
    meta: { title: "SolAZDev" }
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
    meta: { title: "SolAZDev - Resume" }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
    meta: { title: "SolAZDev - Portfolio Selection" }
  },
  {
    path: '/3Dporfolio',
    name: '3Dportfolio',
    component: Portfolio3D,
    meta: { title: "SolAZDev - 3D Art Portfolio" }
  },
  {
    path: '/mapportfolio',
    name: 'mapportfolio',
    component: PortfolioLevels,
    meta: { title: "SolAZDev - Level Design Portfolio" }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: { title: "SolAZDev - Projects" }
  },
  {
    path: '/projects/:id',
    // name: 'projects',
    component: ProjectView,
    meta: { title: "SolAZDev - Projects" }
  }
]

const router = new VueRouter({
  routes
})

export default router
