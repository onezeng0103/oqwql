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
              @click="router.back()"
              class="fui-icon"
              style="color: var(--content-primary); font-size: 1.75rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
              ><span>选择币种</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-scroll-view class="container" style="height: 623px"
      ><div class="uni-scroll-view">
        <div class="uni-scroll-view" style="overflow: hidden auto">
          <div class="uni-scroll-view-content">
            <uni-view class="font-14 mt-15">币种名称</uni-view
            ><uni-view class="list"
              ><uni-view class="item border-bottom"
                ><uni-image class="currencyIcon" style="height: 28px"
                  ><div
                    style="
                      background-image: url('https://api.oqwql.com/uploadfile/20240126/609505071486472193.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img
                    src="https://api.oqwql.com/uploadfile/20240126/609505071486472193.png"
                    draggable="false" /></uni-image
                ><uni-view
                  ><uni-text><span>BTC</span></uni-text></uni-view
                ><uni-view
                  class="fui-checkbox__input fui-checkbox__disabled check"
                  style="
                    background-color: rgb(68, 68, 68);
                    border-color: rgb(68, 68, 68);
                    zoom: 1;
                    transform: scale(1);
                  "
                  ><uni-view
                    class="fui-check__mark"
                    style="
                      border-bottom-color: rgb(255, 255, 255);
                      border-right-color: rgb(255, 255, 255);
                    "
                  ></uni-view
                  ><uni-checkbox
                    disabled="true"
                    id=""
                    class="fui-checkbox__hidden"
                    style="opacity: 0; position: absolute"
                    ><div class="uni-checkbox-wrapper">
                      <div
                        class="uni-checkbox-input uni-checkbox-input-disabled"
                        style="
                          background-color: rgb(225, 225, 225);
                          border-color: rgb(209, 209, 209);
                        "
                      >
                        <svg width="22" height="22" viewBox="0 0 32 32">
                          <path
                            d="M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
                            fill="#ADADAD"
                          ></path>
                        </svg>
                      </div></div></uni-checkbox></uni-view></uni-view
              ><uni-view class="item border-bottom active"
                ><uni-image class="currencyIcon" style="height: 28px"
                  ><div
                    style="
                      background-image: url('https://api.oqwql.com/uploadfile/20240126/609515265490698241.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img
                    src="https://api.oqwql.com/uploadfile/20240126/609515265490698241.png"
                    draggable="false" /></uni-image
                ><uni-view
                  ><uni-text><span>ETH</span></uni-text></uni-view
                ><uni-view
                  class="fui-checkbox__input fui-checkbox__disabled check"
                  style="
                    background-color: rgb(48, 112, 236);
                    border-color: rgb(48, 112, 236);
                    zoom: 1;
                    transform: scale(1);
                  "
                  ><uni-view
                    class="fui-check__mark"
                    style="
                      border-bottom-color: rgb(255, 255, 255);
                      border-right-color: rgb(255, 255, 255);
                    "
                  ></uni-view
                  ><uni-checkbox
                    disabled="true"
                    id=""
                    class="fui-checkbox__hidden"
                    style="opacity: 0; position: absolute"
                    ><div class="uni-checkbox-wrapper">
                      <div
                        class="uni-checkbox-input uni-checkbox-input-disabled"
                        style="
                          background-color: rgb(225, 225, 225);
                          border-color: rgb(209, 209, 209);
                        "
                      >
                        <svg width="22" height="22" viewBox="0 0 32 32">
                          <path
                            d="M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
                            fill="#ADADAD"
                          ></path>
                        </svg>
                      </div></div></uni-checkbox></uni-view></uni-view
              ><uni-view class="item border-bottom"
                ><uni-image class="currencyIcon" style="height: 28px"
                  ><div
                    style="
                      background-image: url('https://api.oqwql.com/uploadfile/20240126/609515386412482560.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img
                    src="https://api.oqwql.com/uploadfile/20240126/609515386412482560.png"
                    draggable="false" /></uni-image
                ><uni-view
                  ><uni-text><span>TRX</span></uni-text></uni-view
                ><uni-view
                  class="fui-checkbox__input fui-checkbox__disabled check"
                  style="
                    background-color: rgb(68, 68, 68);
                    border-color: rgb(68, 68, 68);
                    zoom: 1;
                    transform: scale(1);
                  "
                  ><uni-view
                    class="fui-check__mark"
                    style="
                      border-bottom-color: rgb(255, 255, 255);
                      border-right-color: rgb(255, 255, 255);
                    "
                  ></uni-view
                  ><uni-checkbox
                    disabled="true"
                    id=""
                    class="fui-checkbox__hidden"
                    style="opacity: 0; position: absolute"
                    ><div class="uni-checkbox-wrapper">
                      <div
                        class="uni-checkbox-input uni-checkbox-input-disabled"
                        style="
                          background-color: rgb(225, 225, 225);
                          border-color: rgb(209, 209, 209);
                        "
                      >
                        <svg width="22" height="22" viewBox="0 0 32 32">
                          <path
                            d="M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
                            fill="#ADADAD"
                          ></path>
                        </svg>
                      </div></div></uni-checkbox></uni-view></uni-view
              ><uni-view class="item border-bottom"
                ><uni-image class="currencyIcon" style="height: 28px"
                  ><div
                    style="
                      background-image: url('https://api.oqwql.com/uploadfile/20240126/609515551621922816.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img
                    src="https://api.oqwql.com/uploadfile/20240126/609515551621922816.png"
                    draggable="false" /></uni-image
                ><uni-view
                  ><uni-text><span>SHIB</span></uni-text></uni-view
                ><uni-view
                  class="fui-checkbox__input fui-checkbox__disabled check"
                  style="
                    background-color: rgb(68, 68, 68);
                    border-color: rgb(68, 68, 68);
                    zoom: 1;
                    transform: scale(1);
                  "
                  ><uni-view
                    class="fui-check__mark"
                    style="
                      border-bottom-color: rgb(255, 255, 255);
                      border-right-color: rgb(255, 255, 255);
                    "
                  ></uni-view
                  ><uni-checkbox
                    disabled="true"
                    id=""
                    class="fui-checkbox__hidden"
                    style="opacity: 0; position: absolute"
                    ><div class="uni-checkbox-wrapper">
                      <div
                        class="uni-checkbox-input uni-checkbox-input-disabled"
                        style="
                          background-color: rgb(225, 225, 225);
                          border-color: rgb(209, 209, 209);
                        "
                      >
                        <svg width="22" height="22" viewBox="0 0 32 32">
                          <path
                            d="M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
                            fill="#ADADAD"
                          ></path>
                        </svg>
                      </div></div></uni-checkbox></uni-view></uni-view
              ><uni-view class="item border-bottom"
                ><uni-image class="currencyIcon" style="height: 28px"
                  ><div
                    style="
                      background-image: url('https://api.oqwql.com/uploadfile/20240130/610905085903409153.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img
                    src="https://api.oqwql.com/uploadfile/20240130/610905085903409153.png"
                    draggable="false" /></uni-image
                ><uni-view
                  ><uni-text><span>BNB</span></uni-text></uni-view
                ><uni-view
                  class="fui-checkbox__input fui-checkbox__disabled check"
                  style="
                    background-color: rgb(68, 68, 68);
                    border-color: rgb(68, 68, 68);
                    zoom: 1;
                    transform: scale(1);
                  "
                  ><uni-view
                    class="fui-check__mark"
                    style="
                      border-bottom-color: rgb(255, 255, 255);
                      border-right-color: rgb(255, 255, 255);
                    "
                  ></uni-view
                  ><uni-checkbox
                    disabled="true"
                    id=""
                    class="fui-checkbox__hidden"
                    style="opacity: 0; position: absolute"
                    ><div class="uni-checkbox-wrapper">
                      <div
                        class="uni-checkbox-input uni-checkbox-input-disabled"
                        style="
                          background-color: rgb(225, 225, 225);
                          border-color: rgb(209, 209, 209);
                        "
                      >
                        <svg width="22" height="22" viewBox="0 0 32 32">
                          <path
                            d="M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
                            fill="#ADADAD"
                          ></path>
                        </svg>
                      </div></div></uni-checkbox></uni-view></uni-view
              ><uni-view class="item border-bottom"
                ><uni-image class="currencyIcon" style="height: 28px"
                  ><div
                    style="
                      background-image: url('https://api.oqwql.com/uploadfile/20240130/610962788730327040.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img
                    src="https://api.oqwql.com/uploadfile/20240130/610962788730327040.png"
                    draggable="false" /></uni-image
                ><uni-view
                  ><uni-text><span>INJ</span></uni-text></uni-view
                ><uni-view
                  class="fui-checkbox__input fui-checkbox__disabled check"
                  style="
                    background-color: rgb(68, 68, 68);
                    border-color: rgb(68, 68, 68);
                    zoom: 1;
                    transform: scale(1);
                  "
                  ><uni-view
                    class="fui-check__mark"
                    style="
                      border-bottom-color: rgb(255, 255, 255);
                      border-right-color: rgb(255, 255, 255);
                    "
                  ></uni-view
                  ><uni-checkbox
                    disabled="true"
                    id=""
                    class="fui-checkbox__hidden"
                    style="opacity: 0; position: absolute"
                    ><div class="uni-checkbox-wrapper">
                      <div
                        class="uni-checkbox-input uni-checkbox-input-disabled"
                        style="
                          background-color: rgb(225, 225, 225);
                          border-color: rgb(209, 209, 209);
                        "
                      >
                        <svg width="22" height="22" viewBox="0 0 32 32">
                          <path
                            d="M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
                            fill="#ADADAD"
                          ></path>
                        </svg>
                      </div></div></uni-checkbox></uni-view></uni-view
              ><uni-view class="item border-bottom"
                ><uni-image class="currencyIcon" style="height: 28px"
                  ><div
                    style="
                      background-image: url('https://static.coinlay.net/uploadfile/20240719/672875796766920705.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img
                    src="https://static.coinlay.net/uploadfile/20240719/672875796766920705.png"
                    draggable="false" /></uni-image
                ><uni-view
                  ><uni-text><span>USDC</span></uni-text></uni-view
                ><uni-view
                  class="fui-checkbox__input fui-checkbox__disabled check"
                  style="
                    background-color: rgb(68, 68, 68);
                    border-color: rgb(68, 68, 68);
                    zoom: 1;
                    transform: scale(1);
                  "
                  ><uni-view
                    class="fui-check__mark"
                    style="
                      border-bottom-color: rgb(255, 255, 255);
                      border-right-color: rgb(255, 255, 255);
                    "
                  ></uni-view
                  ><uni-checkbox
                    disabled="true"
                    id=""
                    class="fui-checkbox__hidden"
                    style="opacity: 0; position: absolute"
                    ><div class="uni-checkbox-wrapper">
                      <div
                        class="uni-checkbox-input uni-checkbox-input-disabled"
                        style="
                          background-color: rgb(225, 225, 225);
                          border-color: rgb(209, 209, 209);
                        "
                      >
                        <svg width="22" height="22" viewBox="0 0 32 32">
                          <path
                            d="M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
                            fill="#ADADAD"
                          ></path>
                        </svg>
                      </div></div></uni-checkbox></uni-view></uni-view
              ><uni-view class="item border-bottom"
                ><uni-image class="currencyIcon" style="height: 28px"
                  ><div
                    style="
                      background-image: url('https://api.oqwql.com/uploadfile/20240126/609515484915712000.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img
                    src="https://api.oqwql.com/uploadfile/20240126/609515484915712000.png"
                    draggable="false" /></uni-image
                ><uni-view
                  ><uni-text><span>USDT</span></uni-text></uni-view
                ><uni-view
                  class="fui-checkbox__input fui-checkbox__disabled check"
                  style="
                    background-color: rgb(68, 68, 68);
                    border-color: rgb(68, 68, 68);
                    zoom: 1;
                    transform: scale(1);
                  "
                  ><uni-view
                    class="fui-check__mark"
                    style="
                      border-bottom-color: rgb(255, 255, 255);
                      border-right-color: rgb(255, 255, 255);
                    "
                  ></uni-view
                  ><uni-checkbox
                    disabled="true"
                    id=""
                    class="fui-checkbox__hidden"
                    style="opacity: 0; position: absolute"
                    ><div class="uni-checkbox-wrapper">
                      <div
                        class="uni-checkbox-input uni-checkbox-input-disabled"
                        style="
                          background-color: rgb(225, 225, 225);
                          border-color: rgb(209, 209, 209);
                        "
                      >
                        <svg width="22" height="22" viewBox="0 0 32 32">
                          <path
                            d="M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
                            fill="#ADADAD"
                          ></path>
                        </svg>
                      </div></div></uni-checkbox></uni-view></uni-view
              ><uni-view class="item border-bottom"
                ><uni-image class="currencyIcon" style="height: 28px"
                  ><div
                    style="
                      background-image: url('https://api.oqwql.com/uploadfile/20240130/610962371267051521.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img
                    src="https://api.oqwql.com/uploadfile/20240130/610962371267051521.png"
                    draggable="false" /></uni-image
                ><uni-view
                  ><uni-text><span>WBTC</span></uni-text></uni-view
                ><uni-view
                  class="fui-checkbox__input fui-checkbox__disabled check"
                  style="
                    background-color: rgb(68, 68, 68);
                    border-color: rgb(68, 68, 68);
                    zoom: 1;
                    transform: scale(1);
                  "
                  ><uni-view
                    class="fui-check__mark"
                    style="
                      border-bottom-color: rgb(255, 255, 255);
                      border-right-color: rgb(255, 255, 255);
                    "
                  ></uni-view
                  ><uni-checkbox
                    disabled="true"
                    id=""
                    class="fui-checkbox__hidden"
                    style="opacity: 0; position: absolute"
                    ><div class="uni-checkbox-wrapper">
                      <div
                        class="uni-checkbox-input uni-checkbox-input-disabled"
                        style="
                          background-color: rgb(225, 225, 225);
                          border-color: rgb(209, 209, 209);
                        "
                      >
                        <svg width="22" height="22" viewBox="0 0 32 32">
                          <path
                            d="M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
                            fill="#ADADAD"
                          ></path>
                        </svg>
                      </div></div></uni-checkbox></uni-view></uni-view
            ></uni-view>
          </div>
        </div></div></uni-scroll-view
  ></uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
