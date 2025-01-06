<template>
  <component :is="type" />
</template>
<script setup>
import { useRoute } from 'vue-router'
import Email from './component/email.vue'
import Phone from './component/phone.vue'
const route = useRoute()
const type = ref(null)
onMounted(() => {
  if (route.query.type === 'email') {
    type.value = Email
  } else if (route.query.type === 'phone') {
    type.value = Phone
  }
})
</script>
