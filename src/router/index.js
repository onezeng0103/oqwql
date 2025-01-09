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
      path: '/search',
      name: 'search',
      component: () => import('../views/search/index.vue')
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
      path: '/secrety/fundpwd',
      name: 'fundpwd',
      component: () => import('../views/secrety/fundpwd.vue')
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
    },
    {
      path: '/userauth/authhight',
      name: 'authhight',
      component: () => import('../views/userauth/authhight.vue')
    },
    {
      path: '/flashExchange',
      name: 'flashExchange',
      component: () => import('../views/flashExchange/index.vue')
    },
    {
      path: '/flashExchange/currencyList',
      name: 'currencyList',
      component: () => import('../views/flashExchange/currencyList.vue')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('../views/more/index.vue')
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('../views/withdraw/index.vue')
    },
    {
      path: '/withdraw/record',
      name: 'withdrawRecord',
      component: () => import('../views/withdraw/record.vue')
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: () => import('../views/recharge/index.vue')
    },
    {
      path: '/recharge/record',
      name: 'rechargeRecord',
      component: () => import('../views/recharge/record.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('../views/wallet/index.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/help/index.vue')
    },
    {
      path: '/helpDetail/:id',
      name: 'HelpDetail',
      component: () => import('../views/help/helpDetail.vue')
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: () => import('../views/exchange/index.vue')
    },
    {
      path: '/cashflow',
      name: 'cashflow',
      component: () => import('../views/cashflow/index.vue')
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
