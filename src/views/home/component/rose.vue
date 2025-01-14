<template>
  <uni-view class="list_wrap" style="padding-bottom: 50px">
    <uni-view class="list_top">
      <uni-view class="_left">
        <uni-text class="font-11 color-gray"><span>名称</span> </uni-text>
        <uni-text class="font-11 color-gray">
          <span>最新价</span>
        </uni-text>
      </uni-view>
      <uni-view class="_right">
        <uni-text class="font-11 color-gray"><span>24h 涨跌幅</span></uni-text>
      </uni-view>
    </uni-view>
    <uni-view class="list">
      <uni-view class="item" v-for="(item, index) in listResult" :key="index">
        <uni-view class="item_left img_left">
          <uni-view class="item_row">
            <img :src="item.logo" style="width: 1.5rem; height: 1.5rem; margin-right: 0.625rem" />
            <uni-view class="_row_col">
              <uni-text class="font-13 color-black font-weight">
                <span> {{ item.showSymbol }}</span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="item_row">
            <uni-text
              class="font-13 font-weight"
              :class="
                tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
                tradeStore.allCoinPriceInfo[item.coin]?.close
                  ? 'price_up'
                  : 'price_down'
              "
            >
              <span> {{ priceFormat(tradeStore.allCoinPriceInfo[item.coin]?.close) }}</span>
            </uni-text>
          </uni-view>
        </uni-view>
        <uni-view class="item_right">
          <uni-view
            class="badge_width"
            :class="
              tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
              tradeStore.allCoinPriceInfo[item.coin]?.close
                ? 'badge_up'
                : 'badge_down'
            "
          >
            <uni-text class="font-12">
              <span
                >{{
                  tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
                  tradeStore.allCoinPriceInfo[item.coin]?.close
                    ? '+'
                    : '-'
                }}{{ tradeStore.allCoinPriceInfo[item.coin]?.priceChangePercent }}%
              </span>
            </uni-text>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useTradeStore } from '@/store/trade/index'
import { priceFormat } from '@/utils/decimal.js'
import {
  LatestpriceLargeToSmall,
  LatestpriceSmallToLarge,
  letterLargeToSmall,
  letterSmallToLarge
} from '@/utils/filters'
const tradeStore = useTradeStore()
const currentCoinList = ref(tradeStore.secondContractCoinList)
const listResult = ref()
// 筛选
let arrowList = reactive({
  firstIcon: 0,
  secondIcon: 0,
  thirdIcon: 0
})
// 切换涨跌
const toRafSort = () => {
  arrowList.firstIcon = 0
  arrowList.secondIcon = 0
  listResult.value = LatestpriceLargeToSmall(
    currentCoinList.value,
    tradeStore.allCoinPriceInfo,
    'change',
    1
  )
  arrowList.thirdIcon = 2
  listResult.value = LatestpriceSmallToLarge(
    currentCoinList.value,
    tradeStore.allCoinPriceInfo,
    'change',
    1
  )
  console.log(listResult.value)
}
toRafSort()
</script>
