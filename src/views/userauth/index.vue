<template>
  <uni-view class="userAuth"
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
              ><span>身份认证</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="userAuth-container"
      ><uni-view class="label"
        ><uni-view class="label-title"
          ><uni-text class="font-14 color-black font-weight"><span>Lv.1 基础认证</span></uni-text
          ><uni-view class="label-title-right">
            <uni-text class="font-13 color-green font-weight">
              <span v-if="primaryAuth == null">未认证</span>
              <span v-if="primaryAuth == 1">
                <img
                  style="width: 0.875rem; height: 0.875rem; margin-right: 0.25rem"
                  src="../../assets/img/authsuc.webp"
                />已认证</span
              >
              <span v-if="primaryAuth == 3">审核中</span>
              <span v-if="primaryAuth == 2">审核失败</span>
            </uni-text>
          </uni-view>
        </uni-view>
        <uni-view class="label-card"
          ><uni-text class="font-13 color-dark description"
            ><span>极速审核，快速完成基础认证，获得更高提领额度。</span></uni-text
          ><uni-view class="label-card-button"
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
                @click="goBaseauth"
                class="fui-button fui-button__flex-1"
                style="
                  width: 100%;
                  height: 2.75rem;
                  line-height: 2.75rem;
                  background: var(--blue);
                  border-width: 0px;
                  border-color: var(--blue);
                  border-radius: 0.5rem;
                  font-size: 0.875rem;
                  color: rgb(255, 255, 255);
                "
                ><uni-text
                  class="fui-button__text"
                  style="font-size: 0.875rem; line-height: 0.875rem; color: rgb(255, 255, 255)"
                  ><span>去认证</span></uni-text
                ></uni-button
              ></uni-view
            ></uni-view
          ></uni-view
        ></uni-view
      ><uni-view class="label"
        ><uni-view class="label-title"
          ><uni-text class="font-14 color-black font-weight"><span>Lv.2 高级认证</span></uni-text
          ><uni-view class="label-title-right"
            ><uni-text class="font-13 color-green font-weight">
              <span v-if="advancedAuth == null">未认证</span>
              <span v-if="advancedAuth == 1">
                <img
                  style="width: 0.875rem; height: 0.875rem; margin-right: 0.25rem"
                  src="../../assets/img/authsuc.webp"
                />已认证</span
              >
              <span v-if="advancedAuth == 3">审核中</span>
              <span v-if="advancedAuth == 2">审核失败</span>
            </uni-text></uni-view
          ></uni-view
        ><uni-view class="label-card"
          ><uni-text class="font-13 color-dark description"
            ><span
              >24小时内完成审核，完成高级认证，获得最高提现额度，并获取参与CoinEx各类福利与活动的资格。</span
            ></uni-text
          ><uni-view class="label-card-button"
            ><uni-view
              class="fui-button__wrap fui-button__flex-1"
              style="
                width: 100%;
                height: 2.75rem;
                margin: 0px;
                border-radius: 0.5rem;
                background: transparent;
              "
            >
              <uni-button
                v-if="primaryAuth != 1"
                class="fui-button fui-button__flex-1"
                disabled="true"
                style="
                  width: 100%;
                  height: 2.75rem;
                  line-height: 2.75rem;
                  border-width: 0px;
                  border-color: var(--blue);
                  border-radius: 0.5rem;
                  font-size: 0.875rem;
                  color: rgb(255, 255, 255);
                "
                ><uni-text
                  class="fui-button__text"
                  style="font-size: 0.875rem; line-height: 0.875rem; color: rgb(255, 255, 255)"
                  ><span>请先完成基础认证</span></uni-text
                >
              </uni-button>
              <uni-button
                v-else
                @click="goAuthhight"
                class="fui-button fui-button__flex-1"
                style="
                  width: 100%;
                  height: 2.75rem;
                  line-height: 2.75rem;
                  background: var(--blue);
                  border-width: 0px;
                  border-color: var(--blue);
                  border-radius: 0.5rem;
                  font-size: 0.875rem;
                  color: rgb(255, 255, 255);
                "
                ><uni-text
                  class="fui-button__text"
                  style="font-size: 0.875rem; line-height: 0.875rem; color: rgb(255, 255, 255)"
                  ><span>去认证</span></uni-text
                ></uni-button
              >
            </uni-view></uni-view
          ></uni-view
        ></uni-view
      ><uni-view class="label"
        ><uni-text class="font-14 color-black font-weight"
          ><span>为什么要进行KYC认证？</span></uni-text
        ><uni-view class="label-content"
          ><uni-text class="font-12 color-gray"
            ><span
              >KYC全名是Know Your
              Customer，是国际社会中所有金融活动不可缺少的环节，简单来说是一种实名认证，主要用于防范洗钱，身份盗窃，金融诈骗等犯罪行为
              。</span
            ></uni-text
          ><uni-text class="font-12 color-gray"
            ><span
              >KYC政策的目的在于防止使用者参与任何形式的非法活动，确保业务的合法发展及使用者资产安全。</span
            ></uni-text
          ></uni-view
        ></uni-view
      ></uni-view
    ></uni-view
  >
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useUserStore } from '@/store/user'
const router = useRouter()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const primaryAuth = computed(() => {
  return userInfo.value.detail?.auditStatusPrimary
})
const advancedAuth = computed(() => {
  return userInfo.value.detail?.auditStatusAdvanced
})
const goBaseauth = () => {
  if (primaryAuth.value == 3) {
    showToast('请耐心等待，您的审核中的身份认证正在进行中。')
    return
  }
  router.push('/userauth/baseauth')
}
const goAuthhight = () => {
  if (advancedAuth.value == 3) {
    showToast('请耐心等待，您的审核中的身份认证正在进行中。')
    return
  }
  if (advancedAuth.value == 1) {
    showToast('您已完成高级认证')
    return
  }
  router.push('/userauth/authhight')
}
</script>
