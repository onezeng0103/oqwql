<template>
  <uni-view class="edidMine"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 15px;
          padding-right: 15px;
          z-index: 9;
        "
        ><uni-view class="fui-nav__status-bar" style="height: 0px"></uni-view
        ><uni-view class="fui-nav__header"
          ><uni-view class="fui-nav__left"
            ><uni-text class="font-14 font-weight color-primary"
              ><span>新增</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
              ><span>编辑自选币种</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"
            ><uni-text class="font-14 font-weight color-primary" @click="router.push('/store')"
              ><span>完成</span></uni-text
            ></uni-view
          ></uni-view
        ></uni-view
      ></uni-view
    ><uni-view class="edidMine-body" style="height: 623px"
      ><uni-view class="desc-box"
        ><uni-text><span>币种</span></uni-text
        ><uni-text><span>置顶</span></uni-text></uni-view
      ><uni-scroll-view class="scroll-view" style="height: 545px; background: #111111"
        ><div class="uni-scroll-view">
          <div class="uni-scroll-view" style="overflow: hidden auto">
            <div class="uni-scroll-view-content">
              <uni-view class="label-group"
                ><uni-view class="label-item"
                  ><uni-view class="label-item-info"
                    ><uni-view class="checkbox"><uni-view class="not-check"></uni-view></uni-view
                    ><uni-view class="column"
                      ><uni-view class="row"
                        ><uni-text class="font-14 color-black font-weight mr-5"
                          ><span>USDC</span></uni-text
                        ><uni-text class="font-12 color-gray"
                          ><span> / USDT </span></uni-text
                        ></uni-view
                      ><uni-view class="row"
                        ><uni-text class="mini-tag"><span>现货</span></uni-text></uni-view
                      ></uni-view
                    ></uni-view
                  ><uni-view class="label-item-toggle">
                    <img
                      src="../../assets/img/sticky-dark.png"
                      alt=""
                      style="height: 16px"
                    /> </uni-view
                ></uni-view>
              </uni-view>
            </div>
          </div></div
      ></uni-scroll-view>
      <uni-view class="footer-box">
        <uni-view class="label">
          <uni-view class="checkbox">
            <uni-view class="not-check"></uni-view>
          </uni-view>
          <uni-text class="font-14 color-black font-weight">
            <span>全选</span>
          </uni-text>
        </uni-view>
        <uni-view class="delete-box">
          <img src="../../assets/img/delete-dark.png" alt="" style="height: 16px" />
          <uni-text class="font-14 color-black font-weight">
            <span>删除</span>
          </uni-text>
        </uni-view>
      </uni-view>
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
