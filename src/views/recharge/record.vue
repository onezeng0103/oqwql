<template>
  <uni-view class="record"
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
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
              ><span>充值记录</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-scroll-view class="scroll-view" style="height: 623px"
      ><div class="uni-scroll-view">
        <div class="uni-scroll-view uni-scroll-view-scrollbar-hidden" style="overflow: hidden auto">
          <div class="uni-scroll-view-content">
            <uni-view class="list">
              <template v-if="list.length >= 0">
                <uni-view class="cell" v-for="item in list" :key="item.id">
                  <img
                    :src="`/src/assets/img/${item?.coin != 'null' ? item.coin : 'usdt'}.png`"
                    class="coin-img"
                    style="height: 28px"
                  />
                  <uni-view class="coin-info"
                    ><uni-view class="row"
                      ><uni-text class="font-14 font-weight color-black"
                        ><span>{{ item.type }}</span></uni-text
                      ><uni-text class="font-14 font-weight color-black"
                        ><span>+{{ item.amount }}</span></uni-text
                      ></uni-view
                    ><uni-view class="row"
                      ><uni-text class="font-12 color-gray"
                        ><span>{{ item.createTime }}</span></uni-text
                      >
                      <uni-text class="font-12 color-gray" v-if="item.status == 0">
                        <span>审核中</span></uni-text
                      >
                      <uni-text class="font-12 color-gray" v-if="item.status == 1">
                        <span>成功</span></uni-text
                      >
                      <uni-text class="font-12 color-red" v-if="item.status == 2">
                        <span>失败</span></uni-text
                      >
                    </uni-view>
                  </uni-view>
                </uni-view>
              </template>
              <template v-else>
                <NoData />
              </template>
            </uni-view>
          </div>
        </div></div
    ></uni-scroll-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { getRechargeList } from '@/api/account'
const router = useRouter()
const list = ref([])
onMounted(() => {
  let str = '?pageNum=1&pageSize=100000'
  getRechargeList(str).then((res) => {
    console.log(res)
    list.value = res.rows
  })
})
</script>
<style lang="scss" scoped>
.record {
  width: 100%;
  min-height: 100vh;
  background: var(--background-primary);
}
.scroll-view {
  background: var(--background-primary);
}
.record .scroll-view,
.record .scroll-view .list {
  width: 100%;
}
.record .scroll-view .list .cell {
  width: 100%;
  height: 2.6875rem;
  padding: 0 0.9375rem;
  box-sizing: border-box;
  margin-bottom: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.record .scroll-view .list .cell .coin-img {
  width: 1.6875rem;
  height: 1.6875rem;
  margin-right: 0.625rem;
}

.record .scroll-view .list .cell .coin-info {
  width: calc(100% - 2.3125rem);
  height: auto;
  display: flex;
  flex-direction: column;
}

.record .scroll-view .list .cell .coin-info .row {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.record .scroll-view .list .cell .coin-info .row:last-of-type {
  margin-top: 0.1875rem;
}

.record .scroll-view .list .not-date {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
