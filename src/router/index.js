import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/HomeView.vue'
import Item from '@/pages/ItemView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: Item
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
