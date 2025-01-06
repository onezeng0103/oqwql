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
              ><span>修改登陆密码</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="newPwd-body"
      ><uni-view class="tips"
        ><uni-text class="font-12 color-warring"
          ><span
            ><uni-text
              class="fui-icon"
              style="color: var(--color-text-golden); font-size: 1.0625rem; font-weight: normal"
              ><span></span></uni-text
            >
            修改登入密码后24小时内禁止提现</span
          ></uni-text
        ></uni-view
      ><uni-view class="label-box"
        ><uni-view class="text-cell"
          ><uni-text class="font-12 color-gray"><span>原登入密码</span></uni-text></uni-view
        ><uni-view class="input-box"
          ><uni-input
            ><div class="uni-input-wrapper">
              <input
                type="password"
                maxlength="140"
                placeholder="请输入旧密码"
                enterkeyhint="done"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.1875rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="label-box"
        ><uni-view class="text-cell"
          ><uni-text class="font-12 color-gray"><span>新登入密码</span></uni-text></uni-view
        ><uni-view class="input-box"
          ><uni-input
            ><div class="uni-input-wrapper">
              <input
                type="password"
                maxlength="140"
                placeholder="请输入新密码"
                enterkeyhint="done"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.1875rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="label-box"
        ><uni-view class="text-cell"
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 0.9375rem; font-weight: normal"
            ><span></span></uni-text
          ><uni-text class="font-12 color-gray ml-5"><span>8-14位元字元</span></uni-text></uni-view
        ><uni-view class="text-cell mt-5"
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 0.9375rem; font-weight: normal"
            ><span></span></uni-text
          ><uni-text class="font-12 color-gray ml-5"
            ><span>至少包含一个数字</span></uni-text
          ></uni-view
        ><uni-view class="text-cell mt-5"
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 0.9375rem; font-weight: normal"
            ><span></span></uni-text
          ><uni-text class="font-12 color-gray ml-5"
            ><span>至少包含一个大写字母</span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="label-box"
        ><uni-view class="text-cell"
          ><uni-text class="font-12 color-gray"><span>确认新密码</span></uni-text></uni-view
        ><uni-view class="input-box"
          ><uni-input
            ><div class="uni-input-wrapper">
              <input
                type="password"
                maxlength="140"
                enterkeyhint="done"
                placeholder="请再输入新密码"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1.1875rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="label-button"
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
const router = useRouter()
</script>
