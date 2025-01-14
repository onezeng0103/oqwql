<template>
  <uni-view class="scroll-top-right"
    ><uni-view class="right-top" style="height: 19.6875rem"
      ><uni-view class="right-title"
        ><uni-view class="item"
          ><uni-text class="font-10 color-gray"><span>价格</span></uni-text
          ><uni-text class="font-10 color-gray"
            ><span>({{ coinInfo.baseCoinUpperCase }})</span></uni-text
          ></uni-view
        ><uni-view class="item"
          ><uni-text class="font-10 color-gray"><span>成交量</span></uni-text
          ><uni-text class="font-10 color-gray"
            ><span
              >({{
                coinInfo.customizeFlag === 2
                  ? matchText(coinInfo.showSymbol, '/USDT')
                  : coinInfo.coinUpperCase
              }})</span
            ></uni-text
          ></uni-view
        ></uni-view
      >
      <uni-view class="price-list" v-show="showType.value != 2"
        ><uni-view
          class="cell"
          @click="emits('setTradePrice', asksList[index]?.price)"
          v-for="(item, index) in rows"
          :key="`asks${index}`"
          ><uni-view
            class="bg-box bg-red"
            :style="`width:${_toFixed(
              _mul(_div(asksList[index]?.count || 0, maxAskCount), 100),
              2
            )}%;`"
          ></uni-view
          ><uni-text class="font-10 font-weight price_down"
            ><span>{{ priceFormat(asksList[index]?.price) }}</span></uni-text
          ><uni-text class="font-10 font-weight color-black"
            ><span>{{ priceFormat(asksList[index]?.count) }}</span></uni-text
          ></uni-view
        ></uni-view
      >
      <uni-view class="price-center" @click="emits('setTradePrice', tradeDetailInfo?.close)"
        ><uni-text class="font-14 price_up font-weight"
          ><span>{{ priceFormat(tradeDetailInfo?.close) }}</span></uni-text
        ><uni-text class="font-10 color-gray"
          ><span> ≈${{ tradeDetailInfo?.close }}</span></uni-text
        ></uni-view
      >
      <uni-view class="price-list" v-show="showType.value != 1"
        ><uni-view
          class="cell"
          @click="emits('setTradePrice', bidsList[index]?.price)"
          v-for="(item, index) in rows"
          :key="`bids${index}`"
          ><uni-view
            class="bg-box bg-green"
            :style="`width:${_toFixed(
              _mul(_div(bidsList[index]?.count || 0, maxBidCount), 100),
              2
            )}%;`"
          ></uni-view
          ><uni-text class="font-10 font-weight price_up"
            ><span>{{ priceFormat(bidsList[index]?.price) }}</span></uni-text
          ><uni-text class="font-10 font-weight color-black"
            ><span>{{ priceFormat(bidsList[index]?.count) }}</span></uni-text
          ></uni-view
        ></uni-view
      > </uni-view
    ><uni-view class="cell-row"
      ><uni-view class="fui-dropdown__menu" style="width: 84%">
        <uni-view class="select-box bg-gray" @click="showDepthPopup = true">
          <uni-text class="font-11 color-black"
            ><span>{{ showDepth?.label }}</span></uni-text
          >
          <img src="../../../assets/img/down-dark.png" alt="" style="height: 14px" />
        </uni-view>
        <uni-view
          :class="
            showDepthPopup
              ? 'fui-dropdown__menu-list fui-ddm__down fui-ddm__down-show'
              : 'fui-dropdown__menu-list fui-ddm__down'
          "
          style="border-radius: 0.25rem; background: var(--background-secondary); left: 0px"
          ><uni-scroll-view
            class="fui-ddm__scroll"
            style="height: auto; max-height: 8.4375rem; min-width: 4.84375rem"
            ><div class="uni-scroll-view">
              <div
                class="uni-scroll-view uni-scroll-view-scrollbar-hidden"
                style="overflow: hidden auto"
              >
                <div class="uni-scroll-view-content">
                  <uni-view
                    ><uni-view
                      class="fui-dropdown__menu-item"
                      v-for="(item, index) in showDepthList"
                      @click="_checkedShowDepth(item)"
                      :key="index"
                      style="
                        background: var(--background-secondary);
                        padding: 0.375rem;
                        border-bottom-color: transparent;
                      "
                      ><uni-view class="fui-ddm__flex"
                        ><uni-text
                          class="fui-ddm__item-text"
                          style="font-size: 0.75rem; color: var(--content-primary)"
                          ><span>{{ item.label }}</span></uni-text
                        ></uni-view
                      ></uni-view
                    ></uni-view
                  >
                </div>
              </div>
            </div></uni-scroll-view
          ></uni-view
        >
      </uni-view>
      <uni-view class="image-box bg-gray" @click="showTypePopup = true">
        <img
          v-if="showType.value == 0"
          src="../../../assets/img/morenpan.svg"
          alt=""
          style="height: 14px"
        />
        <img
          v-if="showType.value == 1"
          src="../../../assets/img/maichupan.svg"
          alt=""
          style="height: 14px"
        />
        <img
          v-if="showType.value == 2"
          src="../../../assets/img/mairupan.svg"
          alt=""
          style="height: 14px"
        />
      </uni-view>
    </uni-view>
  </uni-view>
  <van-popup v-model:show="showTypePopup" round position="bottom">
    <div
      style="display: flex; align-items: center; justify-content: center; padding: 1.533333rem 0px"
      :style="{
        color:
          showType.value == item.value ? 'var(--content-trade-buy)' : 'var(--content-always-white)'
      }"
      v-for="item in showTypeList"
      :key="item.value"
      @click="_checkedShowType(item)"
    >
      <span>{{ item.label }}</span>
    </div>
  </van-popup>
</template>

<script setup>
import _ from 'lodash'
import PubSub from 'pubsub-js'
import { socketDict } from '@/config/dict'
import { useTradeStore } from '@/store/trade'
import { _add, _div, _mul, _sub, _toFixed, countFormat, priceFormat } from '@/utils/decimal'
import { matchText } from '@/utils/filters'

const emits = defineEmits(['setTradePrice'])
const props = defineProps({
  coinInfo: {
    type: Object
  },
  /**
   * 行数 最大30 默认4
   */
  rows: {
    type: Number,
    default: 4
  }
})
/**
 * 盘口显示类型
 */
const showTypeList = [
  // 默认
  { label: '默认  ', value: 0, icon: 'morenpan' },
  // 卖出盘
  { label: '卖出盘', value: 1, icon: 'maichupan' },
  // 买入盘
  { label: '买入盘', value: 2, icon: 'mairupan' }
]
/**
 * 当前显示类型
 */
const showType = ref(showTypeList[0])
/**
 * 显示Popup变量
 */
const showTypePopup = ref(false)
/**
 * 显示行数
 */
const rows = computed(() => (showType.value.value != 0 ? props.rows * 2 : props.rows))
/**
 * 选中盘口显示类型
 */
const _checkedShowType = (item) => {
  if (item.value != showType.value.value) {
    showType.value = item
  }
  showTypePopup.value = false
}
/**
 * 盘口显示类型
 */
const showDepthListDict = [
  { label: '0.00000001', value: 0, min: 0.00000001 },
  { label: '0.0000001', value: 1, min: 0.0000001 },
  { label: '0.000001', value: 2, min: 0.000001 },
  { label: '0.00001', value: 3, min: 0.00001 },
  { label: '0.0001', value: 4, min: 0.0001 },
  { label: '0.001', value: 5, min: 0.001 },
  { label: '0.01', value: 6, min: 0.01 },
  { label: '0.1', value: 7, min: 0.1 },
  { label: '1', value: 8, min: 10 },
  { label: '10', value: 9, min: 100 },
  { label: '100', value: 10, min: 1000 }
]
const showDepthList = ref([])
/**
 * 当前显示类型
 */
const showDepth = reactive({})

/**
 * 显示Popup变量
 */
const showDepthPopup = ref(false)
/**
 * 选中盘口显示类型
 */
const _checkedShowDepth = (item) => {
  if (item.value != showDepth.value) {
    Object.assign(showDepth, item)
  }
  showDepthPopup.value = false
}

// 最大卖出数量
const maxAskCount = ref(0)
// 最大买入数量
const maxBidCount = ref(0)
/**
 * 买入列表
 */
const bidsList = reactive([])
/**
 * 卖出列表
 */
const asksList = reactive([])

// 生成 区间 随机整数
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
/**
 * 获取最小单位值
 */
function getIntegerPart(number) {
  var integerPart = Math.floor(number) // 获取整数部分
  let temp = Math.pow(10, integerPart.toString().length - 1)
  if (integerPart < 10) {
    temp = Math.pow(10, 5 - number.toString().split('.')[1]?.length)
  }
  return temp
}
/**
 * 根据当前价格随机成交量
 */
const getMockDataList = () => {
  setTimeout(getMockDataListThrottle, getRandomInteger(900, 1600))

  let price = tradeDetailInfo.value?.close
  let coefficient = 1 / getIntegerPart(price)
  let aggregationFactor = showDepth?.min
  let countFactor = aggregationFactor * 1000
  if (price < 1000) {
    countFactor = aggregationFactor * 10 ** (`${price}`.length - 1)
  }

  if (!price || !Number(aggregationFactor)) {
    maxAskCount.value = 0
    maxBidCount.value = 0
    Object.assign(
      asksList,
      asksList.map((elem) => {
        elem.close = 0
        elem.count = 0
        return elem
      })
    )
    Object.assign(
      bidsList,
      asksList.map((elem) => {
        elem.price = 0
        elem.count = 0
        return elem
      })
    )
    return
  }
  // 生成数量 大 -> 小
  let tempAsksList = []
  let tempBidsList = []
  let hashCount = _mul(_mul(Math.random(), coefficient), countFactor)
  if (price < 10) {
    hashCount = _mul(_mul(Math.random(), coefficient), countFactor)
  }

  for (let i = 1; i <= props.rows * 2; i++) {
    let randomCount = _mul(Math.random(), hashCount) + _mul(Math.random(), coefficient)
    let tempObj = {
      price: _add(_add(price, i * aggregationFactor), 0),
      count: randomCount
    }
    tempAsksList.push(tempObj)
    tempAsksList = tempAsksList.sort((a, b) => a.price - b.price)
  }

  for (let i = 1; i <= props.rows * 2; i++) {
    let randomCount = _mul(Math.random(), hashCount) + _mul(Math.random(), coefficient)

    let tempObj = {
      price: _sub(_sub(price, i * aggregationFactor), 0),
      count: randomCount
    }
    tempBidsList.push(tempObj)
    tempBidsList = tempBidsList.sort((a, b) => b.price - a.price)
  }
  maxAskCount.value = Math.max(...tempAsksList.filter((e, i) => i < props.rows).map((e) => e.count))
  maxBidCount.value = Math.max(...tempBidsList.filter((e, i) => i < props.rows).map((e) => e.count))
  Object.assign(asksList, tempAsksList)
  Object.assign(bidsList, tempBidsList)
}
/**
 * 交易详情数据
 */
const tradeDetailInfo = computed(() => tradeStore.allCoinPriceInfo[props.coinInfo?.coin])
const tradeStore = useTradeStore()
watch(
  () => props.coinInfo?.coin,
  () => {
    console.log('币种更换', props.coinInfo?.coin, props.rows, tradeDetailInfo.value.close)
    if (tradeDetailInfo.value?.close > 0) {
      showDepthList.value = showDepthListDict
        .filter((elem) => elem.min * 30 < tradeDetailInfo.value.close)
        .slice(-4)
      Object.assign(showDepth, showDepthList.value[0])
      getMockDataListThrottle()
      // getMockDataList()
    }
  }
)

/**
 * 更新数据 限流
 */
const getMockDataListThrottle = _.throttle(() => {
  getMockDataList()
}, 1000)

const subKey = PubSub.subscribe(socketDict.DETAIL, (key, data) => {
  if (data.symbol && data.symbol == props.coinInfo.coin) {
    if (tradeDetailInfo.value.close && showDepthList.value.length) {
      getMockDataListThrottle()
    } else {
      showDepthList.value = showDepthListDict
        .filter((elem) => elem.min * 30 < tradeDetailInfo.value.close)
        .slice(-4)
      Object.assign(showDepth, showDepthList.value[0])
      getMockDataList()
    }
  }
})

onUnmounted(() => {
  console.log('组件卸载', subKey)

  subKey && PubSub.unsubscribe(subKey)
})
</script>
