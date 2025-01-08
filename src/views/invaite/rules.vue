<template>
  <uni-view class="rules">
    <uni-view style="height: 44px">
      <uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--white);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 996;
        "
      >
        <uni-view class="fui-nav__header">
          <uni-view class="fui-nav__left">
            <uni-text
              @click="router.back()"
              class="fui-icon"
              style="color: var(--black); font-size: 1.75rem; font-weight: normal"
            >
              <span></span>
            </uni-text>
          </uni-view>
          <uni-view class="fui-nav__title">
            <uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--black); font-weight: 500"
            >
              <span>返佣规则</span>
            </uni-text>
          </uni-view>
          <uni-view class="fui-nav__right"></uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
    <uni-view class="container-box">
      <div v-if="rulesArr.length > 0">
        <div v-for="(item, index) in rulesArr" :key="index" class="itemList">
          <div class="title">
            <div class="title_top"></div>
            <div>{{ item.title }}</div>
          </div>
          <div class="content">
            <div v-html="item.content"></div>
          </div>
        </div>
      </div>
      <template v-else>
        <NoData />
      </template>
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { rulesList } from '@/api/common'
const router = useRouter()
const rulesArr = ref([])
const getRules = async () => {
  const res = await rulesList('PROMOTION_CENTER_EXPLAIN')
  console.log(res)
  rulesArr.value = res.data
}
getRules()
</script>
<style lang="scss" scoped>
.itemList {
  padding: 20px 15px;
  .title {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--text-white);
    font-weight: 600;
    .title_top {
      width: 3px;
      height: 12px;
      margin-right: 10px;
      background: var(--text-white);
    }
  }
  .item {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 400;
    color: var(--text-white);
    text-decoration: underline;
  }
}
</style>
