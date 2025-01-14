<template>
  <uni-swiper-item
    class="list-swiper-item"
    style="
      position: absolute;
      width: 100%;
      height: 100%;
      transform: translate(0%, 0px) translateZ(0px);
    "
  >
    <uni-view class="desc-box">
      <uni-text>
        <span>时间</span>
      </uni-text>
      <uni-text>
        <span>方向</span>
      </uni-text>
      <uni-text
        ><span>价格({{ props.coinInfo.baseCoinUpperCase }})</span>
      </uni-text>
      <uni-text>
        <span
          >數量({{
            props.coinInfo.customizeFlag === 2
              ? matchText(props.coinInfo.showSymbol, '/USDT')
              : props.coinInfo.coinUpperCase
          }})</span
        >
      </uni-text>
    </uni-view>
    <uni-view class="order-container">
      <div style="display: flex; justify-content: space-between">
        <div style="width: 48%">
          <div
            v-for="item in buyList"
            :key="item.id"
            style="
              display: flex;
              justify-content: space-between;
              position: relative;
              border-radius: 0.125rem;
              overflow: hidden;
            "
          >
            <uni-text class="price_up font-weight"
              ><span>{{ countFormat(_div(item.amount, item.price)) }}</span></uni-text
            >
            <uni-text class="color-black font-weight"
              ><span>{{ priceFormat(item.price) }}</span></uni-text
            >
            <uni-view
              class="row-bg bg-green"
              style="
                width: 384.7%;
                height: 1.5rem;
                border-radius: 0.125rem;
                position: absolute;
                transition: all 0.15s linear;
                opacity: 0.1;
              "
            ></uni-view>
          </div>
        </div>
        <div style="width: 48%">
          <div
            v-for="item in sellList"
            :key="item.id"
            style="
              display: flex;
              justify-content: space-between;
              position: relative;
              border-radius: 0.125rem;
              overflow: hidden;
            "
          >
            <uni-text class="color-black font-weight"
              ><span>{{ priceFormat(item.price) }}</span></uni-text
            >
            <uni-text class="price_down font-weight"
              ><span>{{ countFormat(_div(item.amount, item.price)) }}</span></uni-text
            >
            <uni-view
              class="row-bg bg-red"
              style="
                width: 100%;
                height: 1.5rem;
                border-radius: 0.125rem;
                position: absolute;
                transition: all 0.15s linear;
                opacity: 0.1;
              "
            ></uni-view>
          </div>
        </div>
      </div>
    </uni-view>
  </uni-swiper-item>
</template>
<script setup>
import { debounce } from 'lodash'
import PubSub from 'pubsub-js'
import { socketDict } from '@/config/dict'
import { _coinWebSocket } from '@/plugin/socket/index'
import { _div, countFormat, priceFormat } from '@/utils/decimal'
import { matchText } from '@/utils/filters'
import { _timeFormat } from '@/utils/public'
const props = defineProps({
  /**
   * 行数
   */
  rows: {
    type: Number,
    default: 20
  },
  /**
   * 商品信息
   */
  coinInfo: {
    type: Object,
    default: () => {}
  }
})
/**
 * 当前订阅币种
 */
const currentCoinInfo = reactive({})

/**
 * 订阅客户端列表
 */
const subscribeClientList = reactive([])

/**
 * 数据列表
 */
const dataList = reactive([])
const buyList = reactive([])
const sellList = reactive([])
/**
 * 订阅实时成交
 */
const subscribeTrades = async (params) => {
  dataList.length = 0
  buyList.length = 0
  let marketTradeKey = PubSub.subscribe(socketDict.TRADE, (key, data) => {
    if (data.symbol == params.coin && data?.data?.tick?.data) {
      let tempDataList = data.data.tick.data
      if (tempDataList.length >= props.rows) {
        Object.assign(dataList, tempDataList)
      } else {
        dataList.splice(props.rows - tempDataList.length)
        dataList.unshift(...tempDataList)
      }
    }
    buyList.unshift(...dataList.filter((item) => item.direction === 'buy'))
    sellList.unshift(...dataList.filter((item) => item.direction === 'sell'))
    console.log(buyList)
    subscribeClientList.push(marketTradeKey)
  })
}

/**
 * 交易对监听
 */
const eventTradeSymbolChange = debounce((e) => {
  // 监听币种切换
  console.log('监听币种切换', e.detail.coinInfo)
  let tempCoinInfo = e.detail.coinInfo
  Object.assign(currentCoinInfo, tempCoinInfo)
  subscribeTrades(currentCoinInfo)
  dataList.length = 0
}, 200)
onMounted(() => {
  Object.assign(currentCoinInfo, props.coinInfo)
  subscribeTrades(currentCoinInfo)
  document.addEventListener('event_tradeSymbolChange', eventTradeSymbolChange)
})
onUnmounted(() => {
  document.removeEventListener('event_tradeSymbolChange', eventTradeSymbolChange)

  subscribeClientList.forEach((subKey) => {
    subKey && PubSub.unsubscribe(subKey)
  })
})
</script>
