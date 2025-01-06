<template>
  <uni-view class="rules"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--white);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 996;
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
              ><span>返佣规则</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="container"
      ><uni-view class="pd-15"
        ><uni-view class="bg-white pd-15 radius-card"
          ><uni-view
            ><uni-text class="font-14 font-weight color-black"
              ><span>CoinEx邀請返傭規則說明:</span></uni-text
            ></uni-view
          ><uni-view class="mt-15 content-text-wrap"
            ><uni-text class="font-12 color-black mb-10 block color-black"
              ><span
                >1.邀請新使用者註冊CoinEx，享有返傭獎勵，單一帳號的邀請好友數量無限;</span
              ></uni-text
            ><uni-text class="font-12 color-black mb-10 block" style="display: block"
              ><span
                >2.好友接受邀請後，進行交易，會產生相應比例 (最高20%) 的手續費返傭獎勵;</span
              ></uni-text
            ><uni-text class="font-12 color-black mb-10 block" style="display: block"
              ><span
                >3.邀請人可選擇下級返傭比例 (5%、10%、15%) ，與被邀請人一同享有交易返傭;</span
              ></uni-text
            ><uni-text class="font-12 color-black mb-10 block"
              ><span>4.現貨返傭與合約返傭並行，佣金日結，結算後返還至CoinEx帳戶。</span></uni-text
            ></uni-view
          ><uni-view class="mt-15"
            ><uni-text class="font-14 font-weight color-black"
              ><span>補充說明:</span></uni-text
            ></uni-view
          ><uni-view class="mt-15 content-text-wrap"
            ><uni-text class="font-12 color-black mb-10 block"
              ><span>1.交易返傭基數=交易額*對應幣對的費率-額外的手續費折扣;</span></uni-text
            ><uni-text class="font-12 color-black mb-10 block" style="display: block"
              ><span
                >2.CoinEx禁止多個帳號自我邀請，一經查實，相關聯的帳號獎勵均將取消;</span
              ></uni-text
            ><uni-text class="font-12 color-black block mb-10" style="display: block"
              ><span
                >3.CoinEx將根據實際情況對返傭規則進行調整，並享有本活動的最終解釋權。</span
              ></uni-text
            ></uni-view
          ></uni-view
        ></uni-view
      ></uni-view
    ></uni-view
  >
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
