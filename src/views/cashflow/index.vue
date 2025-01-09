<template>
  <uni-view class="cashflow" style="height: 617px"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--color-gray-bg);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 9;
        "
        ><uni-view class="fui-nav__status-bar" style="height: 0px"></uni-view
        ><uni-view class="fui-nav__header"
          ><uni-view class="fui-nav__left"
            ><uni-text
              @click="router.back()"
              class="fui-icon"
              style="color: var(--black); font-size: 1.75rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--black); font-weight: 500"
              ><span>資金流水</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view
    ></uni-view>

    <uni-view class="cash-container"
      ><uni-view class="tab-box" id="tabBox"
        ><uni-scroll-view
          class="fui-tabs__scrollbox fui-tabs__sticky"
          style="background: var(--color-gray-bg); z-index: 9; top: 0px"
          ><div class="uni-scroll-view">
            <div
              class="uni-scroll-view uni-scroll-view-scrollbar-hidden"
              style="overflow: auto hidden"
            >
              <div class="uni-scroll-view-content">
                <uni-view class="fui-scroll__view" style="padding-left: 16px">
                  <uni-view
                    class="fui-tabs__item"
                    v-for="item in list"
                    :key="item.type"
                    @click="handleChange(item)"
                    ><uni-view class="fui-tabs__text-wrap" style="height: 2.0625rem"
                      ><uni-view
                        class="fui-tabs__line-wrap"
                        style="bottom: 0px; left: 0px; right: 0px"
                        ><uni-view
                          v-if="activeIndex === item.type"
                          class="fui-tabs__ac-line fui-tabs__full"
                          style="
                            height: 0.15625rem;
                            background: var(--black);
                            border-radius: 0.15625rem;
                            transform: scale(1);
                          "
                        ></uni-view></uni-view
                      ><uni-view
                        class="fui-tabs__text"
                        style="
                          font-size: 0.9375rem;
                          color: var(--black);
                          font-weight: 500;
                          transform: scale(1);
                        "
                        :style="{
                          color:
                            activeIndex === item.type
                              ? 'var(--black)'
                              : 'var(--color-text-dark-gray)'
                        }"
                        >{{ item.name }}
                      </uni-view></uni-view
                    ></uni-view
                  >
                </uni-view>
              </div>
            </div>
          </div></uni-scroll-view
        >
      </uni-view>
      <recharge :rechargeList="rechargeList" />
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { getRechargeList } from '@/api/account'
import { priceFormat } from '@/utils/decimal'
import { _timeFormat } from '@/utils/public'
import recharge from './component/recharge.vue'
const router = useRouter()
const list = ref([
  {
    name: '充值',
    type: 'recharge'
  },
  {
    name: '提现',
    type: 'withdraw'
  },
  {
    name: '理财',
    type: 'finance'
  },
  {
    name: '借贷',
    type: 'loan'
  }
])
const activeIndex = ref('recharge')
const handleChange = (value) => {
  activeIndex.value = value.type
}
const rechargeList = ref([])
const getRechargeListFun = () => {
  let str = '?pageNum=1&pageSize=100000'
  getRechargeList(str).then((res) => {
    rechargeList.value = res.rows
  })
}
onMounted(() => {
  getRechargeListFun()
})
</script>
<style lang="scss" scoped>
.fui-tabs__item {
  padding: 0.75rem;
  margin-right: 0.3125rem;
}
.swiper {
  background: var(--white);
}
</style>
