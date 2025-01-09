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
                <img src="../../../assets/img/recharge-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight">
                  <span>充值</span>
                </uni-text>
              </uni-view>
              <uni-view class="menu-box-item">
                <img src="../../../assets/img/flow-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>提现</span></uni-text
                ></uni-view
              ><uni-view class="menu-box-item">
                <img src="../../../assets/img/transfer-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
                  ><span>划转</span></uni-text
                ></uni-view
              ><uni-view class="menu-box-item">
                <img src="../../../assets/img/flow-dark.png" alt="" style="height: 24px" />
                <uni-text class="font-12 color-black font-weight"
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
            ><uni-view class="coin-list-main account">
              <uni-view class="cell"
                ><uni-view class="cell-left">
                  <img src="../../../assets/img/fund-acc-dark.png" alt="" style="height: 22px" />
                  <uni-text class="font-14 font-weight color-black"
                    ><span>资金账户</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"
                    ><span>31.92 USDT</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$31.88</span></uni-text></uni-view
                >
              </uni-view>
              <uni-view class="cell"
                ><uni-view class="cell-left">
                  <img src="../../../assets/img/spot-acc-dark.png" alt="" style="height: 22px" />
                  <uni-text class="font-14 font-weight color-black"
                    ><span>現貨帳戶</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"
                    ><span>850.00 USDT</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$ 849.00</span></uni-text></uni-view
                ></uni-view
              >
              <uni-view class="cell"
                ><uni-view class="cell-left">
                  <img src="../../../assets/img/futures-acc-dark.png" alt="" style="height: 22px" />
                  <uni-text class="font-14 font-weight color-black"
                    ><span>合約帳戶</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"
                    ><span>23,668.23 USDT</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$23,640.54</span></uni-text></uni-view
                ></uni-view
              >
              <uni-view class="cell"
                ><uni-view class="cell-left">
                  <img src="../../../assets/img/options-acc-dark.png" alt="" style="height: 22px" />
                  <uni-text class="font-14 font-weight color-black"
                    ><span>期權帳戶</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"
                    ><span>4,257.80 USDT</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$4,252.81</span></uni-text></uni-view
                ></uni-view
              >
              <uni-view class="cell"
                ><uni-view class="cell-left">
                  <img src="../../../assets/img/wm-acc-dark.png" alt="" style="height: 22px" />
                  <uni-text class="font-14 font-weight color-black"
                    ><span>理財帳戶</span></uni-text
                  ></uni-view
                ><uni-view class="cell-right"
                  ><uni-text class="font-13 font-weight color-black"
                    ><span>11,328.00 USDT</span></uni-text
                  ><uni-text class="font-12 color-999"><span>$11,314.74</span></uni-text></uni-view
                ></uni-view
              >
            </uni-view>
          </uni-view>
        </div>
      </div>
    </div>
  </uni-scroll-view>
</template>
