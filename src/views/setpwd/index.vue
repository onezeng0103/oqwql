<template>
  <uni-view class="setPassword"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--white);
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
              style="color: var(--color-title-black); font-size: 1.75rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--color-title-black); font-weight: 500"
              ><span>设定密码</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="setPassword-body"
      ><uni-view class="body-label"
        ><uni-text class="font-13 color-gray"><span>登入密码</span></uni-text
        ><uni-view class="body-label-input mt-10"
          ><uni-input
            ><div class="uni-input-wrapper">
              <input
                v-model="password"
                @input="handleInputChange"
                :type="isPwd ? 'password' : 'text'"
                maxlength="140"
                enterkeyhint="done"
                class="uni-input-input"
                placeholder="请输入密码"
                autocomplete="off"
              /></div></uni-input
          ><uni-text
            @click="isPwd = !isPwd"
            class="fui-icon"
            style="color: var(--color-text-dark-gray); font-size: 1.1875rem; font-weight: normal"
            ><span v-if="isPwd"></span> <span v-else></span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="body-label mt-15"
        ><uni-text class="font-13 color-gray"><span>请再输入</span></uni-text
        ><uni-view class="body-label-input mt-10"
          ><uni-input
            ><div class="uni-input-wrapper">
              <input
                v-model="password2"
                :type="isPwd2 ? 'password' : 'text'"
                maxlength="140"
                class="uni-input-input"
                placeholder="请再输入密码"
                autocomplete="off"
              /></div></uni-input
          ><uni-text
            @click="isPwd2 = !isPwd2"
            class="fui-icon"
            style="color: var(--color-text-dark-gray); font-size: 1.1875rem; font-weight: normal"
            ><span v-if="isPwd2"></span> <span v-else></span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="body-label mt-15"
        ><uni-view class="body-label-tips"
          ><uni-view class="flex align-center"
            ><uni-text
              class="fui-icon"
              style="color: var(--color-text-dark-gray); font-size: 1.0625rem; font-weight: normal"
              ><span v-if="rules[0]"></span><span v-else></span></uni-text
            ><uni-text class="font-12 color-gray"><span>8-14位元字元</span></uni-text></uni-view
          ><uni-view class="flex align-center mt-5"
            ><uni-text
              class="fui-icon"
              style="color: var(--color-text-dark-gray); font-size: 1.0625rem; font-weight: normal"
              ><span v-if="rules[1]"></span><span v-else></span></uni-text
            ><uni-text class="font-12 color-gray"><span>至少包含1个数字</span></uni-text></uni-view
          ><uni-view class="flex align-center mt-5"
            ><uni-text
              class="fui-icon"
              style="color: var(--color-text-dark-gray); font-size: 1.0625rem; font-weight: normal"
              ><span v-if="rules[2]"></span><span v-else></span></uni-text
            ><uni-text class="font-12 color-gray"
              ><span>至少包含1个大写字母</span></uni-text
            ></uni-view
          ></uni-view
        ></uni-view
      >
      <uni-view class="body-buttons"
        ><uni-view
          class="fui-button__wrap fui-button__flex-1"
          height="88rpx"
          style="
            width: 100%;
            height: 3rem;
            margin: 0px;
            border-radius: 0.5rem;
            background: var(--blue);
          "
          ><uni-button
            @click="submit"
            class="fui-button fui-button__flex-1"
            style="
              width: 100%;
              height: 3rem;
              line-height: 3rem;
              background: var(--blue);
              border-width: 0px;
              border-color: var(--blue);
              border-radius: 0.5rem;
              font-size: 0.9375rem;
              color: rgb(255, 255, 255);
            "
            ><uni-text
              class="fui-button__text"
              style="font-size: 0.9375rem; line-height: 0.9375rem; color: rgb(255, 255, 255)"
              ><span>提交</span></uni-text
            ></uni-button
          ></uni-view
        ></uni-view
      ></uni-view
    ></uni-view
  >
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { backPwdToEmail } from '@/api/user'
import { showToast } from 'vant'
const route = useRoute()
const router = useRouter()
const password = ref('')
const password2 = ref('')
const rules = ref([0, 0, 0])
const isPwd = ref(true)
const isPwd2 = ref(true)
const handleInputChange = (e) => {
  if (e.target.value.length >= 8 && e.target.value.length <= 14) {
    rules.value[0] = 1
  }
  if (e.target.value.search(/[0-9]/) >= 0) {
    rules.value[1] = 1
  }
  if (e.target.value.search(/[A-Z]/) >= 0) {
    rules.value[2] = 1
  }
}
const submit = () => {
  let flag = rules.value.every((item) => item === 1)
  if (password.value !== password2.value) {
    showToast('两次密码不一致')
    return
  }
  if (!flag) {
    showToast('密码格式不正确')
    return
  }
  backPwdToEmail(route.query.email, password.value, route.query.code).then((res) => {
    if (res.code == '200') {
      showToast(res.msg)
      setTimeout(() => {
        router.replace('/login')
      }, 500)
    } else {
      showToast(res.msg)
    }
  })
}
</script>
