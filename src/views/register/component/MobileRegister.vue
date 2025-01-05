<template>
  <uni-view class="login">
    <uni-view class="login-bottom">
      <uni-view class="container-box"
        ><uni-view class="item">
          <uni-text class="font-13 color-gray"><span>手机号</span></uni-text>
          <uni-view class="input-box phone-box"
            ><uni-view class="area-code" @click="showBottom = true"
              ><uni-text class="font-14 color-black font-weight"
                ><span>+{{ phoneCode }}</span></uni-text
              ><uni-text
                class="fui-icon"
                style="color: var(--dark-gray); font-size: 1.125rem; font-weight: normal"
                ><span></span></uni-text
              ></uni-view
            ><uni-input class="font-14 color-black"
              ><div class="uni-input-wrapper">
                <input
                  v-model="formData.phone"
                  type="number"
                  pattern="[0-9]*"
                  placeholder="请输入手机号码"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input></uni-view
        ></uni-view>
        <uni-view class="item">
          <uni-text class="font-13 color-gray"> <span>密码</span></uni-text>
          <uni-view class="input-box">
            <uni-input class="font-14 color-black">
              <div class="uni-input-wrapper">
                <input
                  :type="isPwd ? 'password' : 'text'"
                  v-model="formData.loginPassword"
                  maxlength="140"
                  placeholder="请输入登陆密码"
                  class="uni-input-input"
                  autocomplete="off"
                />
              </div>
            </uni-input>
            <uni-view class="icon-box">
              <uni-text
                @click="isPwd = !isPwd"
                class="fui-icon"
                style="color: var(--dark-gray); font-size: 1.25rem; font-weight: normal"
              >
                <span v-if="isPwd"></span>
                <span v-else></span>
              </uni-text></uni-view
            >
          </uni-view>
        </uni-view>
        <uni-view class="item">
          <uni-text class="font-13 color-gray"> <span>确认密码</span></uni-text>
          <uni-view class="input-box">
            <uni-input class="font-14 color-black">
              <div class="uni-input-wrapper">
                <input
                  :type="isPwd2 ? 'password' : 'text'"
                  v-model="pwd"
                  maxlength="140"
                  placeholder="请再次输入登陆密码"
                  class="uni-input-input"
                  autocomplete="off"
                />
              </div>
            </uni-input>
            <uni-view class="icon-box">
              <uni-text
                @click="isPwd2 = !isPwd2"
                class="fui-icon"
                style="color: var(--dark-gray); font-size: 1.25rem; font-weight: normal"
              >
                <span v-if="isPwd2"></span>
                <span v-else></span>
              </uni-text></uni-view
            >
          </uni-view>
        </uni-view>
        <uni-view class="item">
          <uni-text class="font-13 color-gray"> <span>邀请码</span></uni-text>
          <uni-view class="input-box">
            <uni-input class="font-14 color-black">
              <div class="uni-input-wrapper">
                <input
                  type="text"
                  v-model="formData.activeCode"
                  maxlength="140"
                  placeholder="请输入邀请码"
                  class="uni-input-input"
                  autocomplete="off"
                />
              </div>
            </uni-input>
          </uni-view>
        </uni-view>
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
              </uni-text> </uni-view></uni-view
        ></uni-view>
        <uni-view class="button"
          ><uni-button @click="handleSubmit" id="" class="" disabled="true"
            >注册</uni-button
          ></uni-view
        >
        <uni-view class="cell log-cell"
          ><uni-text
            @click="router.push('/login')"
            data-v-5216bbd0=""
            class="font-13 font-weight color-primary"
            ><span>立即登入</span></uni-text
          ></uni-view
        >
      </uni-view>
    </uni-view>
  </uni-view>
  <PhonePopup :showBottom="showBottom" @close="handleClose" />
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { signUp, mobileCode } from '@/api/user'
import { useMainStore } from '@/store/index'
import PhonePopup from '@/components/phonePopup/index.vue'

const mainStore = useMainStore()
const router = useRouter()
const phoneCode = ref('852')
const isPwd = ref(true)
const isPwd2 = ref(true)
const pwd = ref('')
// 倒计时
const time = ref(0)
const flag = ref(false)
const formData = ref({
  phone: '',
  loginPassword: '',
  activeCode: '',
  code: '',
  signType: 2
})
const showBottom = ref(false)
const handleClose = (value) => {
  if (value.phoneCode) {
    phoneCode.value = value.phoneCode
  }
  showBottom.value = false
}

const getCode = () => {
  if (!formData.value.phone) {
    showToast('请输入手机号')
    return
  }
  mobileCode('REGISTER', formData.value.phone).then((res) => {
    if (res.code == '200') {
      showToast(res.msg)
      flag.value = true
      time.value = 60 * 1000
    }
  })
}
const handleSubmit = () => {
  if (!formData.value.phone) {
    showToast('请输入用户名')
    return
  }
  if (!formData.value.loginPassword) {
    showToast('请输入密码')
    return
  }
  if (!pwd.value) {
    showToast('请再次输入密码')
    return
  }
  if (mainStore.getISCode && !formData.value.code) {
    showToast('请输入验证码')
    return
  }
  if (formData.value.loginPassword !== pwd.value) {
    showToast('两次密码不一致')
    return
  }
  signUp(formData.value)
    .then((res) => {
      if (res.code == '200') {
        showToast('注册成功！')
        setTimeout(() => {
          router.push('/login')
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
