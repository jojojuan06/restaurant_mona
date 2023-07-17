import { createRouter, createWebHistory } from 'vue-router'
import Mesmenus from '../views/MesMenusView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/MesMenus',
      name: 'mesmenus',
      component:Mesmenus
    },
  ]
})

export default router