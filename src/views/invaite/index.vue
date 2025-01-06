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
            ><uni-text class="font-13 font-weight always-white mr-10"
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
                    ><uni-view class="flex align-center"
                      ><uni-text class="font-12 color-gray"><span>设定邀请链接</span></uni-text
                      ><uni-text
                        class="fui-icon"
                        style="
                          color: var(--content-primary);
                          font-size: 0.9375rem;
                          font-weight: normal;
                        "
                        ><span></span></uni-text
                      ></uni-view
                    ></uni-view
                  ><uni-view class="content-column"
                    ><uni-view class="content-column-item"
                      ><uni-text class="font-12 color-gray"><span>我的现货返佣</span></uni-text
                      ><uni-text class="font-18 color-black font-weight"
                        ><span>1% </span></uni-text
                      ></uni-view
                    ><uni-view class="content-column-item"
                      ><uni-text class="font-12 color-gray"><span>好友现货返现</span></uni-text
                      ><uni-text class="font-18 color-black font-weight"
                        ><span>--% </span></uni-text
                      ></uni-view
                    ><uni-view class="content-column-item"
                      ><uni-text class="font-12 color-gray"><span>我的合约返佣</span></uni-text
                      ><uni-text class="font-18 color-black font-weight"
                        ><span>2% </span></uni-text
                      ></uni-view
                    ><uni-view class="content-column-item"
                      ><uni-text class="font-12 color-gray"><span>好友合约返现</span></uni-text
                      ><uni-text class="font-18 color-black font-weight"
                        ><span>--% </span></uni-text
                      ></uni-view
                    ></uni-view
                  ><uni-view class="content-cell"
                    ><uni-text class="font-13 color-gray"><span>邀请码</span></uni-text
                    ><uni-view class="flex align-center"
                      ><uni-text class="font-13 color-black"><span>qb89VBxH</span></uni-text>
                      <img
                        class="copy-icon"
                        style="height: 20px"
                        src="../../assets/img/copy-dark.png" /></uni-view></uni-view
                  ><uni-view class="content-cell"
                    ><uni-text class="font-13 color-gray"><span>邀请链接</span></uni-text
                    ><uni-view class="flex align-center"
                      ><uni-text class="font-13 color-black"
                        ><span>oqwql.co....qb89VBxH</span></uni-text
                      >
                      <img
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
                          id=""
                          class="fui-button fui-button__flex-1"
                          app-parameter=""
                          scope=""
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
                    ><uni-view class="code-button">
                      <img
                        src="../../assets/img/qrcode-dark.png"
                        style="height: 28px"
                      /> </uni-view></uni-view></uni-view></uni-view></uni-view
            ><uni-view class="invite-scroll-bottom"
              ><uni-view class="bottom-cell"
                ><uni-text class="font-14 color-black font-weight"><span>我的返佣:</span></uni-text
                ><uni-text
                  class="fui-icon"
                  style="color: var(--content-primary); font-size: 1.1875rem; font-weight: normal"
                  ><span></span></uni-text
                ></uni-view
              ><uni-view class="bottom-card flex align-center"
                ><uni-view class="bottom-card-column"
                  ><uni-text class="font-12 color-gray"><span>总返佣(USDT) </span></uni-text
                  ><uni-text class="font-18 color-black font-weight"
                    ><span>0.01440000</span></uni-text
                  ></uni-view
                ><uni-view class="bottom-card-column"
                  ><uni-text class="font-12 color-gray"><span>已邀请好友(人) </span></uni-text
                  ><uni-text class="font-18 color-black font-weight"
                    ><span>6</span></uni-text
                  ></uni-view
                ></uni-view
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
                ><uni-view class="bottom-card-row"
                  ><uni-image style="height: 12px"
                    ><div
                      style="
                        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF1SURBVHgBtVXBUcMwENyT7RBeuANMBaSEUAF0AB2gVJChgjgVkBKgAlKC6UB04A9DEic6zoOJFbCNMgk747FOWu2d5JUM/APIDSJdTMA86J5BWQA8L9Jo7iXa08sZM93CA4rsaJn208YxN2BwBk9YVq3JQzcIwE9rWV4TkcCJZJ1IM666YviILtJTIy/TRpbtGTrbk7fxFPaACJ5vAzqSqCBx2q84VLSvP5IfotlBon3NyZrV5DsWH5oAnj4tEelVKl/5Hu3IZdZVkfb2qjT7Q3DUJdgoyiAjE3efGrEQHk/0QneJEjwR3a9e5DWsQlNMexfwrbQ1O5Hry7yL6y3KzHGdwL4dRRT10mVblcGhomKznTtWLpd5Fz+EB9jSNRHXScQhq6pdnjQLdbflylhYViGZbxrFoM6+/gQ8rKuEeXd8WiAaKLZj1IRpGGCTbzgYt9T4u4fw4MYyf8COMxWsUdUd2mmRCnKabHmaZrvd6tKNCEH2CeAkgvNRDg/2AAAAAElFTkSuQmCC');
                        background-size: 100% 100%;
                      "
                    ></div>
                    <uni-resize-sensor
                      ><div><div></div></div>
                      <div><div></div></div></uni-resize-sensor
                    ><img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF1SURBVHgBtVXBUcMwENyT7RBeuANMBaSEUAF0AB2gVJChgjgVkBKgAlKC6UB04A9DEic6zoOJFbCNMgk747FOWu2d5JUM/APIDSJdTMA86J5BWQA8L9Jo7iXa08sZM93CA4rsaJn208YxN2BwBk9YVq3JQzcIwE9rWV4TkcCJZJ1IM666YviILtJTIy/TRpbtGTrbk7fxFPaACJ5vAzqSqCBx2q84VLSvP5IfotlBon3NyZrV5DsWH5oAnj4tEelVKl/5Hu3IZdZVkfb2qjT7Q3DUJdgoyiAjE3efGrEQHk/0QneJEjwR3a9e5DWsQlNMexfwrbQ1O5Hry7yL6y3KzHGdwL4dRRT10mVblcGhomKznTtWLpd5Fz+EB9jSNRHXScQhq6pdnjQLdbflylhYViGZbxrFoM6+/gQ8rKuEeXd8WiAaKLZj1IRpGGCTbzgYt9T4u4fw4MYyf8COMxWsUdUd2mmRCnKabHmaZrvd6tKNCEH2CeAkgvNRDg/2AAAAAElFTkSuQmCC"
                      draggable="false" /></uni-image
                  ><uni-text class="font-13 color-black"
                    ><span
                      >获得返佣
                      <uni-text class="font-11 color-gray"
                        ><span> /好友进行现货和合约交易</span></uni-text
                      ></span
                    ></uni-text
                  ></uni-view
                ></uni-view
              ><uni-view class="bottom-cell"
                ><uni-text class="font-14 color-black font-weight"
                  ><span>24H返佣排行榜</span></uni-text
                ></uni-view
              ><uni-view class="bottom-list"
                ><uni-view class="not-data"
                  ><uni-view class="fui-empty__wrap" style="margin-top: 0px">
                    <img
                      src="../../assets/img/not-order.png"
                      alt=""
                      style="width: 6.25rem; height: 100px"
                    />
                    <uni-text
                      class="fui-empty__title"
                      style="color: var(--color-text-dark-gray); font-size: 0.8125rem"
                      ><span>暂无资料</span></uni-text
                    ></uni-view
                  ></uni-view
                ></uni-view
              ></uni-view
            >
          </div>
        </div>
      </div>
    </uni-scroll-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
