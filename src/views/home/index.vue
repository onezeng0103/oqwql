<template>
  <uni-view id="home" class="home">
    <uni-view style="height: 44px">
      <uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--white);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 9;
        "
      >
        <uni-view class="fui-nav__header">
          <uni-view class="nav-bar">
            <uni-view class="nav-bar-avatar">
              <uni-view
                class="fui-avatar__wrap fui-avatar__circle"
                style="
                  background: var(--white);
                  margin-right: 0px;
                  margin-bottom: 0px;
                  width: 1.9375rem;
                  height: 1.9375rem;
                "
              >
                <div style="width: 1.9375rem; height: 1.9375rem" @click="showLeft = true">
                  <img :src="path" width="100%" height="100%" draggable="false" />
                </div>
              </uni-view>
            </uni-view>
            <uni-view class="nav-bar-search bg-gray" @click="router.push('/search')">
              <uni-text
                class="fui-icon"
                style="color: var(--color-text-dark-gray); font-size: 1rem; font-weight: normal"
              >
                <span></span>
              </uni-text>
              <uni-text class="font-13 font-weight color-gray">
                <span>BTC</span></uni-text
              ></uni-view
            >
            <uni-view class="nav-bar-button">
              <uni-view class="bar-button" @click="handleKeFu">
                <img
                  width="100%"
                  height="100%"
                  src="../../assets/img/customer-dark.png"
                  draggable="false"
                /> </uni-view></uni-view></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="page_main">
      <uni-view class="property">
        <template v-if="isSign">
          <uni-view class="property_top notranslate">
            <uni-text class="font-14 color-gray font-weight notranslate">
              <span>资产估值(USDT)</span></uni-text
            >
          </uni-view>
          <uni-view class="property_con">
            <uni-view class="property_con_left notranslate">
              <uni-text class="font-18 color-black font-weight notranslate">
                <span>{{ _numberWithCommas(allSum) }}</span>
              </uni-text>
              <uni-text class="font-12 color-gray notranslate">
                <span>≈$40,194.07</span>
              </uni-text>
            </uni-view>
            <uni-view
              class="fui-button__wrap"
              style="
                width: 5rem;
                height: 2.0625rem;
                margin: 0px;
                border-radius: 0.25rem;
                background: var(--blue);
              "
            >
              <uni-button
                @click="router.push('/recharge')"
                class="fui-button"
                style="
                  width: 5rem;
                  height: 2.0625rem;
                  line-height: 2.0625rem;
                  background: var(--blue);
                  border-width: 0px;
                  border-color: var(--blue);
                  border-radius: 0.25rem;
                  font-size: 0.75rem;
                  color: rgb(255, 255, 255);
                "
                >充值/买币</uni-button
              ></uni-view
            ></uni-view
          >
        </template>
        <template v-else>
          <uni-view class="banner"
            ><uni-view class="left"
              ><uni-text class="font-14 color-black font-weight"
                ><span>立即注册，领取丰厚奖励</span></uni-text
              ><uni-text class="font-13 color-blue font-weight"
                ><span @click="router.push('/login')">登入/注册</span></uni-text
              ></uni-view
            >
            <img
              style="width: 6.59375rem; height: 3.71875rem"
              src="../../assets/img/bg-aHsi6WdP.png"
              alt=""
          /></uni-view>
        </template>
      </uni-view>
      <uni-view class="menu"
        ><uni-view class="menu_item" @click="router.push('/invaite')"
          ><uni-view class="imgBox">
            <img
              style="width: 1.875rem; height: 1.875rem"
              src="../../assets/img/invite-white.png"
              draggable="false"
            /> </uni-view
          ><uni-text class="font-13 color-dark"><span>邀请好友</span></uni-text></uni-view
        ><uni-view class="menu_item" @click="router.push('/flashExchange')">
          <uni-view class="imgBox">
            <img
              style="width: 1.875rem; height: 1.875rem"
              src="../../assets/img/flashExchange.png"
              draggable="false"
            /> </uni-view
          ><uni-text class="font-13 color-dark"><span>闪兑</span></uni-text></uni-view
        ><uni-view class="menu_item" @click="router.push('/recharge')">
          <uni-view class="imgBox">
            <img
              style="width: 1.875rem; height: 1.875rem"
              src="../../assets/img/recharge-dark.png"
              draggable="false"
            /> </uni-view
          ><uni-text class="font-13 color-dark"><span>充值</span></uni-text></uni-view
        ><uni-view class="menu_item" @click="router.push('/more')"
          ><uni-view class="imgBox">
            <img
              style="width: 1.875rem; height: 1.875rem"
              src="../../assets/img/menu-white.png"
              draggable="false"
            /> </uni-view
          ><uni-text class="font-13 color-dark"><span>更多</span></uni-text></uni-view
        ></uni-view
      >
      <van-swipe class="swiper_wrap" :autoplay="3000000" indicator-color="var(--color-blue-bg)">
        <van-swipe-item v-for="(item, index) in imgList" :key="index">
          <img
            style="width: 100%; height: 112px; object-fit: cover"
            class="swiper_item"
            :src="item"
            alt=""
          />
        </van-swipe-item>
      </van-swipe>
      <van-notice-bar
        background="var(--background-white)"
        color="var(--text-white)"
        left-icon="volume-o"
        text="开始您的数字货币之旅"
        style="padding: 0"
      >
        <template #left-icon>
          <img
            style="width: 1.1875rem; height: 1.1875rem; margin-right: 0.5rem"
            src="../../assets/img/notice-dark.png"
            draggable="false"
          />
        </template>
        <template #right-icon>
          <img
            style="width: 1.1875rem; height: 1.1875rem"
            src="../../assets/img/more1-dark.png"
            draggable="false"
          />
        </template>
      </van-notice-bar>
      <uni-view class="content_wrap">
        <uni-scroll-view
          class="fui-tabs__scrollbox"
          style="background: var(--white); z-index: 1; top: auto"
        >
          <div class="uni-scroll-view">
            <div
              class="uni-scroll-view uni-scroll-view-scrollbar-hidden"
              style="overflow: auto hidden"
            >
              <div class="uni-scroll-view-content">
                <uni-view class="fui-scroll__view">
                  <uni-view class="fui-tabs__item" @click="handleIndex(0)">
                    <uni-view class="fui-tabs__text-wrap" style="height: 2.0625rem">
                      <uni-view
                        class="fui-tabs__text"
                        style="font-size: 0.875rem; font-weight: 500; transform: scale(1)"
                        :style="{
                          color:
                            currentIndex == 0
                              ? 'var(--color-title-black)'
                              : 'var(--color-text-dark-gray)'
                        }"
                        >自选
                      </uni-view>
                    </uni-view>
                  </uni-view>
                  <uni-view class="fui-tabs__item" @click="handleIndex(1)">
                    <uni-view class="fui-tabs__text-wrap" style="height: 2.0625rem">
                      <uni-view
                        class="fui-tabs__text"
                        style="font-size: 0.875rem; font-weight: normal; transform: scale(1)"
                        :style="{
                          color:
                            currentIndex == 1
                              ? 'var(--color-title-black)'
                              : 'var(--color-text-dark-gray)'
                        }"
                        >涨幅榜
                      </uni-view>
                    </uni-view>
                  </uni-view>
                  <uni-view class="fui-tabs__item" @click="handleIndex(2)">
                    <uni-view class="fui-tabs__text-wrap" style="height: 2.0625rem">
                      <uni-view
                        class="fui-tabs__text"
                        style="font-size: 0.875rem; font-weight: normal; transform: scale(1)"
                        :style="{
                          color:
                            currentIndex == 2
                              ? 'var(--color-title-black)'
                              : 'var(--color-text-dark-gray)'
                        }"
                        >跌幅榜
                      </uni-view>
                    </uni-view>
                  </uni-view>
                </uni-view>
              </div>
            </div>
          </div>
        </uni-scroll-view>
        <Optional v-if="currentIndex == 0" />
        <Rose v-if="currentIndex == 1" />
        <Fall v-if="currentIndex == 2" />
      </uni-view>
    </uni-view>
  </uni-view>
  <LeftPopup :showLeft="showLeft" @close="close" />
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user/index'
import { useMainStore } from '@/store/index.js'
import { publiceNotice } from '@/api/common/index.js'
import { dispatchCustomEvent } from '@/utils'
import { priceFormat } from '@/utils/decimal.js'
import { _numberWithCommas } from '@/utils/public'
import LeftPopup from './component/leftPopup.vue'
import Optional from './component/optional.vue'
import Rose from './component/rose.vue'
import Fall from './component/fall.vue'
const router = useRouter()
const userStore = useUserStore()
const mainStore = useMainStore()
const isSign = ref(userStore.isSign)
const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const showLeft = ref(false)
const close = () => {
  showLeft.value = false
}
const imgList = ref([])
const publiceNoticeFun = async () => {
  const res = await publiceNotice('ACTIVITY_NOTICE', 'HOME_ACTIVITY')
  imgList.value = res?.data.map((item) => item.imgUrl)
}
const handleKeFu = () => {
  dispatchCustomEvent('event_serviceChange')
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
const currentIndex = ref(0)
const handleIndex = (index) => {
  currentIndex.value = index
}
onMounted(() => {
  publiceNoticeFun()
})
</script>
