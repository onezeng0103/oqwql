<template>
  <uni-view class="eaOrders"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 996;
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
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
              ><span>理财记录</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="eaOrders-body">
      <template v-if="list.length > 0">
        <uni-view class="scroll-item" v-for="(item, index) in list" :key="index">
          <uni-view class="scroll-item-cell image-cell"
            ><uni-view class="flex align-center">
              <img
                style="width: 1.71875rem; margin-right: 0.625rem"
                src="../../assets/img/coin-JyvGAUty.png"
                alt=""
              />
              <uni-text class="font-14 color-black font-weight"
                ><span>{{ item.planTitle }}</span></uni-text
              ></uni-view
            ></uni-view
          >
          <uni-view>
            <uni-view class="scroll-item-cell">
              <uni-text class="font-13 color-gray">
                <span>锁仓天数(天)</span>
              </uni-text>
              <uni-text class="font-13 color-black">
                <span>{{ item.days }}</span>
              </uni-text>
            </uni-view>
            <uni-view class="scroll-item-cell">
              <uni-text class="font-13 color-gray">
                <span>日收益率</span>
              </uni-text>
              <uni-text class="font-13 color-black">
                <span>{{ item.avgRate }}%</span>
              </uni-text>
            </uni-view>
            <uni-view class="scroll-item-cell">
              <uni-text class="font-13 color-gray">
                <span>投入金额({{ item.coin ? item.coin.toUpperCase() : '' }})</span>
              </uni-text>
              <uni-text class="font-13 color-black">
                <span> {{ item.amount }} </span>
              </uni-text>
            </uni-view>
            <uni-view class="scroll-item-cell">
              <uni-text class="font-13 color-gray">
                <span>预估收益( {{ item.coin ? item.coin.toUpperCase() : '' }})</span>
              </uni-text>
              <uni-text class="font-13 color-black">
                <span>{{ priceFormat((item.amount * item.days * 0.05) / 100, 6) }}</span>
              </uni-text>
            </uni-view>
            <uni-view class="scroll-item-cell">
              <uni-text class="font-13 color-gray">
                <span>到账时间</span>
              </uni-text>
              <uni-text class="font-13 color-black">
                <span>
                  {{ timeOfreceipt(item.settlementType, item.days, item.params.createTime) }}</span
                >
              </uni-text>
            </uni-view>
            <uni-view class="scroll-item-cell">
              <uni-text class="font-13 color-gray">
                <span>状态</span>
              </uni-text>
              <uni-text class="font-13 color-black">
                <span> {{ investmentStatus(item.status)?.name }}</span>
              </uni-text>
            </uni-view>
          </uni-view>
        </uni-view>
      </template>
      <template v-else>
        <NoData2 />
      </template>
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { investmentList } from '@/api/financial'
import { investmentStatus, timeOfreceipt } from '@/utils/filters'
import { priceFormat } from '@/utils/decimal'
const router = useRouter()
const list = ref([])
const getList = async () => {
  const res = await investmentList(1, 100000)
  list.value = res?.rows
}
onMounted(() => {
  getList()
})
</script>
<style lang="scss" scoped>
.eaOrders {
  width: 100%;
  min-height: 100vh;
  background: var(--background-primary);
}

.eaOrders-body {
  width: 100%;
  height: auto;
  .scroll-item {
    padding: 0 0.9375rem;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin-top: 0.9375rem;
    border-bottom: 0.0625rem solid var(--border-strength-100);
    .scroll-item-cell {
      width: 100%;
      min-height: 2.125rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .image-cell {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
