<template>
  <uni-view class="currencyListWrap"
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
              class="fui-icon"
              style="color: var(--content-primary); font-size: 1.75rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
              ><span>選擇幣種</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="fui-list__wrap" style="margin-top: 0px"
      ><uni-view class="fui-list__container"
        ><uni-view
          class="fui-list__border-top fui-list__border-color"
          style="left: 0px; right: 0px"
        ></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >繁体中文<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >English<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >日本<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >한국어<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >Русский<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >ประเทศไทย<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >Australia<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >French<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >Italiano<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >Español<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >Deutsch<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view
        ><uni-view
          class="fui-list__cell fui-highlight"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >Việt Nam<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view></uni-view></uni-view></uni-view
  ></uni-view>
</template>
