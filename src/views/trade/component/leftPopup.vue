<template>
  <van-popup v-model:show="props.showLeft" position="left" @close="emit('close')">
    <uni-view class="drawer"
      ><uni-view class="drawer-top"
        ><uni-view class="title"
          ><uni-text class="font-16 color-black font-weight"><span>现货</span></uni-text></uni-view
        ><uni-view class="drawer-search bg-gray"
          ><uni-text
            class="fui-icon"
            style="color: var(--content-tertiary); font-size: 1rem; font-weight: normal"
            ><span></span></uni-text
          ><uni-input class="color-black"
            ><div class="uni-input-wrapper">
              <input
                v-model="searchName"
                type="text"
                placeholder="搜寻币种"
                maxlength="140"
                step=""
                enterkeyhint="done"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input></uni-view
        ><uni-view class="tag-buttons">
          <uni-view class="tag" @click="handleTagClick(0)" :class="{ 'bg-gray': tagIndex == 0 }">
            <uni-text class="font-13 font-weight color-black">
              <span>自选</span>
            </uni-text>
          </uni-view>
          <uni-view class="tag" @click="handleTagClick(1)" :class="{ 'bg-gray': tagIndex == 1 }">
            <uni-text class="font-13 font-weight color-black">
              <span> USDT </span>
            </uni-text>
          </uni-view>
        </uni-view>
        <uni-view class="list-title"
          ><uni-view class="left flex flex-row align-center"
            ><uni-text class="font-11 color-gray"><span>名称</span></uni-text>
            <img src="../../../assets/img/z-nomal.png" alt="" style="height: 7.5px" /> </uni-view
          ><uni-view class="right flex flex-row align-center"
            ><uni-view class="item flex flex-row align-center"
              ><uni-text class="font-11 color-gray"><span>最新价</span></uni-text></uni-view
            ><uni-view class="item flex flex-row align-center"
              ><uni-text class="font-11 color-gray"><span>/涨跌幅</span></uni-text></uni-view
            ></uni-view
          ></uni-view
        ></uni-view
      >
      <uni-scroll-view class="drawer-bottom" style="height: 487px" v-show="tagIndex == 0">
        <div class="uni-scroll-view">
          <div class="uni-scroll-view" style="overflow: hidden auto">
            <div class="uni-scroll-view-content">
              <uni-view class="not-data" style="width: 16.875rem; height: 18.75rem">
                <uni-view class="fui-empty__wrap" style="margin-top: 0px">
                  <img
                    src="../../../assets/img/not_data-dark.png"
                    alt=""
                    style="width: 5rem; height: 64px"
                  />
                  <uni-text
                    class="fui-empty__title"
                    style="color: rgb(137, 137, 137); font-size: 0.8125rem"
                  >
                    <span>暂无资料</span>
                  </uni-text>
                </uni-view>
              </uni-view>
            </div>
          </div>
        </div>
      </uni-scroll-view>
      <uni-scroll-view class="drawer-bottom" style="height: 537px" v-show="tagIndex == 1">
        <div class="uni-scroll-view">
          <div class="uni-scroll-view" style="overflow: hidden auto">
            <div
              class="uni-scroll-view-content"
              v-if="filterKeyCoin(currentCoinList, searchName).length > 0"
            >
              <uni-view
                class="drawer-coin-cell"
                v-for="(item, index) in filterKeyCoin(currentCoinList, searchName)"
                :key="index"
                @click="handleClick(item)"
              >
                <uni-view class="left">
                  <uni-text class="font-13 color-black font-weight mr-5">
                    <span>{{ item.showSymbol }}</span>
                  </uni-text>
                </uni-view>
                <uni-view class="right">
                  <uni-text
                    class="font-13 font-weight color-black"
                    :class="
                      tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
                      tradeStore.allCoinPriceInfo[item.coin]?.close
                        ? 'price_up'
                        : 'price_down'
                    "
                  >
                    <span> {{ priceFormat(tradeStore.allCoinPriceInfo[item.coin]?.close) }}</span>
                  </uni-text>
                  <uni-text
                    class="font-11 color-black mt-4"
                    :class="
                      tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
                      tradeStore.allCoinPriceInfo[item.coin]?.close
                        ? 'price_up'
                        : 'price_down'
                    "
                  >
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
            </div>
            <uni-view class="not-data" style="width: 16.875rem; height: 18.75rem" v-else>
              <uni-view class="fui-empty__wrap" style="margin-top: 0px">
                <img
                  src="../../../assets/img/not_data-dark.png"
                  alt=""
                  style="width: 5rem; height: 64px"
                />
                <uni-text
                  class="fui-empty__title"
                  style="color: rgb(137, 137, 137); font-size: 0.8125rem"
                >
                  <span>暂无资料</span>
                </uni-text>
              </uni-view>
            </uni-view>
          </div>
        </div></uni-scroll-view
      >
    </uni-view>
  </van-popup>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { priceFormat } from '@/utils/decimal.js'
import { filterKeyCoin } from '@/utils/filters'
import { useTradeStore } from '@/store/trade'
import { dispatchCustomEvent } from '@/utils'
const tradeStore = useTradeStore()
const $router = useRouter()
const $route = useRoute()
const props = defineProps({
  showLeft: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close'])
const tagIndex = ref(0)
const handleTagClick = (index) => {
  tagIndex.value = index
}
/**
 * 搜索
 */
const searchName = ref('')
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
  let type = ''
  if ($route.query.type == 1) {
    type = 'spot'
  } else if ($route.query.type == 2) {
    type = 'contract'
  }
  if (!$route.query.type) {
    $router.replace(`${$route.path}?symbol=${item.coin}`)
  } else {
    $router.replace(`${$route.path}?symbol=${item.coin}&type=${$route.query.type}`)
  }
  dispatchCustomEvent('event_tradeSymbolChange', {
    type: type,
    symbol: item.symbol,
    coin: item.coin,
    coinInfo: item
  })

  emit('close')
}
/** 点击每一项 */
const toSort = (v) => {
  currentList.value = v
}
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
