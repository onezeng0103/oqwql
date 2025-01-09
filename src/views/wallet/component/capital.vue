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
              ><uni-view class="range"
                ><uni-view class="asset-val-row-item"
                  ><uni-view class="font-18 font-weight color-black" style="float: left"
                    >31.13</uni-view
                  ><uni-view class="down-btn" style="float: left; margin-top: 0.25rem"
                    ><uni-text class="font-12 font-weight color-black"
                      ><span>USD</span></uni-text
                    ></uni-view
                  ></uni-view
                ><uni-view style="clear: both"></uni-view></uni-view
              ><uni-view class="asset-val-row" style="margin-top: 0.625rem"
                ><uni-view class="asset-val-row-item"
                  ><uni-text class="font-12 color-999"><span>$31.10</span></uni-text></uni-view
                ></uni-view
              ></uni-view
            ><uni-view class="menu-box"
              ><uni-view class="menu-box-item">
                <img src="../../../assets/img/recharge-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>充值</span></uni-text
                ></uni-view
              ><uni-view class="menu-box-item">
                <img src="../../../assets/img/payouts-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>提現</span></uni-text
                ></uni-view
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
                        background-image: url('https://static.coinlay.net/uploadfile/20240719/672875796766920705.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://static.coinlay.net/uploadfile/20240719/672875796766920705.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>USDC</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240130/610962788730327040.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240130/610962788730327040.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>INJ</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240130/610962587156271105.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240130/610962587156271105.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>ICP</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240130/610962371267051521.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240130/610962371267051521.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>WBTC</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240130/610962065334513665.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240130/610962065334513665.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>SOL</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240130/610905085903409153.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240130/610905085903409153.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>BNB</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240127/609755413839118337.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240127/609755413839118337.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>AVAX</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609518556874305537.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609518556874305537.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>FIL</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609517978194567168.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609517978194567168.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>EOS</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609517826222350336.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609517826222350336.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>DOT</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609517579366588416.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609517579366588416.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>DOGE</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609517376018341889.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609517376018341889.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>BCH</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609517206207746048.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609517206207746048.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>APT</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609517017141104640.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609517017141104640.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>APE</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609516269548359681.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609516269548359681.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>AMC</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://static-dev.bbbtrade.net/uploadfile/20231219/595715182152417281.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://static-dev.bbbtrade.net/uploadfile/20231219/595715182152417281.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>NMC</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609515551621922816.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609515551621922816.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>SHIB</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
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
                  ><uni-text class="font-13 font-weight color-black"><span>23.75</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 23.72</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609515386412482560.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609515386412482560.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>TRX</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>30.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 7.30</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609515265490698241.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609515265490698241.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>ETH</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>0.00</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.00</span></uni-text></uni-view
                ></uni-view
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image
                    ><div
                      style="
                        background-image: url('https://api.oqwql.com/uploadfile/20240126/609505071486472193.png');
                        background-position: 0% 0%;
                        background-size: 100% 100%;
                      "
                    ></div>
                    <span></span
                    ><img
                      src="https://api.oqwql.com/uploadfile/20240126/609505071486472193.png"
                      draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>BTC</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"><span>7.5e-7</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 0.07</span></uni-text></uni-view
                ></uni-view
              ></uni-view
            >
          </uni-view>
        </div>
      </div>
    </div></uni-scroll-view
  >
</template>
