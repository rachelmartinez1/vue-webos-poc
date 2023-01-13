// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Activate from '../views/Activate.vue'
import Default from '../layouts/default/Default.vue'

const routes = [
  {
    path: '',
    component: Default, // Header
    // component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home,
      },
      {
        path: '/activate',
        name: 'Activate',
        component: Activate,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
