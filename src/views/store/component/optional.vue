<template>
  <uni-view class="store-container" style="height: 573px">
    <uni-view class="store-container-head">
      <uni-view class="head-top">
        <uni-view
          class="slide-button light"
          style="
            width: 8.75rem;
            height: 1.875rem;
            padding: 0px;
            border-radius: 0.3125rem;
            background: var(--white);
          "
        >
          <uni-view class="slide-btn-box" style="width: 4.375rem; height: 1.875rem">
            <uni-text
              class="context"
              style="color: var(--black); font-size: 0.8125rem; font-weight: 500"
            >
              <span>現貨</span></uni-text
            >
          </uni-view>
          <uni-view class="slide-btn-box" style="width: 4.375rem; height: 1.875rem">
            <uni-text
              class="context"
              style="color: var(--color-text-dark-gray); font-size: 0.8125rem; font-weight: 500"
            >
              <span>合約</span>
            </uni-text>
          </uni-view>
          <uni-view
            class="slide-move-block"
            style="
              width: 4.375rem;
              height: 1.875rem;
              border-radius: 0.3125rem;
              --translateX: 0;
              left: 0px;
              background: var(--color-gray-bg);
            "
          >
          </uni-view>
        </uni-view>
        <img
          @click="router.push('/editMine')"
          src="../../../assets/img/store-edit-DVSjNhs9.png"
          draggable="false"
          class="edit-image"
        />
      </uni-view>
      <uni-view class="head-bottom">
        <uni-view>
          <uni-text class="font-12 color-dark"><span>您可能有興趣</span></uni-text>
        </uni-view>
      </uni-view>
    </uni-view>
    <uni-scroll-view class="store-container-scrollview" style="height: 573px"
      ><div class="uni-scroll-view">
        <div class="uni-scroll-view" style="overflow: hidden auto">
          <div class="uni-scroll-view-content">
            <uni-view
              ><uni-view class="card-list"
                ><uni-view class="card-list-box"
                  ><uni-view class="card-list-item"
                    ><uni-view class="_row"
                      ><uni-view class="_row_coin flex align-center"
                        ><uni-text class="font-14 color-black font-weight"
                          ><span>USDC</span></uni-text
                        ><uni-text class="font-12 color-gray ml-5"
                          ><span> /USDT </span></uni-text
                        ></uni-view
                      ><uni-view class="check-box"
                        ><uni-image
                          ><div
                            style="
                              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                              background-position: 0% 0%;
                              background-size: 100% 100%;
                            "
                          ></div>
                          <span></span
                          ><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                            draggable="false" /></uni-image></uni-view></uni-view
                    ><uni-view class="_row"
                      ><uni-text class="font-13 font-weight price_down"
                        ><span>1.000500</span></uni-text
                      ></uni-view
                    ><uni-view class="_row"
                      ><uni-text class="font-12 font-weight price_down"
                        ><span>-0.020% </span></uni-text
                      ></uni-view
                    ></uni-view
                  ><uni-view class="card-list-item"
                    ><uni-view class="_row"
                      ><uni-view class="_row_coin flex align-center"
                        ><uni-text class="font-14 color-black font-weight"
                          ><span>INJ</span></uni-text
                        ><uni-text class="font-12 color-gray ml-5"
                          ><span> /USDT </span></uni-text
                        ></uni-view
                      ><uni-view class="check-box"
                        ><uni-image
                          ><div
                            style="
                              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                              background-position: 0% 0%;
                              background-size: 100% 100%;
                            "
                          ></div>
                          <span></span
                          ><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                            draggable="false" /></uni-image></uni-view></uni-view
                    ><uni-view class="_row"
                      ><uni-text class="font-13 font-weight price_up"
                        ><span>20.60</span></uni-text
                      ></uni-view
                    >
                    <uni-view class="_row">
                      <uni-text class="font-12 font-weight price_up">
                        <span>4.304% </span></uni-text
                      >
                    </uni-view>
                  </uni-view>
                </uni-view>
                <uni-view class="add-button">
                  <uni-view
                    class="fui-button__wrap fui-button__flex-1"
                    style="
                      width: 100%;
                      height: 2.75rem;
                      margin: 0px;
                      border-radius: 0.5rem;
                      background: var(--blue);
                    "
                  >
                    <uni-button
                      @click="setTradeCurrency"
                      class="fui-button fui-button__flex-1"
                      style="
                        width: 100%;
                        height: 2.75rem;
                        line-height: 2.75rem;
                        background: var(--blue);
                        border-width: 0px;
                        border-color: var(--blue);
                        border-radius: 0.5rem;
                        font-size: 0.875rem;
                        color: rgb(255, 255, 255);
                      "
                    >
                      新增自选{{ tradeCurrency }}</uni-button
                    >
                  </uni-view>
                </uni-view>
              </uni-view>
            </uni-view>
          </div>
        </div>
      </div>
    </uni-scroll-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
let tradeCurrency = window.localStorage.getItem('trade-currency')
const setTradeCurrency = () => {
  window.localStorage.setItem('trade-currency', true)
}
</script>
