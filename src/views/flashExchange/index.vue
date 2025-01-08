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
                ><uni-view class="flashExchangeCurrencyBox" @click="showAction('from')">
                  <img
                    class="currencyIcon"
                    style="height: 28px; width: 28px"
                    :src="`/src/assets/img/${list1Current?.coin}.png`"
                    alt=""
                  />
                  <uni-view class="item"
                    ><uni-view class="flex"
                      ><uni-text class="font-14 color-black font-bold"
                        ><span>{{ list1Current?.coin?.toUpperCase() }}</span></uni-text
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
                        v-model="fromNum"
                        type="number"
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        class="uni-input-input"
                        autocomplete="off"
                      /></div></uni-input></uni-view></uni-view
              ><uni-view class="flashExchangeCompareBoxM"
                ><uni-view class="line"></uni-view
                ><uni-view class="circleBox" @click="jiaohuan">
                  <img
                    class="icon"
                    src="../../assets/img/transfer-B1uZwvR6.png"
                    alt=""
                  /> </uni-view></uni-view
              ><uni-view class="flashExchangeCompareBoxR"
                ><uni-view class="flashExchangeCurrencyBox" @click="showAction('to')">
                  <img
                    class="currencyIcon"
                    style="height: 28px; width: 28px"
                    :src="`/src/assets/img/${list2Current?.coin}.png`"
                    alt=""
                  /><uni-view class="item"
                    ><uni-view class=""
                      ><uni-text class="font-14 color-black font-bold"
                        ><span>{{ list2Current?.coin?.toUpperCase() }}</span></uni-text
                      ><uni-text
                        class="fui-icon"
                        style="color: var(--dark-gray); font-size: 1.125rem; font-weight: normal"
                        ><span></span></uni-text
                      ></uni-view
                    ></uni-view
                  ></uni-view
                ><uni-view class="flashExchangeCurrencyBalance font-12 color-gray">0</uni-view
                ><uni-view class="flashExchangeCurrencyValue">{{ toNum }}</uni-view></uni-view
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
                ><uni-text
                  ><span
                    >1 {{ list1Current?.coin?.toUpperCase() }} = {{ curRate }}
                    {{ list2Current?.coin?.toUpperCase() }}</span
                  ></uni-text
                ></uni-view
              ></uni-view
            ><uni-view
              @click="submit"
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
              ><uni-view class="item mt-10" v-for="(item, index) in texChangeList" :key="index"
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
                      ><uni-text class="font-14 color-dark mr-5"
                        ><span>{{ item?.fromCoin?.toUpperCase() }}</span></uni-text
                      ><uni-text class="font-12 color-gray ml-10"
                        ><span>1</span></uni-text
                      ></uni-view
                    ><uni-view class="mt-5"
                      ><uni-text class="font-14 color-dark mr-5"
                        ><span>{{ item?.toCoin?.toUpperCase() }}</span></uni-text
                      ><uni-text class="font-12 color-gray ml-10"
                        ><span>{{ item?.amount }}</span></uni-text
                      ></uni-view
                    ></uni-view
                  ><uni-view
                    style="
                      margin-left: auto;
                      padding: 0.3125rem 0.625rem;
                      border-radius: 0.9375rem;
                      background-color: var(--background-strength);
                    "
                  >
                    <uni-text v-if="item?.status == 0" class="color-green font-12">
                      <span>兑换中</span>
                    </uni-text>
                    <uni-text v-if="item?.status == 1" class="color-green font-12">
                      <span>兑换成功</span>
                    </uni-text>
                    <uni-text v-if="item?.status == 2" class="color-red font-12">
                      <span>兑换失败</span>
                    </uni-text>
                  </uni-view></uni-view
                ><uni-view class="flex align-center justify-between pd-t-10"
                  ><uni-text
                    ><span>{{ item?.createTime }}</span></uni-text
                  ><uni-text
                    ><span>汇率：{{ item?.thirdRate }}</span></uni-text
                  ></uni-view
                ></uni-view
              >
            </uni-view>
          </div>
        </div>
      </div>
    </uni-scroll-view>
  </uni-view>
  <CurrencyList :showBottom="showBottom" @close="handleClose" :list="action" :info="info" />
</template>
<script setup>
import { useRouter } from 'vue-router'
import { debounce } from 'lodash'
import { storeToRefs } from 'pinia'
import { showToast } from 'vant'
import { rate, toExchange, getTexChangeListApi } from '@/api/account'
import { DIFF_ISFREEZE } from '@/config/index'
import { useFreeze } from '@/hook/useFreeze'
import { useAccountStore } from '@/store/account/index'
import { useUserStore } from '@/store/user/index'
import { priceFormat } from '@/utils/decimal.js'
import CurrencyList from './currencyList.vue'
const router = useRouter()
const { _isFreeze } = useFreeze()
const accountStore = useAccountStore()
const userStore = useUserStore()
userStore.getUserInfo()
// 用户余额信息
const { asset } = storeToRefs(userStore)
const { swapCoinList } = storeToRefs(accountStore)
const showBottom = ref(false) //sheet面板隐显
const action = ref({}) //面板数据(flag:from上，to下)
const flag = ref('from') //面板展示数据from/to
const jiaohuanFlag = ref(true) //交换按钮（true初始状态）
const list1 = ref([]) //币种列表
const list2 = ref([])
const list1Current = ref({}) //显示的币种列表
const list2Current = ref({})
const list1Coin = ref(0) //显示的币种
const list2Coin = ref(0)
// 当前币种的余额（一定取最新的）
const availableAmount = computed(() => {
  let data = ''
  asset.value.forEach((item, index) => {
    if (item.symbol == list1Current.value.coin && item.type == 1) {
      data = item.availableAmount
    }
  })
  return data
})
const texChangeList = ref([])
const getTexChangeList = async () => {
  const res = await getTexChangeListApi()
  texChangeList.value = res.rows
}
const init = async () => {
  await accountStore.getSwapCoinList()
  let template1 = []
  asset.value.forEach((item, index) => {
    // console.log(item,888)
    let obj = {}
    if (item.type == '1') {
      obj['id'] == index + 1
      obj['amount'] = item.availableAmount
      // console.log(item.loge,666)
      // obj['icon'] = item.logo

      if (item.symbol == 'usdt') {
        obj['coin'] = 'usdt'
        obj['icon'] = 'usdt'
        template1.unshift(obj)
      }
      if (item.symbol != 'usdt') {
        obj['coin'] = item.symbol?.replace('usdt', '').trim()
        // obj['icon'] = item.symbol?.replace('usdt', '').trim()
        obj['icon'] = item.loge
        template1.push(obj)
      }
    }
  })
  // **************************
  // 兑换成什么列表添加金额
  swapCoinList.value.forEach((item) => {
    template1.forEach((items) => {
      if (items.coin == item.coin) {
        item['amount'] = items.amount
      }
    })
  })
  list1.value = template1
  if (['gmtoin2'].includes(__config._APP_ENV)) {
    list1Current.value = template1.find((item, idx) => {
      return item.coin === 'btc'
    })
  } else {
    list1Current.value = template1[0]
  }
  // list1Current.value = template1[0]
  list1Coin.value = list1Current.value?.coin
  list2.value = swapCoinList.value?.filter((item) => {
    return item.coin != list1Current.value?.coin
  })
  list2Current.value = swapCoinList.value?.filter((item) => {
    return item.coin != list1Current.value?.coin
  })[0]
  list2Coin.value = list2Current.value?.coin
}
const curRate = ref(0)
// 获取汇率
const getRate = (from, to) => {
  from = filterCoin(from)
  to = filterCoin(to)
  rate(from, to).then((res) => {
    if (res.code == '200') {
      let resFrom = res.data[`${from}`]
      let resTo = res.data[`${to}`]
      if (resFrom == null) {
        resFrom = 1
      }
      if (resTo == null) {
        resTo = 1
      }
      curRate.value = priceFormat(resFrom / resTo, 8)
    }
  })
}
//面板中对上面货币更改
watch([list1Coin], ([newValue], [oldValue]) => {
  if (jiaohuanFlag.value) {
    //上面默认显示的货币
    list1.value.forEach((item) => {
      if (item.coin == newValue) {
        list1Current.value = item
      }
    })
    //下面货币列表
    list2.value = swapCoinList.value.filter((item) => {
      return item.coin != list1Current.value.coin
    })
    // 下面货币列表排他
    if (newValue == list2Coin.value) {
      list2Current.value = swapCoinList.value.filter((item) => {
        return item.coin != list1Current.value.coin
      })[0]
      list2Coin.value = list2Current.value.coin
    }
  } else {
    list1.value.forEach((item) => {
      if (item.coin == newValue) {
        list1Current.value = item
      }
    })
  }
})
watch([list2Coin], ([newValue], [oldValue]) => {
  if (jiaohuanFlag.value) {
    // 下面默认显示的货币
    list2.value.forEach((item) => {
      if (item.coin == newValue) {
        list2Current.value = item
      }
    })
  } else {
    list2.value.forEach((item) => {
      if (item.coin == newValue) {
        list2Current.value = item
      }
    })
    list1.value = swapCoinList.value.filter((item) => {
      return item.coin != list2Current.value.coin
    })
    if (newValue == list2Coin.value) {
      list1Current.value = swapCoinList.value.filter((item) => {
        return item.coin != list2Current.value.coin
      })[0]
      list1Coin.value = list2Current.value.coin
    }
  }
})
// 监听默认显示货币，修改汇率
watch(
  [list1Current, list2Current],
  (newValue, oldValue) => {
    getRate(newValue[0]?.coin, newValue[1]?.coin)
  },
  {
    deep: true
  }
)
// 点击交换按钮（交换上下货币列表，当前显示）
const jiaohuan = () => {
  jiaohuanFlag.value = !jiaohuanFlag.value
  let tempList = list1.value
  list1.value = list2.value
  list2.value = tempList
  let tempCurrent = list1Current.value
  list1Current.value = list2Current.value
  list2Current.value = tempCurrent
}

const filterCoin = (item) => {
  return item
}

/**
 * 兑换金额
 */
const fromNum = ref('')
const toNum = ref()
watch([fromNum, curRate], () => {
  toNum.value = priceFormat(fromNum.value * curRate.value, 8)
})
onMounted(() => {
  init()
  getTexChangeList()
})
const info = ref()
// 触发sheet面板事件(item=from/to,面板数据不同)
const showAction = (item) => {
  if (item == 'from') {
    action.value = list1.value
    info.value = list1Current.value
  } else if (item == 'to') {
    action.value = list2.value
    info.value = list2Current.value
  }
  flag.value = item
  showBottom.value = true
}
// sheet面板内容选择（根据flag标识，修改当前货币）
const handleClose = (value) => {
  showBottom.value = false
  if (flag.value == 'from') {
    list1Coin.value = value.coin
  } else if (flag.value == 'to') {
    list2Coin.value = value.coin
  }
}
const submitForm = debounce(() => {
  if (fromNum.value <= 0) {
    // 兑换金额不能小于0
    showToast('兑换金额不能小于0')
    return
  }
  console.log(availableAmount.value)

  // 兑换金额不能超过可用金
  // if (fromNum.value > list1Current.value.amount) {
  if (fromNum.value > availableAmount.value) {
    // console.log(fromNum.value,list1Current.value.amount,availableAmount.value)
    showToast('兑换金额不能超过可用金额')
    return
  }
  let params = {
    fromSymbol: filterCoin(list1Current.value?.coin),
    toSymbol: filterCoin(list2Current.value?.coin),
    total: fromNum.value
  }
  toExchange(params).then((res) => {
    if (res.code == '200') {
      // 兑换成功，请稍后查看
      showToast('兑换成功，请稍后查看')
      setTimeout(() => {
        userStore.getUserInfo()
        // init()
      }, 1000)
    } else {
      showToast(res.msg)
    }
  })
  // console.log('兑换操作',params)
}, 500)
// 兑换按钮
const submit = () => {
  if (DIFF_ISFREEZE.includes(__config._APP_ENV)) {
    if (_isFreeze(DIFF_ISFREEZE)) {
      submitForm()
    }
  } else {
    submitForm()
  }
}
</script>
