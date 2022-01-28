import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'HOMEダヨ' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'ABOUTだよ' }
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
      },
      {
        path: 'about',
        name: 'PagesAbout',
        component: () => import('../views/PagesAbout.vue')
      }
    ]
  },
  {
    path: '/a',
    /* redirect: { name: 'About' } */
    redirect: { path: '/about' }
  }
]

/* const scrollBehavior = (to, from, savedPosition) => {
  if(savedPosition){
    return savedPosition
  }else{
    return { x:0, y:0 }
  }
} */

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* 下記でタイトル設定 */
router.afterEach((to)=>{
  document.title = to.meta.title || ''
})

export default router
