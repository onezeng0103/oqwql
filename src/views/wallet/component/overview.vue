<template>
  <uni-scroll-view class="scroll-view" style="height: 573px">
    <div class="uni-scroll-view">
      <div class="uni-scroll-view" style="overflow: hidden auto">
        <div
          class="uni-scroll-view-refresher"
          style="background-color: var(--color-gray-bg); height: 0px; transition: height 0.3s"
        >
          <div class="uni-scroll-view-refresher-container" style="height: 25px"></div>
        </div>
        <div class="uni-scroll-view-content">
          <uni-view class="scroll-head">
            <uni-view class="asset-val">
              <uni-view class="asset-val-row">
                <uni-view class="asset-val-row-item">
                  <uni-text class="font-12 color-999 font-weight">
                    <span>资产估值 </span>
                  </uni-text>
                  <uni-text
                    class="fui-icon ml-10"
                    style="color: rgb(144, 147, 153); font-size: 1.1875rem; font-weight: normal"
                  >
                    <span></span>
                  </uni-text>
                </uni-view>
              </uni-view>
              <uni-view class="asset-val-row">
                <uni-view class="asset-val-row-item">
                  <uni-text class="font-18 font-weight color-black">
                    <span>40,491.33 </span>
                  </uni-text>
                  <uni-view class="fui-dropdown__menu"
                    ><uni-view class="down-btn"
                      ><uni-text class="font-12 font-weight color-black"><span>USD</span></uni-text
                      ><uni-image
                        ><div
                          style="
                            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABUUlEQVRYw+2WO07DQBCG/1kfgEeEgM4CRdAA4QbmBOAbUNIBNwglt3BuACcIPkEc05gk2EuHJaK4t7xDQYNE/MjGotqvncf+2pn9tYDBYDAYDCtBdQkH3dNbInLA2Fz3sILYk5NwoC3IPjq5tFg8tXkDhVKOnL36ZXFRVSyYem2PRAhyKuNVQSXEAEDWop6Mc8vTFiSjQBZKXbW2sILcJBl9aAsCgJ958/W6Ypj5bhYFL3V5VpNmi3k63ursglA9/1Ix4H48DR+b5FpNmy7mqa8jisH9eBI+NM23Vmm+mKf+dmfPBtD09XnxJLxv1RiXcdg9G4LgVO8Mgng6Pl/ZFrTMLSeXgaB8TJAqpwstn9IpkjLIlCAXgFwmhnPhSBlo+Ret85Tt455tKR4CsH+LqfOa1pb6j+1+fWYbO/vPArBBiBjiJnkfvZk/i8FgMBj+kW8de3tRCaVFQgAAAABJRU5ErkJggg==');
                            background-position: 0% 0%;
                            background-size: 100% 100%;
                          "
                        ></div>
                        <span></span
                        ><img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABUUlEQVRYw+2WO07DQBCG/1kfgEeEgM4CRdAA4QbmBOAbUNIBNwglt3BuACcIPkEc05gk2EuHJaK4t7xDQYNE/MjGotqvncf+2pn9tYDBYDAYDCtBdQkH3dNbInLA2Fz3sILYk5NwoC3IPjq5tFg8tXkDhVKOnL36ZXFRVSyYem2PRAhyKuNVQSXEAEDWop6Mc8vTFiSjQBZKXbW2sILcJBl9aAsCgJ958/W6Ypj5bhYFL3V5VpNmi3k63ursglA9/1Ix4H48DR+b5FpNmy7mqa8jisH9eBI+NM23Vmm+mKf+dmfPBtD09XnxJLxv1RiXcdg9G4LgVO8Mgng6Pl/ZFrTMLSeXgaB8TJAqpwstn9IpkjLIlCAXgFwmhnPhSBlo+Ret85Tt455tKR4CsH+LqfOa1pb6j+1+fWYbO/vPArBBiBjiJnkfvZk/i8FgMBj+kW8de3tRCaVFQgAAAABJRU5ErkJggg=="
                          draggable="false"
                      /></uni-image>
                    </uni-view>
                    <uni-view
                      class="fui-dropdown__menu-list fui-ddm__down"
                      style="border-radius: 0.3125rem; background: rgb(255, 255, 255); left: 0px"
                    >
                      <uni-scroll-view
                        class="fui-ddm__scroll"
                        style="height: auto; max-height: 12.5rem; min-width: 6.25rem"
                      >
                        <div class="uni-scroll-view">
                          <div
                            class="uni-scroll-view uni-scroll-view-scrollbar-hidden"
                            style="overflow: hidden auto"
                          >
                            <div class="uni-scroll-view-content">
                              <uni-view>
                                <uni-view
                                  class="fui-dropdown__menu-item"
                                  style="
                                    background: rgb(255, 255, 255);
                                    padding: 1rem;
                                    border-bottom-color: transparent;
                                  "
                                >
                                  <uni-view class="fui-ddm__flex">
                                    <uni-text
                                      class="fui-ddm__item-text"
                                      style="font-size: 0.75rem; color: rgb(70, 92, 255)"
                                    >
                                      <span>USD</span>
                                    </uni-text>
                                  </uni-view>
                                </uni-view>
                                <uni-view
                                  class="fui-dropdown__menu-item"
                                  style="
                                    background: rgb(255, 255, 255);
                                    padding: 1rem;
                                    border-bottom-color: transparent;
                                  "
                                >
                                  <uni-view class="fui-ddm__flex">
                                    <uni-text
                                      class="fui-ddm__item-text"
                                      style="font-size: 0.75rem; color: rgb(24, 24, 24)"
                                    >
                                      <span>CNY</span>
                                    </uni-text>
                                  </uni-view>
                                </uni-view>
                                <uni-view
                                  class="fui-dropdown__menu-item"
                                  style="
                                    background: rgb(255, 255, 255);
                                    padding: 1rem;
                                    border-bottom-color: transparent;
                                  "
                                >
                                  <uni-view class="fui-ddm__flex">
                                    <uni-text
                                      class="fui-ddm__item-text"
                                      style="font-size: 0.75rem; color: rgb(24, 24, 24)"
                                    >
                                      <span>JPY</span>
                                    </uni-text>
                                  </uni-view>
                                </uni-view>
                                <uni-view
                                  class="fui-dropdown__menu-item"
                                  style="
                                    background: rgb(255, 255, 255);
                                    padding: 1rem;
                                    border-bottom-color: transparent;
                                  "
                                >
                                  <uni-view class="fui-ddm__flex">
                                    <uni-text
                                      class="fui-ddm__item-text"
                                      style="font-size: 0.75rem; color: rgb(24, 24, 24)"
                                    >
                                      <span>EUR</span>
                                    </uni-text>
                                  </uni-view>
                                </uni-view>
                                <uni-view
                                  class="fui-dropdown__menu-item"
                                  style="
                                    background: rgb(255, 255, 255);
                                    padding: 1rem;
                                    border-bottom-color: transparent;
                                  "
                                >
                                  <uni-view class="fui-ddm__flex">
                                    <uni-text
                                      class="fui-ddm__item-text"
                                      style="font-size: 0.75rem; color: rgb(24, 24, 24)"
                                    >
                                      <span>INR</span>
                                    </uni-text>
                                  </uni-view>
                                </uni-view>
                              </uni-view>
                            </div>
                          </div>
                        </div>
                      </uni-scroll-view>
                    </uni-view>
                  </uni-view>
                </uni-view>
              </uni-view>
              <uni-view class="asset-val-row">
                <uni-view class="asset-val-row-item">
                  <uni-text class="font-12 color-999">
                    <span>$40,443.96</span>
                  </uni-text>
                </uni-view>
              </uni-view>
            </uni-view>
            <uni-view class="menu-box">
              <uni-view class="menu-box-item">
                <uni-image style="height: 24px">
                  <div
                    style="
                      background-image: url('/static/newImage/recharge-dark.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                  </uni-resize-sensor>
                  <img src="/static/newImage/recharge-dark.png" draggable="false" />
                </uni-image>
                <uni-text class="font-12 color-black font-weight">
                  <span>充值</span>
                </uni-text>
              </uni-view>
              <uni-view class="menu-box-item">
                <uni-image class="menu-icon" style="height: 24px">
                  <div
                    style="
                      background-image: url('/static/newImage/flow-dark.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img src="/static/newImage/flow-dark.png" draggable="false" /></uni-image
                ><uni-text class="font-12 color-black font-weight"
                  ><span>提现</span></uni-text
                ></uni-view
              ><uni-view class="menu-box-item"
                ><uni-image style="height: 24px"
                  ><div
                    style="
                      background-image: url('/static/newImage/transfer-dark.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img src="/static/newImage/transfer-dark.png" draggable="false" /></uni-image
                ><uni-text class="font-12 color-black font-weight"
                  ><span>划转</span></uni-text
                ></uni-view
              ><uni-view class="menu-box-item"
                ><uni-image style="height: 24px"
                  ><div
                    style="
                      background-image: url('/static/newImage/flow-dark.png');
                      background-size: 100% 100%;
                    "
                  ></div>
                  <uni-resize-sensor
                    ><div><div></div></div>
                    <div><div></div></div></uni-resize-sensor
                  ><img src="/static/newImage/flow-dark.png" draggable="false" /></uni-image
                ><uni-text class="font-12 color-black font-weight"
                  ><span>资金流水</span></uni-text
                ></uni-view
              ></uni-view
            ></uni-view
          ><uni-view class="coin-list"
            ><uni-view class="title"
              ><uni-view class="t_left"
                ><uni-text class="font-14 color-black font-weight"
                  ><span>账户</span></uni-text
                ></uni-view
              ></uni-view
            ><uni-view class="coin-list-main account"
              ><uni-view class="cell"
                ><uni-view class="cell-left"
                  ><uni-image style="height: 22px"
                    ><div
                      style="
                        background-image: url('/static/newImage/fund-acc-dark.png');
                        background-size: 100% 100%;
                      "
                    ></div>
                    <uni-resize-sensor
                      ><div><div></div></div>
                      <div><div></div></div></uni-resize-sensor
                    ><img src="/static/newImage/fund-acc-dark.png" draggable="false" /></uni-image
                  ><uni-text class="font-14 font-weight color-black"
                    ><span>资金账户</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"
                    ><span>31.92 USDT</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$31.88</span></uni-text></uni-view
                >
              </uni-view>
            </uni-view>
          </uni-view>
        </div>
      </div>
    </div>
  </uni-scroll-view>
</template>
