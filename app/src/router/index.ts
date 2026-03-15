import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BoroughGame from '@/views/BoroughGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    'path': '/',
    'name': "home",
    "component": HomeView
  },{
    'path': '/play/:borough',
    'name': "borough-view",
    "component": BoroughGame
  },{
    'path': '/secret/supersecretpath',
    'name': "hi-mr-whalen",
    "component": BoroughGame
  }],
})

export default router
