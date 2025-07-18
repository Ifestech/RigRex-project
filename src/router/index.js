
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Services from  '../components/Services.vue'

const router = createRouter({
  history: createWebHistory (import.meta.env.Base_URl),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView
    },
    {
      path: '/Services',
      name: 'services',
      component: Services
    },
  ]
})

export default router

