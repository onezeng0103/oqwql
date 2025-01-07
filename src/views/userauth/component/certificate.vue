<template>
  <van-popup v-model:show="props.showBottom" position="bottom">
    <uni-view class="card-popup">
      <uni-view class="list">
        <uni-view class="_row" v-for="item in list" :key="item.type" @click="close(item)">
          <uni-text class="font-14 color-dark">
            <span>{{ item.name }}</span>
          </uni-text>
        </uni-view>
      </uni-view>
      <uni-view class="cancel-button" @click="close(undefined)">
        <uni-text class="font-14 color-gray font-weight">
          <span>取消</span>
        </uni-text>
      </uni-view>
    </uni-view>
  </van-popup>
</template>
<script setup>
const props = defineProps({
  showBottom: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array,
    default: () => []
  }
})
const emits = defineEmits(['close'])
const close = (value) => {
  emits('close', value)
}
</script>
