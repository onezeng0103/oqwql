<template>
  <uni-scroll-view class="scroll-view" style="height: 573px"
    ><div class="uni-scroll-view">
      <div class="uni-scroll-view" style="overflow: hidden auto">
        <div
          class="uni-scroll-view-refresher"
          style="background-color: var(--color-gray-bg); height: 0px; transition: height 0.3s"
        >
          <div class="uni-scroll-view-refresher-container" style="height: 25px"></div>
        </div>
        <div class="uni-scroll-view-content">
          <uni-view class="scroll-head"
            ><uni-view class="asset-val"
              ><uni-view class="asset-val-row"
                ><uni-view class="asset-val-row-item"
                  ><uni-text class="font-12 color-999 font-weight"><span>資產估值</span></uni-text
                  ><uni-text
                    data-v-76006800=""
                    class="fui-icon ml-10"
                    style="color: rgb(144, 147, 153); font-size: 1.1875rem; font-weight: normal"
                    ><span></span></uni-text
                  ></uni-view
                ></uni-view
              ><uni-view class="asset-val-row"
                ><uni-view class="asset-val-row-item"
                  ><uni-text class="font-18 font-weight color-black"
                    ><span>23,662.45</span></uni-text
                  ><uni-view class="down-btn"
                    ><uni-text class="font-12 font-weight color-black"
                      ><span>USD</span></uni-text
                    ></uni-view
                  ></uni-view
                ></uni-view
              ><uni-view class="asset-val-row"
                ><uni-view class="asset-val-row-item"
                  ><uni-text class="font-12 color-999"><span>$23,634.76</span></uni-text></uni-view
                ></uni-view
              ></uni-view
            ><uni-view class="menu-box"
              ><uni-view class="menu-box-item">
                <img src="../../../assets/img/transfer-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>劃轉</span></uni-text
                ></uni-view
              ><uni-view class="menu-box-item">
                <img src="../../../assets/img/flow-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>資金流水</span></uni-text
                ></uni-view
              ></uni-view
            ></uni-view
          ><uni-view class="coin-list"
            ><uni-view class="title"
              ><uni-view class="t_left"
                ><uni-text class="font-14 color-black font-weight"><span>資產</span></uni-text
                ><uni-view class="checkbox">
                  <img
                    src="../../../assets/img/n-check.png"
                    alt=""
                    style="width: 15px; height: 15px"
                  />
                  <uni-text class="font-12 color-999 font-weight ml-5"
                    ><span>隱藏0餘額</span></uni-text
                  ></uni-view
                ></uni-view
              ><uni-view class="search-box"
                ><uni-image
                  ><div
                    style="
                      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/klEQVR4Xu2aW2gcVRjHkyKKihYvoOKLgi8azIOzZ25bde2eM2uoUREUBdEKCkJ9UNQHL60REQUR1OIFQR9ExHjBW32peKs+KAV98F4pFNSCQmxaqalNbP1/u7Ow/c/ZbDZz2TXMD/4Qkv853zdnZs5855yMjJSUlJSUlJSU5EC1evkJbhBdVgnN45XAbFGh+UkF5g/ocKxfoG+gN6EHK76unTMxcQz38z9jahUu+krobVzUPx0Xu0Tpfco3L6ogCrnnoQd3+HpcwI/Ji1qu9Dav2riE4wwdqtoYc0PzWfICspEbmFc8r34axx0KXN/cjCT/5qRz0G43jNZy/AEytQrv6pOWRG3aj8f5PdzJza6v73P96EYV6psw6T2g/Oh5/P1jaN7SjrWAdrdwJgNAJjrzkiXBTs0j2Zcrob4iCIJjuQcmCBontwbGbLX0daRCcye3L5Ql3Pl38c6ex+2Wikx86GO7pd+2DiGH9dyuEOJ3nhNqa9YN9Tpus1wqfnSH6v5qHPSq2uc2uSKzveo+4e3wfX0ut0mLF5oIfe+xxJOvwy7H0au5TV6MdvvUIZGfXbd+CjfICifQ5zcLJHvszezPhVaRk0wAms3jzjP4Wkwi1r+W+AsyQOzPGHzyulR4Wb7zvUC8jRy/qVC/yt5Mkdo+EbQZ2LzD3jwZG7v6aMTdmcgDT4HrRmezPzPihU0iaJpP3XKphNG1llxEm9ibCZ43caKyrepQ5LC3IEYR/1vOB8vt79mYCbKe52DNgKjw2FsUWBNMcT6iIFh7JntTg3X5YxwI2u84k8extygcv3GBJSd5Cq5jb2pQ+b1vCbSFfUWDPH7jvJSvH2JfatDxDg6Eiegp9hUN8vic84Km2ZcadDqTDBTdw76iQR6vWfL6gH2pQccHOZAsW9lXNLYVKcriL9iXGnQ8lwiEFSH7ikaF0TOcF/QJ+1KjjtzGbiufoqMPKoF+i/PCE/A6+1Kj7EXHs+wrGuTxJeeFr8DT7EuNah1a8BPwKfuKpFarHYUc/kzkFUb3szc1Xaqu+TzX/72It8w4J1GdvamR4ypLILxv+gb2FgXiP8H5QHNL2XztGzmrQ+d7EwFDs5W9RRDn8yvngxv1EXszA3f7BQ4oGsRBhWyJcx7NAQjMBvZmRsU3VQ4Yazv+PMr+vFizZt1JylqZmpnx8eh49meKHFRaAmPk9e3szYvuhzHRI+zNnEVm3gXZumZ/1lSC6G5L7MOyW+xc2DiD/bkgp7TJBJra43n1cfZnBQqcq2SgLXGlLL+V/bkhR9QIupuTaEn+sSGa5DZpie+89eKhD0cKnIOayMy/SEKyb79Rdm+5Xb/IhNf9nY81qJPiHueDop3L3Z5qfef1Xco+27MOyJ4l91EI8ff4kCWpTn0npbTs4XH7TqS2jydZqfASRU4PDXAQfLNeWTZMuuj3+FM6LZsZsqKU8wbZxMDvZi3+fjS4QXD8yJNTWktSmUpKXXnn8fMB/lusAQ6Co1fLKa3qPjmmkN7X+amTs0g1jIMgtI6x8YhnMxAzeFUeVap2OscZ6kEQfP/Ss5DIJugHS4KLaU4edZTXt/U6eBn6QWgjx1Wo5K5xQ/Ow7Nmp1n+EtTWN3z2Hxda9+Lne73q+1yBAF3ObFUePQfia/SuSRQZhL3tXLLZByGWbfJhRYXQRLvwrXPhfWJi94Ti1U9lTUlJSUlJSUtLmP2piHoB1AY7NAAAAAElFTkSuQmCC');
                      background-position: 0% 0%;
                      background-size: 100% 100%;
                    "
                  ></div>
                  <span></span
                  ><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/klEQVR4Xu2aW2gcVRjHkyKKihYvoOKLgi8azIOzZ25bde2eM2uoUREUBdEKCkJ9UNQHL60REQUR1OIFQR9ExHjBW32peKs+KAV98F4pFNSCQmxaqalNbP1/u7Ow/c/ZbDZz2TXMD/4Qkv853zdnZs5855yMjJSUlJSUlJSU5EC1evkJbhBdVgnN45XAbFGh+UkF5g/ocKxfoG+gN6EHK76unTMxcQz38z9jahUu+krobVzUPx0Xu0Tpfco3L6ogCrnnoQd3+HpcwI/Ji1qu9Dav2riE4wwdqtoYc0PzWfICspEbmFc8r34axx0KXN/cjCT/5qRz0G43jNZy/AEytQrv6pOWRG3aj8f5PdzJza6v73P96EYV6psw6T2g/Oh5/P1jaN7SjrWAdrdwJgNAJjrzkiXBTs0j2Zcrob4iCIJjuQcmCBontwbGbLX0daRCcye3L5Ql3Pl38c6ex+2Wikx86GO7pd+2DiGH9dyuEOJ3nhNqa9YN9Tpus1wqfnSH6v5qHPSq2uc2uSKzveo+4e3wfX0ut0mLF5oIfe+xxJOvwy7H0au5TV6MdvvUIZGfXbd+CjfICifQ5zcLJHvszezPhVaRk0wAms3jzjP4Wkwi1r+W+AsyQOzPGHzyulR4Wb7zvUC8jRy/qVC/yt5Mkdo+EbQZ2LzD3jwZG7v6aMTdmcgDT4HrRmezPzPihU0iaJpP3XKphNG1llxEm9ibCZ43caKyrepQ5LC3IEYR/1vOB8vt79mYCbKe52DNgKjw2FsUWBNMcT6iIFh7JntTg3X5YxwI2u84k8extygcv3GBJSd5Cq5jb2pQ+b1vCbSFfUWDPH7jvJSvH2JfatDxDg6Eiegp9hUN8vic84Km2ZcadDqTDBTdw76iQR6vWfL6gH2pQccHOZAsW9lXNLYVKcriL9iXGnQ8lwiEFSH7ikaF0TOcF/QJ+1KjjtzGbiufoqMPKoF+i/PCE/A6+1Kj7EXHs+wrGuTxJeeFr8DT7EuNah1a8BPwKfuKpFarHYUc/kzkFUb3szc1Xaqu+TzX/72It8w4J1GdvamR4ypLILxv+gb2FgXiP8H5QHNL2XztGzmrQ+d7EwFDs5W9RRDn8yvngxv1EXszA3f7BQ4oGsRBhWyJcx7NAQjMBvZmRsU3VQ4Yazv+PMr+vFizZt1JylqZmpnx8eh49meKHFRaAmPk9e3szYvuhzHRI+zNnEVm3gXZumZ/1lSC6G5L7MOyW+xc2DiD/bkgp7TJBJra43n1cfZnBQqcq2SgLXGlLL+V/bkhR9QIupuTaEn+sSGa5DZpie+89eKhD0cKnIOayMy/SEKyb79Rdm+5Xb/IhNf9nY81qJPiHueDop3L3Z5qfef1Xco+27MOyJ4l91EI8ff4kCWpTn0npbTs4XH7TqS2jydZqfASRU4PDXAQfLNeWTZMuuj3+FM6LZsZsqKU8wbZxMDvZi3+fjS4QXD8yJNTWktSmUpKXXnn8fMB/lusAQ6Co1fLKa3qPjmmkN7X+amTs0g1jIMgtI6x8YhnMxAzeFUeVap2OscZ6kEQfP/Ss5DIJugHS4KLaU4edZTXt/U6eBn6QWgjx1Wo5K5xQ/Ow7Nmp1n+EtTWN3z2Hxda9+Lne73q+1yBAF3ObFUePQfia/SuSRQZhL3tXLLZByGWbfJhRYXQRLvwrXPhfWJi94Ti1U9lTUlJSUlJSUtLmP2piHoB1AY7NAAAAAElFTkSuQmCC"
                    draggable="false" /></uni-image
                ><uni-input
                  ><div class="uni-input-wrapper">
                    <div class="uni-input-placeholder input-placeholder">搜尋</div>
                    <input
                      type="text"
                      maxlength="140"
                      step=""
                      enterkeyhint="done"
                      class="uni-input-input"
                      autocomplete="off"
                    /></div></uni-input></uni-view></uni-view
            ><uni-view class="coin-list-main"
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609515484915712000.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609515484915712000.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>USDT</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"
                    ><span>20376.52998092</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 20,352.68</span></uni-text></uni-view
                ></uni-view
              ></uni-view
            >
          </uni-view>
        </div>
      </div>
    </div></uni-scroll-view
  >
</template>
