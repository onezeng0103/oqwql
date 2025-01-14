<template>
  <uni-view class="store">
    <uni-view style="height: 44px">
      <uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--color-gray-bg);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 999;
        "
      >
        <uni-view class="fui-nav__status-bar" style="height: 0px"></uni-view>
        <uni-view class="fui-nav__header">
          <uni-view class="nav-tab">
            <uni-view class="nav-tab-left">
              <uni-scroll-view
                class="fui-tabs__scrollbox"
                style="background: var(--color-gray-bg); z-index: 1; top: auto"
              >
                <div class="uni-scroll-view">
                  <div
                    class="uni-scroll-view uni-scroll-view-scrollbar-hidden"
                    style="overflow: auto hidden"
                  >
                    <div class="uni-scroll-view-content">
                      <uni-view class="fui-scroll__view">
                        <uni-view class="fui-tabs__item" @click="handleIndex(0)">
                          <uni-view class="fui-tabs__text-wrap" style="height: 2.75rem">
                            <uni-view
                              class="fui-tabs__text"
                              style="
                                font-size: 1rem;

                                font-weight: 500;
                                transform: scale(1);
                              "
                              :style="{
                                color:
                                  currentIndex === 0
                                    ? 'var(--black)'
                                    : 'var(--color-text-dark-gray)'
                              }"
                              >自选
                            </uni-view>
                          </uni-view>
                        </uni-view>
                        <uni-view class="fui-tabs__item" @click="handleIndex(1)">
                          <uni-view class="fui-tabs__text-wrap" style="height: 2.75rem">
                            <uni-view
                              class="fui-tabs__text"
                              style="font-size: 1rem; font-weight: 500; transform: scale(1)"
                              :style="{
                                color:
                                  currentIndex === 1
                                    ? 'var(--black)'
                                    : 'var(--color-text-dark-gray)'
                              }"
                              >现货
                            </uni-view>
                          </uni-view>
                        </uni-view>
                        <uni-view class="fui-tabs__item" @click="handleIndex(2)">
                          <uni-view class="fui-tabs__text-wrap" style="height: 2.75rem">
                            <uni-view
                              class="fui-tabs__text"
                              style="font-size: 1rem; font-weight: 500; transform: scale(1)"
                              :style="{
                                color:
                                  currentIndex === 2
                                    ? 'var(--black)'
                                    : 'var(--color-text-dark-gray)'
                              }"
                              >合约
                            </uni-view>
                          </uni-view>
                        </uni-view>
                        <uni-view class="fui-tabs__item" @click="handleIndex(3)">
                          <uni-view class="fui-tabs__text-wrap" style="height: 2.75rem">
                            <uni-view
                              class="fui-tabs__text"
                              style="font-size: 1rem; font-weight: 500; transform: scale(1)"
                              :style="{
                                color:
                                  currentIndex === 3
                                    ? 'var(--black)'
                                    : 'var(--color-text-dark-gray)'
                              }"
                              >期权
                            </uni-view>
                          </uni-view>
                        </uni-view>
                      </uni-view>
                    </div>
                  </div>
                </div>
              </uni-scroll-view>
            </uni-view>
            <uni-view class="nav-tab-right">
              <uni-image>
                <div
                  style="
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/klEQVR4Xu2aW2gcVRjHkyKKihYvoOKLgi8azIOzZ25bde2eM2uoUREUBdEKCkJ9UNQHL60REQUR1OIFQR9ExHjBW32peKs+KAV98F4pFNSCQmxaqalNbP1/u7Ow/c/ZbDZz2TXMD/4Qkv853zdnZs5855yMjJSUlJSUlJSU5EC1evkJbhBdVgnN45XAbFGh+UkF5g/ocKxfoG+gN6EHK76unTMxcQz38z9jahUu+krobVzUPx0Xu0Tpfco3L6ogCrnnoQd3+HpcwI/Ji1qu9Dav2riE4wwdqtoYc0PzWfICspEbmFc8r34axx0KXN/cjCT/5qRz0G43jNZy/AEytQrv6pOWRG3aj8f5PdzJza6v73P96EYV6psw6T2g/Oh5/P1jaN7SjrWAdrdwJgNAJjrzkiXBTs0j2Zcrob4iCIJjuQcmCBontwbGbLX0daRCcye3L5Ql3Pl38c6ex+2Wikx86GO7pd+2DiGH9dyuEOJ3nhNqa9YN9Tpus1wqfnSH6v5qHPSq2uc2uSKzveo+4e3wfX0ut0mLF5oIfe+xxJOvwy7H0au5TV6MdvvUIZGfXbd+CjfICifQ5zcLJHvszezPhVaRk0wAms3jzjP4Wkwi1r+W+AsyQOzPGHzyulR4Wb7zvUC8jRy/qVC/yt5Mkdo+EbQZ2LzD3jwZG7v6aMTdmcgDT4HrRmezPzPihU0iaJpP3XKphNG1llxEm9ibCZ43caKyrepQ5LC3IEYR/1vOB8vt79mYCbKe52DNgKjw2FsUWBNMcT6iIFh7JntTg3X5YxwI2u84k8extygcv3GBJSd5Cq5jb2pQ+b1vCbSFfUWDPH7jvJSvH2JfatDxDg6Eiegp9hUN8vic84Km2ZcadDqTDBTdw76iQR6vWfL6gH2pQccHOZAsW9lXNLYVKcriL9iXGnQ8lwiEFSH7ikaF0TOcF/QJ+1KjjtzGbiufoqMPKoF+i/PCE/A6+1Kj7EXHs+wrGuTxJeeFr8DT7EuNah1a8BPwKfuKpFarHYUc/kzkFUb3szc1Xaqu+TzX/72It8w4J1GdvamR4ypLILxv+gb2FgXiP8H5QHNL2XztGzmrQ+d7EwFDs5W9RRDn8yvngxv1EXszA3f7BQ4oGsRBhWyJcx7NAQjMBvZmRsU3VQ4Yazv+PMr+vFizZt1JylqZmpnx8eh49meKHFRaAmPk9e3szYvuhzHRI+zNnEVm3gXZumZ/1lSC6G5L7MOyW+xc2DiD/bkgp7TJBJra43n1cfZnBQqcq2SgLXGlLL+V/bkhR9QIupuTaEn+sSGa5DZpie+89eKhD0cKnIOayMy/SEKyb79Rdm+5Xb/IhNf9nY81qJPiHueDop3L3Z5qfef1Xco+27MOyJ4l91EI8ff4kCWpTn0npbTs4XH7TqS2jydZqfASRU4PDXAQfLNeWTZMuuj3+FM6LZsZsqKU8wbZxMDvZi3+fjS4QXD8yJNTWktSmUpKXXnn8fMB/lusAQ6Co1fLKa3qPjmmkN7X+amTs0g1jIMgtI6x8YhnMxAzeFUeVap2OscZ6kEQfP/Ss5DIJugHS4KLaU4edZTXt/U6eBn6QWgjx1Wo5K5xQ/Ow7Nmp1n+EtTWN3z2Hxda9+Lne73q+1yBAF3ObFUePQfia/SuSRQZhL3tXLLZByGWbfJhRYXQRLvwrXPhfWJi94Ti1U9lTUlJSUlJSUtLmP2piHoB1AY7NAAAAAElFTkSuQmCC');
                    background-position: 0% 0%;
                    background-size: 100% 100%;
                  "
                ></div>
                <span></span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/klEQVR4Xu2aW2gcVRjHkyKKihYvoOKLgi8azIOzZ25bde2eM2uoUREUBdEKCkJ9UNQHL60REQUR1OIFQR9ExHjBW32peKs+KAV98F4pFNSCQmxaqalNbP1/u7Ow/c/ZbDZz2TXMD/4Qkv853zdnZs5855yMjJSUlJSUlJSU5EC1evkJbhBdVgnN45XAbFGh+UkF5g/ocKxfoG+gN6EHK76unTMxcQz38z9jahUu+krobVzUPx0Xu0Tpfco3L6ogCrnnoQd3+HpcwI/Ji1qu9Dav2riE4wwdqtoYc0PzWfICspEbmFc8r34axx0KXN/cjCT/5qRz0G43jNZy/AEytQrv6pOWRG3aj8f5PdzJza6v73P96EYV6psw6T2g/Oh5/P1jaN7SjrWAdrdwJgNAJjrzkiXBTs0j2Zcrob4iCIJjuQcmCBontwbGbLX0daRCcye3L5Ql3Pl38c6ex+2Wikx86GO7pd+2DiGH9dyuEOJ3nhNqa9YN9Tpus1wqfnSH6v5qHPSq2uc2uSKzveo+4e3wfX0ut0mLF5oIfe+xxJOvwy7H0au5TV6MdvvUIZGfXbd+CjfICifQ5zcLJHvszezPhVaRk0wAms3jzjP4Wkwi1r+W+AsyQOzPGHzyulR4Wb7zvUC8jRy/qVC/yt5Mkdo+EbQZ2LzD3jwZG7v6aMTdmcgDT4HrRmezPzPihU0iaJpP3XKphNG1llxEm9ibCZ43caKyrepQ5LC3IEYR/1vOB8vt79mYCbKe52DNgKjw2FsUWBNMcT6iIFh7JntTg3X5YxwI2u84k8extygcv3GBJSd5Cq5jb2pQ+b1vCbSFfUWDPH7jvJSvH2JfatDxDg6Eiegp9hUN8vic84Km2ZcadDqTDBTdw76iQR6vWfL6gH2pQccHOZAsW9lXNLYVKcriL9iXGnQ8lwiEFSH7ikaF0TOcF/QJ+1KjjtzGbiufoqMPKoF+i/PCE/A6+1Kj7EXHs+wrGuTxJeeFr8DT7EuNah1a8BPwKfuKpFarHYUc/kzkFUb3szc1Xaqu+TzX/72It8w4J1GdvamR4ypLILxv+gb2FgXiP8H5QHNL2XztGzmrQ+d7EwFDs5W9RRDn8yvngxv1EXszA3f7BQ4oGsRBhWyJcx7NAQjMBvZmRsU3VQ4Yazv+PMr+vFizZt1JylqZmpnx8eh49meKHFRaAmPk9e3szYvuhzHRI+zNnEVm3gXZumZ/1lSC6G5L7MOyW+xc2DiD/bkgp7TJBJra43n1cfZnBQqcq2SgLXGlLL+V/bkhR9QIupuTaEn+sSGa5DZpie+89eKhD0cKnIOayMy/SEKyb79Rdm+5Xb/IhNf9nY81qJPiHueDop3L3Z5qfef1Xco+27MOyJ4l91EI8ff4kCWpTn0npbTs4XH7TqS2jydZqfASRU4PDXAQfLNeWTZMuuj3+FM6LZsZsqKU8wbZxMDvZi3+fjS4QXD8yJNTWktSmUpKXXnn8fMB/lusAQ6Co1fLKa3qPjmmkN7X+amTs0g1jIMgtI6x8YhnMxAzeFUeVap2OscZ6kEQfP/Ss5DIJugHS4KLaU4edZTXt/U6eBn6QWgjx1Wo5K5xQ/Ow7Nmp1n+EtTWN3z2Hxda9+Lne73q+1yBAF3ObFUePQfia/SuSRQZhL3tXLLZByGWbfJhRYXQRLvwrXPhfWJi94Ti1U9lTUlJSUlJSUtLmP2piHoB1AY7NAAAAAElFTkSuQmCC"
                  draggable="false"
                />
              </uni-image>
            </uni-view>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
    <component :is="components[currentIndex]"></component>
  </uni-view>
</template>
<script setup>
import Optional from './component/optional.vue'
import SpotGoods from './component/spotGoods.vue'
import Pact from './component/pact.vue'
import Option from './component/option.vue'
const currentIndex = ref(0)
const components = [Optional, SpotGoods, Pact, Option]
const handleIndex = (value) => {
  currentIndex.value = value
}
</script>
