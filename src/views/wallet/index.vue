<template>
  <uni-view class="wallet">
    <uni-view style="height: 44px">
      <uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--color-gray-bg);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 0px;
          padding-right: 0px;
          z-index: 2;
        "
      >
        <uni-view class="fui-nav__status-bar" style="height: 0px"> </uni-view>
        <uni-view class="fui-nav__header">
          <uni-view class="nav-bar">
            <uni-scroll-view
              class="fui-tabs__scrollbox fui-tabs__sticky"
              style="background: var(--color-gray-bg); z-index: 996; top: 0px"
            >
              <div class="uni-scroll-view">
                <div
                  class="uni-scroll-view uni-scroll-view-scrollbar-hidden"
                  style="overflow: auto hidden"
                >
                  <div class="uni-scroll-view-content" style="">
                    <uni-view class="fui-scroll__view">
                      <uni-view
                        class="fui-tabs__item"
                        @click="changeTabs({ key: 'General', keyStr: '总览', component: General })"
                      >
                        <uni-view class="fui-tabs__text-wrap" style="height: 2.6875rem">
                          <uni-view
                            class="fui-tabs__text"
                            style="font-size: 0.9375rem; font-weight: normal; transform: scale(1)"
                            :style="{
                              color:
                                'General' === currentIndex
                                  ? 'var(--color-text-black)'
                                  : 'var(--color-text-gray)'
                            }"
                            >总览
                          </uni-view>
                        </uni-view>
                      </uni-view>
                      <uni-view
                        class="fui-tabs__item"
                        v-for="(item, index) in tabList"
                        @click="changeTabs(item)"
                        :key="item.key"
                      >
                        <uni-view class="fui-tabs__text-wrap" style="height: 2.6875rem">
                          <uni-view
                            class="fui-tabs__text"
                            style="font-size: 0.9375rem; font-weight: normal; transform: scale(1)"
                            :style="{
                              color:
                                item.key === currentIndex
                                  ? 'var(--color-text-black)'
                                  : 'var(--color-text-gray)'
                            }"
                            >{{ item.keyStr }}
                          </uni-view>
                        </uni-view>
                      </uni-view>
                    </uni-view>
                  </div>
                </div>
              </div>
            </uni-scroll-view>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
  </uni-view>
  <component
    :is="cmp"
    :allSum="allSum"
    :platformSum="platformSum"
    :financSum="financSum"
    :contractSum="contractSum"
    :tabList="tabList"
    @changeTabs="changeTabs"
  />
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user/index'
import { useMainStore } from '@/store'
import { _numberWithCommas } from '@/utils/public'
import { _add } from '@/utils/decimal'
import { priceFormat } from '@/utils/decimal.js'
import General from './component/general.vue'
import Overview from './component/overview.vue'
import Money from './component/money.vue'
import Contract from './component/contract.vue'
const userStore = useUserStore()
const currentIndex = ref('General')
const cmp = ref(General)
const mainStore = useMainStore()
const getIsMock = computed(() => userStore.userInfo.user?.type === '2')
const tabList = computed(() => {
  let list = mainStore.getAssetsTabList.filter((item) => {
    if (!item.isOpen) return false
    item.name == '平台资产' &&
      (item.keyStr = '平台资产') &&
      (item.component = Overview) &&
      (item.key = 'Overview')
    item.name == '理财资产' &&
      (item.keyStr = '理财资产') &&
      (item.component = Money) &&
      (item.key = 'Money')
    item.name == '合约资产' &&
      (item.keyStr = '合约资产') &&
      (item.component = Contract) &&
      (item.key = 'Contract')
    return true
  })
  if (getIsMock.value) {
    list.splice(2, 1)
  }
  return list.sort((a, b) => a.sort - b.sort)
})
const changeTabs = (value) => {
  currentIndex.value = value.key
  switch (value.key) {
    case 'Overview':
      cmp.value = Overview
      break
    case 'Money':
      cmp.value = Money
      break
    case 'Contract':
      cmp.value = Contract
      break
    default:
      cmp.value = General
      break
  }
}

// 用户余额信息
const { asset } = storeToRefs(userStore)
const getDetail = (item) => {
  let obj = {}
  obj['keyong'] = priceFormat(item.availableAmount)
  obj['zhanyong'] = priceFormat(item.occupiedAmount)

  obj['zhehe'] = priceFormat(item.exchageAmount)
  if (item.symbol == 'usdt') {
    obj['icon'] = 'usdt'
    obj['loge'] = item.loge
    obj['title'] = 'USDT'
  } else {
    obj['loge'] = item.loge
    obj['title'] = item.symbol?.replace('usdt', '').trim().toLocaleUpperCase()
    obj['icon'] = item.symbol?.replace('usdt', '').trim()
  }
  return obj
}

//获取平台资产信息
const getPlatform = computed(() => {
  let list = []
  asset.value.forEach((item, index) => {
    if (item.type == 1) {
      list.push(getDetail(item))
    }
  })

  return list
})
//计算平台余额
const platformSum = computed(() => {
  let sum = 0
  for (let i = 0; i < getPlatform.value.length; i++) {
    sum += Number(getPlatform.value[i].zhehe)
  }
  return priceFormat(sum)
})
//获取理财资产信息
const getFinanc = computed(() => {
  let list = []
  asset.value.forEach((item, index) => {
    if (item.type == 2) {
      list.push(getDetail(item))
    }
  })
  return list
})
//计算理财余额
const financSum = computed(() => {
  let sum = 0
  for (let i = 0; i < getFinanc.value.length; i++) {
    sum += Number(getFinanc.value[i].zhehe)
  }
  return priceFormat(sum)
})
//获取合约资产信息
const getContarct = computed(() => {
  let list = []
  asset.value.forEach((item, index) => {
    if (item.type == 3) {
      list.push(getDetail(item))
    }
  })
  return list
})
//计算合约余额
const contractSum = computed(() => {
  let sum = 0
  for (let i = 0; i < getContarct.value.length; i++) {
    sum += Number(getContarct.value[i].zhehe)
  }
  return priceFormat(sum)
})
// 计算所有余额
const allSum = computed(() => {
  return priceFormat(
    Number(platformSum.value) + Number(financSum.value) + Number(contractSum.value)
  )
})
</script>
<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  padding: 0 0.9375rem;
  box-sizing: border-box;
  background: var(--color-gray-bg);
}
</style>
