<template>
  <uni-view class="main-box"
    ><uni-swiper class="swiper" easing-function="linear" style="height: 496px"
      ><div class="uni-swiper-wrapper">
        <div class="uni-swiper-slides">
          <div
            class="uni-swiper-slide-frame"
            style="width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px)"
          >
            <uni-swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
              ><uni-scroll-view class="swiper-scroll" style="height: 496px"
                ><div class="uni-scroll-view">
                  <div class="uni-scroll-view" style="overflow: hidden auto">
                    <div class="uni-scroll-view-content">
                      <uni-view class="cell" v-for="(item, index) in loanList" :key="index"
                        ><uni-view class="row"
                          ><uni-text class="font-14 color-black font-weight"
                            ><span>借贷</span></uni-text
                          ><uni-text class="font-14 color-black font-weight"
                            ><span>{{ priceFormat(item.amount) }} {{ item.type }}</span></uni-text
                          ></uni-view
                        ><uni-view class="row"
                          ><uni-text class="font-12 color-gray"
                            ><span>{{ _timeFormat(item?.params?.createTime) }}</span></uni-text
                          >
                          <uni-text class="font-12 color-gray" v-if="item?.status == 0"
                            ><span>审核中</span></uni-text
                          >
                          <uni-text class="font-12 color-gray" v-if="item?.status == 1"
                            ><span>成功</span></uni-text
                          >
                          <uni-text class="font-12 color-red" v-if="item?.status == 2"
                            ><span>失败</span></uni-text
                          >
                        </uni-view></uni-view
                      >
                    </div>
                  </div>
                </div></uni-scroll-view
              ></uni-swiper-item
            >
          </div>
        </div>
      </div></uni-swiper
    >
  </uni-view>
</template>
<script setup>
import { priceFormat } from '@/utils/decimal'
import { _timeFormat } from '@/utils/public'
const props = defineProps({
  loanList: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped>
.swiper {
  background: var(--white);
}
</style>
