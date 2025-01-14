<template>
  <uni-tabbar class="uni-tabbar-bottom" style="width: 100%"
    ><div
      class="uni-tabbar"
      style="background-color: rgb(17, 17, 17); backdrop-filter: none; width: 100%"
    >
      <div class="uni-tabbar-border" style="background-color: rgba(0, 0, 0, 0.33)"></div>
      <div
        class="uni-tabbar__item"
        @click="handleClick(item.path)"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="uni-tabbar__bd" style="height: 50px">
          <div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 20px; height: 20px">
            <img :src="`/src/assets/img/${item.activeIcon}`" v-if="pathStr == item.path" />
            <img :src="`/src/assets/img/${item.icon}`" v-else />
          </div>
          <div
            class="uni-tabbar__label"
            style="color: rgb(137, 137, 137); font-size: 12px; line-height: normal; margin-top: 6px"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="uni-placeholder" style="height: 50px"></div
  ></uni-tabbar>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const list = [
  {
    name: '首页',
    path: '/',
    icon: 'home-d.png',
    activeIcon: 'home-s.png'
  },
  {
    name: '行情',
    path: '/store',
    icon: 'market-d.png',
    activeIcon: 'market-s.png'
  },
  {
    name: '现货',
    path: '/trade',
    icon: 'trade-d.png',
    activeIcon: 'trade-s.png'
  },
  {
    name: '合约',
    path: '/contract',
    icon: 'contract-d.png',
    activeIcon: 'contract-s.png'
  },
  {
    name: '资产',
    path: '/wallet',
    icon: 'asset-d.png',
    activeIcon: 'asset-s.png'
  }
]
if (route.path == '/') {
  console.log(route.path)
}
const pathStr = ref(route.path)
watch(route, (to) => {
  pathStr.value = to.path
})
const handleClick = (path) => {
  pathStr.value = path
  router.push(path)
}
</script>
