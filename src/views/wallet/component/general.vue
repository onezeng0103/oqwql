<template>
  <uni-scroll-view class="scroll-view" style="height: 573px">
    <div class="uni-scroll-view">
      <div class="uni-scroll-view" style="overflow: hidden auto">
        <div
          class="uni-scroll-view-refresher"
          style="background-color: var(--color-gray-bg); height: 0px; transition: height 0.3s"
        >
          <div class="uni-scroll-view-refresher-container" style="height: 25px"></div>
        </div>
        <div class="uni-scroll-view-content">
          <uni-view class="scroll-head">
            <uni-view class="asset-val">
              <uni-view class="asset-val-row">
                <uni-view class="asset-val-row-item">
                  <uni-text class="font-12 color-999 font-weight">
                    <span>资产估值 </span>
                  </uni-text>
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
                  </uni-text>
                </uni-view>
              </uni-view>
              <uni-view class="asset-val-row">
                <uni-view class="asset-val-row-item">
                  <uni-text class="font-18 font-weight color-black">
                    <span v-if="isEye"> {{ _numberWithCommas(allSum) }}</span>
                    <span v-else> ****** </span>
                  </uni-text>
                </uni-view>
              </uni-view>
              <uni-view class="asset-val-row">
                <uni-view class="asset-val-row-item">
                  <uni-text class="font-12 color-999">
                    <span>$40,443.96</span>
                  </uni-text>
                </uni-view>
              </uni-view>
            </uni-view>
            <uni-view class="menu-box">
              <uni-view class="menu-box-item" @click="router.push('/recharge')">
                <img src="../../../assets/img/recharge-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight">
                  <span>充值</span>
                </uni-text>
              </uni-view>
              <uni-view class="menu-box-item" @click="router.push('/withdraw')">
                <img src="../../../assets/img/flow-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>提现</span></uni-text
                ></uni-view
              ><uni-view class="menu-box-item" @click="router.push('/exchange')">
                <img src="../../../assets/img/transfer-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>划转</span></uni-text
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
                  ><span>账户</span></uni-text
                ></uni-view
              ></uni-view
            ><uni-view class="coin-list-main account">
              <uni-view
                class="cell"
                v-for="(item, index) in tabList"
                @click="handleClick(item)"
                :key="index"
              >
                <uni-view class="cell-left">
                  <img
                    v-if="item.name === '平台资产'"
                    src="../../../assets/img/fund-acc-dark.png"
                    alt=""
                    style="height: 22px"
                  />

                  <img
                    v-if="item.name === '理财资产'"
                    src="../../../assets/img/wm-acc-dark.png"
                    alt=""
                    style="height: 22px"
                  />
                  <img
                    v-if="item.name === '合约资产'"
                    src="../../../assets/img/futures-acc-dark.png"
                    alt=""
                    style="height: 22px"
                  />
                  <uni-text class="font-14 font-weight color-black"
                    ><span>{{ item.keyStr }}</span>
                  </uni-text>
                </uni-view>
                <uni-view class="cell-right" v-if="item.name === '平台资产'">
                  <uni-text class="font-13 font-weight color-black" v-if="isEye">
                    <span>{{ _numberWithCommas(platformSum) }} USDT</span>
                  </uni-text>
                  <uni-text class="font-13 font-weight color-black" v-else>
                    <span>******</span>
                  </uni-text>
                  <uni-text class="font-12 color-999"><span>$23,640.54</span> </uni-text>
                </uni-view>
                <uni-view class="cell-right" v-if="item.name === '理财资产'">
                  <uni-text class="font-13 font-weight color-black" v-if="isEye">
                    <span>{{ _numberWithCommas(financSum) }} USDT</span>
                  </uni-text>
                  <uni-text class="font-13 font-weight color-black" v-else>
                    <span>******</span>
                  </uni-text>
                  <uni-text class="font-12 color-999"><span>$23,640.54</span> </uni-text>
                </uni-view>
                <uni-view class="cell-right" v-if="item.name === '合约资产'">
                  <uni-text class="font-13 font-weight color-black" v-if="isEye">
                    <span>{{ _numberWithCommas(contractSum) }} USDT</span>
                  </uni-text>
                  <uni-text class="font-13 font-weight color-black" v-else>
                    <span>******</span>
                  </uni-text>
                  <uni-text class="font-12 color-999"><span>$23,640.54</span> </uni-text>
                </uni-view>
              </uni-view>
            </uni-view>
          </uni-view>
        </div>
      </div>
    </div>
  </uni-scroll-view>
</template>
<script setup>
import { _numberWithCommas } from '@/utils/public'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  allSum: {
    type: String,
    default: ''
  },
  tabList: {
    type: Array,
    default: []
  },
  platformSum: {
    type: String,
    default: ''
  },
  financSum: {
    type: String,
    default: ''
  },
  contractSum: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['changeTabs'])
const isEye = ref(true)
const handleClick = (item) => {
  emit('changeTabs', item)
}
</script>
