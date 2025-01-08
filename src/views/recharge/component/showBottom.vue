<template>
  <van-popup v-model:show="props.showBottom" position="bottom" style="height: 100%">
    <uni-view
      class="fui-nav__bar"
      style="
        border-bottom-color: rgb(238, 238, 238);
        padding-left: 8px;
        padding-right: 8px;
        z-index: 2;
      "
      ><uni-view class="fui-nav__status-bar" style="height: 0px"></uni-view
      ><uni-view class="fui-nav__header"
        ><uni-view class="fui-nav__left"
          ><uni-text
            @click="handleClose(undefined)"
            class="fui-icon"
            style="color: var(--content-primary); font-size: 1.75rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        ><uni-view class="fui-nav__title"
          ><uni-text
            class="fui-nav__title-text"
            style="font-size: 16px; color: var(--content-primary); font-weight: 500"
            ><span>选择充值币种</span></uni-text
          ></uni-view
        ><uni-view class="fui-nav__right"></uni-view></uni-view
    ></uni-view>
    <uni-view class="next-search" style="top: 45px"
      ><uni-image class="next-search-img"
        ><div
          style="
            background-image: url('data:image/png;base64,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');
            background-position: 0% 0%;
            background-size: 100% 100%;
          "
        ></div>
        <span></span
        ><img
          src="data:image/png;base64,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"
          draggable="false" /></uni-image
      ><uni-input class="next-input"
        ><div class="uni-input-wrapper">
          <input
            v-model="keyWord"
            @input="handleInput"
            type="text"
            maxlength="50"
            placeholder="搜寻"
            enterkeyhint="done"
            class="uni-input-input"
            autocomplete="off"
          /></div></uni-input
    ></uni-view>
    <div class="uni-scroll-view-content">
      <uni-view
        v-if="list.length > 0"
        class="left-list"
        v-for="item in list"
        :key="item.icon"
        style="clear: both"
        @click="handleClose(item)"
      >
        <uni-view class="left-item-card"
          ><uni-view class="left-item-card-img">
            <img
              style="width: 25px; height: 25px"
              :src="`/src/assets/img/${item.icon}.png`"
            /> </uni-view
          ><uni-view class="left-item-card-info" style="display: flex"
            ><uni-view class="left-item-card-name font-weight">{{
              item?.title?.toUpperCase()
            }}</uni-view></uni-view
          ></uni-view
        >
      </uni-view>
      <template v-else>
        <uni-view class="no-data">
          <img
            class="no-data-img"
            src="data:image/png;base64,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"
          />
        </uni-view>
      </template>
    </div>
  </van-popup>
</template>
<script setup>
import { useMainStore } from '@/store/index'
import { filterCoin2 } from '@/utils/public'
const mainStore = useMainStore()
const props = defineProps({
  showBottom: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close'])
const handleClose = (value) => {
  emit('close', value)
}
const keyWord = ref('')
const list = ref([])
const coinList = computed(() => {
  return mainStore.getRechargeList.map((item, index) => {
    return {
      icon: filterCoin2(item.coin),
      type: 0, //充值
      title: item.coinName,
      address: item.address
    }
  })
})
const handleInput = (e) => {
  const value = e.target.value
  list.value = coinList.value.filter((item) => item.title.includes(value.toUpperCase()))
}
onMounted(() => {
  list.value = coinList.value
})
</script>
<style lang="scss" scoped>
.van-popup.van-popup--bottom {
  background-color: var(--background-primary) !important;
}
.uni-scroll-view-content {
  height: auto;
}
.next-search {
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .next-search-img {
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 2rem;
  }
  .next-input {
    width: calc(100% - 2rem);
    height: 2.25rem;
    background: var(--background-secondary);
    border-radius: 2.25rem;
    padding: 0 1rem 0 2.5rem;
    box-sizing: border-box;
    color: var(--content-primary);
  }
}
.left-list {
  height: auto;
}
.left-list .left-item-title {
  height: 1.5rem;
  padding-left: 0.75rem;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.5rem;
  font-size: 0.8125rem;
  color: var(--content-tertiary);
  background: var(--background-secondary);
}
.left-list .left-item-card {
  width: 100%;
  height: 3rem;
  background-color: var(--background-primary);
  box-sizing: border-box;
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.left-list .left-item-card .left-item-card-img {
  width: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left-list .left-item-card .left-item-card-info {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.no-data {
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  padding-top: 25%;
}
</style>
