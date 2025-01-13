<template>
  <uni-view class="subscribe"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
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
              style="color: var(--content-primary); font-size: 1.75rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
              ><span>参投 {{ info?.title }}</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-scroll-view class="container" style="height: 623px"
      ><div class="uni-scroll-view">
        <div class="uni-scroll-view" style="overflow: hidden auto">
          <div class="uni-scroll-view-content">
            <uni-view class="row mt-10">
              <uni-view class="left">
                <uni-text>
                  <span>平均收益</span>
                </uni-text>
              </uni-view>
              <uni-view class="right">
                <uni-text>
                  <span>{{ info?.avgRate }}%</span>
                </uni-text>
              </uni-view>
            </uni-view>
            <uni-view class="row mt-10">
              <uni-view class="left">
                <uni-text>
                  <span>项目周期(天)</span>
                </uni-text>
              </uni-view>
              <uni-view class="right">
                <uni-text>
                  <span>{{ info?.days }}</span>
                </uni-text>
              </uni-view>
            </uni-view>
            <uni-view class="row mt-10">
              <uni-view class="left">
                <uni-text>
                  <span>起投金额({{ info.coin ? info.coin.toUpperCase() : '' }})</span>
                </uni-text>
              </uni-view>
              <uni-view class="right">
                <uni-text>
                  <span>{{ info?.limitMin }}</span>
                </uni-text>
              </uni-view>
            </uni-view>
            <uni-view class="row"
              ><uni-view class="left"
                ><uni-text><span>申購金額</span></uni-text></uni-view
              ></uni-view
            ><uni-view class="row_bg"
              ><uni-view class="left"
                ><uni-input
                  ><div class="uni-input-wrapper">
                    <input
                      v-model="limit"
                      type="number"
                      maxlength="140"
                      step="0.000000000000000001"
                      :placeholder="`最低参投${info?.limitMin}${info.coin ? info.coin.toUpperCase() : ''}`"
                      enterkeyhint="done"
                      pattern="[0-9]*"
                      class="uni-input-input"
                      autocomplete="off"
                    /></div></uni-input></uni-view
              ><uni-view class="right"
                ><uni-text
                  ><span>{{ info.coin ? info.coin.toUpperCase() : '' }}</span></uni-text
                ></uni-view
              ></uni-view
            >
            <uni-view class="card"
              ><uni-view class="row" style="margin-bottom: 0.3125rem"
                ><uni-view class="left"
                  ><uni-text><span>产品详情</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="uni-steps"
                ><uni-view class="uni-steps__column"
                  ><uni-view class="uni-steps__column-text-container"
                    ><uni-view class="uni-steps__column-text"
                      ><uni-text class="uni-steps__column-title" style="color: rgb(41, 121, 255)"
                        ><span>项目名称</span></uni-text
                      ><uni-text class="uni-steps__column-desc" style="color: rgb(183, 189, 198)"
                        ><span>{{ info?.title }}</span></uni-text
                      ></uni-view
                    ><uni-view class="uni-steps__column-text"
                      ><uni-text class="uni-steps__column-title" style="color: rgb(183, 189, 198)"
                        ><span>项目进度</span></uni-text
                      ><uni-text class="uni-steps__column-desc" style="color: rgb(183, 189, 198)"
                        ><span>{{ info?.process }}%</span></uni-text
                      ></uni-view
                    ><uni-view class="uni-steps__column-text"
                      ><uni-text class="uni-steps__column-title" style="color: rgb(41, 121, 255)"
                        ><span>项目总额</span></uni-text
                      ><uni-text class="uni-steps__column-desc" style="color: rgb(183, 189, 198)"
                        ><span>{{ info?.totalInvestAmount }}&nbsp;{{ info?.coin }}</span></uni-text
                      ></uni-view
                    ><uni-view class="uni-steps__column-text"
                      ><uni-text class="uni-steps__column-title" style="color: rgb(41, 121, 255)"
                        ><span>剩余金额</span></uni-text
                      ><uni-text class="uni-steps__column-desc" style="color: rgb(183, 189, 198)"
                        ><span>{{ info?.remainAmount }}&nbsp;{{ info?.coin }}</span></uni-text
                      ></uni-view
                    >
                    <uni-view class="uni-steps__column-text"
                      ><uni-text class="uni-steps__column-title" style="color: rgb(41, 121, 255)"
                        ><span>限投次数</span></uni-text
                      ><uni-text class="uni-steps__column-desc" style="color: rgb(183, 189, 198)"
                        ><span>{{
                          Number(info?.timeLimit) ? Number(info?.timeLimit) : '不限购'
                        }}</span></uni-text
                      ></uni-view
                    >
                    <uni-view class="uni-steps__column-text"
                      ><uni-text class="uni-steps__column-title" style="color: rgb(41, 121, 255)"
                        ><span>平均收益率</span></uni-text
                      ><uni-text class="uni-steps__column-desc" style="color: rgb(183, 189, 198)"
                        ><span>{{ info?.avgRate }}%</span></uni-text
                      ></uni-view
                    >
                  </uni-view>
                </uni-view>
              </uni-view>
            </uni-view>
            <uni-view class="card"
              ><uni-view class="row" style="margin-bottom: 0.3125rem"
                ><uni-view class="left"
                  ><uni-text><span>基金介绍</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="uni-steps"
                ><uni-view class="uni-steps__column"
                  ><uni-view class="uni-steps__column-text-container"
                    ><uni-view class="uni-steps__column-text"
                      ><uni-text
                        v-if="info?.prodectIntroduction"
                        class="uni-steps__column-title"
                        style="color: rgb(41, 121, 255)"
                        ><span>{{ info?.prodectIntroduction }}</span></uni-text
                      ><uni-text
                        v-else
                        class="uni-steps__column-title"
                        style="color: rgb(41, 121, 255)"
                        ><span>暂无介绍</span></uni-text
                      ></uni-view
                    >
                  </uni-view>
                </uni-view> </uni-view
              ><uni-view class="row" style="margin-bottom: 0.3125rem"
                ><uni-view class="left"
                  ><uni-text><span>产品规则</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="uni-steps"
                ><uni-view class="uni-steps__column"
                  ><uni-view class="uni-steps__column-text-container"
                    ><uni-view class="uni-steps__column-text"
                      ><uni-text
                        v-if="info?.problem"
                        class="uni-steps__column-title"
                        style="color: rgb(41, 121, 255)"
                        ><span>{{ info?.problem }}</span></uni-text
                      ><uni-text
                        v-else
                        class="uni-steps__column-title"
                        style="color: rgb(41, 121, 255)"
                        ><span>暂无介绍</span></uni-text
                      ></uni-view
                    >
                  </uni-view>
                </uni-view>
              </uni-view>
            </uni-view>
            <uni-view class="null_view_box"></uni-view>
          </div>
        </div></div></uni-scroll-view
    ><uni-view class="footer"
      ><uni-button @click="submit" :class="limit ? 'activeBtn' : ''">支付</uni-button>
      <!-- :class="activeBtn" --> </uni-view
    ><uni-view></uni-view
  ></uni-view>
</template>
<script setup>
import { showToast } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import { financialDetail, financialSubmit } from '@/api/financial/index'
const router = useRouter()
const route = useRoute()
const info = ref({})
const getDetail = async () => {
  const res = await financialDetail(route.params.id)
  info.value = res.data
}
const limit = ref('')
const submit = async () => {
  if (!Number(limit.value)) {
    return
  }
  console.log(Number(limit.value))
  console.log(info.value?.limitMin)
  if (Number(limit.value) < info.value?.limitMin) {
    return showToast(`最少可购买${info.value?.limitMin}`)
  }

  if (Number(limit.value) > info.value?.limitMax) {
    return showToast(`最多可购买${info.value?.limitMax}`)
  }
  let regNum = /^\d+(\.\d{1,4})?$/
  if (!regNum.test(limit.value)) {
    return showToast('最多输入小数点后4位')
  }
  const res = await financialSubmit(route.params.id, limit.value, info.value?.days)
  if (res.code === 200) {
    router.push('/livecoin/eaorders')
  } else {
    showToast(res.msg)
  }
}
onMounted(() => {
  getDetail()
})
</script>
<style lang="scss" scoped>
.subscribe {
  width: 100%;
  min-height: 100vh;
  background: var(--background-primary);
}

.subscribe .container {
  width: 100%;
  height: auto;
  padding: 0 0.9375rem;
  box-sizing: border-box;
}

.subscribe .container .null_view_box {
  width: 100%;
  height: 6.25rem;
}

.subscribe .container .row {
  width: 100%;
  height: 1.875rem;
  margin-bottom: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.subscribe .container .row .left {
  display: flex;
  align-items: center;
}

.subscribe .container .row .left uni-text {
  font-size: 0.8125rem;
  color: var(--content-tertiary);
}

.subscribe .container .row .left uni-image {
  width: 0.875rem;
  height: 0.875rem;
  margin-left: 0.4375rem;
}

.subscribe .container .row .right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.subscribe .container .row .right uni-image {
  width: 0.875rem;
  height: 0.875rem;
  margin-left: 0.4375rem;
}

.subscribe .container .row .right uni-text {
  font-size: 0.875rem;
  color: var(--content-primary);
}

.subscribe .container .row .right uni-switch {
  transform: scale(0.8);
}

.subscribe .container .row_bg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
  padding: 0 0.9375rem;
  box-sizing: border-box;
  height: 2.4375rem !important;
  background-color: var(--background-secondary);
  margin-bottom: 0.3125rem;
}

.subscribe .container .row_bg .left {
  width: calc(100% - 6.25rem);
}

.subscribe .container .row_bg .left uni-input {
  width: 100%;
  height: 2.4375rem;
  font-size: 0.8125rem;
  color: var(--content-primary);
}

.subscribe .container .row_bg .left .uni-input-placeholder {
  font-size: 0.8125rem;
}

.subscribe .container .row_bg .right uni-text {
  font-size: 0.8125rem;
  color: var(--content-tertiary);
}

.subscribe .container .row_bg .right uni-text:nth-of-type(2) {
  margin: 0 0.5rem;
}

.subscribe .container .row_bg .right uni-text:last-of-type {
  color: var(--color-primary);
}

.subscribe .container .balance {
  margin: 0.9375rem 0;
}

.subscribe .container .card {
  border-radius: 0.25rem;
  padding: 0.9375rem;
  box-sizing: border-box;
  background-color: var(--background-secondary);
  margin-bottom: 0.9375rem;
}

.subscribe .container .card ._tip {
  font-size: 0.75rem;
  color: var(--content-tertiary);
  line-height: 1.1875rem;
}

.subscribe .container .card .row {
  margin-bottom: 0;
}

.subscribe .footer {
  width: 100%;
  height: auto;
  padding: 0.625rem 0.9375rem;
  box-sizing: border-box;
  background-color: var(--background-primary);
  position: fixed;
  bottom: 0;
  z-index: 9;
}

.subscribe .footer .top {
  width: 100%;
  height: auto;
  margin-bottom: 0.625rem;
  display: flex;
  align-items: center;
}

.subscribe .footer .top .check {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.625rem;
}

.subscribe .footer .top .check uni-image {
  width: inherit;
  height: inherit;
}

.subscribe .footer .top uni-text {
  font-size: 0.8125rem;
  margin-right: 0.4375rem;
  color: var(--content-tertiary);
}

.subscribe .footer .top uni-text:last-of-type {
  color: var(--color-primary);
}

.subscribe .footer uni-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.4375rem;
  border-radius: 2.4375rem;
  font-size: 0.875rem;
  text-align: center;
  background-color: var(--background-secondary);
  color: var(--content-tertiary);
}

.subscribe .footer .activeBtn {
  color: var(--background-primary);
  background-color: var(--content-primary);
}

.subscribe .popup {
  width: 100%;
  padding: 0 0.9375rem 0.9375rem;
  box-sizing: border-box;
  background-color: var(--background-primary);
  border-radius: 0.5rem 0.5rem 0 0;
}

.subscribe .popup .p_title {
  width: 100%;
  height: 2.75rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.subscribe .popup .p_title uni-text {
  font-size: 1rem;
  color: var(--content-primary);
}

.subscribe .popup .p_title .close {
  width: 1.3125rem;
  height: 1.3125rem;
  position: absolute;
  right: 0;
}

.subscribe .popup .p_content {
  width: 100%;
  height: auto;
  padding-top: 0.9375rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.subscribe .popup .p_content uni-text {
  font-size: 0.8125rem;
  color: var(--content-tertiary);
  margin-bottom: 0.625rem;
  line-height: 1.1875rem;
}

.van-icon {
  font-size: 0.9375rem;
  color: var(--content-tertiary);
}

.uni-steps__column-text {
  display: flex;
  height: 1.125rem;
  flex-direction: row;
  justify-content: space-between;
  border: none !important;
  margin-top: 0.375rem;
}

.uni-steps__column-title {
  font-size: 0.75rem;
  color: var(--content-tertiary) !important;
}

.uni-steps__column-desc {
  font-size: 0.75rem;
  color: var(--content-primary) !important;
}

.uni-steps__column-circle {
  border-radius: 0;
  transform: rotate(45deg);
  background-color: var(--color-primary) !important;
}

.uni-steps__column-check {
  width: 5px;
  height: 5px;
  transform: rotate(45deg);
  background-color: var(--color-primary) !important;
}

.uniui-checkbox-filled:before {
  content: '';
}

.uni-steps__column-line--before {
  height: 15px;
  transform: translate(0);
}
</style>
