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
      <div v-if="list.length > 0">
        <div v-for="(item, index) in list" :key="index" class="itemList">
          <div class="title">
            <div class="title_top"></div>
            <div>{{ item.title }}</div>
          </div>
          <div v-if="item.infoList.length > 0">
            <div
              v-for="(items, indexs) in item.infoList"
              :key="indexs"
              class="item"
              @click="router.push(`/helpDetail/${items.id}`)"
            >
              {{ items.question }}
            </div>
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
import { getHelpcenter } from '@/api/help/index'
const router = useRouter()

const list = ref([])
const isShow = ref(false)
onMounted(async () => {
  try {
    const res = await getHelpcenter()
    if (res.code === 200) {
      list.value = res.data
      list.value.length === 0 ? (isShow.value = true) : (isShow.value = false)
    }
  } catch (error) {
    console.log(error)
  }
})
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
