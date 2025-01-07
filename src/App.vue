<template>
  <uni-page-body>
    <router-view></router-view>
    <FooterBar v-if="isShow" />
  </uni-page-body>
</template>
<script setup>
import FooterBar from '@/components/footerBar/index.vue'
import { useRoute } from 'vue-router'
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
document.title = VITE_APP_TITLE
const route = useRoute()
const isShow = computed(() => {
  const list = ['/', '/wallet']
  return list.includes(route.path)
})
onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'dark')
})
</script>
