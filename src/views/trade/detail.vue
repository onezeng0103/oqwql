<template>
  <uni-view class="kline"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 0px;
          padding-right: 0px;
          z-index: 9;
        "
      >
        <uni-view class="fui-nav__status-bar" style="height: 0px"></uni-view>
        <uni-view class="fui-nav__header">
          <uni-view class="nav-bar"
            ><uni-view class="nav-bar-left"
              ><uni-text
                @click="router.back()"
                class="fui-icon"
                marginleft="0"
                style="color: var(--content-primary); font-size: 1.75rem; font-weight: normal"
                ><span></span></uni-text
              ><uni-view class="column show" @click="showLeft = true"
                ><uni-view class="row"
                  ><uni-text class="coin font-bold"
                    ><span>{{ coinInfo.showSymbol }} </span></uni-text
                  >
                  <img
                    src="../../assets/img/down-dark.png"
                    alt=""
                    style="height: 18px"
                  /> </uni-view
                ><uni-view class="row" style="display: none"
                  ><uni-text class="font-weight price_up"><span>95,225.05</span></uni-text
                  ><uni-text class="font-weight price_up"><span>1.17% </span></uni-text></uni-view
                ></uni-view
              ></uni-view
            ></uni-view
          >
        </uni-view>
      </uni-view>
    </uni-view>
    <uni-scroll-view class="kline-body" style="height: 579px">
      <div class="uni-scroll-view">
        <div class="uni-scroll-view" style="overflow: hidden auto">
          <div class="uni-scroll-view-content">
            <uni-view class="body-box"
              ><uni-view class="top-box"
                ><uni-view class="price-box"
                  ><uni-view class="row"
                    ><uni-text class="font-22 color-black font-bold price_up"
                      ><span> {{ coinPriceInfo.close }}</span></uni-text
                    ></uni-view
                  ><uni-view class="row"
                    ><uni-text class="font-weight"
                      ><span> ≈${{ coinPriceInfo.close }}</span></uni-text
                    ><uni-text class="font-weight price_up"
                      ><span> {{ coinPriceInfo?.priceChangePercent }}%</span></uni-text
                    ></uni-view
                  ></uni-view
                ><uni-view class="price-info"
                  ><uni-view class="item"
                    ><uni-text><span>高</span></uni-text
                    ><uni-text class="font-weight"
                      ><span>{{ priceFormat(coinPriceInfo.high24) }}</span></uni-text
                    ></uni-view
                  ><uni-view class="item"
                    ><uni-text><span>底</span></uni-text
                    ><uni-text class="font-weight"
                      ><span>{{ priceFormat(coinPriceInfo.low24) }}</span></uni-text
                    ></uni-view
                  ><uni-view class="item"
                    ><uni-text><span>量</span></uni-text
                    ><uni-text class="font-weight"
                      ><span>{{ countFormat(coinPriceInfo.volume24) }}</span></uni-text
                    ></uni-view
                  ></uni-view
                ></uni-view
              >
              <Candlestick v-if="coinInfo.coin" :coinInfo="coinInfo" type="detail" />
              <uni-view class="list-tabs">
                <uni-view class="item active">
                  <uni-text class="font-weight color-black">
                    <span>时实成交</span>
                  </uni-text>
                </uni-view>
              </uni-view>
              <uni-swiper class="list-swiper" style="height: 507px"
                ><div class="uni-swiper-wrapper">
                  <div class="uni-swiper-slides">
                    <div
                      class="uni-swiper-slide-frame"
                      style="
                        width: 100%;
                        height: 100%;
                        transform: translate(0%, 0px) translateZ(0px);
                      "
                    >
                      <DealList v-if="coinInfo.coin" :coinInfo="coinInfo" :rows="20" />
                    </div>
                  </div>
                </div>
              </uni-swiper>
            </uni-view>
          </div>
        </div>
      </div>
    </uni-scroll-view>
  </uni-view>
  <LeftPopup :showLeft="showLeft" @close="showLeft = false" />
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useTradeStore } from '@/store/trade'
import { countFormat, priceFormat } from '@/utils/decimal'
import Candlestick from './component/candlestick.vue'
import DealList from './component/dealList.vue'
import LeftPopup from './component/leftPopup.vue'
const tradeStore = useTradeStore()
const showLeft = ref(false)
const router = useRouter()
const route = useRoute()
const coinPriceInfo = computed(() => {
  return tradeStore.allCoinPriceInfo[coinInfo.value.coin] || {}
})
const coinInfo = computed(() => {
  let temp = {}
  if (Number(route.query.type) == 2) {
    if (route.query.symbol) {
      temp =
        tradeStore.contractCoinList.filter((obj) => {
          return obj.coin === route.query.symbol
        })[0] || tradeStore.contractCoinList[0]
    } else {
      temp = tradeStore.contractCoinList[0]
    }
  } else {
    if (route.query.symbol) {
      temp =
        tradeStore.spotCoinList.filter((obj) => {
          return obj.coin === route.query.symbol
        })[0] || tradeStore.spotCoinList[0]
    } else {
      temp = tradeStore.spotCoinList[0]
    }
  }

  return temp
})
</script>
<style lang="scss" scoped>
.active {
  background: var(--background-secondary) !important;
}
</style>
