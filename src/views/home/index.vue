<template>
  <uni-view id="home" class="home">
    <uni-view style="height: 44px">
      <uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--white);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 9;
        "
      >
        <uni-view class="fui-nav__header">
          <uni-view class="nav-bar">
            <uni-view class="nav-bar-avatar">
              <uni-view
                class="fui-avatar__wrap fui-avatar__circle"
                style="
                  background: var(--white);
                  margin-right: 0px;
                  margin-bottom: 0px;
                  width: 1.9375rem;
                  height: 1.9375rem;
                "
              >
                <div style="width: 1.9375rem; height: 1.9375rem" @click="showLeft = true">
                  <img :src="path" width="100%" height="100%" draggable="false" />
                </div>
              </uni-view>
            </uni-view>
            <uni-view class="nav-bar-search bg-gray">
              <uni-text
                class="fui-icon"
                style="color: var(--color-text-dark-gray); font-size: 1rem; font-weight: normal"
              >
                <span></span>
              </uni-text>
              <uni-text class="font-13 font-weight color-gray">
                <span>BTC</span></uni-text
              ></uni-view
            >
            <uni-view class="nav-bar-button">
              <uni-view class="bar-button">
                <img
                  width="100%"
                  height="100%"
                  src="../../assets/img/customer-dark.png"
                  draggable="false"
                /> </uni-view
              ><uni-view class="bar-button">
                <img
                  width="100%"
                  height="100%"
                  src="../../assets/img/notify-dark.png"
                  draggable="false" /></uni-view></uni-view></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="page_main">
      <uni-view class="property">
        <template v-if="isSign">
          <uni-view class="property_top notranslate">
            <uni-text class="font-14 color-gray font-weight notranslate">
              <span>资产估值(USDT)</span></uni-text
            >
          </uni-view>
          <uni-view class="property_con">
            <uni-view class="property_con_left notranslate">
              <uni-text class="font-18 color-black font-weight notranslate">
                <span>40,241.15</span>
              </uni-text>
              <uni-text class="font-12 color-gray notranslate">
                <span>≈$40,194.07</span>
              </uni-text>
            </uni-view>
            <uni-view
              class="fui-button__wrap"
              style="
                width: 5rem;
                height: 2.0625rem;
                margin: 0px;
                border-radius: 0.25rem;
                background: var(--blue);
              "
            >
              <uni-button
                class="fui-button"
                style="
                  width: 5rem;
                  height: 2.0625rem;
                  line-height: 2.0625rem;
                  background: var(--blue);
                  border-width: 0px;
                  border-color: var(--blue);
                  border-radius: 0.25rem;
                  font-size: 0.75rem;
                  color: rgb(255, 255, 255);
                "
                >充值/買幣</uni-button
              ></uni-view
            ></uni-view
          >
        </template>
        <template v-else>
          <uni-view class="banner"
            ><uni-view class="left"
              ><uni-text class="font-14 color-black font-weight"
                ><span>立即注册，领取丰厚奖励</span></uni-text
              ><uni-text class="font-13 color-blue font-weight"
                ><span @click="router.push('/login')">登入/注册</span></uni-text
              ></uni-view
            >
            <img
              style="width: 6.59375rem; height: 3.71875rem"
              src="../../assets/img/bg-aHsi6WdP.png"
              alt=""
          /></uni-view>
        </template>
      </uni-view>
      <uni-view class="menu"
        ><uni-view class="menu_item" @click="router.push('/invaite')"
          ><uni-view class="imgBox">
            <img
              style="width: 1.875rem; height: 1.875rem"
              src="../../assets/img/invite-white.png"
              draggable="false"
            /> </uni-view
          ><uni-text class="font-13 color-dark"><span>邀请好友</span></uni-text></uni-view
        ><uni-view class="menu_item" @click="router.push('/flashExchange')">
          <uni-view class="imgBox">
            <img
              style="width: 1.875rem; height: 1.875rem"
              src="../../assets/img/flashExchange.png"
              draggable="false"
            /> </uni-view
          ><uni-text class="font-13 color-dark"><span>闪兑</span></uni-text></uni-view
        ><uni-view class="menu_item" @click="router.push('/recharge')">
          <uni-view class="imgBox">
            <img
              style="width: 1.875rem; height: 1.875rem"
              src="../../assets/img/recharge-dark.png"
              draggable="false"
            /> </uni-view
          ><uni-text class="font-13 color-dark"><span>充值</span></uni-text></uni-view
        ><uni-view class="menu_item" @click="router.push('/more')"
          ><uni-view class="imgBox">
            <img
              style="width: 1.875rem; height: 1.875rem"
              src="../../assets/img/menu-white.png"
              draggable="false"
            /> </uni-view
          ><uni-text class="font-13 color-dark"><span>更多</span></uni-text></uni-view
        ></uni-view
      >
      <van-swipe class="swiper_wrap" :autoplay="3000000" indicator-color="var(--color-blue-bg)">
        <van-swipe-item v-for="(item, index) in imgList" :key="index">
          <img
            style="width: 100%; height: 112px; object-fit: cover"
            class="swiper_item"
            :src="item"
            alt=""
          />
        </van-swipe-item>
      </van-swipe>
      <van-notice-bar
        background="var(--background-white)"
        color="var(--text-white)"
        left-icon="volume-o"
        text="开始您的数字货币之旅"
        style="padding: 0"
      >
        <template #left-icon>
          <img
            style="width: 1.1875rem; height: 1.1875rem; margin-right: 0.5rem"
            src="../../assets/img/notice-dark.png"
            draggable="false"
          />
        </template>
        <template #right-icon>
          <img
            style="width: 1.1875rem; height: 1.1875rem"
            src="../../assets/img/more1-dark.png"
            draggable="false"
          />
        </template>
      </van-notice-bar>
      <uni-view class="content_wrap"
        ><uni-scroll-view
          data-v-4c7cfa9d=""
          class="fui-tabs__scrollbox"
          style="background: var(--white); z-index: 1; top: auto"
        >
          <div class="uni-scroll-view">
            <div
              class="uni-scroll-view uni-scroll-view-scrollbar-hidden"
              style="overflow: auto hidden"
            >
              <div class="uni-scroll-view-content">
                <uni-view data-v-4c7cfa9d="" class="fui-scroll__view"
                  ><uni-view data-v-4c7cfa9d="" class="fui-tabs__item" id="fui_4651"
                    ><uni-view
                      data-v-4c7cfa9d=""
                      class="fui-tabs__text-wrap"
                      style="height: 2.0625rem"
                      ><uni-view
                        data-v-4c7cfa9d=""
                        class="fui-tabs__text"
                        style="
                          font-size: 0.875rem;
                          color: var(--color-title-black);
                          font-weight: 500;
                          transform: scale(1);
                        "
                        >自选
                      </uni-view></uni-view
                    ></uni-view
                  ><uni-view data-v-4c7cfa9d="" class="fui-tabs__item" id="fui_b9z9"
                    ><uni-view
                      data-v-4c7cfa9d=""
                      class="fui-tabs__text-wrap"
                      style="height: 2.0625rem"
                      ><uni-view
                        data-v-4c7cfa9d=""
                        class="fui-tabs__text"
                        style="
                          font-size: 0.875rem;
                          color: var(--color-text-dark-gray);
                          font-weight: normal;
                          transform: scale(1);
                        "
                        >涨幅榜
                      </uni-view></uni-view
                    ></uni-view
                  ><uni-view data-v-4c7cfa9d="" class="fui-tabs__item" id="fui_ap68"
                    ><uni-view
                      data-v-4c7cfa9d=""
                      class="fui-tabs__text-wrap"
                      style="height: 2.0625rem"
                      ><uni-view
                        data-v-4c7cfa9d=""
                        class="fui-tabs__text"
                        style="
                          font-size: 0.875rem;
                          color: var(--color-text-dark-gray);
                          font-weight: normal;
                          transform: scale(1);
                        "
                        >跌幅榜
                      </uni-view></uni-view
                    ></uni-view
                  ><uni-view data-v-4c7cfa9d="" class="fui-tabs__item" id="fui_85zm"
                    ><uni-view
                      data-v-4c7cfa9d=""
                      class="fui-tabs__text-wrap"
                      style="height: 2.0625rem"
                      ><uni-view
                        data-v-4c7cfa9d=""
                        class="fui-tabs__text"
                        style="
                          font-size: 0.875rem;
                          color: var(--color-text-dark-gray);
                          font-weight: normal;
                          transform: scale(1);
                        "
                        >成交额
                      </uni-view></uni-view
                    ></uni-view
                  ></uni-view
                >
              </div>
            </div>
          </div> </uni-scroll-view
        ><uni-view class="list_wrap"
          ><uni-view class="list_top"
            ><uni-view class="_left"
              ><uni-view class="_item"
                ><uni-text class="font-11 color-gray"><span>现货</span></uni-text
                ><uni-image>
                  <div
                    style="
                      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA15pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LmE4ZDQ3NTM0OSwgMjAyMy8wMy8yMy0xMzowNTo0NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iQkUxQUFDRTIyQTZDRkMwNkUyNTY3NUIwNEY1N0QzMzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEZGQ0U4NTM0OENFMTFFRTgyNDU4MDk5MEFDOEYyRUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEZGQ0U4NTI0OENFMTFFRTgyNDU4MDk5MEFDOEYyRUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2QxODZmNDItMTIwZC0wODRlLTgxYTktMjNkYzI4MDNmODEyIiBzdFJlZjpkb2N1bWVudElEPSJCRTFBQUNFMjJBNkNGQzA2RTI1Njc1QjA0RjU3RDMzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkpVr/0AAAK3SURBVHjabJNbaxNBFMfntpu90aS5NMkmEIuvfgDf9VWwvgj6lcRX32xB6GsprYIgPhZqRQQhiiAUsTTGW9Om7e5md8f/mWSjrU4YJnNmz2/+5zJ8fHzqaq2dTOcSq2TToYUQmlbNLo6cX9yLmUVKGdm2fWYpK1P9fv9BlmXXJlm6nKbpIv47MzjHYPkl7GUo15lZHcf5VK/X19vt9kPx7cf3+6fnZ9fzPO8A5gOESyUXUhog/hOdZUwbIO2hKFFK5QUYfmw8Hl8djUb3IKwmXNf9BaOFDSIWBjCZTBj2DI6aHMhGkwYioXMbq6C9ZVmazsi3VCq9g89ItFudRyXb/RwnKZukOedC0cTtBBE8Y6SSoBKOCvFSBNxM+i5JUw4q84LgQ6VafY71WPV6vS14d6Ikvgt1TSoQbuOkiNSCywq1pEZQnvO8sOmz83Neq9W+NJvNrUaj8RKFSpTjWe9bYftJmmfOcDhciaKoYdKgJJXK5JDgJr8zMAHpUqqT53kDADfCMFz3XO8jGRUVt1z2X0vZoxzxg4ODlTiO64rblKN5PglEk1QSkGyIaBC2w41Op7PmOu7bXE8jMFCqQRA4r7rdLiWSQ/HtaJLUC+ci/L8UMt/3DyuVyma3G64C+KboAnMZosHtSJ0winehmA754fDrHShehJppk087g7qBwzZcWFjYbLVaa77n79F5mqXT9sNPcSiV0AflBu67zu5y7wq9Lnd/f/+W5wc+1HHqUYTObcv6CdgmCvzYday94glKqeYPQv1p4NkLgTOae6cM2UtLS8HR0dFNvBaHC1P1URAEz6Y5tPbiJGOeLdnlMYcSrMivbQuGNnmBMO0kSfTJyckNYakYCrfxDFeDwN0xzupf4Lz6BCpmsfe8Evq19hShjwaDQR8tFkHhdrVaNkXJZ9/9b/wWYADKo1iDXkpdCwAAAABJRU5ErkJggg==');
                      background-position: 0% 0%;
                      background-size: 100% 100%;
                    "
                  ></div>
                  <span></span
                  ><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA15pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LmE4ZDQ3NTM0OSwgMjAyMy8wMy8yMy0xMzowNTo0NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iQkUxQUFDRTIyQTZDRkMwNkUyNTY3NUIwNEY1N0QzMzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEZGQ0U4NTM0OENFMTFFRTgyNDU4MDk5MEFDOEYyRUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEZGQ0U4NTI0OENFMTFFRTgyNDU4MDk5MEFDOEYyRUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2QxODZmNDItMTIwZC0wODRlLTgxYTktMjNkYzI4MDNmODEyIiBzdFJlZjpkb2N1bWVudElEPSJCRTFBQUNFMjJBNkNGQzA2RTI1Njc1QjA0RjU3RDMzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkpVr/0AAAK3SURBVHjabJNbaxNBFMfntpu90aS5NMkmEIuvfgDf9VWwvgj6lcRX32xB6GsprYIgPhZqRQQhiiAUsTTGW9Om7e5md8f/mWSjrU4YJnNmz2/+5zJ8fHzqaq2dTOcSq2TToYUQmlbNLo6cX9yLmUVKGdm2fWYpK1P9fv9BlmXXJlm6nKbpIv47MzjHYPkl7GUo15lZHcf5VK/X19vt9kPx7cf3+6fnZ9fzPO8A5gOESyUXUhog/hOdZUwbIO2hKFFK5QUYfmw8Hl8djUb3IKwmXNf9BaOFDSIWBjCZTBj2DI6aHMhGkwYioXMbq6C9ZVmazsi3VCq9g89ItFudRyXb/RwnKZukOedC0cTtBBE8Y6SSoBKOCvFSBNxM+i5JUw4q84LgQ6VafY71WPV6vS14d6Ikvgt1TSoQbuOkiNSCywq1pEZQnvO8sOmz83Neq9W+NJvNrUaj8RKFSpTjWe9bYftJmmfOcDhciaKoYdKgJJXK5JDgJr8zMAHpUqqT53kDADfCMFz3XO8jGRUVt1z2X0vZoxzxg4ODlTiO64rblKN5PglEk1QSkGyIaBC2w41Op7PmOu7bXE8jMFCqQRA4r7rdLiWSQ/HtaJLUC+ci/L8UMt/3DyuVyma3G64C+KboAnMZosHtSJ0winehmA754fDrHShehJppk087g7qBwzZcWFjYbLVaa77n79F5mqXT9sNPcSiV0AflBu67zu5y7wq9Lnd/f/+W5wc+1HHqUYTObcv6CdgmCvzYday94glKqeYPQv1p4NkLgTOae6cM2UtLS8HR0dFNvBaHC1P1URAEz6Y5tPbiJGOeLdnlMYcSrMivbQuGNnmBMO0kSfTJyckNYakYCrfxDFeDwN0xzupf4Lz6BCpmsfe8Evq19hShjwaDQR8tFkHhdrVaNkXJZ9/9b/wWYADKo1iDXkpdCwAAAABJRU5ErkJggg=="
                    draggable="false"
                  /> </uni-image></uni-view
              ><uni-text class="font-11 color-gray"><span>最新价</span></uni-text></uni-view
            ><uni-view class="_right"
              ><uni-text class="font-11 color-gray"><span>24h 涨跌幅</span></uni-text></uni-view
            ></uni-view
          ><uni-view class="select"
            ><uni-view class="select_list"
              ><uni-view class="select_list_item" style="margin-bottom: 15px"
                ><uni-view class="_row flex align-center justify-between"
                  ><uni-text class="font-14 color-black font-weight"><span>INJUSDT</span></uni-text
                  ><uni-view class="check-box"
                    ><uni-image class="checkImage">
                      <div
                        style="
                          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                          background-position: 0% 0%;
                          background-size: 100% 100%;
                        "
                      ></div>
                      <span></span
                      ><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                        draggable="false"
                      /> </uni-image></uni-view></uni-view
                ><uni-text class="font-13 font-weight _centerText price_up"
                  ><span>21.91</span></uni-text
                ><uni-text class="font-11 font-weight price_up"
                  ><span>4.98% </span></uni-text
                ></uni-view
              ><uni-view class="select_list_item" style="margin-bottom: 15px"
                ><uni-view class="_row flex align-center justify-between"
                  ><uni-text class="font-14 color-black font-weight"><span>SOLUSDT</span></uni-text
                  ><uni-view class="check-box"
                    ><uni-image class="checkImage">
                      <div
                        style="
                          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                          background-position: 0% 0%;
                          background-size: 100% 100%;
                        "
                      ></div>
                      <span></span
                      ><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                        draggable="false"
                      /> </uni-image></uni-view></uni-view
                ><uni-text class="font-13 font-weight _centerText price_up"
                  ><span>207.64</span></uni-text
                ><uni-text class="font-11 font-weight price_up"
                  ><span>4.37% </span></uni-text
                ></uni-view
              ><uni-view class="select_list_item" style="margin-bottom: 15px"
                ><uni-view class="_row flex align-center justify-between"
                  ><uni-text class="font-14 color-black font-weight"><span>SHIBUSDT</span></uni-text
                  ><uni-view class="check-box"
                    ><uni-image class="checkImage">
                      <div
                        style="
                          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                          background-position: 0% 0%;
                          background-size: 100% 100%;
                        "
                      ></div>
                      <span></span
                      ><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                        draggable="false"
                      /> </uni-image></uni-view></uni-view
                ><uni-text class="font-13 font-weight _centerText price_up"
                  ><span>0.00</span></uni-text
                ><uni-text class="font-11 font-weight price_up"
                  ><span>3.88% </span></uni-text
                ></uni-view
              ><uni-view class="select_list_item" style="margin-bottom: 15px"
                ><uni-view class="_row flex align-center justify-between"
                  ><uni-text class="font-14 color-black font-weight"><span>TRXUSDT</span></uni-text
                  ><uni-view class="check-box"
                    ><uni-image class="checkImage">
                      <div
                        style="
                          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                          background-position: 0% 0%;
                          background-size: 100% 100%;
                        "
                      ></div>
                      <span></span
                      ><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                        draggable="false"
                      /> </uni-image></uni-view></uni-view
                ><uni-text class="font-13 font-weight _centerText price_up"
                  ><span>0.26</span></uni-text
                ><uni-text class="font-11 font-weight price_up"
                  ><span>3.18% </span></uni-text
                ></uni-view
              ><uni-view class="select_list_item" style="margin-bottom: 15px"
                ><uni-view class="_row flex align-center justify-between"
                  ><uni-text class="font-14 color-black font-weight"><span>FILUSDT</span></uni-text
                  ><uni-view class="check-box"
                    ><uni-image class="checkImage">
                      <div
                        style="
                          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                          background-position: 0% 0%;
                          background-size: 100% 100%;
                        "
                      ></div>
                      <span></span
                      ><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                        draggable="false"
                      /> </uni-image></uni-view></uni-view
                ><uni-text class="font-13 font-weight _centerText price_up"
                  ><span>5.37</span></uni-text
                ><uni-text class="font-11 font-weight price_up"
                  ><span>3.51% </span></uni-text
                ></uni-view
              ><uni-view class="select_list_item" style="margin-bottom: 15px"
                ><uni-view class="_row flex align-center justify-between"
                  ><uni-text class="font-14 color-black font-weight"><span>AVAXUSDT</span></uni-text
                  ><uni-view class="check-box"
                    ><uni-image class="checkImage">
                      <div
                        style="
                          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                          background-position: 0% 0%;
                          background-size: 100% 100%;
                        "
                      ></div>
                      <span></span
                      ><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                        draggable="false"
                      /> </uni-image></uni-view></uni-view
                ><uni-text class="font-13 font-weight _centerText price_up"
                  ><span>39.79</span></uni-text
                ><uni-text class="font-11 font-weight price_up"
                  ><span>3.27% </span></uni-text
                ></uni-view
              ></uni-view
            ><uni-view
              class="select_button flex align-center justify-center"
              style="margin-bottom: 70px"
              ><uni-view
                class="fui-button__wrap"
                style="
                  width: 13.75rem;
                  height: 2.4375rem;
                  margin: 0px;
                  border-radius: 0.3125rem;
                  background: var(--blue);
                "
                ><uni-button
                  id=""
                  class="fui-button"
                  app-parameter=""
                  scope=""
                  style="
                    width: 13.75rem;
                    height: 2.4375rem;
                    line-height: 2.4375rem;
                    background: var(--blue);
                    border-width: 0px;
                    border-color: var(--blue);
                    border-radius: 0.3125rem;
                    font-size: 0.875rem;
                    color: rgb(255, 255, 255);
                  "
                  >新增自选</uni-button
                ></uni-view
              ></uni-view
            ></uni-view
          ><uni-view class="list"></uni-view></uni-view></uni-view></uni-view
    ><uni-view
      class="fui-backdrop__wrap fui-backdrop__bg"
      style="position: fixed; z-index: 999"
    ></uni-view
    ><uni-view class="fui-bottom__popup-wrap" style="z-index: 996; background: rgba(0, 0, 0, 0.6)"
      ><uni-view
        class="fui-bottom__popup"
        style="
          border-top-left-radius: 0.75rem;
          border-top-right-radius: 0.75rem;
          background: var(--white);
        "
        ><uni-view class="addfunds-popup"
          ><uni-view class="popup-title"
            ><uni-text class="font-16 color-black font-weight"><span>添加资产</span></uni-text
            ><uni-view class="close"
              ><uni-text
                class="fui-icon"
                style="color: var(--black); font-size: 1.5rem; font-weight: normal"
                ><span></span></uni-text
              ></uni-view
            ></uni-view
          ><uni-view class="list-box"
            ><uni-view class="list-box-tip"
              ><uni-image class="tip-icon" style="height: 14px">
                <div
                  style="
                    background-image: url('../../assets/img/safe-dark.png');
                    background-size: 100% 100%;
                  "
                ></div>
                <uni-resize-sensor>
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div></div>
                  </div> </uni-resize-sensor
                ><img src="../../assets/img/safe-dark.png" draggable="false" /> </uni-image
              ><uni-text class="font-12 price_up tip-text"
                ><span>您充值的资产将由CoinEx风险保护基金提供保障</span></uni-text
              ></uni-view
            ><uni-view class="list-box-title"
              ><uni-text class="font-13 color-dark"><span>我有加密货币</span></uni-text></uni-view
            ><uni-view class="list-box-card"
              ><uni-image class="card-icon" style="height: 28px">
                <div
                  style="
                    background-image: url('../../assets/img/recharge-dark.png');
                    background-size: 100% 100%;
                  "
                ></div>
                <uni-resize-sensor>
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div></div>
                  </div> </uni-resize-sensor
                ><img src="../../assets/img/recharge-dark.png" draggable="false" /> </uni-image
              ><uni-view class="card-info"
                ><uni-text class="font-14 color-black font-weight"><span>储值</span></uni-text
                ><uni-text class="font-11 color-gray desc"
                  ><span>将加密货币添加到您的CoinEx帐户</span></uni-text
                ></uni-view
              ></uni-view
            ></uni-view
          ></uni-view
        ></uni-view
      ></uni-view
    ></uni-view
  >
  <LeftPopup :showLeft="showLeft" @close="close" />
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user/index'
import { useMainStore } from '@/store/index.js'
import { publiceNotice } from '@/api/common/index.js'
import LeftPopup from './component/leftPopup.vue'
const router = useRouter()
const userStore = useUserStore()
const mainStore = useMainStore()
const isSign = ref(userStore.isSign)
const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const showLeft = ref(false)
const close = () => {
  showLeft.value = false
}
const imgList = ref([])
const publiceNoticeFun = async () => {
  const res = await publiceNotice('ACTIVITY_NOTICE', 'HOME_ACTIVITY')
  imgList.value = res?.data.map((item) => item.imgUrl)
}

onMounted(() => {
  publiceNoticeFun()
})
</script>
