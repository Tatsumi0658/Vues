import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pages/:id',
    name: 'Pages',
    component: () => import('../views/Pages/_id.vue'),
    children: [
      {
        path: 'profile',
        name: 'PagesProfile',
        component: () => import('../views/Profile.vue'),
      }
    ]
      /*{
        path: '/pages/:about',
        name: 'PageAbout',
        component: () => import('../views/Pages/_about.vue')
      }
    ]*/
    /* component: Page */
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
