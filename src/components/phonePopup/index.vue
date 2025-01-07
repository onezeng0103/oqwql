<template>
  <van-popup v-model:show="props.showBottom" position="bottom" :style="{ height: '100%' }">
    <uni-view class="uni-popup__wrapper bottom" style="background-color: transparent"
      ><uni-view class="arCodePopup" style="height: 667px"
        ><uni-view style="height: 44px"
          ><uni-view
            class="fui-nav__bar fui-nav__bar-fixed"
            style="
              background: var(--white);
              border-bottom-color: rgb(238, 238, 238);
              padding-left: 8px;
              padding-right: 8px;
              z-index: 9;
            "
            ><uni-view class="fui-nav__status-bar" style="height: 0px"></uni-view
            ><uni-view class="fui-nav__header"
              ><uni-view @click="handleClick" class="fui-nav__left"
                ><uni-text
                  class="fui-icon"
                  style="color: var(--black); font-size: 1.75rem; font-weight: normal"
                  ><span></span></uni-text
                ></uni-view
              ><uni-view class="fui-nav__title"
                ><uni-text
                  class="fui-nav__title-text"
                  style="font-size: 16px; color: var(--black); font-weight: 500"
                  ><span>国家</span></uni-text
                ></uni-view
              ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
        ><uni-view class="next-list light"
          ><uni-view class="next-search" style="top: 44px"
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
                  v-model="keyword"
                  @input="handleInputChange"
                  type="text"
                  placeholder="搜寻"
                  class="uni-input-input"
                  autocomplete="off"
                /></div></uni-input></uni-view
          ><uni-view style="width: 100%; height: 59px"></uni-view
          ><uni-scroll-view class="next-scroll-left"
            ><div class="uni-scroll-view">
              <div class="uni-scroll-view" style="overflow: hidden auto">
                <div class="uni-scroll-view-content">
                  <template v-if="areaList.length">
                    <uni-view class="left-list" v-for="(item, index) in areaList" :key="index">
                      <uni-view id="itemA" class="left-item-title">{{ item.letter }}</uni-view>
                      <uni-view
                        @click="handleClick(items)"
                        class="left-item-card"
                        v-for="(items, indexs) in item.list"
                        :key="indexs"
                      >
                        <uni-view class="left-item-card-info">
                          <uni-view class="left-item-card-name"
                            >{{ current == 'zh' ? items.chineseName : items.englishName }} +{{
                              items.phoneCode
                            }}</uni-view
                          >
                        </uni-view>
                      </uni-view>
                    </uni-view>
                  </template>
                  <template v-else>
                    <NoData />
                  </template>
                </div>
              </div>
            </div>
          </uni-scroll-view>
        </uni-view>
      </uni-view>
    </uni-view>
  </van-popup>
</template>
<script setup>
import { getAreaCode } from '@/api/user'
import { storageDict } from '@/config/dict'
const current = ref(localStorage.getItem(storageDict.LANGUAGE))
const props = defineProps({
  showBottom: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['close'])
// 区号列表
const areaList = ref([])
// 获取区号
const codeList = () => {
  getAreaCode().then((res) => {
    if (res.code == '200') {
      let arr = res.data.map((item) => {
        item.list = item.data
        return item
      })
      areaList.value = arr
      originAreaList = JSON.parse(JSON.stringify(arr))
    }
  })
}

const keyword = ref('')
let originAreaList = []
const handleInputChange = (e) => {
  let val = e.target.value
  areaList.value = originAreaList
    .filter((item) => {
      item.list = item.data.filter((item1) => {
        return (
          item1.englishName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item1.chineseName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item1.phoneCode.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item1.countryCode.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
      })
      return item
    })
    .filter((item) => item.list.length)
}

const handleClick = (item) => {
  emits('close', item)
}
onMounted(() => {
  codeList()
})
</script>
