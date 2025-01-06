<template>
  <van-popup
    v-model:show="props.showLeft"
    position="left"
    :style="{ width: '100%', height: '100%' }"
  >
    <uni-view class="uni-drawer--visible uni-drawer" background="var(--white)"
      ><uni-view class="uni-drawer__mask uni-drawer__mask--visible"></uni-view
      ><uni-view
        class="uni-drawer__content uni-drawer--left uni-drawer__content--visible"
        style="width: 100%"
        ><uni-view class="mineContainer mineDrawer" style="height: 100vh"
          ><uni-view class="mineClose" @click="handleClose"
            ><uni-text
              class="fui-icon"
              style="color: var(--color-title-black); font-size: 1.75rem; font-weight: normal"
              ><span></span>
            </uni-text>
          </uni-view>
          <uni-view v-if="!isSign" class="mineLogin flex flex-column"
            ><uni-text class="font-20 color-black font-weight"
              ><span>欢迎来到 {{ VITE_APP_EXCHANGE_NAME }}</span></uni-text
            ><uni-text class="font-13 color-gray mt-10"
              ><span>立即注册，领取丰厚奖励</span></uni-text
            ><uni-view class="mineLogin-buttons mt-10 flex flex-row align-center justify-between"
              ><uni-view
                class="fui-button__wrap"
                style="
                  width: 10.3125rem;
                  height: 2.0625rem;
                  margin: 0px;
                  border-radius: 0.1875rem;
                  background: var(--color-gray-bg);
                "
                ><uni-button
                  @click="router.push('/register')"
                  class="fui-button"
                  style="
                    width: 10.3125rem;
                    height: 2.0625rem;
                    line-height: 2.0625rem;
                    background: var(--color-gray-bg);
                    border-width: 0px;
                    border-color: var(--color-gray-bg);
                    border-radius: 0.1875rem;
                    font-size: 0.8125rem;
                    color: var(--color-title-black);
                  "
                  >注册</uni-button
                ></uni-view
              ><uni-view
                class="fui-button__wrap"
                style="
                  width: 10.3125rem;
                  height: 2.0625rem;
                  margin: 0px;
                  border-radius: 0.1875rem;
                  background: var(--blue);
                "
                ><uni-button
                  @click="router.push('/login')"
                  class="fui-button"
                  style="
                    width: 10.3125rem;
                    height: 2.0625rem;
                    line-height: 2.0625rem;
                    background: var(--blue);
                    border-width: 0px;
                    border-color: var(--blue);
                    border-radius: 0.1875rem;
                    font-size: 0.8125rem;
                    color: rgb(255, 255, 255);
                  "
                  >登入</uni-button
                ></uni-view
              ></uni-view
            ></uni-view
          >
          <uni-view class="mineInfo mt-15" v-if="isSign">
            <uni-view class="mineInfo_avatar">
              <uni-view
                class="fui-avatar__wrap fui-avatar__circle"
                style="
                  background: var(--color-gray-bg);
                  margin-right: 0px;
                  margin-bottom: 0px;
                  width: 2.5rem;
                  height: 2.5rem;
                "
              >
                <img
                  :src="path"
                  alt=""
                  class="fui-avatar__img fui-avatar__circle"
                  webp="false"
                  style="width: 2.5rem; height: 2.5rem"
                /> </uni-view></uni-view
            ><uni-view class="mineInfo_phone"
              ><uni-text class="font-16 font-weight color-black"
                ><span> {{ userInfo?.user?.loginName }} </span></uni-text
              ><uni-text class="font-13 color-gray mt-5"
                ><span>UID:{{ userInfo?.user?.userId }}</span></uni-text
              ></uni-view
            ></uni-view
          ><uni-view v-if="isSign" class="yqpannel" @click="router.push('/invaite')"
            ><uni-view class="yqbj"
              ><uni-view
                ><uni-text class="font-14 font-weight color-white hide"
                  ><span>邀请有礼</span></uni-text
                ></uni-view
              ><uni-view
                ><uni-text class="font-12 color-gray hide"
                  ><span>无交易，坐享收益</span></uni-text
                ></uni-view
              ></uni-view
            ></uni-view
          ><uni-view class="mineList"
            ><uni-view v-if="isSign"
              ><uni-view
                class="mineList_item flex align-center justify-between"
                @click="router.push('/userauth')"
                ><uni-view class="flex align-center"
                  ><img
                    class="cell-image"
                    src="../../../assets/img/icon4.png"
                    draggable="false"
                  /><uni-text class="font-13 color-black font-weight"
                    ><span>身份确认</span></uni-text
                  ></uni-view
                ><uni-view class="flex align-center"
                  ><uni-text class="font-12 color-gray"><span>未确认</span></uni-text
                  ><uni-text
                    class="fui-icon"
                    style="
                      color: var(--color-text-dark-gray);
                      font-size: 1.0625rem;
                      font-weight: normal;
                    "
                    ><span></span></uni-text
                  ></uni-view
                ></uni-view
              ><uni-view
                @click="router.push('/secrety')"
                class="mineList_item flex align-center justify-between"
                ><uni-view class="flex align-center"
                  ><img
                    class="cell-image"
                    src="../../../assets/img/safecenter-dark.png"
                    draggable="false"
                  /><uni-text class="font-13 color-black font-weight"
                    ><span>安全中心</span></uni-text
                  ></uni-view
                ><uni-view class="flex align-center"
                  ><uni-text
                    class="fui-icon"
                    style="
                      color: var(--color-text-dark-gray);
                      font-size: 1.0625rem;
                      font-weight: normal;
                    "
                    ><span></span></uni-text
                  ></uni-view
                ></uni-view
              ></uni-view
            ><uni-view
              @click="router.push('/langList')"
              class="mineList_item border-bottom-8 flex align-center justify-between"
              ><uni-view class="flex align-center"
                ><img
                  class="cell-image"
                  src="../../../assets/img//set-dark.png"
                  draggable="false"
                /><uni-text class="font-13 color-black font-weight"
                  ><span>语言</span></uni-text
                ></uni-view
              ><uni-view class="flex align-center"
                ><uni-text
                  class="fui-icon"
                  style="
                    color: var(--color-text-dark-gray);
                    font-size: 1.0625rem;
                    font-weight: normal;
                  "
                  ><span></span></uni-text
                ></uni-view
              ></uni-view
            ><uni-view class="mineList_item flex align-center justify-between"
              ><uni-view class="flex align-center"
                ><img
                  class="cell-image"
                  src="../../../assets/img/rates-dark.png"
                  draggable="false"
                /><uni-text class="font-13 color-black font-weight"
                  ><span>费率标准</span></uni-text
                ></uni-view
              ><uni-view class="flex align-center"
                ><uni-text
                  class="fui-icon"
                  style="
                    color: var(--color-text-dark-gray);
                    font-size: 1.0625rem;
                    font-weight: normal;
                  "
                  ><span></span></uni-text
                ></uni-view
              ></uni-view
            ><uni-view class="mineList_item flex align-center justify-between"
              ><uni-view class="flex align-center"
                ><img
                  class="cell-image"
                  src="../../../assets/img/cre-dark.png"
                  draggable="false"
                /><uni-text class="font-13 color-black font-weight"
                  ><span>CoinEx资质</span></uni-text
                ></uni-view
              ><uni-view class="flex align-center"
                ><uni-text
                  class="fui-icon"
                  style="
                    color: var(--color-text-dark-gray);
                    font-size: 1.0625rem;
                    font-weight: normal;
                  "
                  ><span></span></uni-text
                ></uni-view
              ></uni-view
            ><uni-view class="mineList_item flex align-center justify-between"
              ><uni-view class="flex align-center"
                ><img
                  class="cell-image"
                  src="../../../assets/img/con-dark.png"
                  draggable="false"
                /><uni-text class="font-13 color-black font-weight"
                  ><span>联系我们</span></uni-text
                ></uni-view
              ><uni-view class="flex align-center"
                ><uni-text
                  class="fui-icon"
                  style="
                    color: var(--color-text-dark-gray);
                    font-size: 1.0625rem;
                    font-weight: normal;
                  "
                  ><span></span></uni-text
                ></uni-view
              ></uni-view
            ><uni-view class="mineList_item flex align-center justify-between"
              ><uni-view class="flex align-center"
                ><img
                  class="cell-image"
                  src="../../../assets/img/about-dark.png"
                  draggable="false"
                /><uni-text class="font-13 color-black font-weight"
                  ><span>关于我们</span></uni-text
                ></uni-view
              ><uni-view class="flex align-center"
                ><uni-text
                  class="fui-icon"
                  style="
                    color: var(--color-text-dark-gray);
                    font-size: 1.0625rem;
                    font-weight: normal;
                  "
                  ><span></span></uni-text
                ></uni-view
              ></uni-view
            ></uni-view
          ><uni-view v-if="isSign" class="loginOut-box"
            ><uni-view
              class="fui-button__wrap fui-button__flex-1"
              style="
                width: 100%;
                height: 2.75rem;
                margin: 0px;
                border-radius: 0.3125rem;
                background: var(--color-button-defalut-bg);
              "
              ><uni-button
                @click="exit"
                class="fui-button fui-button__flex-1 fui-button__active-pc"
                style="
                  width: 100%;
                  height: 2.75rem;
                  line-height: 2.75rem;
                  background: var(--color-button-defalut-bg);
                  border-width: 0px;
                  border-color: var(--color-button-defalut-bg);
                  border-radius: 0.3125rem;
                  font-size: 0.875rem;
                  color: var(--color-title-black);
                "
                >退出登入</uni-button
              ></uni-view
            ></uni-view
          ></uni-view
        ></uni-view
      ></uni-view
    >
  </van-popup>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useUserStore } from '@/store/user/index'
import { useMainStore } from '@/store/index'
import { signOut } from '@/api/user'
const router = useRouter()
const userStore = useUserStore()
const mainStore = useMainStore()
const props = defineProps({
  showLeft: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['close'])

// 判断是否登录
const isSign = ref(userStore.isSign)
const { userInfo } = storeToRefs(userStore)

const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const VITE_APP_EXCHANGE_NAME = import.meta.env.VITE_APP_EXCHANGE_NAME
const handleClose = () => {
  emits('close')
}
const exit = () => {
  signOut()
    .then((res) => {
      if (res.code == '200') {
        showToast('退出成功！')
        userStore.signOut()
        router.replace('/')
        handleClose()
        isSign.value = false
        setTimeout(() => location.reload(), 10)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>
