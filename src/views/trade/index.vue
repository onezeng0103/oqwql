<template>
  <uni-view class="trade">
    <uni-view style="height: 44px">
      <uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 0px;
          padding-right: 0px;
          z-index: 9;
        "
      >
        <uni-view class="fui-nav__header">
          <uni-view class="nav-bar flex align_center jus-bet">
            <uni-view class="flex flex-column align-start justify-center" @click="showLeft = true">
              <uni-view class="flex flex-row align-center justify-start">
                <uni-text class="font-16 color-black font-bold mr-4">
                  <span>{{ coinInfo.showSymbol }}</span>
                </uni-text>
                <img src="../../assets/img/down-dark.png" alt="" style="height: 18px" />
              </uni-view>
              <uni-text class="font-11 color-black price_up">
                <span>{{ coinPriceInfo?.priceChangePercent }}% </span>
              </uni-text>
            </uni-view>
            <uni-view class="flex flex-row align-center justify-end">
              <uni-view
                class="btn-img"
                @click="
                  router.push(
                    `/trade/detail?symbol=${coinInfo.showSymbol.replace('/USDT', '').toLowerCase()}&type=1`
                  )
                "
              >
                <img
                  src="../../assets/img/zd-dark.png"
                  alt=""
                  class="zdIcon"
                  style="height: 18px"
                />
              </uni-view>
              <uni-text
                @click="router.push('/trade/rules')"
                class="fui-icon ml-10"
                style="color: var(--content-tertiary); font-size: 1.25rem; font-weight: normal"
                ><span></span></uni-text
              >
            </uni-view>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
    <uni-scroll-view
      class="scroll-view"
      style="height: 573px; background: var(--background-primary)"
    >
      <div class="uni-scroll-view">
        <div class="uni-scroll-view" style="overflow: hidden auto">
          <div class="uni-scroll-view-content">
            <uni-view class="scroll-top">
              <uni-view class="scroll-top-left">
                <uni-view class="left-top" style="height: 19.0625rem">
                  <uni-view class="cell-row flex flex-row">
                    <uni-view
                      @click="form.type = 0"
                      type="buy"
                      class="cell-button flex justify-center align-center cell-active"
                    >
                      <img
                        v-if="form.type == 0"
                        class="button-image"
                        src="../../assets/img/buy-s.png"
                        alt=""
                      />
                      <img
                        v-else
                        class="button-image"
                        src="../../assets/img/buy-n-dark.png"
                        alt=""
                      />

                      <uni-text class="font-13 button-text always-white">
                        <span>买入</span>
                      </uni-text>
                    </uni-view>
                    <uni-view
                      @click="form.type = 1"
                      type="sell"
                      class="cell-button flex justify-center align-center cell-active"
                    >
                      <img
                        v-if="form.type == 0"
                        class="button-image"
                        src="../../assets/img/sell-n-dark.png"
                        alt=""
                      />
                      <img v-else class="button-image" src="../../assets/img/sell-s.png" alt="" />
                      <uni-text class="font-13 button-text color-gray"
                        ><span>卖出</span></uni-text
                      ></uni-view
                    ></uni-view
                  ><uni-view class="fui-dropdown__menu">
                    <uni-view
                      @click="showPopover = true"
                      class="cell-row select-box bg-gray flex flex-row justify-between align-center"
                    >
                      <uni-text class="font-13 color-black"
                        ><span>{{ currentDelegateType.label }}</span></uni-text
                      >
                      <img src="../../assets/img/down-dark.png" alt="" style="height: 14px" />
                    </uni-view>
                    <uni-view
                      :class="
                        showPopover
                          ? 'fui-dropdown__menu-list fui-ddm__down fui-ddm__down-show'
                          : 'fui-dropdown__menu-list fui-ddm__down'
                      "
                      style="
                        border-radius: 0.25rem;
                        background: var(--background-secondary);
                        left: 0px;
                      "
                      ><uni-scroll-view
                        class="fui-ddm__scroll"
                        style="height: auto; max-height: 4.71875rem; min-width: 13.125rem"
                        ><div class="uni-scroll-view">
                          <div
                            class="uni-scroll-view uni-scroll-view-scrollbar-hidden"
                            style="overflow: hidden auto"
                          >
                            <div class="uni-scroll-view-content">
                              <uni-view
                                ><uni-view
                                  v-for="item in delegateTypeList"
                                  :key="item.value"
                                  class="fui-dropdown__menu-item"
                                  style="
                                    background: var(--background-secondary);
                                    padding: 0.375rem;
                                    border-bottom-color: transparent;
                                  "
                                  @click="checkedDelegateType(item)"
                                  ><uni-view class="fui-ddm__flex"
                                    ><uni-text
                                      class="fui-ddm__item-text"
                                      style="font-size: 0.75rem"
                                      :style="{
                                        color:
                                          item.value === currentDelegateType.value
                                            ? 'var(--color-primary)'
                                            : 'var(--content-secondary)'
                                      }"
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
                  <uni-view
                    v-if="currentDelegateType.value == 1"
                    style="
                      width: 13.5625rem;
                      height: 1.88rem;
                      background: var(--background-secondary);
                      border-radius: 0.25rem;
                      margin-top: 0.5rem;
                      margin-bottom: 0.5rem;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                    >市价</uni-view
                  >
                  <uni-view
                    v-if="form.delegateType == 0"
                    class="cell-row cell-row-box bg-gray flex flex-row justify-between align-center"
                    ><uni-input class="color-black"
                      ><div class="uni-input-wrapper">
                        <input
                          v-model="form.price"
                          type="text"
                          :placeholder="`价格 (${coinInfo.baseCoinUpperCase})`"
                          maxlength="140"
                          step=""
                          enterkeyhint="done"
                          class="uni-input-input"
                          autocomplete="off"
                        /></div></uni-input
                    ><uni-text class="font-13 color-black"><span>USDT</span></uni-text></uni-view
                  >
                  <uni-view
                    v-if="form.delegateType == 0 || (form.type == 1 && form.delegateType == 1)"
                    class="cell-row cell-row-box bg-gray flex flex-row justify-between align-center"
                    ><uni-input class="color-black"
                      ><div class="uni-input-wrapper">
                        <input
                          v-model="form.count"
                          type="text"
                          :placeholder="`数量 (${
                            coinInfo.customizeFlag === 2
                              ? matchText(coinInfo.showSymbol, '/USDT')
                              : coinInfo.coin.toUpperCase()
                          })`"
                          maxlength="140"
                          step=""
                          enterkeyhint="done"
                          class="uni-input-input"
                          autocomplete="off"
                        /></div></uni-input
                    ><uni-text class="font-13 color-black"
                      ><span>{{
                        coinInfo.customizeFlag === 2
                          ? matchText(coinInfo.showSymbol, '/USDT')
                          : coinInfo.coin.toUpperCase()
                      }}</span></uni-text
                    ></uni-view
                  >

                  <uni-view
                    class="slider-box"
                    style="padding: 0 10px; height: 30px; margin-top: 20px; position: relative"
                  >
                    <van-slider
                      active-color="#ffffff"
                      inactive-color="#282828"
                      button-size="16"
                      v-model="form.slider"
                      @change="sliderChange"
                    />
                    <uni-view class="slider-number" :style="{ top: '0.9625rem', left: '4px' }"
                      ><uni-text
                        class="font-10 app-font"
                        :class="form.slider >= 0 ? 'color-black' : 'color-gray'"
                        ><span>0% </span></uni-text
                      ><uni-text
                        class="font-10 app-font"
                        :class="form.slider >= 25 ? 'color-black' : 'color-gray'"
                        ><span>25% </span></uni-text
                      ><uni-text
                        class="font-10 app-font"
                        :class="form.slider >= 50 ? 'color-black' : 'color-gray'"
                        ><span>50% </span></uni-text
                      ><uni-text
                        class="font-10 app-font"
                        :class="form.slider >= 75 ? 'color-black' : 'color-gray'"
                        ><span>75% </span></uni-text
                      ><uni-text
                        class="font-10 app-font"
                        :class="form.slider >= 100 ? 'color-black' : 'color-gray'"
                        ><span>100% </span></uni-text
                      ></uni-view
                    >
                  </uni-view>
                  <uni-view
                    class="cell-row cell-row-box bg-gray flex flex-row justify-between align-center"
                    ><uni-input class="color-black">
                      <div class="uni-input-wrapper">
                        <input
                          v-model="form.turnover"
                          type="text"
                          @input="turnoverChange"
                          :placeholder="`成交金额(${coinInfo.baseCoinUpperCase})`"
                          maxlength="140"
                          step=""
                          enterkeyhint="done"
                          class="uni-input-input"
                          autocomplete="off"
                        />
                      </div>
                    </uni-input>
                  </uni-view>
                  <uni-view class="cell-row flex flex-row justify-between align-center"
                    ><uni-text class="font-11 color-gray"><span>可用</span></uni-text
                    ><uni-view class="flex flex-row align-center"
                      ><uni-text class="font-11 font-weight color-black mr-5">
                        <span v-if="form.type == 0">{{ availableBalance }}</span>
                        <span v-else>{{ availableBalance }}</span> </uni-text
                      ><uni-text class="font-11 font-weight color-black">
                        <span v-if="form.type == 0"> USDT </span>
                        <span v-else>
                          {{
                            coinInfo.customizeFlag === 2
                              ? matchText(coinInfo.showSymbol, '/USDT')
                              : coinInfo.coin?.toUpperCase()
                          }}
                        </span>
                      </uni-text>
                      <uni-image
                        @click="router.push('/exchange')"
                        class="tran-image"
                        style="height: 12px"
                        ><div
                          style="
                            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAEsklEQVRYw9VZTXLiRhT+XrfILlXsM6aUE1icwHg5BY7Hy1QCNieAOYHhBMYnwNjjmiV2GcpLmBOYOUFUQNZRMt6h7pcFYKRG4k/2pNJVbEDd/el7f997AP+DRUk227ddRyvOMWifiR1ipIGXjwuCC5BHzF+EpL77W37wXUDa7XZaP/9QYeYzAPaW210iaghL3Lu/vndfHWQAXHXGVLIl0JBSXm4CdiOQ9s1DTjE1d2BuLbMA1Uel/FUikO9uuufEXIvZ7GnmFpEYSCX6bjnMit3sOspSNrT4QIQDjnlJIqoNi/n6TiD3PnWb0HwWsavP4Pq4eNTfhra96+4Zgc8jwQq6Gv2eL28FMgogAZ4C6n+WCo0kNo4FGwOUNjUxEQbClyemSXdOX81HW0vVM4FGmZ6i3hLg5jLAyaFbPvFeM2rsZjutrVSPGU7we0l86AZcKQTS/vxoq4nqBaOYAFeoSfa1Aa4B6sofJ1n3ZHqnCG7QE1VZBigTMZi57lT3PnUu7M+PkZHtlk884csTYgTvsPU/VnWRUgMsMlANHsCgehIfzFx3qgxcQKPq+6odmyzL710QQn7IRBW73U6HQOqJ+mA4q7suya5bTHTwch7DybQeanHPDkuFBgjBlJaesykWrKFispjU3xj60gB9/tNt14l/nk02T18Cx77tOkrxU5DFYanw86o6jmfL2QSoAp2DkVtcjMG4WMjGukir8xfTQhtIRVkLALTinMHiykqivqWedq3jc7MPT49iTM8tgF6sqiXnhOk705PUfXwtf8glFhqCjuP9WBiak/ZnPskh6SV9GRvRlu8PjHSx9dLgL3G/SSX6BvUOTatM548gO6NSgTYoaR/AvLWuZMGDUfGXu9W1vcPBDGXN791KBE5zZwPfZ6WtmTN7wYjaRKVvGt2RL7mdxJuCZIK3TUuQJLpnlejjcHO554oAyJDPvWl0E05XdaDGs1OQQuNriCmpc/9VdCutbOPhv60Z2gGweDsm7cQHzYmXue7UAVyEMwXXmcR6MULKG6+KbpLHYA5q2b4FAEJSX6nAD0ynMBSRKQb2bjrHoXIn6GBUzNcSx7IOVz+hqC8AYDZZCLKQtqe+F7ukL8shszNydrPrJME37QrCetYt5wcLFcTcWhIG63KloQEBkVC9s3nnZUiqWdpvmMxkrjvVVUcOS4UGAR8BugOonEQgmyxOTS3vlnqcd62HGlGIQU+mZHabuc1OfU5Eb8XEl+PiUXWpx7G03yDDN31ftecy/k0AttvpqObP8q3GUo8zTy+auGzqP/851XsLoHa7nfafUz3TzGZvJcyN4+JRnzks44nhqG+pp7iOb1cT+8+pHhk9NzEvDbBE1AHj06MaCC3zXDVRvZmDJ1qZm25FTdSTCRCEVpRiXz2wuulcgSPr7EYju8gRotHzBAGOioWz3UZ/yxEfBiuoD1b3UkjXHDfbzUdbSZ2D4H1onMUpLWKux/c8Gw5RV47sEokhuJq4vG6EKDY5bFTKXwklD5n58pXAecxcF2qS3WTGuf1gf97fAJUdmHWZuWVpv7HNfCnZXyTNrqMl5xh0AOI0GDYAmwCPAY8IHjMNCPxVKOq75d3+IvkXmchyHJ3OS8MAAAAASUVORK5CYII=');
                            background-size: 100% 100%;
                          "
                        ></div>
                        <uni-resize-sensor
                          ><div><div></div></div>
                          <div><div></div></div></uni-resize-sensor
                        ><img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAEsklEQVRYw9VZTXLiRhT+XrfILlXsM6aUE1icwHg5BY7Hy1QCNieAOYHhBMYnwNjjmiV2GcpLmBOYOUFUQNZRMt6h7pcFYKRG4k/2pNJVbEDd/el7f997AP+DRUk227ddRyvOMWifiR1ipIGXjwuCC5BHzF+EpL77W37wXUDa7XZaP/9QYeYzAPaW210iaghL3Lu/vndfHWQAXHXGVLIl0JBSXm4CdiOQ9s1DTjE1d2BuLbMA1Uel/FUikO9uuufEXIvZ7GnmFpEYSCX6bjnMit3sOspSNrT4QIQDjnlJIqoNi/n6TiD3PnWb0HwWsavP4Pq4eNTfhra96+4Zgc8jwQq6Gv2eL28FMgogAZ4C6n+WCo0kNo4FGwOUNjUxEQbClyemSXdOX81HW0vVM4FGmZ6i3hLg5jLAyaFbPvFeM2rsZjutrVSPGU7we0l86AZcKQTS/vxoq4nqBaOYAFeoSfa1Aa4B6sofJ1n3ZHqnCG7QE1VZBigTMZi57lT3PnUu7M+PkZHtlk884csTYgTvsPU/VnWRUgMsMlANHsCgehIfzFx3qgxcQKPq+6odmyzL710QQn7IRBW73U6HQOqJ+mA4q7suya5bTHTwch7DybQeanHPDkuFBgjBlJaesykWrKFispjU3xj60gB9/tNt14l/nk02T18Cx77tOkrxU5DFYanw86o6jmfL2QSoAp2DkVtcjMG4WMjGukir8xfTQhtIRVkLALTinMHiykqivqWedq3jc7MPT49iTM8tgF6sqiXnhOk705PUfXwtf8glFhqCjuP9WBiak/ZnPskh6SV9GRvRlu8PjHSx9dLgL3G/SSX6BvUOTatM548gO6NSgTYoaR/AvLWuZMGDUfGXu9W1vcPBDGXN791KBE5zZwPfZ6WtmTN7wYjaRKVvGt2RL7mdxJuCZIK3TUuQJLpnlejjcHO554oAyJDPvWl0E05XdaDGs1OQQuNriCmpc/9VdCutbOPhv60Z2gGweDsm7cQHzYmXue7UAVyEMwXXmcR6MULKG6+KbpLHYA5q2b4FAEJSX6nAD0ynMBSRKQb2bjrHoXIn6GBUzNcSx7IOVz+hqC8AYDZZCLKQtqe+F7ukL8shszNydrPrJME37QrCetYt5wcLFcTcWhIG63KloQEBkVC9s3nnZUiqWdpvmMxkrjvVVUcOS4UGAR8BugOonEQgmyxOTS3vlnqcd62HGlGIQU+mZHabuc1OfU5Eb8XEl+PiUXWpx7G03yDDN31ftecy/k0AttvpqObP8q3GUo8zTy+auGzqP/851XsLoHa7nfafUz3TzGZvJcyN4+JRnzks44nhqG+pp7iOb1cT+8+pHhk9NzEvDbBE1AHj06MaCC3zXDVRvZmDJ1qZm25FTdSTCRCEVpRiXz2wuulcgSPr7EYju8gRotHzBAGOioWz3UZ/yxEfBiuoD1b3UkjXHDfbzUdbSZ2D4H1onMUpLWKux/c8Gw5RV47sEokhuJq4vG6EKDY5bFTKXwklD5n58pXAecxcF2qS3WTGuf1gf97fAJUdmHWZuWVpv7HNfCnZXyTNrqMl5xh0AOI0GDYAmwCPAY8IHjMNCPxVKOq75d3+IvkXmchyHJ3OS8MAAAAASUVORK5CYII="
                          draggable="false" /></uni-image></uni-view></uni-view></uni-view
                ><uni-view class="cell-row button-box"
                  ><uni-view>
                    <template v-if="coinInfo.customizeFlag == 2">
                      <uni-button @click="submit" v-if="form.type == 0" class="button bg-green">
                        买入 {{ coinInfo.showSymbol.replace('/USDT', '') }}
                      </uni-button>
                      <uni-button @click="submit" v-else class="button bg-red">
                        卖出 {{ coinInfo.showSymbol.replace('/USDT', '') }}
                      </uni-button>
                    </template>
                    <template v-else>
                      <uni-button @click="submit" v-if="form.type == 0" class="button bg-green">
                        买入 {{ coinInfo.coinUpperCase }}
                      </uni-button>
                      <uni-button @click="submit" v-else class="button bg-red">
                        卖出 {{ coinInfo.coinUpperCase }}
                      </uni-button>
                    </template>
                  </uni-view></uni-view
                ></uni-view
              >
              <Handicap :coinInfo="coinInfo" @set-trade-price="setTradePrice" />
            </uni-view>
            <OrderBox
              ref="orderListBoxRef"
              :coinInfo="coinInfo"
              :availableBalance="availableBalance"
            />
          </div>
        </div></div
    ></uni-scroll-view>
  </uni-view>
  <LeftPopup :showLeft="showLeft" @close="showLeft = false" />
</template>
<script setup>
import _ from 'lodash'
import { useRoute, useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useUserStore } from '@/store/user'
import { useTradeStore } from '@/store/trade'
import { _div, _mul, _toFixed, priceFormat } from '@/utils/decimal'
import { submitOrderCurrencyApi } from '@/api/trade'
import Handicap from './component/handicap.vue'
import OrderBox from './component/orderBox.vue'
import LeftPopup from './component/leftPopup.vue'
const route = useRoute()
const router = useRouter()
const tradeStore = useTradeStore()
const coinInfo = ref({})
const showLeft = ref(false)
// 初始化展示币种信息
const init = () => {
  if (route.query.symbol) {
    coinInfo.value = tradeStore.spotCoinList.filter((item, index) => {
      return item.coin === route.query.symbol
    })[0]
    if (!coinInfo.value) {
      coinInfo.value = tradeStore.spotCoinList[0]
    }
  } else {
    coinInfo.value = tradeStore.spotCoinList[0]
  }
}
const form = reactive({
  type: '0',
  delegateType: 1
})
const userStore = useUserStore()
const { asset } = storeToRefs(userStore)
const availableBalance = computed(() => {
  let tempValue = 0
  if (asset.value.length) {
    if (form.type == '0') {
      tempValue = asset.value.filter((item) => item.symbol === 'usdt')[0]?.availableAmount || 0
    } else {
      tempValue =
        asset.value.filter((item) => item.symbol === coinInfo.value.coin)[0]?.availableAmount || 0
    }
  }
  return tempValue
})
// 币种开盘价等

const coinPriceInfo = computed(() => {
  return tradeStore.allCoinPriceInfo[coinInfo.value.coin] || {}
})
/**
 * 设置交易价格
 */
const setTradePrice = (val) => {
  if (form.delegateType == 0) {
    // 限价触发
    form.price = priceFormat(val)
    priceChange(form.price)
  }
}
// 重置表单
const restForm = () => {
  let tempForm = {
    ...form,
    price: '', // 价格
    count: '', // 数量
    turnover: '', // 成交金额
    slider: 0 // 滑块
  }
  Object.assign(form, tempForm) //复制tempForm到form
}
const delegateTypeList = [
  { label: '市价委托', value: '1' },
  { label: '限价委托', value: '0' }
]
// 当前选中交易价格类型：限价/市价
const currentDelegateType = ref({})
// 限价/市价选择控件
const showPopover = ref(false)
// 切换限价/市价
const checkedDelegateType = (item) => {
  console.log(item.value !== form.delegateType)
  if (item.value !== form.delegateType) {
    form.delegateType = item.value
    currentDelegateType.value = item
    console.log(form.delegateType)
  }
  restForm()
  showPopover.value = false
}
checkedDelegateType(delegateTypeList[0])
/**
 * 滑块监听
 */
const sliderChange = (val) => {
  val = val / 100
  let tempPrice = 0
  if (form.delegateType == 0) {
    // 限价
    tempPrice = form.price
  } else if (form.delegateType == 1) {
    // 市价
    tempPrice = coinPriceInfo.value.close
  }
  if (Number(tempPrice)) {
    if (form.delegateType == 1 && form.type == 1) {
      // 市价&&卖出
      form.count = _mul(availableBalance.value, val)
    } else if (form.delegateType == 0 && form.type == 1) {
      // 限价&&卖出
      form.count = _mul(availableBalance.value, val)
      form.turnover = _toFixed(_mul(form.count, tempPrice))
    } else {
      // (市价&&买入)||(限价&&买入)
      form.count = _mul(_div(availableBalance.value, tempPrice), val)
      form.turnover = _toFixed(_mul(form.count, tempPrice))
    }
  }
}
/**
 * 成交金额监听
 */
const turnoverChange = () => {
  let val = form.turnover
  if (Number(val) > Number(availableBalance.value)) {
    // 输入金额大于可用余额
    form.turnover = availableBalance.value
    val = availableBalance.value
  }
  let tempPrice = 0
  if (form.delegateType == 0) {
    // 限价
    tempPrice = form.price
  } else if (form.delegateType == 1) {
    // 市价
    tempPrice = coinPriceInfo.value.close
  }
  // 根据成交额 价格 计算数量
  if (Number(tempPrice)) {
    form.count = _div(val, tempPrice)
    form.slider = parseInt(_mul(_div(val, availableBalance.value), 100))
  }
}
const orderListBoxRef = ref(null)

// 监听路由展示对应币种信息
watch(
  () => route.query.symbol,
  (val) => {
    coinInfo.value = tradeStore.spotCoinList.filter((item) => {
      return item.coin === val
    })[0]
  },
  {
    deep: true
  }
)
/**
 * 提交表单
 */
const submit = async () => {
  let msg = false
  if (form.delegateType == 1 && form.type == 1) {
    // 市价&&卖出
    if (!form.count) {
      msg = '请输入数量'
    } else if (form.count > availableBalance.value) {
      msg = '可用金额不足'
    }
  } else if (form.delegateType == 0 && form.type == 1) {
    // 限价&&卖出
    if (!form.price) {
      msg = '请输入金额'
    } else if (!form.count) {
      msg = '请输入数量'
    } else if (form.count > availableBalance.value) {
      msg = '可用金额不足'
    }
  } else {
    // (市价&&买入)||(限价&&买入)
    if (!form.turnover) {
      msg = '请输入金额'
    } else if (form.turnover <= 0) {
      msg = '金额不正确'
    } else if (form.turnover > availableBalance.value) {
      msg = '可用金额不足'
    }
  }
  if (msg) {
    showToast(msg)
    return
  }
  let params = {
    symbol: coinInfo.value.coin, //交易币种(e.g btc)
    coin: coinInfo.value.baseCoin, //结算币种(usdt)
    delegateTotal: form.count, //委托总量
    delegatePrice: form.price, //委托价格
    delegateValue: form.turnover, //委托价值
    delegateType: form.delegateType, //委托类型（0限价1市价）
    type: form.type //（0买入1卖出）
  }
  const res = await submitOrderCurrencyApi(params)
  // 购买成功
  if (res.code == 200) {
    userStore.getUserInfo()
    showToast(res.msg)
    restForm()
    // 刷新
    orderListBoxRef.value.refresh()
  } else {
    showToast(res.msg)
  }
}
onMounted(() => {
  init()
})
</script>
