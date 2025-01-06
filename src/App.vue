<template>
  <router-view></router-view>
  <FooterBar v-if="isShow" />
</template>
<script setup>
import FooterBar from '@/components/footerBar/index.vue'
import { useRoute } from 'vue-router'
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
document.title = VITE_APP_TITLE
const route = useRoute()
//  计算属性
const isShow = computed(() => {
  const list = ['/']
  return list.includes(route.path)
})
onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'dark')
})
</script>
