import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/index.vue')
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('../views/forget/index.vue')
    },
    {
      path:'/setpwd',
      name:'setpwd',
      component: () => import('../views/setpwd/index.vue')
    }
  ]
})

export default router
