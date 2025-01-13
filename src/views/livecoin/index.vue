<template>
  <uni-view class="liveCoin"
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
              ><span>理财</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"
            ><uni-text
              @click="router.push('/livecoin/eaorders')"
              class="fui-icon"
              style="color: var(--content-tertiary); font-size: 1.25rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ></uni-view
        ></uni-view
      ></uni-view
    ><uni-view class="liveCoin-body"
      ><uni-view class="body-head"
        ><uni-view class="body-head-column mt-10"
          ><uni-view class="body-head-column-item"
            ><uni-text class="font-12 always-white"><span>总投入价值(USDT)</span></uni-text
            ><uni-text class="font-14 always-white"
              ><span>{{ headerObj.sumAmount }}</span></uni-text
            ></uni-view
          ><uni-view class="body-head-column-item"
            ><uni-text class="font-12 always-white"><span>当日赚取奖励(USDT)</span></uni-text
            ><uni-text class="font-14 always-white"
              ><span>{{ headerObj.commission }}</span></uni-text
            ></uni-view
          ><uni-view class="body-head-column-item mt-5"
            ><uni-text class="font-12 always-white"><span>累积收益</span></uni-text
            ><uni-text class="font-14 always-white"
              ><span>{{ headerObj.sumEarn }}</span></uni-text
            ></uni-view
          ><uni-view class="body-head-column-item mt-5"
            ><uni-text class="font-12 always-white"><span>持仓数量(个)</span></uni-text
            ><uni-text class="font-14 always-white"
              ><span>{{ headerObj.position }}</span></uni-text
            ></uni-view
          ></uni-view
        ></uni-view
      ><uni-view class="body-banner"></uni-view
      ><uni-view class="body-list">
        <template v-if="financialList.length > 0">
          <uni-view class="body-list-item" v-for="(item, index) in financialList" :key="index"
            ><uni-view class="body-list-item-coin"
              ><uni-view class="body-list-item-coin-cell"
                ><uni-view class="flex align-center">
                  <img src="../../assets/img/coin-JyvGAUty.png" alt="" style="height: 26px" />
                  <uni-text class="font-14 color-black font-weight"
                    ><span>{{ item.title }}</span></uni-text
                  ></uni-view
                ><uni-button @click="router.push(`/livecoin/subscribe/${item.id}`)" class="button"
                  >立即参投</uni-button
                ></uni-view
              ><uni-view class="body-list-item-coin-cell mt-10"
                ><uni-view class="flex align-center"
                  ><uni-view class="mr-10"
                    ><uni-view
                      class="fui-tag__wrap fui-tag__warning-light fui-tag__no-border"
                      style="
                        font-size: 0.6875rem;
                        line-height: 0.6875rem;
                        transform: scale(1);
                        border-radius: 0.25rem;
                        padding: 0.3125rem 0.5rem;
                        margin: 0px;
                      "
                      ><uni-text
                        class="fui-tag__text fui-tag_warning-light"
                        style="font-size: 0.6875rem; line-height: 0.6875rem"
                        ><span>回报率{{ item.avgRate }}%</span></uni-text
                      ></uni-view
                    ></uni-view
                  >
                  <uni-view class="mr-10"
                    ><uni-view
                      class="fui-tag__wrap fui-tag__warning-light fui-tag__no-border"
                      style="
                        font-size: 0.6875rem;
                        line-height: 0.6875rem;
                        transform: scale(1);
                        border-radius: 0.25rem;
                        padding: 0.3125rem 0.5rem;
                        margin: 0px;
                      "
                      ><uni-text
                        class="fui-tag__text fui-tag_warning-light"
                        style="font-size: 0.6875rem; line-height: 0.6875rem"
                        ><span>项目进度{{ item.process }}%</span></uni-text
                      ></uni-view
                    ></uni-view
                  >
                  <uni-view class="mr-10"
                    ><uni-view
                      class="fui-tag__wrap fui-tag__warning-light fui-tag__no-border"
                      style="
                        font-size: 0.6875rem;
                        line-height: 0.6875rem;
                        transform: scale(1);
                        border-radius: 0.25rem;
                        padding: 0.3125rem 0.5rem;
                        margin: 0px;
                      "
                      ><uni-text
                        class="fui-tag__text fui-tag_warning-light"
                        style="font-size: 0.6875rem; line-height: 0.6875rem"
                        ><span>锁仓天数{{ item.days }}</span></uni-text
                      ></uni-view
                    ></uni-view
                  ></uni-view
                ></uni-view
              ></uni-view
            ></uni-view
          >
        </template>
        <template v-else>
          <NoData2></NoData2>
        </template>
      </uni-view>
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { personalIncome, getFinancial } from '@/api/financial/index'
const router = useRouter()
const headerObj = ref({
  sumAmount: 0,
  commission: 0,
  sumEarn: 0,
  position: 0
})
const allList = async () => {
  try {
    const res = await personalIncome()
    if (res.code === 200) {
      headerObj.value = res.data
    }
  } catch (error) {
    console.log(error)
  }
}
const financialList = ref([])
const financialListFn = async () => {
  try {
    let data = {
      classify: ''
    }
    const res = await getFinancial(data)
    financialList.value = res.rows
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  allList()
  financialListFn()
})
</script>
<style lang="scss" scoped>
.liveCoin {
  width: 100%;
  min-height: 100vh;
  background: var(--background-primary);
}

.liveCoin-body {
  width: 100%;
  height: auto;
  padding: 0 0.9375rem;
  box-sizing: border-box;
}

.liveCoin-body .body-head {
  width: 100%;
  height: auto;
  padding: 0.9375rem 0;
  box-sizing: border-box;
  background-image: url(data:image/webp;base64,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);
  background-size: 100% 100%;
  border-radius: 0.25rem;
  margin-top: 0.9375rem;
}

.liveCoin-body .body-head-column {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 0.9375rem;
  box-sizing: border-box;
}

.liveCoin-body .body-head-column-item {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.liveCoin-body .body-banner {
  width: 100%;
  height: auto;
  padding: 0.9375rem 0;
  box-sizing: border-box;
}

.liveCoin-body .body-banner uni-image {
  width: 100%;
  border-radius: 0.25rem;
}

.liveCoin-body .body-list,
.liveCoin-body .body-list-item {
  width: 100%;
  height: auto;
}

.liveCoin-body .body-list .not-data,
.liveCoin-body .body-list-item .not-data {
  width: 100%;
  height: 21.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.liveCoin-body .body-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.liveCoin-body .body-list-item-coin {
  width: 100%;
  height: auto;
}

.liveCoin-body .body-list-item-coin-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.liveCoin-body .body-list-item-coin-cell uni-image {
  width: 1.5625rem;
  margin-right: 0.5rem;
}

.liveCoin-body .body-list-item-coin-cell .button {
  width: -webkit-fit-content;
  width: fit-content;
  height: 2rem;
  border-radius: 2rem;
  padding: 0 0.75rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--background-primary);
  background: var(--content-primary);
  font-size: 0.8125rem;
  margin: 0;
}
</style>
