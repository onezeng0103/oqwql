<template>
  <uni-view class="setting"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 9;
        "
        ><uni-view class="fui-nav__status-bar" style="height: 0px"></uni-view
        ><uni-view class="fui-nav__header"
          ><uni-view class="fui-nav__left"
            ><uni-text
              @click="router.back()"
              class="fui-icon"
              style="color: var(--content-primary); font-size: 1.75rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
              ><span>安全中心</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="container-box"
      ><uni-view
        class="container-box-cell flex align-center justify-between"
        @click="handlePush('email')"
        ><uni-view class="cell-left flex align-center"
          ><uni-text class="font-14 color-black"><span>邮箱验证</span></uni-text></uni-view
        ><uni-view class="flex align-center justify-end cell-right"
          ><uni-text class="font-14 color-gray">
            <span v-if="!user?.email">未认证</span>
            <span v-else>{{ user?.email }}</span></uni-text
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.0625rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        ></uni-view
      >
      <uni-view
        class="container-box-cell flex align-center justify-between"
        @click="handlePush('phone')"
        ><uni-view class="cell-left flex align-center"
          ><uni-text class="font-14 color-black"><span>手机验证</span></uni-text></uni-view
        ><uni-view class="flex align-center justify-end cell-right"
          ><uni-text class="font-14 color-gray">
            <span v-if="!user?.phone">未认证</span>
            <span v-else>{{ user?.phone }}</span> </uni-text
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.0625rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        >
      </uni-view>
      <uni-view class="container-box-line"></uni-view>
      <uni-view
        class="container-box-cell flex align-center justify-between"
        @click="router.push('/secrety/newpwd')"
        ><uni-view class="cell-left flex align-center"
          ><uni-text class="font-14 color-black"><span>登入密碼</span></uni-text></uni-view
        ><uni-view class="flex align-center justify-end cell-right"
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.0625rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        >
      </uni-view>
      <uni-view
        class="container-box-cell flex align-center justify-between"
        @click="router.push('/secrety/fundpwd')"
        ><uni-view class="cell-left flex align-center"
          ><uni-text class="font-14 color-black"><span>提现密码</span></uni-text></uni-view
        ><uni-view class="flex align-center justify-end cell-right">
          <uni-text class="font-14 color-gray" v-if="!userTardPwd"><span>未设置</span></uni-text>

          <uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.0625rem; font-weight: normal"
          >
            <span></span></uni-text
          ></uni-view
        >
      </uni-view>
    </uni-view></uni-view
  >
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
const router = useRouter()
const userStore = useUserStore()
const user = computed(() => {
  return userStore.userInfo.user
})
const userTardPwd = computed(() => {
  return userStore.userInfo.detail?.userTardPwd
})
const handlePush = (type) => {
  router.push(`/secrety/phoneAuth?type=${type}`)
}
</script>
