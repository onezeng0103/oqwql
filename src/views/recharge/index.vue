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
              <span>充值</span>
            </uni-text>
          </uni-view>
          <uni-view class="fui-nav__right">
            <uni-text
              @click="router.push('/recharge/record')"
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
        <uni-text class="font-13 font-weight color-black"><span>充值币种</span></uni-text>
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
      <uni-view class="recharge-body-card mt-15">
        <uni-view class="canvas-wrap">
          <img
            v-if="QRCodeIMG"
            :src="QRCodeIMG"
            alt=""
            width="236"
            height="236"
            class="canvas-qrcode"
          /> </uni-view
        ><uni-view class="recharge-body-card-column"
          ><uni-text class="font-13 color-gray"><span>儲值地址</span></uni-text
          ><uni-text class="font-13 font-weight color-black"
            ><span>{{ address }}</span></uni-text
          ></uni-view
        ></uni-view
      >
      <uni-view class="recharge-body-cell" style="margin-top: 15px">
        <uni-text class="font-13 font-weight color-black"><span>充值数量</span></uni-text>
        <uni-view class="recharge-body-cell-select mt-10">
          <input
            v-model="amount"
            maxlength="140"
            placeholder="请填写充值数量"
            class="uni-input-input"
            autocomplete="off"
          />
        </uni-view>
      </uni-view>
      <uni-view class="recharge-body-cell" style="margin-top: 15px">
        <uni-text class="font-13 font-weight color-black"><span>上传支付凭证</span></uni-text>
        <uni-view
          class="recharge-body-cell-select mt-10"
          style="height: 120px; display: flex; align-items: center; justify-content: center"
        >
          <van-uploader v-model="fileList" :after-read="afterRead">
            <img
              v-if="fileList.length == 0"
              class="upload-image"
              style="height: 94px"
              src="../../assets/img/b5.png"
              draggable="false"
            />
          </van-uploader>
        </uni-view>
      </uni-view>
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
import QRCode from 'qrcode'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
import { useMainStore } from '@/store/index'
import { uploadImg } from '@/api/common/index.js'
import { rechargeSubmit } from '@/api/account.js'
import showBottomCom from './component/showBottom.vue'
const router = useRouter()
const mainStore = useMainStore()
const showBottom = ref(true)
const info = ref('')
const handleClose = (value) => {
  if (value) {
    info.value = value
  }
  showBottom.value = false
}
const QRCodeIMG = ref()
const address = computed(() => {
  let rechargeObj = mainStore.getRechargeList.find((elem) => elem.coinName == info.value?.title)
  if (rechargeObj?.coinAddress) {
    QRCode.toDataURL(rechargeObj?.coinAddress, {
      version: '',
      errorCorrectionLevel: 'H',
      maskPattern: 2,
      margin: 2,
      scale: 3,
      height: 236,
      width: 236,
      scal: 200,
      color: {
        dark: '#000',
        light: '#fff'
      }
    }).then((url) => {
      QRCodeIMG.value = url
    })
  }
  return rechargeObj?.coinAddress
})
const amount = ref()
const fileList = ref([])
const afterRead = (file) => {
  file.status = 'uploading'
  let formData = new FormData()
  formData.append('file', file.file)
  uploadImg(formData).then((res) => {
    res = res.data
    if (res.code == '200') {
      file.res = res.data.url
      file.status = 'success'
    } else {
      showToast(res.msg)
      fileList.value = []
    }
  })
}
const submit = () => {
  let num = Number(amount.value)
  if (!num) {
    showToast('请填写充值数量')
    return
  }
  if (fileList.value.length == 0) {
    showToast('请上传支付凭证')
    return
  }
  if (num <= 0) {
    showToast('充值数量不能小于0')
    return
  }
  if (fileList.value[0].status != 'success') {
    showToast('请等待上传完成')
    return
  }
  let params = {
    address: address.value,
    amount: num,
    filePath: fileList.value[0].res,
    coin: info.value?.icon,
    type: info.value?.title
  }
  rechargeSubmit(params).then((res) => {
    if (res.code == '200') {
      showToast('充值成功')
      router.push('/recharge/record')
    } else {
      showToast(res.msg)
    }
  })
}
</script>
<style lang="scss" scoped>
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

.fui-input__bordercolor {
  border-color: var(--fui-color-border, #eeeeee) !important;
}

.fui-input__background {
  background: var(--fui-color-border, #eeeeee) !important;
}

.fui-input__text-right {
  text-align: right;
}

.fui-form__wrap {
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  position: relative;
}

.fui-form__msg-wrap {
  padding: 0.75rem;
  position: fixed;
  z-index: 900;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  word-break: break-all;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  visibility: hidden;
  transition-property: all;
  transition-duration: 0.25s;
  transition-delay: 0s;
  transition-timing-function: ease-in-out;
}

.fui-form__msg-bg {
  background: var(--fui-color-danger, #ff2b2b) !important;
}

.fui-form__text {
  text-align: center;
}

.fui-form__msg-show {
  visibility: visible;
  transform: translateZ(0);
  opacity: 1;
}

.fui-form__mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 99;
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

.recharge-body-cell-number {
  width: 100%;
  height: 2.4375rem;
  border-radius: 0.25rem;
  background: var(--background-secondary);
  padding: 0 0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.recharge-body-cell-number-number__input {
  width: 100%;
}

.recharge-body-cell-number-number__input .uni-input-input {
  width: 100%;
  height: 2.4375rem;
  line-height: 2.4375rem;
}

.recharge-body-cell-action-button {
  background: var(--content-primary);
}

.recharge-body-last-tips {
  padding-bottom: 6.25rem;
  box-sizing: border-box;
}

.recharge-body-card {
  width: 100%;
  height: auto;
  padding: 0.9375rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  background: var(--background-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.recharge-body-card .canvas-wrap {
  width: 100%;
  height: auto;
  padding: 0.9375rem 0 1.875rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.recharge-body-card .canvas-wrap .canvas-qrcode {
  width: 7.34375rem;
  height: 7.34375rem;
}

.recharge-body-card-column {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.recharge-body-card-column uni-text {
  display: inline-block;
  width: 100%;
  word-break: break-all;
}

.recharge-body-card-column uni-text:nth-of-type(2) {
  margin-top: 0.625rem;
}

.recharge-body-card-row {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.recharge-body-card-row:last-of-type {
  margin-bottom: 0;
}

.recharge .uni-drawer {
  z-index: 90;
}

.recharge .mineDrawer {
  width: 100%;
  background-color: var(--white);
  position: relative;
}

.recharge .mineDrawer .mineClose {
  padding: 0.625rem 0.9375rem;
  box-sizing: border-box;
  text-align: right;
}

.recharge .mineDrawer .issue-body {
  width: 100%;
  height: auto;
  padding: 0.9375rem;
  box-sizing: border-box;
}

.recharge .mineDrawer .issue-body .tips {
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}

.recharge .mineDrawer .issue-body .tips .fui-icon {
  margin-right: 0.3125rem;
}

.recharge .mineDrawer .issue-body .label-box {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 0.9375rem;
}

.recharge .mineDrawer .issue-body .label-box .text-cell {
  display: flex;
  align-items: center;
}

.recharge .mineDrawer .issue-body .label-box .input-box {
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  box-sizing: border-box;
}

.recharge .mineDrawer .issue-body .label-box .input-box:focus-within {
  border-color: var(--color-primary);
}

.recharge .mineDrawer .issue-body .label-box .fui-number__input {
  padding: 0;
}

.recharge
  .mineDrawer
  .issue-body
  .label-box
  .fui-number__input
  .uni-input-wrapper
  .uni-input-input {
  width: 100%;
}

.recharge .mineDrawer .issue-body .label-button {
  width: 100%;
  height: auto;
  margin-top: 2.5rem;
}

.recharge-footer {
  width: 100%;
  height: auto;
  padding: 0.625rem 0.9375rem;
  box-sizing: border-box;
  background: var(--background-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
}

.recharge-footer .button {
  width: calc(50% - 0.3125rem);
  height: 2.4375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.4375rem;
}

.recharge-footer .button:nth-of-type(1) {
  background: var(--background-secondary);
}

.recharge-footer .button:nth-of-type(2) {
  background: var(--content-primary);
}

.recharge-footer .button:nth-of-type(3) {
  background: var(--background-secondary);
}

.recharge .popup-wrap {
  width: 100%;
  height: auto;
  border-radius: 0.9375rem 0.9375rem 0 0;
  background: var(--background-primary);
}

.recharge .popup-wrap-title {
  width: 100%;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.recharge .popup-wrap-title .close-icon {
  position: absolute;
  right: 0.9375rem;
}

.recharge .popup-wrap-content {
  width: 100%;
  height: auto;
  padding: 0.9375rem;
  box-sizing: border-box;
}

.recharge .popup-wrap-content-tip {
  line-height: 1.1875rem;
}

.recharge .popup-wrap-content-list {
  width: 100%;
  height: auto;
  min-height: 6.25rem;
  margin-top: 0.9375rem;
}

.recharge .popup-wrap-content-list-item {
  width: 100%;
  height: 2.4375rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.625rem;
}

.recharge .popup-wrap-content-list-item-active {
  border-color: var(--content-primary);
  background: var(--background-secondary);
}

.fui-toast__text {
  margin-top: 0.625rem;
}
</style>
