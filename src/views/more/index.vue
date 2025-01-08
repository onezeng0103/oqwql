<template>
  <uni-view class="more"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 996;
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
              ><span>服务</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="container"
      ><uni-view class="container-list"
        ><uni-view class="list-box"
          ><uni-view class="_title"
            ><uni-text class="font-14 font-weight color-black"
              ><span>常用</span></uni-text
            ></uni-view
          ><uni-view class="menu-box"
            ><uni-view class="menu-item" @click="router.push('/invaite')"
              ><uni-view class="image-box" type="invite">
                <img
                  src="../../assets/img/invite-white.png"
                  alt=""
                  style="height: 26px" /></uni-view
              ><uni-text class="font-12 color-black"><span>邀请好友</span></uni-text></uni-view
            ><uni-view class="menu-item" @click="router.push('/flashExchange')"
              ><uni-view class="image-box">
                <img
                  src="../../assets/img/flashExchange.png"
                  alt=""
                  style="height: 30px"
                /> </uni-view
              ><uni-text class="font-12 color-black"><span>闪兑</span></uni-text></uni-view
            ><uni-view class="menu-item" @click="router.push('/withdraw')"
              ><uni-view class="image-box">
                <img
                  src="../../assets/img/payouts-dark.png"
                  alt=""
                  style="height: 30px" /></uni-view
              ><uni-text class="font-12 color-black"><span>提现</span></uni-text></uni-view
            ><uni-view class="menu-item" @click="router.push('/recharge')"
              ><uni-view class="image-box">
                <img
                  src="../../assets/img/recharge-dark.png"
                  alt=""
                  style="height: 30px"
                /> </uni-view
              ><uni-text class="font-12 color-black"><span>充值</span></uni-text></uni-view
            ></uni-view
          ></uni-view
        ><uni-view class="line-view"></uni-view
        ><uni-view class="list-box"
          ><uni-view class="_title"
            ><uni-text class="font-14 font-weight color-black"
              ><span>基础</span></uni-text
            ></uni-view
          ><uni-view class="menu-box"
            ><uni-view class="menu-item"
              ><uni-view class="image-box">
                <img
                  src="../../assets/img/payouts-dark.png"
                  alt=""
                  style="height: 30px"
                /> </uni-view
              ><uni-text class="font-12 color-black"><span>提现</span></uni-text></uni-view
            ><uni-view class="menu-item"
              ><uni-view class="image-box">
                <img
                  src="../../assets/img/recharge-dark.png"
                  alt=""
                  style="height: 30px"
                /> </uni-view
              ><uni-text class="font-12 color-black"><span>充值</span></uni-text></uni-view
            ><uni-view class="menu-item"
              ><uni-view class="image-box" type="invite" @click="router.push('/invaite')"
                ><img
                  src="../../assets/img/invite-white.png"
                  alt=""
                  style="height: 30px"
                /> </uni-view
              ><uni-text class="font-12 color-black"><span>邀请好友</span></uni-text></uni-view
            ><uni-view class="menu-item"
              ><uni-view class="image-box" @click="router.push('/help')"
                ><img
                  src="../../assets/img/help-center-dark.png"
                  alt=""
                  style="height: 30px" /></uni-view
              ><uni-text class="font-12 color-black"><span>帮助中心</span></uni-text></uni-view
            ></uni-view
          ></uni-view
        ><uni-view class="list-box"
          ><uni-view class="_title"
            ><uni-text class="font-14 font-weight color-black"
              ><span>交易</span></uni-text
            ></uni-view
          ><uni-view class="menu-box"
            ><uni-view class="menu-item"
              ><uni-view class="image-box"
                ><img
                  src="../../assets/img/spot-trading-dark.png"
                  alt=""
                  style="height: 30px" /></uni-view
              ><uni-text class="font-12 color-black"><span>现货交易</span></uni-text></uni-view
            ><uni-view class="menu-item"
              ><uni-view class="image-box"
                ><img
                  src="../../assets/img/futures-dark.png"
                  alt=""
                  style="height: 30px" /></uni-view
              ><uni-text class="font-12 color-black"><span>合约交易</span></uni-text></uni-view
            ><uni-view class="menu-item"
              ><uni-view class="image-box"
                ><img
                  src="../../assets/img/copy-trading-dark.png"
                  alt=""
                  style="height: 30px" /></uni-view
              ><uni-text class="font-12 color-black"><span>跟单交易</span></uni-text></uni-view
            ></uni-view
          ></uni-view
        ><uni-view class="list-box"
          ><uni-view class="_title"
            ><uni-text class="font-14 font-weight color-black"
              ><span>衍生性商品</span></uni-text
            ></uni-view
          ><uni-view class="menu-box"
            ><uni-view class="menu-item"
              ><uni-view class="image-box"
                ><img
                  src="../../assets/img/icon_sfsqq-Dw5o5SmD.png"
                  alt=""
                  style="height: 30px" /></uni-view
              ><uni-text class="font-12 color-black"><span>闪光选择权</span></uni-text></uni-view
            ><uni-view class="menu-item"
              ><uni-view class="image-box"
                ><img
                  src="../../assets/img/welfare-dark.png"
                  alt=""
                  style="height: 30px" /></uni-view
              ><uni-text class="font-12 color-black"><span>福利中心</span></uni-text></uni-view
            ></uni-view
          ></uni-view
        ><uni-view class="list-box"
          ><uni-view class="_title"
            ><uni-text class="font-14 font-weight color-black"
              ><span>理财</span></uni-text
            ></uni-view
          ><uni-view class="menu-box"
            ><uni-view class="menu-item"
              ><uni-view class="image-box"
                ><img
                  src="../../assets/img/icon_bflc-Cts4DL6M.png"
                  alt=""
                  style="height: 30px" /></uni-view
              ><uni-text class="font-12 color-black"><span>暴富理财</span></uni-text></uni-view
            ><uni-view class="menu-item"
              ><uni-view class="image-box"
                ><img
                  src="../../assets/img/impawn-white.png"
                  alt=""
                  style="height: 30px" /></uni-view
              ><uni-text class="font-12 color-black"><span>质押生息</span></uni-text></uni-view
            ></uni-view
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
