<template>
  <uni-view class="login">
    <uni-view class="login-bottom">
      <uni-view class="container-box"
        ><uni-view class="item"
          ><uni-text class="font-13 color-gray"><span>用户名</span></uni-text
          ><uni-view class="input-box phone-box"
            ><uni-input class="font-14 color-black"
              ><div class="uni-input-wrapper">
                <input
                  v-model="formData.loginName"
                  maxlength="140"
                  placeholder="请输入用户名"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input></uni-view
        ></uni-view>
        <uni-view class="item"
          ><uni-text class="font-13 color-gray"><span>密码</span></uni-text
          ><uni-view class="input-box"
            ><uni-input class="font-14 color-black"
              ><div class="uni-input-wrapper">
                <input
                  :type="isPwd ? 'password' : 'text'"
                  v-model="formData.loginPassword"
                  maxlength="140"
                  placeholder="请输入登陆密码"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input
            ><uni-view class="icon-box"
              ><uni-text
                @click="isPwd = !isPwd"
                class="fui-icon"
                style="color: var(--dark-gray); font-size: 1.25rem; font-weight: normal"
              >
                <span v-if="isPwd"></span>
                <span v-else></span></uni-text
              ></uni-view
            ></uni-view
          ></uni-view
        >
        <uni-view class="item" v-if="mainStore.getISCode"
          ><uni-text class="font-13 color-gray"><span>验证吗</span></uni-text
          ><uni-view class="input-box"
            ><uni-input class="font-14 color-black"
              ><div class="uni-input-wrapper">
                <input
                  v-model="formData.code"
                  maxlength="140"
                  placeholder="请输入验证码"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input
            ><uni-view class="icon-box"
              ><uni-text
                class="fui-icon"
                style="color: var(--dark-gray); font-size: 1.25rem; font-weight: normal"
              >
                <img
                  @click="refreshCode"
                  style="width: 80px; height: 30px"
                  :src="codeUrl"
                /> </uni-text></uni-view></uni-view></uni-view
        ><uni-view class="button"
          ><uni-button id="" class="" disabled="true" @click="handleSubmit"
            >登入</uni-button
          ></uni-view
        ><uni-view class="cell"
          ><uni-text @click="router.push('/register')" class="font-13 font-weight color-primary"
            ><span>立即注册</span></uni-text
          ><uni-text @click="router.push('/forget')" class="font-13 color-black"
            ><span>忘记密码?</span></uni-text
          ></uni-view
        ></uni-view
      >
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { signIn } from '@/api/user'
import { useUserStore } from '@/store/user/index'
import { useMainStore } from '@/store/index'
const userStore = useUserStore()
const mainStore = useMainStore()
const router = useRouter()
const isPwd = ref(true)
const timestamp = ref(+new Date())
const codeUrl = computed(() => {
  return `${mainStore.verificationCodeUrl}?codeType=LOGIN&timestamp=${timestamp.value}`
})
// 刷新验证码
const refreshCode = () => {
  timestamp.value = +new Date()
}
const formData = ref({
  loginName: '', //用户名/邮箱/手机号
  loginPassword: '', //密码
  code: '', //验证码
  signType: 3
})
const handleSubmit = () => {
  if (!formData.value.loginName) {
    showToast('请输入用户名')
    return
  }
  if (!formData.value.loginPassword) {
    showToast('请输入密码')
    return
  }
  if (mainStore.getISCode && !formData.value.code) {
    showToast('请输入验证码')
    return
  }
  signIn(formData.value)
    .then((res) => {
      if (res.code == '200' && res.data.satoken) {
        showToast('登录成功！')
        let token = res.data.satoken
        userStore.setIsSign(true)
        userStore.setToken(token)
        setTimeout(() => {
          router.replace('/')
          userStore.getUserInfo()
        }, 500)
      } else {
        showToast(res.msg)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>
