<template>
  <uni-view class="forget"
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
              style="color: var(--black); font-size: 1.75rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--black); font-weight: 500"
              ><span>忘记密码？</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="body-wrap"
      ><uni-view class="login-mode"
        ><uni-view class="item active"
          ><uni-text><span>邮箱</span></uni-text></uni-view
        ></uni-view
      ><uni-view class="login-label"
        ><uni-text class="font-13 color-gray"><span>邮箱账号</span></uni-text
        ><uni-view class="input-box mt-7"
          ><uni-input
            ><div class="uni-input-wrapper">
              <input
                v-model="email"
                type="text"
                maxlength="140"
                placeholder="请输入邮箱账号"
                enterkeyhint="done"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input></uni-view></uni-view
      ><uni-view class="button-box"
        ><uni-view
          class="fui-button__wrap fui-button__flex-1"
          style="
            width: 100%;
            height: 2.75rem;
            margin: 0px;
            border-radius: 2.75rem;
            background: var(--content-primary);
          "
          ><uni-button
            @click="next"
            class="fui-button fui-text__bold fui-button__flex-1"
            style="
              width: 100%;
              height: 2.75rem;
              line-height: 2.75rem;
              background: var(--content-primary);
              border-width: 0px;
              border-color: var(--content-primary);
              border-radius: 2.75rem;
              font-size: 0.875rem;
              color: var(--background-primary);
            "
            >下一步</uni-button
          ></uni-view
        ></uni-view
      ></uni-view
    ></uni-view
  >
  <van-popup v-model:show="showBottom" position="bottom">
    <uni-view class="authPanel">
      <uni-view class="authPanel-conbox"
        ><uni-view class="title"
          ><uni-text class="font-16 font-weight color-black"><span>安全验证</span></uni-text
          ><uni-view class="close"
            ><uni-text
              class="fui-icon"
              style="color: var(--black); font-size: 1.5rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ></uni-view
        ><uni-view class="input-label"
          ><uni-text class="font-13 color-black"><span> 验证码</span></uni-text
          ><uni-view class="input-box mt-10"
            ><uni-input
              ><div class="uni-input-wrapper">
                <input
                  v-model="code"
                  type="number"
                  maxlength="140"
                  placeholder="请输入验证码"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input
            ><uni-text class="font-13 color-blue font-weight">
              <span v-if="!flag" @click="getCode">重新发送</span>
              <span v-else
                ><van-count-down
                  :time="time"
                  format="ss"
                  @finish="finish" /></span></uni-text></uni-view></uni-view
        ><uni-view class="button-box"
          ><uni-view
            class="fui-button__wrap fui-button__flex-1"
            style="
              width: 100%;
              height: 2.75rem;
              margin: 0px;
              border-radius: 0.5rem;
              background: var(--blue);
            "
            ><uni-button
              @click="confirm"
              class="fui-button fui-button__flex-1"
              style="
                width: 100%;
                height: 2.75rem;
                line-height: 2.75rem;
                background: var(--blue);
                border-width: 0px;
                border-color: var(--blue);
                border-radius: 0.5rem;
                font-size: 0.8125rem;
                color: rgb(255, 255, 255);
              "
              ><uni-text
                class="fui-button__text"
                style="font-size: 0.8125rem; line-height: 0.8125rem; color: rgb(255, 255, 255)"
                ><span>确认</span></uni-text
              ></uni-button
            ></uni-view
          ></uni-view
        ></uni-view
      >
    </uni-view>
  </van-popup>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { emailCode } from '@/api/user'
const router = useRouter()
const email = ref('')
const code = ref('')
const showBottom = ref(false)

const next = () => {
  if (!email.value) {
    showToast('请输入邮箱')
    return
  }
  emailCode('FIND_PASSWORD', email.value).then((res) => {
    if (res.code === 500) {
      showToast(res.msg)
    } else {
      showToast(res.msg)
      time.value = 300 * 1000
      showBottom.value = true
    }
  })
}
const flag = ref(false)
const time = ref(0)
const finish = () => {
  flag.value = false
}
const confirm = () => {
  if (!code.value) {
    showToast('请输入验证码')
    return
  }
  showBottom.value = false
  router.push('/setpwd?email=' + email.value + '&code=' + code.value)
}
</script>
