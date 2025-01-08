<template>
  <uni-view class="recharge">
    <uni-view style="height: 44px">
      <uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 15px;
          padding-right: 15px;
          z-index: 2;
        "
      >
        <uni-view class="fui-nav__header">
          <uni-view class="fui-nav__left">
            <uni-text
              @click="router.back()"
              class="fui-icon"
              style="color: var(--content-primary); font-size: 1.75rem; font-weight: normal"
            >
              <span></span>
            </uni-text>
          </uni-view>
          <uni-view class="fui-nav__title">
            <uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
            >
              <span>提现</span>
            </uni-text>
          </uni-view>
          <uni-view class="fui-nav__right">
            <uni-text
              @click="router.push('/withdraw/record')"
              class="fui-icon mr-10"
              style="color: var(--content-tertiary); font-size: 1.25rem; font-weight: normal"
            >
              <span></span>
            </uni-text>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
    <uni-view class="recharge-body">
      <uni-view class="recharge-body-cell">
        <uni-text class="font-13 font-weight color-black"><span>提现币种</span></uni-text>
        <uni-view class="recharge-body-cell-select mt-10" @click="showBottom = true">
          <uni-view class="flex align-center">
            <img
              v-if="info?.icon"
              :src="`/src/assets/img/${info?.icon}.png`"
              alt=""
              class="coin-icon"
              style="height: 20px"
            />
            <uni-text class="font-13 color-black font-weight"
              ><span>{{ info?.title || '请选择币种' }}</span></uni-text
            ></uni-view
          >
          <img class="down-icon" src="../../assets/img/down-dark.png" alt="" style="height: 14px" />
        </uni-view>
      </uni-view>
      <uni-view class="recharge-body-cell" style="margin-top: 15px">
        <uni-text class="font-13 font-weight color-black"><span>提现地址</span></uni-text>
        <uni-view class="recharge-body-cell-select mt-10">
          <input
            v-model="address"
            maxlength="140"
            placeholder="输入或长按粘贴地址"
            class="uni-input-input"
            autocomplete="off"
          />
        </uni-view>
      </uni-view>
      <uni-view class="recharge-body-cell" style="margin-top: 15px">
        <uni-view class="flex align-center justify-between"
          ><uni-text class="font-13 color-black font-weight"><span>提现数量</span></uni-text
          ><uni-view
            ><uni-text class="font-13 font-weight color-black"
              ><span>可用 {{ amount }} {{ info?.title }}</span></uni-text
            ></uni-view
          ></uni-view
        >

        <uni-view class="recharge-body-cell-select mt-10">
          <uni-input class="font-13 font-weight color-black"
            ><div class="uni-input-wrapper">
              <input
                v-model="allAmount"
                type="input"
                maxlength="140"
                placeholder="请填写提现数量"
                class="uni-input-input"
                autocomplete="off"
              />
            </div>
          </uni-input>
          <uni-view>
            <uni-text @click="allNum" class="font-13 font-weight color-primary"
              ><span>全部</span></uni-text
            ></uni-view
          >
        </uni-view>
      </uni-view>
      <uni-view class="recharge-body-cell" style="margin-top: 15px">
        <uni-text class="font-13 font-weight color-black"><span>提现密码</span></uni-text>
        <uni-view class="recharge-body-cell-select mt-10">
          <uni-input class="font-13 font-weight color-black">
            <div class="uni-input-wrapper">
              <input
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                maxlength="140"
                placeholder="请填写提现密码"
                class="uni-input-input"
                autocomplete="off"
              />
            </div>
          </uni-input>
          <uni-view class="icon-box">
            <uni-text
              @click="isPwd = !isPwd"
              class="fui-icon"
              style="color: var(--dark-gray); font-size: 1.25rem; font-weight: normal"
            >
              <span v-if="isPwd"></span>
              <span v-else></span>
            </uni-text>
          </uni-view>
        </uni-view>
      </uni-view>
      <uni-view data-v-781974f6="" class="withdraw-body-tips mt-15"
        ><uni-text data-v-781974f6="" class="font-13 color-black font-weight"
          ><span>溫馨提示</span></uni-text
        ><uni-text data-v-781974f6="" class="font-12 color-gray"
          ><span
            >1.為企確保資產安全，當您的帳戶安全策略發生變更或進行密碼修改時，將暫時不能提現。帳號重新登入後，需等待1小時後方可提領。</span
          ></uni-text
        ><uni-text data-v-781974f6="" class="font-12 color-gray"
          ><span>2.請務必確認操作設備的安全，防止資訊被竄改或洩漏。</span></uni-text
        ></uni-view
      >
      <uni-view
        @click="submit"
        class="fui-button__wrap fui-button__flex-1 font-13 font-weight color-white"
        style="width: 100%; height: 2.4375rem; margin: 0px; margin-top: 15px"
        ><uni-button
          class="fui-button fui-button__primary fui-button__flex-1"
          style="
            width: 100%;
            height: 2.4375rem;
            line-height: 2.4375rem;
            border-width: 0px;
            border-color: transparent;
            border-radius: 2.4375rem;
            font-size: 0.8125rem;
            color: rgb(255, 255, 255);
          "
          >确认</uni-button
        ></uni-view
      >
    </uni-view>
  </uni-view>
  <showBottomCom :showBottom="showBottom" @close="handleClose" />
</template>
<script setup>
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { filterCoin2 } from '@/utils/public'
import { withdrawSubmit } from '@/api/account'
import showBottomCom from './component/showBottom.vue'
const router = useRouter()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const showBottom = ref(true)
const isPwd = ref(true)
const info = ref('')
const allAmount = ref()
const { asset } = storeToRefs(userStore)
const amount = computed(() => {
  let data = 0
  //查询余额
  for (let i = 0; i < asset.value.length; i++) {
    // 币种提现
    if (asset.value[i].type == 1 && filterCoin2(asset.value[i].symbol) == info.value?.icon) {
      data = asset.value[i].availableAmount
    }
  }
  return data
})
const address = ref()
const password = ref()
const allNum = () => {
  allAmount.value = amount.value
}
const handleClose = (value) => {
  if (value) {
    info.value = value
  }
  showBottom.value = false
}
const submit = () => {
  console.log(userInfo.value.detail?.userTardPwd)
  if (userInfo.value.detail?.userTardPwd == null) {
    showToast('请设置资金密码')
    return
  }
  if (
    allAmount.value == '' ||
    allAmount.value == null ||
    allAmount.value > amount.value ||
    allAmount.value <= 0
  ) {
    showToast('请输入正确的提现数量')
    return
  }
  let num = Number(allAmount.value)
  if (!num) {
    showToast('请填写提现数量')
    return
  }
  if (num <= 0) {
    showToast('提现数量不能小于0')
    return
  }
  if (!address.value) {
    showToast('请填写提现地址')
    return
  }
  if (!password.value) {
    showToast('请填写提现密码')
    return
  }
  let params = {
    amount: allAmount.value,
    coinType: info.value?.title,
    pwd: password.value,
    adress: address.value,
    coin: info.value?.icon
  }
  let str = `amount=${params.amount}&coinType=${params.coinType}&pwd=${params.pwd}&adress=${params.adress}&coin=${params.coin}`
  console.log(str)
  withdrawSubmit(str).then((res) => {
    if (res.code == '200') {
      showToast('提现成功')
      router.push('/withdraw/record')
    } else {
      showToast(res.msg)
    }
  })
}
</script>
<style lang="scss" scoped>
.icon-box {
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  line-height: 2.375rem;
}
.fui-input__wrap {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  position: relative;
  border-width: 0;
}

.fui-input__border-top {
  position: absolute;
  top: 0;
  height: 1px;
  transform: scaleY(0.5);
  transform-origin: 0 0;
  z-index: 1;
}

.fui-input__border-bottom {
  position: absolute;
  bottom: 0;
  height: 1px;
  transform: scaleY(0.5) translateZ(0);
  transform-origin: 0 100%;
  z-index: 1;
}

.fui-input__required {
  position: absolute;
  left: 0.375rem;
  height: 0.9375rem;
  top: 50%;
  transform: translateY(-50%);
  line-height: 1.15;
}

.fui-input__label {
  padding-right: 0.375rem;
  flex-shrink: 0;
}

.fui-input__self {
  flex: 1;
  padding-right: 0.375rem;
  box-sizing: border-box;
  overflow: visible;
  background-color: transparent;
}

.fui-input__clear-wrap {
  width: 1rem;
  height: 1rem;
  transform: rotate(45deg) scale(1.1);
  position: relative;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
}

.fui-input__clear {
  width: 1rem;
  height: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  transform: scale(0.5) translateZ(0);
}

.fui-input__clear-a {
  width: 1rem;
  border: 0.0625rem solid #fff;
  background-color: #fff;
  box-sizing: border-box;
}

.fui-input__clear-b {
  height: 1rem;
  border: 0.0625rem solid #fff;
  background-color: #fff;
  box-sizing: border-box;
}

.fui-input__placeholder {
  color: var(--fui-color-minor, #ccc);
  overflow: visible;
}

.fui-input__border {
  position: absolute;
  height: 200%;
  width: 200%;
  border: 1px solid var(--fui-color-border, #eeeeee);
  transform-origin: 0 0;
  transform: scale(0.5);
  left: 0;
  top: 0;
  border-radius: 0.5rem;
  pointer-events: none;
}

.recharge {
  width: 100%;
  min-height: 100vh;
  background: var(--background-primary);
}

.recharge .fui-icon__close {
  position: absolute;
  right: 0.75rem;
  top: 0.625rem;
}

.recharge-body {
  width: 100%;
  height: auto;
  padding: 0.9375rem;
  box-sizing: border-box;
}

.recharge-body-cell {
  width: 100%;
  height: auto;
}

.recharge-body-cell-select {
  width: 100%;
  height: 2.4375rem;
  border-radius: 0.25rem;
  background: var(--background-secondary);
  padding: 0 0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.recharge-body-cell-select .coin-icon {
  width: 1.25rem;
  margin-right: 0.625rem;
}

.recharge-body-cell-select .down-icon {
  width: 0.78125rem;
}

.withdraw-body-tips {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  uni-text {
    margin-bottom: 0.75rem;
  }
}
</style>
