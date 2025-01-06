<template>
  <uni-view class="setting"
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
              ><span>安全中心</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="container-box"
      ><uni-view class="container-box-cell flex align-center justify-between"
        ><uni-view class="cell-left flex align-center"
          ><uni-text class="font-14 color-black"><span>郵箱驗證</span></uni-text></uni-view
        ><uni-view class="flex align-center justify-end cell-right"
          ><uni-text class="font-14 color-gray"><span>38307028@qq.com</span></uni-text
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.0625rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="container-box-cell flex align-center justify-between"
        ><uni-view class="cell-left flex align-center"
          ><uni-text class="font-14 color-black"><span>手機驗證</span></uni-text></uni-view
        ><uni-view class="flex align-center justify-end cell-right"
          ><uni-text class="font-14 color-gray"><span>51859272</span></uni-text
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.0625rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="container-box-cell flex align-center justify-between"
        ><uni-view class="cell-left flex align-center"
          ><uni-text class="font-14 color-black"><span>Google驗證</span></uni-text></uni-view
        ><uni-view class="flex align-center justify-end cell-right"
          ><uni-text class="font-14 color-gray"><span>未綁定</span></uni-text
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.0625rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="container-box-line"></uni-view
      ><uni-view class="container-box-cell flex align-center justify-between"
        ><uni-view class="cell-left flex align-center"
          ><uni-text class="font-14 color-black"><span>登入密碼</span></uni-text></uni-view
        ><uni-view class="flex align-center justify-end cell-right"
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.0625rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="container-box-line"></uni-view
      ><uni-view class="container-box-cell flex align-center justify-between"
        ><uni-view class="cell-left flex align-center"
          ><uni-text class="font-14 color-black"><span>安全記錄</span></uni-text></uni-view
        ><uni-view class="flex align-center justify-end cell-right"
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.0625rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="container-box-line"></uni-view></uni-view
  ></uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
