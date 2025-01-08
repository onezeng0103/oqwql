<template>
  <uni-view class="newPwd"
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
              ><span>{{ userTardPwd ? '修改提现密码' : '设置提现密码' }}</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="newPwd-body">
      <template v-if="!userTardPwd">
        <uni-view class="label-box"
          ><uni-view class="text-cell"
            ><uni-text class="font-12 color-gray"><span>提现密码</span></uni-text></uni-view
          >

          <uni-view class="input-box"
            ><uni-input
              ><div class="uni-input-wrapper">
                <input
                  v-model="formData.password"
                  :type="isPwd ? 'password' : 'text'"
                  maxlength="140"
                  placeholder="请输入提现密码"
                  enterkeyhint="done"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input
            ><uni-text
              @click="isPwd = !isPwd"
              class="fui-icon"
              style="color: var(--content-tertiary); font-size: 1.1875rem; font-weight: normal"
              ><span v-if="isPwd"></span> <span v-else></span></uni-text
            ></uni-view
          >
        </uni-view>
      </template>
      <template v-else>
        <uni-view class="label-box"
          ><uni-view class="text-cell"
            ><uni-text class="font-12 color-gray"><span>旧密码</span></uni-text></uni-view
          >

          <uni-view class="input-box"
            ><uni-input
              ><div class="uni-input-wrapper">
                <input
                  v-model="formData2.oldPwd"
                  :type="oldPwd ? 'password' : 'text'"
                  maxlength="140"
                  placeholder="请输入旧提现密码"
                  enterkeyhint="done"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input
            ><uni-text
              @click="oldPwd = !oldPwd"
              class="fui-icon"
              style="color: var(--content-tertiary); font-size: 1.1875rem; font-weight: normal"
              ><span v-if="oldPwd"></span> <span v-else></span></uni-text
            ></uni-view
          >
        </uni-view>
        <uni-view class="label-box"
          ><uni-view class="text-cell"
            ><uni-text class="font-12 color-gray"><span>新密码</span></uni-text></uni-view
          >

          <uni-view class="input-box"
            ><uni-input
              ><div class="uni-input-wrapper">
                <input
                  v-model="formData2.newPwd"
                  :type="newPwd ? 'password' : 'text'"
                  maxlength="140"
                  placeholder="请输入新提现密码"
                  enterkeyhint="done"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input
            ><uni-text
              @click="newPwd = !newPwd"
              class="fui-icon"
              style="color: var(--content-tertiary); font-size: 1.1875rem; font-weight: normal"
              ><span v-if="newPwd"></span> <span v-else></span></uni-text
            ></uni-view
          >
        </uni-view>
        <uni-view class="label-box"
          ><uni-view class="text-cell"
            ><uni-text class="font-12 color-gray"><span>确认密码</span></uni-text></uni-view
          >

          <uni-view class="input-box"
            ><uni-input
              ><div class="uni-input-wrapper">
                <input
                  v-model="formData2.NPwd"
                  :type="NPwd ? 'password' : 'text'"
                  maxlength="140"
                  placeholder="请输入确认密码"
                  enterkeyhint="done"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input
            ><uni-text
              @click="NPwd = !NPwd"
              class="fui-icon"
              style="color: var(--content-tertiary); font-size: 1.1875rem; font-weight: normal"
              ><span v-if="NPwd"></span> <span v-else></span></uni-text
            ></uni-view
          >
        </uni-view>
      </template>
      <uni-view class="label-button"
        ><uni-view
          class="fui-button__wrap fui-button__flex-1"
          style="
            width: 100%;
            height: 2.4375rem;
            margin: 0px;
            border-radius: 2.4375rem;
            background: var(--background-secondary);
          "
          ><uni-button
            @click="submit"
            class="fui-button fui-button__flex-1"
            style="
              width: 100%;
              height: 2.4375rem;
              line-height: 2.4375rem;
              background: var(--background-secondary);
              border-width: 0px;
              border-color: var(--background-secondary);
              border-radius: 2.4375rem;
              font-size: 0.8125rem;
              color: var(--content-tertiary);
            "
            >确认</uni-button
          ></uni-view
        ></uni-view
      ></uni-view
    ></uni-view
  >
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { setFundPwd, updateFundPwd } from '@/api/user'
import { useUserStore } from '@/store/user'
const router = useRouter()
const userStore = useUserStore()
const userTardPwd = computed(() => {
  return userStore.userInfo.detail?.userTardPwd
})
const formData = ref({
  password: ''
})
const isPwd = ref(true)
const formData2 = ref({
  newPwd: '',
  oldPwd: '',
  NPwd: ''
})
const newPwd = ref(true)
const oldPwd = ref(true)
const NPwd = ref(true)
const submit = () => {
  if (!userTardPwd.value) {
    if (!formData.value.password) {
      showToast('请输入提现密码')
      return
    }
    setFundPwd(formData.value.password).then((res) => {
      if (res.code == '200') {
        showToast('设置成功')
        router.back()
      } else {
        showToast(res.msg)
      }
    })
  } else {
    if (!formData2.value.oldPwd) {
      showToast('请输入旧提现密码')
      return
    }
    if (!formData2.value.newPwd) {
      showToast('请输入新提现密码')
      return
    }
    if (!formData2.value.NPwd) {
      showToast('请输入确认密码')
      return
    }
    if (formData2.value.newPwd != formData2.value.NPwd) {
      showToast('两次密码不一致')
      return
    }
    updateFundPwd(formData2.value.oldPwd, formData2.value.newPwd, 1).then((res) => {
      if (res.code == '200') {
        showToast('设置成功')
        router.back()
      } else {
        showToast(res.msg)
      }
    })
  }
}
</script>
