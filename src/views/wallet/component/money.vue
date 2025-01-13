<template>
  <uni-scroll-view class="scroll-view" style="height: 573px"
    ><div class="uni-scroll-view">
      <div class="uni-scroll-view" style="overflow: hidden auto">
        <div
          class="uni-scroll-view-refresher"
          style="background-color: var(--color-gray-bg); height: 0px; transition: height 0.3s"
        >
          <div class="uni-scroll-view-refresher-container" style="height: 25px"></div>
        </div>
        <div class="uni-scroll-view-content">
          <uni-view class="scroll-head"
            ><uni-view class="asset-val"
              ><uni-view class="asset-val-row"
                ><uni-view class="asset-val-row-item"
                  ><uni-text class="font-12 color-999 font-weight"><span>资产估值</span></uni-text>
                  <uni-text
                    v-if="isEye"
                    @click="isEye = !isEye"
                    class="fui-icon ml-10"
                    style="color: rgb(144, 147, 153); font-size: 1.1875rem; font-weight: normal"
                  >
                    <span></span>
                  </uni-text>
                  <uni-text
                    v-else
                    @click="isEye = !isEye"
                    class="fui-icon ml-10"
                    style="color: rgb(144, 147, 153); font-size: 1.1875rem; font-weight: normal"
                  >
                    <span></span>
                  </uni-text></uni-view
                ></uni-view
              ><uni-view class="asset-val-row"
                ><uni-view class="asset-val-row-item"
                  ><uni-text class="font-18 font-weight color-black">
                    <span v-if="isEye"> {{ _numberWithCommas(financSum) }}</span>
                    <span v-else> ****** </span></uni-text
                  ><uni-view class="down-btn"
                    ><uni-text class="font-12 font-weight color-black"
                      ><span>USD</span></uni-text
                    ></uni-view
                  ></uni-view
                ></uni-view
              ><uni-view class="asset-val-row"
                ><uni-view class="asset-val-row-item"
                  ><uni-text class="font-12 color-999"><span>$11,314.74</span></uni-text></uni-view
                ></uni-view
              ></uni-view
            ><uni-view class="menu-box"
              ><uni-view class="menu-box-item" @click="router.push('/exchange')">
                <img src="../../../assets/img/transfer-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>划转</span></uni-text
                ></uni-view
              ><uni-view class="menu-box-item" @click="router.push('/livecoin')">
                <img src="../../../assets/img/wm-acc-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>理财</span></uni-text
                ></uni-view
              ><uni-view class="menu-box-item" @click="router.push('/livecoin/eaorders')">
                <img src="../../../assets/img/futures-acc-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>理财记录</span></uni-text
                ></uni-view
              ><uni-view class="menu-box-item" @click="router.push('/cashflow')">
                <img src="../../../assets/img/flow-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>资金流水</span></uni-text
                ></uni-view
              ></uni-view
            ></uni-view
          ><uni-view class="coin-list"
            ><uni-view class="title"
              ><uni-view class="t_left"
                ><uni-text class="font-14 color-black font-weight"
                  ><span>资产</span></uni-text
                ></uni-view
              ></uni-view
            ><uni-view class="coin-list-main">
              <uni-view class="cell" v-for="(item, index) in assetDetails" :key="index"
                ><uni-view class="cell-left">
                  <img
                    style="
                      width: 1.5rem;
                      height: 1.5rem;
                      border-radius: 50%;
                      margin-right: 0.625rem;
                    "
                    :src="`/src/assets/img/${item?.icon}.png`"
                    alt=""
                  />
                  <uni-text class="font-14 font-weight color-black"
                    ><span>{{ item?.title }}</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"
                    ><span v-if="isEye">{{ _numberWithCommas(item?.keyong) }}</span>
                    <span v-else>******</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              >
            </uni-view>
          </uni-view>
        </div>
      </div>
    </div>
  </uni-scroll-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { _numberWithCommas } from '@/utils/public'
import { priceFormat } from '@/utils/decimal.js'
import { useUserStore } from '@/store/user/index'
const router = useRouter()
const props = defineProps({
  financSum: {
    type: String,
    default: ''
  }
})
const isEye = ref(true)
const userStore = useUserStore()
const { asset } = storeToRefs(userStore)
const assetDetails = computed(() => {
  let list = []
  asset.value.forEach((item) => {
    if (item.type == 2) {
      let obj = {}
      obj['keyong'] = priceFormat(item.availableAmount)
      obj['zhanyong'] = priceFormat(item.occupiedAmount)
      obj['zhehe'] = priceFormat(item.exchageAmount)
      if (item.symbol == 'usdt') {
        obj['icon'] = 'usdt'
        obj['loge'] = item.loge
        obj['title'] = 'USDT'
        list.unshift(obj)
      } else {
        obj['loge'] = item.loge
        obj['title'] = item.symbol?.replace('usdt', '').trim().toLocaleUpperCase()
        obj['icon'] = item.symbol?.replace('usdt', '').trim()
        list.push(obj)
      }
    }
  })
  return list
})
</script>
