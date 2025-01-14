<template>
  <uni-view class="store-container" style="height: 573px">
    <uni-view class="store-container-head">
      <uni-view class="head-top"></uni-view>
      <uni-view class="head-bottom">
        <uni-view class="sort-menu">
          <uni-view class="sort-menu-cell">
            <uni-view class="item" @click="toDealSort">
              <uni-text class="font-12 color-light"><span>名称</span></uni-text>
              <img
                v-if="arrowList.firstIcon === 0"
                src="../../../assets/img/z-nomal.png"
                draggable="false"
                style="width: 0.5rem; height: 0.75rem; margin-left: 0.3125rem"
              />
              <img
                v-else-if="arrowList.firstIcon === 1"
                src="../../../assets/img/z-up-sms.png"
                draggable="false"
                style="width: 0.5rem; height: 0.75rem; margin-left: 0.3125rem"
              />
              <img
                v-else-if="arrowList.firstIcon === 2"
                src="../../../assets/img/z-down-sms.png"
                draggable="false"
                style="width: 0.5rem; height: 0.75rem; margin-left: 0.3125rem"
              />
            </uni-view>
          </uni-view>
          <uni-view class="sort-menu-cell">
            <uni-view class="item" @click="toUpSort">
              <uni-text class="font-12 color-light"><span>最新价</span></uni-text>
              <img
                v-if="arrowList.secondIcon === 0"
                src="../../../assets/img/z-nomal.png"
                draggable="false"
                style="width: 0.5rem; height: 0.75rem; margin-left: 0.3125rem"
              />
              <img
                v-else-if="arrowList.secondIcon === 1"
                src="../../../assets/img/z-up-sms.png"
                draggable="false"
                style="width: 0.5rem; height: 0.75rem; margin-left: 0.3125rem"
              />
              <img
                v-else-if="arrowList.secondIcon === 2"
                src="../../../assets/img/z-down-sms.png"
                draggable="false"
                style="width: 0.5rem; height: 0.75rem; margin-left: 0.3125rem"
              />
            </uni-view>
            <uni-view class="item" @click="toRafSort">
              <uni-text class="font-12 color-light"><span>涨跌幅</span></uni-text>
              <img
                v-if="arrowList.thirdIcon === 0"
                src="../../../assets/img/z-nomal.png"
                draggable="false"
                style="width: 0.5rem; height: 0.75rem; margin-left: 0.3125rem"
              />
              <img
                v-else-if="arrowList.thirdIcon === 1"
                src="../../../assets/img/z-up-sms.png"
                draggable="false"
                style="width: 0.5rem; height: 0.75rem; margin-left: 0.3125rem"
              />
              <img
                v-else-if="arrowList.thirdIcon === 2"
                src="../../../assets/img/z-down-sms.png"
                draggable="false"
                style="width: 0.5rem; height: 0.75rem; margin-left: 0.3125rem"
              />
            </uni-view>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
    <uni-scroll-view class="store-container-scrollview" style="height: 573px">
      <div class="uni-scroll-view">
        <div class="uni-scroll-view" style="overflow: hidden auto">
          <div class="uni-scroll-view-content">
            <uni-view>
              <uni-view class="card-list">
                <uni-view
                  class="coin-item"
                  v-for="(item, index) in listResult"
                  :key="index"
                  @click="handleClick(item)"
                >
                  <uni-view class="coin-item-cell">
                    <uni-view class="_row">
                      <uni-text class="font-14 color-black font-weight"
                        ><span>{{ item.showSymbol }}</span>
                      </uni-text>
                    </uni-view>
                  </uni-view>
                  <uni-view class="coin-item-cell">
                    <uni-view class="item">
                      <uni-view class="_row">
                        <uni-text
                          class="font-14 font-weight"
                          :class="
                            tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
                            tradeStore.allCoinPriceInfo[item.coin]?.close
                              ? 'price_up'
                              : 'price_down'
                          "
                        >
                          <span>{{
                            priceFormat(tradeStore.allCoinPriceInfo[item.coin]?.close)
                          }}</span></uni-text
                        >
                      </uni-view>
                    </uni-view>
                    <uni-view class="item">
                      <uni-view
                        class="tag-box"
                        :class="
                          tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
                          tradeStore.allCoinPriceInfo[item.coin]?.close
                            ? 'tag-green'
                            : 'tag-red'
                        "
                      >
                        <uni-text class="font-11 color-white">
                          <span
                            >{{
                              tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
                              tradeStore.allCoinPriceInfo[item.coin]?.close
                                ? '+'
                                : '-'
                            }}{{
                              tradeStore.allCoinPriceInfo[item.coin]?.priceChangePercent
                            }}%</span
                          >
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>
                </uni-view>
              </uni-view>
            </uni-view>
          </div>
        </div>
      </div>
    </uni-scroll-view>
  </uni-view>
</template>
<script setup>
import { useTradeStore } from '@/store/trade'
import { priceFormat } from '@/utils/decimal.js'
import { useRouter } from 'vue-router'
import {
  LatestpriceLargeToSmall,
  LatestpriceSmallToLarge,
  letterLargeToSmall,
  letterSmallToLarge
} from '@/utils/filters'
const $router = useRouter()
const tradeStore = useTradeStore()
/**
 * 币种列表
 */
const currentList = ref([])
const currentCoinList = computed(() => {
  let tempList = []
  tempList = tradeStore.spotCoinList
  currentList.value = tempList
  return tempList
})
const handleClick = (item) => {
  $router.replace(`trade?symbol=${item.coin}`)
}
const listResult = ref(currentCoinList.value)
// 筛选
let arrowList = reactive({
  firstIcon: 0,
  secondIcon: 0,
  thirdIcon: 0
})
// 切换名称
const toDealSort = () => {
  arrowList.secondIcon = 0
  arrowList.thirdIcon = 0
  if (arrowList.firstIcon === 0) {
    arrowList.firstIcon = 1
    listResult.value = letterSmallToLarge(currentCoinList.value, 'coin')
  } else if (arrowList.firstIcon === 1) {
    arrowList.firstIcon = 2
    listResult.value = letterLargeToSmall(currentCoinList.value, 'coin')
  } else if (arrowList.firstIcon === 2) {
    arrowList.firstIcon = 0
    listResult.value = currentCoinList.value
  }
}
// 切换最新价
const toUpSort = () => {
  console.log(1)
  arrowList.firstIcon = 0
  arrowList.thirdIcon = 0
  if (arrowList.secondIcon === 0) {
    arrowList.secondIcon = 1
    listResult.value = LatestpriceLargeToSmall(
      currentCoinList.value,
      tradeStore.allCoinPriceInfo,
      'close'
    )
  } else if (arrowList.secondIcon === 1) {
    arrowList.secondIcon = 2
    listResult.value = LatestpriceSmallToLarge(
      currentCoinList.value,
      tradeStore.allCoinPriceInfo,
      'close'
    )
  } else if (arrowList.secondIcon === 2) {
    arrowList.secondIcon = 0
    listResult.value = currentCoinList.value
  }
}
// 切换涨跌
const toRafSort = () => {
  console.log(2)
  arrowList.firstIcon = 0
  arrowList.secondIcon = 0
  if (arrowList.thirdIcon === 0) {
    arrowList.thirdIcon = 1
    listResult.value = LatestpriceLargeToSmall(
      currentCoinList.value,
      tradeStore.allCoinPriceInfo,
      'change',
      1
    )
  } else if (arrowList.thirdIcon === 1) {
    arrowList.thirdIcon = 2
    listResult.value = LatestpriceSmallToLarge(
      currentCoinList.value,
      tradeStore.allCoinPriceInfo,
      'change',
      1
    )
  } else if (arrowList.thirdIcon === 2) {
    arrowList.thirdIcon = 0
    listResult.value = currentCoinList.value
  }
}
</script>
