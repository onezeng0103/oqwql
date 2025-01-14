<template>
  <uni-view class="list-bar"
    ><uni-view class="list-bar-left"
      ><uni-scroll-view
        class="fui-tabs__scrollbox"
        style="background: var(--background-primary); z-index: 1; top: auto"
        ><div class="uni-scroll-view">
          <div
            class="uni-scroll-view uni-scroll-view-scrollbar-hidden"
            style="overflow: auto hidden"
          >
            <div class="uni-scroll-view-content">
              <uni-view class="fui-scroll__view"
                ><uni-view
                  class="fui-tabs__item"
                  v-for="item in tabList"
                  :key="item.value"
                  @click="clickTab(item)"
                  ><uni-view class="fui-tabs__text-wrap" style="height: 1.8125rem"
                    ><uni-view
                      class="fui-tabs__text"
                      style="
                        font-size: 0.875rem;
                        color: var(--content-primary);
                        font-weight: 500;
                        transform: scale(1);
                      "
                      :style="{
                        color:
                          orderType == item.value
                            ? 'var(--content-primary)'
                            : 'var(--content-tertiary)'
                      }"
                      >{{ item.num > 0 ? item.label + '(' + item.num + ')' : item.label }}
                    </uni-view></uni-view
                  ></uni-view
                ></uni-view
              >
            </div>
          </div>
        </div></uni-scroll-view
      ></uni-view
    ></uni-view
  >
  <uni-swiper class="bottom-swiper" style="height: 529px"
    ><div class="uni-swiper-wrapper">
      <div class="uni-swiper-slides">
        <div
          class="uni-swiper-slide-frame"
          style="width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px)"
        >
          <uni-swiper-item
            class="scroll-bottom"
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              transform: translate(0%, 0px) translateZ(0px);
            "
          >
            <uni-scroll-view class="order-container"
              ><div class="uni-scroll-view">
                <div class="uni-scroll-view" style="overflow: hidden auto">
                  <div class="uni-scroll-view-content">
                    <uni-view class="list-content">
                      <template v-if="dataNewList.length > 0">
                        <uni-view class="item" v-for="(item, index) in dataNewList" :key="index"
                          ><uni-view class="item-row flex flex-row align-center justify-between"
                            ><uni-view class="flex flex-row align-center"
                              ><uni-view
                                class="fui-tag__wrap fui-tag__no-border"
                                style="
                                  font-size: 0.6875rem;
                                  line-height: 0.6875rem;
                                  color: var(--content-always-white);
                                  transform: scale(1);
                                  border-radius: 0.125rem;
                                  padding: 0.25rem 0.3125rem;
                                  margin: 0px 0.3125rem 0px 0px;
                                "
                                :style="{
                                  backgroundColor:
                                    item.type == 0
                                      ? 'var(--color-primary)'
                                      : 'var(--content-trade-sell)'
                                }"
                                ><uni-text
                                  class="fui-tag__text"
                                  style="
                                    font-size: 0.6875rem;
                                    line-height: 0.6875rem;
                                    color: var(--content-always-white);
                                  "
                                >
                                  <span v-if="item.type == 0">买入</span>
                                  <span v-if="item.type == 1">卖出</span>
                                </uni-text></uni-view
                              ><uni-text class="font-14 color-black font-weight ml-5"
                                ><span
                                  >{{
                                    item.showCoin
                                      ? item.showCoin
                                      : item.symbol?.toUpperCase() + '/' + item.coin?.toUpperCase()
                                  }}
                                </span></uni-text
                              ></uni-view
                            ><uni-text
                              v-if="showChe && item.status == 0"
                              @click="cancelOrder(item)"
                              class="font-12 color-primary font-weight"
                              ><span>撤單</span></uni-text
                            ></uni-view
                          ><uni-view class="item-row flex flex-row align-center"
                            ><uni-text v-if="item.delegateTime" class="font-12 color-black mr-5"
                              ><span>
                                {{ _timeFormat(item.params?.delegateTime, 'HH:mm MM/DD', true) }}
                              </span></uni-text
                            ></uni-view
                          ><uni-view class="item-row flex flex-row align-center justify-between"
                            ><uni-text class="font-12 color-gray"><span>委托价 </span></uni-text
                            ><uni-text class="font-12 color-black font-weight"
                              ><span>{{ item.delegatePrice || 0 }}</span></uni-text
                            ></uni-view
                          ><uni-view class="item-row flex flex-row align-center justify-between"
                            ><uni-text class="font-12 color-gray"><span>委托量 </span></uni-text
                            ><uni-text class="font-12 color-black font-weight"
                              ><span>{{ item.delegateTotal || 0 }}</span></uni-text
                            ></uni-view
                          ><uni-view class="item-row flex flex-row align-center justify-between"
                            ><uni-text class="font-12 color-gray"><span>数量 </span></uni-text
                            ><uni-text class="font-12 color-black font-weight"
                              ><span>{{ item.dealNum || 0 }}</span></uni-text
                            ></uni-view
                          ><uni-view class="item-row flex flex-row align-center justify-between"
                            ><uni-text class="font-12 color-gray"><span>成交价</span></uni-text
                            ><uni-text class="font-12 color-black font-weight"
                              ><span>{{ item.dealPrice || 0 }} </span></uni-text
                            ></uni-view
                          >
                        </uni-view>
                      </template>
                      <template v-else>
                        <uni-view class="not-data" style="width: 21.5625rem; height: 21.875rem"
                          ><uni-view class="fui-empty__wrap" style="margin-top: 0px">
                            <img
                              src="../../../assets/img/not_data-dark.png"
                              alt=""
                              style="width: 5rem; height: 64px"
                            />
                            <uni-text
                              data-v-41cde54f=""
                              class="fui-empty__title"
                              style="color: rgb(137, 137, 137); font-size: 0.8125rem"
                              ><span>暫無資料</span></uni-text
                            ></uni-view
                          ></uni-view
                        >
                      </template>
                    </uni-view>
                  </div>
                </div>
              </div></uni-scroll-view
            ></uni-swiper-item
          >
        </div>
      </div>
    </div></uni-swiper
  >
</template>
<script setup>
import { getOrderListCurrencyApi } from '@/api/trade/index'
import { formatCurrentcurrency } from '@/utils/filters'
import { _timeFormat } from '@/utils/public'
import { cancelOrderCurrencyApi } from '@/api/trade/index'
import { showToast } from 'vant'

const props = defineProps({
  coinInfo: {
    type: Object,
    default: () => {}
  }
})
const tabList = ref([
  { label: '当前委托', value: 0, num: 0 },
  { label: '历史委托', value: 1, num: 0 }
])
/**
 * 订单数据
 */
// 数据列表
const pageNum = ref(1)
const dataList = ref([])
const dataNewList = ref([])
const getOrderList = async (status) => {
  let params = `isAsc=desc&orderByColumn=updateTime&status=${status}&pageSize=1000&pageNum=1`
  const res = await getOrderListCurrencyApi(params)
  res.rows && dataList.value.push(...res.rows)
  filterEyes(props.coinInfo.coin)
  if (res.code == '200') {
    if (status == 0) {
      tabList.value[0].num = res.total
    } else if (status == 1) {
      tabList.value[1].num = res.total
    }
  }
}
const getNum = async (status) => {
  let params = `isAsc=desc&orderByColumn=updateTime&status=${status}&pageSize=1000&pageNum=1`
  const res = await getOrderListCurrencyApi(params)
  if (res.code == '200') {
    if (status == 0) {
      tabList.value[0].num = res.total
    } else if (status == 1) {
      tabList.value[1].num = res.total
    }
  }
}
// 切换列表
const orderType = ref(0)
const clickTab = (item) => {
  dataList.value = []
  dataNewList.value = []
  orderType.value = item.value
  getOrderList(orderType.value)
}
const init = () => {
  getOrderList(0)
  getNum(1)
}
onMounted(() => {
  init()
})
/**
 * 取消订单
 */
const hide = ref(false)
const showChe = ref(true)
// 撤单
const cancelOrder = async (item) => {
  const res = await cancelOrderCurrencyApi(item.id)
  if (res.code == 200) {
    showToast(res.msg)
    showChe.value = false
    hide.value = true
    refresh()
  } else {
    showToast(res.msg)
  }
}
//刷新订单
const refresh = () => {
  dataList.value = []
  dataNewList.value = []
  pageNum.value = 1
  if (orderType.value == 0) {
    getOrderList(0)
    getNum(1)
  }
  if (orderType.value == 1) {
    getOrderList(1)
    getNum(0)
  }
}
// 过滤当前币种订单
const filterEyes = (coin) => {
  dataNewList.value = formatCurrentcurrency(dataList.value, coin)
}
defineExpose({
  refresh
})
</script>
<style lang="scss" scoped>
.not-data {
  display: flex;
  align-items: center;
  justify-content: center;
  .fui-empty__wrap {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .fui-empty__title {
      text-align: center;
      font-weight: 500;
      padding-top: 1.5rem;
    }
  }
}
</style>
