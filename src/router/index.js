import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user/index'
import { signUp } from '@/api/user'
import { dispatchCustomEvent } from '@/utils'

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
      path: '/setpwd',
      name: 'setpwd',
      component: () => import('../views/setpwd/index.vue')
    },
    {
      path: '/invaite',
      name: 'invaite',
      component: () => import('../views/invaite/index.vue')
    },
    {
      path: '/invaite/rules',
      name: 'rules',
      component: () => import('../views/invaite/rules.vue')
    },
    {
      path: '/secrety',
      name: 'secrety',
      component: () => import('../views/secrety/index.vue')
    },
    {
      path: '/secrety/phoneAuth',
      name: 'phoneAuth',
      component: () => import('../views/secrety/phoneAuth.vue')
    },
    {
      path: '/secrety/newpwd',
      name: 'newpwd',
      component: () => import('../views/secrety/newpwd.vue')
    },
    {
      path: '/langList',
      name: 'langList',
      component: () => import('../views/langList/index.vue')
    },
    {
      path: '/userauth',
      name: 'userauth',
      component: () => import('../views/userauth/index.vue')
    },
    {
      path: '/userauth/baseauth',
      name: 'baseauth',
      component: () => import('../views/userauth/baseauth.vue')
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  if (userStore.isSign) {
    // 已登录
    userStore.getUserInfo()
    if (to.path.indexOf('/i&') > -1) {
      next({ path: '/', replace: true })
    } else {
      next()
    }
  } else {
    try {
      const singUpRes = await signUp(params)
      if (singUpRes.code == 200 && singUpRes.data.satoken) {
        // 登录成功
        dispatchCustomEvent('event_toastChange', { name: 'login_success' })
        let token = singUpRes.data.satoken
        userStore.setIsSign(true)
        userStore.setToken(token)
        userStore.getUserInfo()
        next('/')
      } else {
        showToast(singUpRes.msg)
      }
      next()
    } catch (error) {
      next()
    }
  }
})
export default router
