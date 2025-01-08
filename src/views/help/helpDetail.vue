<template>
  <uni-view class="setting">
    <uni-view style="height: 44px">
      <uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 9;
        "
      >
        <uni-view class="fui-nav__status-bar" style="height: 0px"></uni-view>
        <uni-view class="fui-nav__header">
          <uni-view class="fui-nav__left">
            <uni-text
              @click="router.back()"
              class="fui-icon"
              style="color: var(--content-primary); font-size: 1.75rem; font-weight: normal"
            >
              <span></span>
            </uni-text>
          </uni-view>
          <uni-view class="fui-nav__title">
            <uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
            >
              <span>帮助中心</span>
            </uni-text>
          </uni-view>
          <uni-view class="fui-nav__right"> </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
    <uni-view class="container-box">
      <div class="content" v-if="currentHtml">
        <div class="title">{{ questionDetail.question }}</div>
        <div class="time">{{ questionDetail.createTime }}</div>
        <div class="itemDetailObj" v-html="currentHtml"></div>
      </div>
      <NoData v-else />
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { getHelpcenterDetail } from '@/api/help/index'
const router = useRouter()
const route = useRoute()
const currentHtml = ref('')
const questionDetail = ref({})
onMounted(async () => {
  if (route.params.id) {
    try {
      const res = await getHelpcenterDetail(route.params.id)
      if (res.code === 200) {
        questionDetail.value = res.data
        currentHtml.value = res.data.content
      }
    } catch (error) {
      console.log(error)
    }
  }
})
</script>
<style lang="scss" scoped>
.title {
  font-size: 18px;
  font-weight: bold;
  color: var(--ex-font-color6);
  padding: 15px;
}
.time {
  padding: 0 15px;
  font-size: 14px;
  color: var(--ex-font-color8);
}
:deep(.content) {
  .itemDetailObj {
    font-size: 14px;
    padding: 15px;
    color: var(--ex-default-font-color);
    line-height: 1.4;
  }
  strong {
    font-weight: bold;
  }
  img {
    margin: 15px 0;
    width: 100%;
    object-fit: contain;
  }
}
</style>
