<template>
  <uni-view class="flashExchangeWrap"
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
              @click="router.push('/flashExchange/currencyList')"
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
              ><span>闪兑</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-scroll-view class="container" style="height: 623px"
      ><div class="uni-scroll-view">
        <div class="uni-scroll-view" style="overflow: hidden auto">
          <div class="uni-scroll-view-content">
            <uni-view class="flashExchangeCompareBox"
              ><uni-view class="flashExchangeCompareBoxL"
                ><uni-view class="flashExchangeCurrencyBox"
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
                  ><uni-view class="item"
                    ><uni-view class="flex"
                      ><uni-text class="font-14 color-black font-bold"><span>ETH</span></uni-text
                      ><uni-text
                        class="fui-icon"
                        style="color: var(--dark-gray); font-size: 1.125rem; font-weight: normal"
                        ><span></span></uni-text
                      ></uni-view
                    ></uni-view
                  ></uni-view
                ><uni-view class="flashExchangeCurrencyBalance font-12 color-gray">0</uni-view
                ><uni-view class="flashExchangeCurrencyValue"
                  ><uni-input
                    ><div class="uni-input-wrapper">
                      <div
                        class="uni-input-placeholder input-placeholder"
                        style="display: none"
                      ></div>
                      <input
                        type="input"
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        class="uni-input-input"
                        autocomplete="off"
                      /></div></uni-input></uni-view></uni-view
              ><uni-view class="flashExchangeCompareBoxM"
                ><uni-view class="line"></uni-view
                ><uni-view class="circleBox">
                  <img
                    class="icon"
                    src="../../assets/img/transfer-B1uZwvR6.png"
                    alt=""
                  /> </uni-view></uni-view
              ><uni-view class="flashExchangeCompareBoxR"
                ><uni-view class="flashExchangeCurrencyBox"
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
                  ><uni-view class="item"
                    ><uni-view class=""
                      ><uni-text class="font-14 color-black font-bold"><span>USDT</span></uni-text
                      ><uni-text
                        class="fui-icon"
                        style="color: var(--dark-gray); font-size: 1.125rem; font-weight: normal"
                        ><span></span></uni-text
                      ></uni-view
                    ></uni-view
                  ></uni-view
                ><uni-view class="flashExchangeCurrencyBalance font-12 color-gray">23.75</uni-view
                ><uni-view class="flashExchangeCurrencyValue">0</uni-view></uni-view
              ></uni-view
            ><uni-view class="flex align-center justify-between mt-5"
              ><uni-text><span>查看币种信息</span></uni-text
              ><uni-view
                ><uni-text class="color-blue"><span>ETH</span></uni-text
                ><uni-text class="color-light"><span> / </span></uni-text
                ><uni-text class="color-gray"><span>USDT</span></uni-text></uni-view
              ></uni-view
            ><uni-view class="flashExchangeCompareInfo"
              ><uni-view class="flex align-center justify-between"
                ><uni-view class="flex align-center"
                  ><uni-text class="color-gray"><span>汇率</span></uni-text></uni-view
                ><uni-text><span>1 ETH = 3676.38 USDT</span></uni-text></uni-view
              ></uni-view
            ><uni-view
              class="fui-button__wrap fui-button__flex-1"
              height="88rpx"
              style="
                width: 100%;
                height: 3rem;
                margin: 0.75rem 0px;
                border-radius: 0.5rem;
                background: var(--blue);
              "
              ><uni-button
                class="fui-button fui-button__flex-1"
                style="
                  width: 100%;
                  height: 3rem;
                  line-height: 3rem;
                  background: var(--blue);
                  border-width: 0px;
                  border-color: var(--blue);
                  border-radius: 0.5rem;
                  font-size: 0.9375rem;
                  color: rgb(255, 255, 255);
                "
                >闪兑</uni-button
              ></uni-view
            ><uni-view class="font-16 mt-15">交易记录</uni-view
            ><uni-view class="transactionBox"
              ><uni-view class="item mt-10"
                ><uni-view
                  class="flex align-center border-bottom pd-b-10"
                  style="border-color: var(--border-strength-200)"
                  ><uni-view class="rectBox">
                    <img
                      class="icon"
                      src="../../assets/img/transfer-B1uZwvR6.png"
                      alt=""
                    /> </uni-view
                  ><uni-view class="ml-8"
                    ><uni-view
                      ><uni-text class="font-14 color-dark mr-5"><span>USDT</span></uni-text
                      ><uni-text class="font-12 color-gray ml-10"
                        ><span>1</span></uni-text
                      ></uni-view
                    ><uni-view class="mt-5"
                      ><uni-text class="font-14 color-dark mr-5"><span>ETH</span></uni-text
                      ><uni-text class="font-12 color-gray ml-10"
                        ><span>0.000396</span></uni-text
                      ></uni-view
                    ></uni-view
                  ><uni-view
                    style="
                      margin-left: auto;
                      padding: 0.3125rem 0.625rem;
                      border-radius: 0.9375rem;
                      background-color: var(--background-strength);
                    "
                    ><uni-text class="color-green font-12"
                      ><span>兑换成功</span></uni-text
                    ></uni-view
                  ></uni-view
                ><uni-view class="flex align-center justify-between pd-t-10"
                  ><uni-text><span>2024-09-02 19:22</span></uni-text
                  ><uni-text><span>汇率：0.000396</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="item mt-10"
                ><uni-view
                  class="flex align-center border-bottom pd-b-10"
                  style="border-color: var(--border-strength-200)"
                  ><uni-view class="rectBox">
                    <img
                      class="icon"
                      src="../../assets/img/transfer-B1uZwvR6.png"
                      alt="" /></uni-view
                  ><uni-view class="ml-8"
                    ><uni-view
                      ><uni-text class="font-14 color-dark mr-5"><span>ETH</span></uni-text
                      ><uni-text class="font-12 color-gray ml-10"
                        ><span>0.000168</span></uni-text
                      ></uni-view
                    ><uni-view class="mt-5"
                      ><uni-text class="font-14 color-dark mr-5"><span>USDT</span></uni-text
                      ><uni-text class="font-12 color-gray ml-10"
                        ><span>0.549731</span></uni-text
                      ></uni-view
                    ></uni-view
                  ><uni-view
                    style="
                      margin-left: auto;
                      padding: 0.3125rem 0.625rem;
                      border-radius: 0.9375rem;
                      background-color: var(--background-strength);
                    "
                    ><uni-text class="color-green font-12"
                      ><span>兑换成功</span></uni-text
                    ></uni-view
                  ></uni-view
                ><uni-view class="flex align-center justify-between pd-t-10"
                  ><uni-text><span>2024-07-28 20:57</span></uni-text
                  ><uni-text><span>汇率：3272.21</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="item mt-10"
                ><uni-view
                  class="flex align-center border-bottom pd-b-10"
                  style="border-color: var(--border-strength-200)"
                  ><uni-view class="rectBox">
                    <img
                      class="icon"
                      src="../../assets/img/transfer-B1uZwvR6.png"
                      alt="" /></uni-view
                  ><uni-view class="ml-8"
                    ><uni-view
                      ><uni-text class="font-14 color-dark mr-5"><span>BTC</span></uni-text
                      ><uni-text class="font-12 color-gray ml-10"
                        ><span>0.000799</span></uni-text
                      ></uni-view
                    ><uni-view class="mt-5"
                      ><uni-text class="font-14 color-dark mr-5"><span>USDT</span></uni-text
                      ><uni-text class="font-12 color-gray ml-10"
                        ><span>54.38</span></uni-text
                      ></uni-view
                    ></uni-view
                  ><uni-view
                    style="
                      margin-left: auto;
                      padding: 0.3125rem 0.625rem;
                      border-radius: 0.9375rem;
                      background-color: var(--background-strength);
                    "
                    ><uni-text class="color-green font-12"
                      ><span>兑换成功</span></uni-text
                    ></uni-view
                  ></uni-view
                ><uni-view class="flex align-center justify-between pd-t-10"
                  ><uni-text><span>2024-07-28 20:56</span></uni-text
                  ><uni-text><span>汇率：68058.009999</span></uni-text></uni-view
                ></uni-view
              >
            </uni-view>
          </div>
        </div>
      </div>
    </uni-scroll-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
