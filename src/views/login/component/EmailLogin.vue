<template>
  <uni-view class="login">
    <uni-view class="login-bottom">
      <uni-view class="container-box"
        ><uni-view class="item"
          ><uni-text class="font-13 color-gray"><span>邮箱</span></uni-text
          ><uni-view class="input-box phone-box"
            ><uni-input class="font-14 color-black"
              ><div class="uni-input-wrapper">
                <input
                  v-model="formData.email"
                  maxlength="140"
                  placeholder="请输入邮箱"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input></uni-view
        ></uni-view>
        <uni-view class="item"
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
                /></div
            ></uni-input>
            <uni-view class="icon-box">
              <uni-text
                @click="isPwd = !isPwd"
                class="fui-icon"
                style="color: var(--dark-gray); font-size: 0.9rem; font-weight: normal"
              >
                <span v-if="!flag" @click="getCode">发送</span>
                <span v-else><van-count-down :time="time" format="ss" @finish="finish" /></span>
              </uni-text>
            </uni-view> </uni-view></uni-view
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
import { signIn, emailCode } from '@/api/user'
import { useUserStore } from '@/store/user/index'
const userStore = useUserStore()
const router = useRouter()
const formData = ref({
  email: '',
  code: '',
  signType: 1
})
// 倒计时
const time = ref(0)
const flag = ref(false)
const getCode = () => {
  if (!formData.value.email) {
    showToast('请输入邮箱')
    return
  }
  emailCode('LOGIN', formData.value.email).then((res) => {
    if (res.code == '200') {
      showToast(res.msg)
      flag.value = true
      time.value = 60 * 1000
    }
  })
}
// 倒计时结束
const finish = () => {
  flag.value = false
}
const handleSubmit = () => {
  if (!formData.value.email) {
    showToast('请输入邮箱')
    return
  }
  if (!formData.value.code) {
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
