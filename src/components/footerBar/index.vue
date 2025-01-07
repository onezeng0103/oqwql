<template>
  <uni-tabbar class="uni-tabbar-bottom" style="width: 100%"
    ><div
      class="uni-tabbar"
      style="background-color: rgb(17, 17, 17); backdrop-filter: none; width: 100%"
    >
      <div class="uni-tabbar-border" style="background-color: rgba(0, 0, 0, 0.33)"></div>
      <div class="uni-tabbar__item" @click="router.push('/')">
        <div class="uni-tabbar__bd" style="height: 50px">
          <div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 20px; height: 20px">
            <img src="../../assets/img/home-s.png" />
          </div>
          <div
            class="uni-tabbar__label"
            style="color: rgb(255, 255, 255); font-size: 12px; line-height: normal; margin-top: 6px"
          >
            首页
          </div>
        </div>
      </div>
      <div class="uni-tabbar__item">
        <div class="uni-tabbar__bd" style="height: 50px">
          <div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 20px; height: 20px">
            <img src="../../assets/img/market-d.png" />
          </div>
          <div
            class="uni-tabbar__label"
            style="color: rgb(137, 137, 137); font-size: 12px; line-height: normal; margin-top: 6px"
          >
            行情
          </div>
        </div>
      </div>
      <div class="uni-tabbar__item">
        <div class="uni-tabbar__bd" style="height: 50px">
          <div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 20px; height: 20px">
            <img src="../../assets/img/trade-d.png" />
          </div>
          <div
            class="uni-tabbar__label"
            style="color: rgb(137, 137, 137); font-size: 12px; line-height: normal; margin-top: 6px"
          >
            现货
          </div>
        </div>
      </div>
      <div class="uni-tabbar__item">
        <div class="uni-tabbar__bd" style="height: 50px">
          <div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 20px; height: 20px">
            <img src="../../assets/img/contract-d.png" />
          </div>
          <div
            class="uni-tabbar__label"
            style="color: rgb(137, 137, 137); font-size: 12px; line-height: normal; margin-top: 6px"
          >
            合约
          </div>
        </div>
      </div>
      <div class="uni-tabbar__item" @click="router.push('/wallet')">
        <div class="uni-tabbar__bd" style="height: 50px">
          <div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 20px; height: 20px">
            <img src="../../assets/img/asset-d.png" />
          </div>
          <div
            class="uni-tabbar__label"
            style="color: rgb(137, 137, 137); font-size: 12px; line-height: normal; margin-top: 6px"
          >
            资产
          </div>
        </div>
      </div>
    </div>
    <div class="uni-placeholder" style="height: 50px"></div
  ></uni-tabbar>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
