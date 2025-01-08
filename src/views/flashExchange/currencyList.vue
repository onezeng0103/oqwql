<template>
  <van-popup v-model:show="props.showBottom" position="bottom">
    <uni-view class="currencyListWrap"
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
                @click="handleClose(undefined)"
                class="fui-icon"
                style="color: var(--content-primary); font-size: 1.75rem; font-weight: normal"
                ><span></span></uni-text
              ></uni-view
            ><uni-view class="fui-nav__title"
              ><uni-text
                class="fui-nav__title-text"
                style="font-size: 16px; color: var(--content-primary); font-weight: 500"
                ><span>选择币种</span></uni-text
              ></uni-view
            ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
      ><uni-scroll-view class="container" style="height: 623px"
        ><div class="uni-scroll-view">
          <div class="uni-scroll-view" style="overflow: hidden auto">
            <div class="uni-scroll-view-content">
              <uni-view class="font-14 mt-15">币种名称</uni-view
              ><uni-view class="list"
                ><uni-view
                  class="item border-bottom"
                  v-for="item in list"
                  :key="item.coin"
                  @click="handleClose(item)"
                >
                  <img
                    class="currencyIcon"
                    :src="`/src/assets/img/${item.coin}.png`"
                    alt=""
                    style="height: 28px; width: 28px"
                  />
                  <uni-view>
                    <uni-text>
                      <span>{{ item.coin?.toUpperCase() }}</span>
                    </uni-text>
                  </uni-view>
                  <uni-view class="fui-checkbox__input fui-checkbox__disabled check">
                    <van-icon
                      name="checked"
                      color="#3070ec"
                      size="20"
                      v-if="info.coin == item.coin"
                    />
                    <van-icon name="checked" color="#444444" size="20" v-else />
                  </uni-view>
                </uni-view>
              </uni-view>
            </div>
          </div></div></uni-scroll-view></uni-view
  ></van-popup>
</template>
<script setup>
const props = defineProps({
  showBottom: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array,
    default: []
  },
  info: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['close'])

const handleClose = (value) => {
  emits('close', value)
}
</script>
