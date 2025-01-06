<template>
  <uni-view class="phoneAuth"
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
              ><span>修改 邮箱验证</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="phoneAuth-container"
      ><uni-view class="label"
        ><uni-text class="font-13 color-gray"><span>邮件信箱帐号</span></uni-text
        ><uni-view class="label-input"
          ><uni-input class="font-14 color-black"
            ><div class="uni-input-wrapper">
              <input
                type="text"
                maxlength="140"
                placeholder="请输入信箱帐号"
                enterkeyhint="done"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input></uni-view></uni-view
      ><uni-view class="label"
        ><uni-text class="font-13 color-gray"><span>邮件信箱验证码</span></uni-text
        ><uni-view class="label-input" type="captcha"
          ><uni-input class="font-14 color-black"
            ><div class="uni-input-wrapper">
              <input
                type="text"
                maxlength="140"
                placeholder="请输入验证码"
                enterkeyhint="done"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input
          ><uni-view class="captcha"
            ><uni-text class="font-13 color-primary"><span>取得验证码</span></uni-text></uni-view
          ></uni-view
        ></uni-view
      ></uni-view
    ><uni-view class="footer-button"
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
          id=""
          class="fui-button fui-button__flex-1"
          app-parameter=""
          scope=""
          style="
            width: 100%;
            height: 2.4375rem;
            line-height: 2.4375rem;
            background: var(--background-secondary);
            border-width: 0px;
            border-color: var(--background-secondary);
            border-radius: 2.4375rem;
            font-size: 0.875rem;
            color: var(--content-tertiary);
          "
          ><uni-text
            class="fui-button__text"
            style="font-size: 0.875rem; line-height: 0.875rem; color: var(--content-tertiary)"
            ><span>提交</span></uni-text
          ></uni-button
        ></uni-view
      ></uni-view
    ></uni-view
  >
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
