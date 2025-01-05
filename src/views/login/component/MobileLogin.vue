<template>
  <uni-view class="login">
    <uni-view class="login-bottom">
      <uni-view class="container-box"
        ><uni-view class="item"
          >
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
        <uni-view class="item"
          ><uni-text class="font-13 color-gray">
            <span>验证吗</span>
          </uni-text>
          <uni-view class="input-box">
            <uni-input class="font-14 color-black">
              <div class="uni-input-wrapper">
                <input
                  v-model="formData.code"
                  maxlength="140"
                  placeholder="请输入验证码"
                  class="uni-input-input"
                  autocomplete="off"
                />
              </div>
            </uni-input>
            <uni-view class="icon-box">
              <uni-text
                @click="isPwd = !isPwd"
                class="fui-icon"
                style="color: var(--dark-gray); font-size: 0.9rem; font-weight: normal"
              >
                <span v-if="!flag" @click="getCode">发送</span>
                <span v-else><van-count-down :time="time" format="ss" @finish="finish" /></span>
              </uni-text>
            </uni-view>
          </uni-view>
        </uni-view>
        <uni-view class="button"
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
  <PhonePopup :showBottom="showBottom" @close="handleClose" />
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { signIn, mobileCode } from '@/api/user'
import { useUserStore } from '@/store/user/index'
import PhonePopup from '@/components/phonePopup/index.vue'
const userStore = useUserStore()
const router = useRouter()
const isPwd = ref(true)
const phoneCode = ref('852')
const formData = ref({
  phone: '',
  code: '',
  signType: 2
})
// 倒计时
const time = ref(0)
const flag = ref(false)
const getCode = () => {
  if (!formData.value.phone) {
    showToast('请输入手机号')
    return
  }
  mobileCode('LOGIN', phoneCode.value + formData.value.phone).then((res) => {
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

const showBottom = ref(false)
const handleClose = (value) => {
  if (value.phoneCode) {
    phoneCode.value = value.phoneCode
  }
  showBottom.value = false
}

const handleSubmit = () => {
  if (!formData.value.phone) {
    showToast('请输入手机号')
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
