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
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="mineInfo mt-15"
            ><uni-view class="mineInfo_avatar"
              ><uni-view
                class="fui-avatar__wrap fui-avatar__circle"
                style="
                  background: var(--color-gray-bg);
                  margin-right: 0px;
                  margin-bottom: 0px;
                  width: 2.5rem;
                  height: 2.5rem;
                "
                ><uni-image
                  class="fui-avatar__img fui-avatar__circle"
                  webp="false"
                  style="width: 2.5rem; height: 2.5rem"
                  ><div
                    style="
                      background-image: none;
                      background-position: 0% 0%;
                      background-size: 100% 100%;
                    "
                  ></div>
                  <span></span></uni-image></uni-view></uni-view
            ><uni-view class="mineInfo_phone"
              ><uni-text class="font-16 font-weight color-black"><span>gagaga</span></uni-text
              ><uni-text class="font-13 color-gray mt-5"><span>UID:19297</span></uni-text></uni-view
            ></uni-view
          ><uni-view class="yqpannel" @click="router.push('/invaite')"
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
            ><uni-view
              ><uni-view class="mineList_item flex align-center justify-between"
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
            ><uni-view class="mineList_item border-bottom-8 flex align-center justify-between"
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
          ><uni-view class="loginOut-box"
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
                id=""
                class="fui-button fui-button__flex-1 fui-button__active-pc"
                app-parameter=""
                scope=""
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
const router = useRouter()
const props = defineProps({
  showLeft: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['close'])
const handleClose = () => {
  emits('close')
}
</script>
