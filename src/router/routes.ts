import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'SolAZDev - Home', component: () => import('pages/IndexPage.vue') },
      { path: 'resume', name: 'SolAZDev - Resume', component: () => import('pages/Resume.vue') },
      { path: 'visuals', name: 'SolAZDev - Visual Works', component: () => import('pages/VisualPortfolioMenu.vue') },
      { path: 'visuals/levels', name: 'SolAZDev - Level Design', component: () => import('src/pages/Levels.vue') },
      { path: 'visuals/renders', name: 'SolAZDev - 3D Artwork', component: () => import('pages/TDArtGallery.vue') },
      { path: 'games', name: 'SolAZDev - Games', component: () => import('pages/GamesMenu.vue') },
      { path: 'games/:id', name: 'SolAZDev - Game Info', component: () => import('pages/GameDetails.vue') },
      { path: 'other/', name: 'SolAZDev - Other Projects', component: () => import('pages/OtherProjects.vue') },
      { path: 'other/:id', name: 'SolAZDev - Project Info', component: () => import('pages/ProjectDetails.vue') },    
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
