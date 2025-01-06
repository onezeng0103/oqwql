<template>
  <uni-view class="invite"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: rgb(22, 24, 25);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 9;
        "
        ><uni-view class="fui-nav__status-bar" style="height: 0px"></uni-view
        ><uni-view class="fui-nav__header"
          ><uni-view class="fui-nav__left"
            ><uni-text
              class="fui-icon"
              @click="router.back()"
              style="color: rgb(255, 255, 255); font-size: 1.75rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: rgb(255, 255, 255); font-weight: 500"
              ><span>邀请好友</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"
            ><uni-text
              @click="router.push('/invaite/rules')"
              class="font-13 font-weight always-white mr-10"
              ><span>规则</span></uni-text
            ></uni-view
          ></uni-view
        ></uni-view
      ></uni-view
    ><uni-scroll-view class="invite-scroll" style="height: 623px"
      ><div class="uni-scroll-view">
        <div class="uni-scroll-view" style="overflow: hidden auto">
          <div class="uni-scroll-view-content">
            <uni-view class="invite-scroll-head"
              ><uni-view class="head-banner">
                <img style="height: 258px" src="../../assets/img/index_bg_en-CV3X-juJ.png" alt="" />
              </uni-view>
              <uni-view class="head-card"
                ><uni-view class="head-card-content"
                  ><uni-view class="content-title"
                    ><uni-text class="font-14 color-black font-weight"
                      ><span>邀请返佣</span></uni-text
                    ></uni-view
                  ><uni-view class="content-column"
                    ><uni-view class="content-column-item"
                      ><uni-text class="font-12 color-gray"><span>昨日注册</span></uni-text
                      ><uni-text class="font-18 color-black font-weight"
                        ><span>{{ agentInfo.yesterdayCount || 0 }}</span></uni-text
                      ></uni-view
                    ><uni-view class="content-column-item"
                      ><uni-text class="font-12 color-gray"><span>今日注册</span></uni-text
                      ><uni-text class="font-18 color-black font-weight"
                        ><span>{{ agentInfo.todayCount || 0 }}</span></uni-text
                      ></uni-view
                    ><uni-view class="content-column-item"
                      ><uni-text class="font-12 color-gray"><span>直属下级</span></uni-text
                      ><uni-text class="font-18 color-black font-weight"
                        ><span>{{ agentInfo.childCount || 0 }}</span></uni-text
                      ></uni-view
                    ><uni-view class="content-column-item"
                      ><uni-text class="font-12 color-gray"><span>下级人数</span></uni-text
                      ><uni-text class="font-18 color-black font-weight"
                        ><span>{{ agentInfo.childAllCount || 0 }}</span></uni-text
                      ></uni-view
                    ></uni-view
                  ><uni-view class="content-cell"
                    ><uni-text class="font-13 color-gray"><span>邀请码</span></uni-text
                    ><uni-view class="flex align-center"
                      ><uni-text class="font-13 color-black"
                        ><span>{{ userInfo?.user?.activeCode }}</span></uni-text
                      >
                      <img
                        @click="toCopy(userInfo?.user?.activeCode)"
                        class="copy-icon"
                        style="height: 20px"
                        src="../../assets/img/copy-dark.png" /></uni-view></uni-view
                  ><uni-view class="content-cell"
                    ><uni-text class="font-13 color-gray"><span>邀请链接</span></uni-text
                    ><uni-view class="flex align-center"
                      ><uni-text class="font-13 color-black"
                        ><span>{{ shareLink + userInfo?.user?.activeCode }}</span></uni-text
                      >
                      <img
                        @click="toCopy(shareLink + userInfo?.user?.activeCode)"
                        class="copy-icon"
                        style="height: 20px"
                        src="../../assets/img/copy-dark.png" /></uni-view></uni-view
                  ><uni-view class="content-buttons"
                    ><uni-view class="button"
                      ><uni-view
                        class="fui-button__wrap fui-button__flex-1"
                        style="
                          width: 100%;
                          height: 2.4375rem;
                          margin: 0px;
                          border-radius: 2.4375rem;
                          background: var(--content-primary);
                        "
                        ><uni-button
                          @click="toCopy(shareLink + userInfo?.user?.activeCode)"
                          class="fui-button fui-button__flex-1"
                          style="
                            width: 100%;
                            height: 2.4375rem;
                            line-height: 2.4375rem;
                            background: var(--content-primary);
                            border-width: 0px;
                            border-color: var(--content-primary);
                            border-radius: 2.4375rem;
                            font-size: 0.8125rem;
                            color: var(--background-primary);
                          "
                          ><uni-text
                            class="fui-button__text"
                            style="
                              font-size: 0.8125rem;
                              line-height: 0.8125rem;
                              color: var(--background-primary);
                            "
                            ><span>邀请好友</span></uni-text
                          ></uni-button
                        ></uni-view
                      ></uni-view
                    ><uni-view
                      class="code-button"
                      @click="handleShowCenter(shareLink + userInfo?.user?.activeCode)"
                    >
                      <img
                        src="../../assets/img/qrcode-dark.png"
                        style="height: 28px"
                      /> </uni-view></uni-view></uni-view></uni-view></uni-view
            ><uni-view class="invite-scroll-bottom"
              ><uni-view class="bottom-cell"
                ><uni-text class="font-14 color-black font-weight"
                  ><span>邀请攻略</span></uni-text
                ></uni-view
              ><uni-view class="bottom-card"
                ><uni-view class="bottom-card-row"
                  ><uni-image style="height: 14px"
                    ><div
                      style="
                        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFPSURBVHgBrZTfUYQwEMa/hQN9pASsQK1ArgM70BKwAq4ErgLtRK4DrwPsgBdG5d8abhhCIAkj474wyX757bK7CfBPRjanF1fPYDyNYuJTlV4ddNqdbvM6rqOWORGQaOY6wWA7FfAVtuy+Ckhk0H/ABgpiDkpuEgGIYTEPlFc2UMn1u/jcKR5CxswFgR6HnaJMfWNGznDoKM8jZ6J9nfp7AQkmYCNkBIlDbxchdS/V0b9pUi8b/OFEe7aBxmIL2L3iEXUD16GM2OVYy0gfoVFqRnDXf01nhFYBfWO3DSRc4WRRIKUCm0CMW8j0rNnYQepcWTtmBInL2kMCmRBn2ALi6SBeRI61PkbQomNyQP8Kch8my9VC96Z9j8RlDUcodZ86jR//HGRgLrQgKB2jRUZ9M5iRjIGJMkcnmm0tQJ06rL2dnTVR/5jNNe6sGf2F/gXjfHDdLZu1eAAAAABJRU5ErkJggg==');
                        background-size: 100% 100%;
                      "
                    ></div>
                    <uni-resize-sensor
                      ><div><div></div></div>
                      <div><div></div></div></uni-resize-sensor
                    ><img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFPSURBVHgBrZTfUYQwEMa/hQN9pASsQK1ArgM70BKwAq4ErgLtRK4DrwPsgBdG5d8abhhCIAkj474wyX757bK7CfBPRjanF1fPYDyNYuJTlV4ddNqdbvM6rqOWORGQaOY6wWA7FfAVtuy+Ckhk0H/ABgpiDkpuEgGIYTEPlFc2UMn1u/jcKR5CxswFgR6HnaJMfWNGznDoKM8jZ6J9nfp7AQkmYCNkBIlDbxchdS/V0b9pUi8b/OFEe7aBxmIL2L3iEXUD16GM2OVYy0gfoVFqRnDXf01nhFYBfWO3DSRc4WRRIKUCm0CMW8j0rNnYQepcWTtmBInL2kMCmRBn2ALi6SBeRI61PkbQomNyQP8Kch8my9VC96Z9j8RlDUcodZ86jR//HGRgLrQgKB2jRUZ9M5iRjIGJMkcnmm0tQJ06rL2dnTVR/5jNNe6sGf2F/gXjfHDdLZu1eAAAAABJRU5ErkJggg=="
                      draggable="false" /></uni-image
                  ><uni-text class="font-13 color-black"
                    ><span
                      >邀请好友
                      <uni-text class="font-11 color-gray"
                        ><span> /分享链接或邀请码</span></uni-text
                      ></span
                    ></uni-text
                  ></uni-view
                ><uni-view class="bottom-card-row"
                  ><uni-image style="height: 12px"
                    ><div
                      style="
                        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGCSURBVHgBtVXhUYNQDP5Ceb3e+YcRcAK7QesGjNAuYNlAO4FlAnWDbiBOYEfACeRPtfa1xFCkfeWggNbvjiPJCx+5kHwA/wQynZ7/6W6584BmiDqkpqsZRbXE8NlRrN/RHLEmdYkZxcUD68jLEiI0h9OTq+zALgaYaExgF6VIHGIaMMhDDQgtofz1CIz9d9BBt5TDQnv0DXtRldSemHGVm0TJ2/mIAfdg0nkqtm/0rUlswQorc3ECjsz1EtojxiABPJmWwmjZUWPilOwj2UyYeLhkPUxjjJLxIQRVW4divproe6HxUY1YHpgnRE+bmQpP5B2IK0kJIYNfpKNhHZkJoxXsGW+LmDC9gJrHJTrQBLuKbV8Pifk5D3aIrlctqiuDlbFvzW3CX0n3xHJzjdgCZ0DWY2NNpfxf9bTrf92Z/q7HarJOxT0f/kiCYR3ROuiOc1sUry/FvRrHCzv7HR2JtSsLMarhfTQd0WeHdmv0U62Ik7WB7aIlRIED0y9+/FScvgEuYX1MtJ911wAAAABJRU5ErkJggg==');
                        background-size: 100% 100%;
                      "
                    ></div>
                    <uni-resize-sensor
                      ><div><div></div></div>
                      <div><div></div></div></uni-resize-sensor
                    ><img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGCSURBVHgBtVXhUYNQDP5Ceb3e+YcRcAK7QesGjNAuYNlAO4FlAnWDbiBOYEfACeRPtfa1xFCkfeWggNbvjiPJCx+5kHwA/wQynZ7/6W6584BmiDqkpqsZRbXE8NlRrN/RHLEmdYkZxcUD68jLEiI0h9OTq+zALgaYaExgF6VIHGIaMMhDDQgtofz1CIz9d9BBt5TDQnv0DXtRldSemHGVm0TJ2/mIAfdg0nkqtm/0rUlswQorc3ECjsz1EtojxiABPJmWwmjZUWPilOwj2UyYeLhkPUxjjJLxIQRVW4divproe6HxUY1YHpgnRE+bmQpP5B2IK0kJIYNfpKNhHZkJoxXsGW+LmDC9gJrHJTrQBLuKbV8Pifk5D3aIrlctqiuDlbFvzW3CX0n3xHJzjdgCZ0DWY2NNpfxf9bTrf92Z/q7HarJOxT0f/kiCYR3ROuiOc1sUry/FvRrHCzv7HR2JtSsLMarhfTQd0WeHdmv0U62Ik7WB7aIlRIED0y9+/FScvgEuYX1MtJ911wAAAABJRU5ErkJggg=="
                      draggable="false" /></uni-image
                  ><uni-text class="font-13 color-black"
                    ><span
                      >好友注册
                      <uni-text class="font-11 color-gray"
                        ><span> /通过链接或邀请码注册</span></uni-text
                      ></span
                    ></uni-text
                  ></uni-view
                ></uni-view
              ></uni-view
            >
          </div>
        </div>
      </div>
    </uni-scroll-view>
  </uni-view>
  <van-popup v-model:show="showCenter" round>
    <uni-view class="qrcode-popup"
      ><uni-view class="qrcode-head"
        ><uni-view class="cell">
          <img
            :src="path"
            style="
              width: 1.5625rem;
              height: 1.5625rem;
              border-radius: 0.3125rem;
              margin-right: 0.625rem;
            "
            draggable="false"
          />
          <uni-text class="font-14 color-black font-weight"
            ><span>{{ VITE_APP_EXCHANGE_NAME }}</span></uni-text
          ></uni-view
        ><uni-view class="cell"
          ><uni-text class="font-13 color-black"
            ><span>立即加入，一起赚钱</span></uni-text
          ></uni-view
        ><uni-view class="code-box">
          <img :src="QRCodeIMG" class="code-canvas" />
          <uni-text class="font-13 color-gray"><span>邀请码</span></uni-text
          ><uni-text class="font-14 color-black font-weight"
            ><span>{{ userInfo?.user?.activeCode }}</span></uni-text
          ></uni-view
        ></uni-view
      ><uni-view class="qrcode-close" @click="showCenter = false"
        ><uni-text
          class="fui-icon"
          style="color: var(--content-primary); font-size: 1.125rem; font-weight: normal"
          ><span></span></uni-text
        ></uni-view
      ></uni-view
    >
  </van-popup>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useUserStore } from '@/store/user/index'
import { useMainStore } from '@/store'
import { getAgentInfo } from '@/api/invaite/index.js'
import Copy from 'vue-clipboard3'
import QRCode from 'qrcode'
const router = useRouter()
const useStore = useUserStore()
const mainStore = useMainStore()
const { toClipboard } = Copy()
const { userInfo } = storeToRefs(useStore)
const shareLink = `${location.origin}/#/i&`
const agentInfo = ref({})
const toCopy = async (text) => {
  try {
    await toClipboard(`${text}`)
    showToast('复制成功')
  } catch (e) {
    _toast('复制失败')
  }
}
const showCenter = ref(false)
const handleShowCenter = (value) => {
  getQR(value)
  showCenter.value = true
}
const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const VITE_APP_EXCHANGE_NAME = import.meta.env.VITE_APP_EXCHANGE_NAME
const QRCodeIMG = ref()
const getQR = (address) => {
  console.log(address)

  if (address) {
    QRCode.toDataURL(address, {
      version: '',
      errorCorrectionLevel: 'H',
      maskPattern: 2,
      margin: 2,
      scale: 3,
      height: 120,
      width: 120,
      scal: 200,
      color: {
        dark: '#000',
        light: '#fff'
      }
    }).then((url) => {
      QRCodeIMG.value = url
    })
  }
}
onMounted(() => {
  getAgentInfo().then((res) => {
    agentInfo.value = res.data
  })
})
</script>
