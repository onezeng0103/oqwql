<template>
  <uni-view class="baseAuth"
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
              ><span>Lv.1 基础身份认证 1/2</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="baseAuth-container"
      ><uni-view class="label"
        ><uni-text class="font-13 color-black"><span>姓名</span></uni-text
        ><uni-view class="label-box"
          ><uni-input class="font-13 font-weight"
            ><div class="uni-input-wrapper">
              <input
                v-model="formData.userName"
                type="text"
                placeholder="请输入姓名"
                maxlength="140"
                enterkeyhint="done"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input></uni-view></uni-view
      ><uni-view class="label"
        ><uni-text class="font-13 color-black"><span>证件号码</span></uni-text
        ><uni-view class="label-box"
          ><uni-input class="font-13 font-weight"
            ><div class="uni-input-wrapper">
              <input
                v-model="formData.number"
                type="text"
                maxlength="140"
                placeholder="请输入证件号码"
                enterkeyhint="done"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input></uni-view></uni-view
      ><uni-view class="label"
        ><uni-text class="font-13 color-black"><span>温馨提示：</span></uni-text
        ><uni-text class="font-12 color-gray mt-10"
          ><span
            >确保帐户资产安全，需实名认证后才能进行相关操作，请确保您所提交资料真实有效。</span
          ></uni-text
        ></uni-view
      ></uni-view
    ><uni-view class="footer-button"
      ><uni-view
        class="fui-button__wrap fui-button__flex-1"
        style="
          width: 100%;
          height: 2.75rem;
          margin: 0px;
          border-radius: 0.5rem;
          background: var(--color-gray-bg);
        "
        ><uni-button
          v-if="primaryAuth == null || primaryAuth == 2"
          @click="submit"
          class="fui-button fui-button__flex-1"
          style="
            width: 100%;
            height: 2.75rem;
            line-height: 2.75rem;
            background: var(--color-gray-bg);
            border-width: 0px;
            border-color: var(--color-gray-bg);
            border-radius: 0.5rem;
            font-size: 0.875rem;
            color: var(--color-text-dark-gray);
          "
          >确定</uni-button
        ></uni-view
      ></uni-view
    ></uni-view
  >
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { uploadKYC } from '@/api/user'
import { useUserStore } from '@/store/user'
const router = useRouter()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const formData = ref({
  userName: '',
  number: ''
})
const primaryAuth = computed(() => {
  return userInfo.value.detail?.auditStatusPrimary
})

const submit = () => {
  if (!formData.value.userName) {
    showToast('请输入姓名')
    return
  }
  if (!formData.value.number) {
    showToast('请输入证件号码')
    return
  }
  let params = `realName=${formData.value.userName}&idCard=${formData.value.number}&flag=1`
  uploadKYC(params).then((res) => {
    if (res.code == '200') {
      showToast('提交成功，请耐心等待....')
    } else {
      showToast(res.msg)
    }
    router.back()
  })
}
onMounted(() => {
  if (primaryAuth.value == 1) {
    formData.value.userName = userInfo.value.detail?.realName
    formData.value.number = userInfo.value.detail?.idCard
  }
})
</script>
