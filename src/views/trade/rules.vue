<template>
  <uni-view class="webview-page"
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
              ><span>{{ currentName }}</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="container">
      <div style="padding: 0 20px" v-html="currentHtml"></div>
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { rulesList } from '@/api/common/index'
const router = useRouter()
const currentHtml = ref('')
const currentName = ref('')
const getRulesFn = async () => {
  const res = await rulesList('COIN_EXPLAIN')
  currentHtml.value = res.data[0].content
  currentName.value = res.data[0].title || '现货规则'
}
onMounted(() => {
  getRulesFn()
})
</script>
<style lang="scss" scoped>
.webview-page {
  width: 100%;
  min-height: 100vh;
  background: var(--background-primary);
}

.container-rich {
  width: 100%;
  padding: 0.9375rem;
  box-sizing: border-box;
}

.container-rich uni-rich-text {
  background: var(--background-primary);
}

.container-rich uni-rich-text img {
  width: 100% !important;
  margin: 0.9375rem 0;
}

.container-rich uni-rich-text p {
  margin-bottom: 0.625rem;
  line-height: 1.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--content-primary);
}

.container-rich .webview {
  background: var(--background-primary);
}
</style>
