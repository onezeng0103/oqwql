<template>
  <uni-view class="wallet">
    <uni-view style="height: 44px">
      <uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--color-gray-bg);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 0px;
          padding-right: 0px;
          z-index: 2;
        "
      >
        <uni-view class="fui-nav__status-bar" style="height: 0px"> </uni-view>
        <uni-view class="fui-nav__header">
          <uni-view class="nav-bar">
            <uni-scroll-view
              class="fui-tabs__scrollbox fui-tabs__sticky"
              style="background: var(--color-gray-bg); z-index: 996; top: 0px"
            >
              <div class="uni-scroll-view">
                <div
                  class="uni-scroll-view uni-scroll-view-scrollbar-hidden"
                  style="overflow: auto hidden"
                >
                  <div class="uni-scroll-view-content" style="">
                    <uni-view class="fui-scroll__view">
                      <uni-view
                        class="fui-tabs__item"
                        v-for="(item, index) in tabList"
                        @click="currentIndex = index"
                        :key="item.key"
                        id="fui_b10m"
                      >
                        <uni-view class="fui-tabs__text-wrap" style="height: 2.6875rem">
                          <uni-view
                            class="fui-tabs__text"
                            style="font-size: 0.9375rem; font-weight: normal; transform: scale(1)"
                            :style="{
                              color:
                                index === currentIndex
                                  ? 'var(--color-text-black)'
                                  : 'var(--color-text-gray)'
                            }"
                            >{{ item.name }}
                          </uni-view>
                        </uni-view>
                      </uni-view>
                    </uni-view>
                  </div>
                </div>
              </div>
            </uni-scroll-view>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
  </uni-view>
</template>
<script setup>
const tabList = ref([
  {
    name: '总览',
    key: 'overview'
  },
  {
    name: '资金',
    key: 'capital'
  },
  {
    name: '理财',
    key: 'money'
  },
  {
    name: '合约',
    key: 'contract'
  }
])
const currentIndex = ref(0)
</script>
