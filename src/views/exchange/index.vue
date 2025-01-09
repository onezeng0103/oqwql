<template>
  <uni-view class="exchange" data-theme="dark" id="0"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 15px;
          padding-right: 15px;
          z-index: 1;
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
              ><span>资金划转</span></uni-text
            ></uni-view
          >
          <uni-view class="fui-nav__right"> </uni-view></uni-view></uni-view></uni-view
    ><uni-view class="exchange-container-wrap"
      ><uni-view class="_exchange_box"
        ><uni-view class="ex-left"
          ><uni-text class="font-14 color-gray"><span>从</span></uni-text
          ><uni-text class="font-14 color-gray"><span>到</span></uni-text></uni-view
        ><uni-view class="ex-center"
          ><uni-view class="cell" @click="handleShowBottom(true)"
            ><uni-text class="font-14 color-black font-weight"
              ><span> {{ returnName(params.transferOutAccount) }}</span></uni-text
            >
            <img src="../../assets/img/down-dark.png" alt="" style="height: 16px" /> </uni-view
          ><uni-view class="cell" @click="handleShowBottom(false)"
            ><uni-text class="font-14 color-black font-weight"
              ><span>{{ returnName(params.transferInAccount) }}</span></uni-text
            >
            <img
              src="../../assets/img/down-dark.png"
              alt=""
              style="height: 16px"
            /> </uni-view></uni-view
        ><uni-view class="ex-right"
          ><uni-view class="switch-box" @click="jiaohuanbtn">
            <img
              class="icon"
              src="../../assets/img/exchange-dark.png"
              alt=""
              style="width: 2.625rem; height: 2.625rem"
            /> </uni-view></uni-view></uni-view
      ><uni-view class="row-box"
        ><uni-view class="_title"
          ><uni-text class="font-13 color-black"><span>币种</span></uni-text></uni-view
        ><uni-view class="cell-input-box"
          ><uni-text class="font-13 color-gray" style="display: flex; align-items: center">
            <img src="../../assets/img/usdt.png" alt="" style="height: 16px" />
            <span style="margin-left: 4px">USDT</span>
          </uni-text>
        </uni-view></uni-view
      ><uni-view class="row-box"
        ><uni-view class="_title"
          ><uni-text class="font-13 color-black"><span>数量</span></uni-text
          ><uni-text class="font-13 color-black"
            ><span>可用 {{ availableAmount }} </span></uni-text
          ></uni-view
        ><uni-view class="cell-input-box"
          ><uni-input class="color-black font-13"
            ><div class="uni-input-wrapper">
              <input
                v-model="params.amount"
                type="number"
                maxlength="140"
                placeholder="划转金额"
                step="0.000000000000000001"
                enterkeyhint="done"
                pattern="[0-9]*"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input
          ><uni-text class="font-13 color-primary desc" @click="amountAll"
            ><span>全部</span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="tips"
        ><uni-text class="font-14 color-black"><span>划转需知</span></uni-text
        ><uni-text class="font-12 color-gray"
          ><span
            >只有将资产划转到对应的帐户才可以进行交易。 帐户间的划转不收取手续费。</span
          ></uni-text
        ></uni-view
      ><uni-view class="footer"
        ><uni-button @click="handleConfirm" class="bg-gray button"
          ><uni-text class="font-13 font-weight color-gray"
            ><span>确认划转</span></uni-text
          ></uni-button
        ></uni-view
      >
    </uni-view>
  </uni-view>
  <van-popup v-model:show="showBottom" position="bottom">
    <uni-view class="authPanel" style="height: auto; min-height: auto"
      ><uni-view class="title-box"
        ><uni-text class="font-15 font-weight color-black"><span>选择划入账户</span></uni-text
        ><uni-view class="close-icon"
          ><uni-text
            @click="showBottom = false"
            class="fui-icon"
            style="color: var(--content-primary); font-size: 1.5rem; font-weight: normal"
            ><span></span></uni-text
          ></uni-view
        > </uni-view
      ><uni-view class="list"
        ><uni-view
          class="l-cell"
          v-for="(item, index) in list"
          :key="index"
          @click="handleSelect(item)"
          :class="{
            'bg-gray':
              item.value === params.transferOutAccount || item.value === params.transferInAccount
          }"
          ><uni-text
            class="font-13 font-weight"
            :class="
              item.value === params.transferOutAccount || item.value === params.transferInAccount
                ? 'color-primary'
                : 'color-black'
            "
            ><span>{{ item.keyStr }}</span></uni-text
          ></uni-view
        ></uni-view
      ></uni-view
    >
  </van-popup>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useMainStore } from '@/store'
import { getUserBalance, getTransferList } from '@/api/account'
const router = useRouter()
const mainStore = useMainStore()
const params = ref({
  coin: 'usdt',
  transferOutAccount: '',
  transferInAccount: '',
  amount: ''
})
// 选择器数据
const tempList = computed(() => {
  const list = mainStore.getAssetsTabList.filter((item) => {
    // 对应参数key值 -->1 平台资产 2理财资产 3合约账户
    const key = { 平台资产: 1, 理财资产: 2, 合约资产: 3 }
    if (!item.isOpen) return false
    item.name == '平台资产' && (item.keyStr = '平台资产')
    item.name == '理财资产' && (item.keyStr = '理财资产')
    item.name == '合约资产' && (item.keyStr = '合约资产')

    item['text'] = item.keyStr
    item['value'] = key[item.name]
    return true
  })
  return list.sort((a, b) => a.sort - b.sort)
})
//默认值
params.value.transferOutAccount = tempList.value[0]?.value || ''
params.value.transferInAccount = tempList.value[1]?.value || ''
const transferOutAccountList = computed(() =>
  tempList.value.filter((item) => item.value != params.value.transferInAccount)
)
const transferInAccountList = computed(() =>
  tempList.value.filter((item) => item.value != params.value.transferOutAccount)
)
const returnName = (value) => {
  const list = mainStore.getAssetsTabList.filter((item) => {
    if (item.value == value) {
      return true
    }
  })
  return list[0]?.name
}
const list = ref([])
const isType = ref(false)
const showBottom = ref(false)
const handleShowBottom = (value) => {
  isType.value = value
  if (value) {
    list.value = transferOutAccountList.value
  } else {
    list.value = transferInAccountList.value
  }
  showBottom.value = true
}
const handleSelect = (item) => {
  if (isType.value) {
    params.value.transferOutAccount = item.value
  } else {
    params.value.transferInAccount = item.value
  }
  showBottom.value = false
}
const jiaohuanbtn = () => {
  ;[params.value.transferOutAccount, params.value.transferInAccount] = [
    params.value.transferInAccount,
    params.value.transferOutAccount
  ]
}
//获取余额
const availableList = ref([])
const getBalance = async () => {
  let res = await getUserBalance()
  if (res.code == '200') {
    availableList.value = res.data
  }
}
// 计算余额   -->1 平台资产 2理财资产 3合约账户
const availableAmount = computed(() => {
  let amountTemp = ''
  availableList.value.forEach((item, index) => {
    if (item?.type == params.value.transferOutAccount) {
      amountTemp = item.availableAmount
    }
  })

  return amountTemp
})
const amountAll = () => {
  params.value.amount = availableAmount.value
}
const handleConfirm = () => {
  if (!params.value.amount) {
    showToast('请输入划转金额')
    return
  }
  getTransferList(params.value).then((res) => {
    if (res.code == '200') {
      showToast('操作成功，请稍后...')
      getBalance()
    } else {
      showToast(res.msg || '')
    }
  })
}
onMounted(() => {
  getBalance()
})
</script>
