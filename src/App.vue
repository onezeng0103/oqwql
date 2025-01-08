<template>
  <uni-page-body>
    <router-view></router-view>
    <FooterBar v-if="isShow" />
  </uni-page-body>
</template>
<script setup>
import FooterBar from '@/components/footerBar/index.vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/store/index'
const mainStore = useMainStore()
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
document.title = VITE_APP_TITLE
const route = useRoute()
const isShow = computed(() => {
  const list = ['/', '/wallet']
  return list.includes(route.path)
})
/**
 * 客服点击监听
 */
const event_serviceChange = () => {
  if (mainStore.getCustomerServiceList.length) {
    if (mainStore.getCustomerServiceList.length == 1) {
      if (mainStore.getCustomerServiceList[0]?.callback) {
        mainStore.getCustomerServiceList[0].callback()
      } else {
        let href = mainStore.getCustomerServiceList[0]?.url
        if (
          ['gmmoin', 'coinsexpto', 'paxpay', 'dev', 'bitbyex', 'robinhood2'].includes(
            __config._APP_ENV
          )
        ) {
          window.open(href)
        } else if (mainStore.getCustomerServiceList[0]?.getUrl) {
          href = mainStore.getCustomerServiceList[0].getUrl()
          window.open(href)
        } else {
          console.log('执行')

          window.open(href)
        }
      }
    } else {
      showServicePopup.value = true
    }
  }
}
onMounted(() => {
  console.log('__config._APP_ENV', __config._APP_ENV)

  document.addEventListener('event_serviceChange', event_serviceChange)
  document.documentElement.setAttribute('data-theme', 'dark')
})
</script>
