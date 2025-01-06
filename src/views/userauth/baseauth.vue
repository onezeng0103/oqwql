<template>
  <uni-view class="baseAuth"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--white);
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 9;
        "
        ><uni-view class="fui-nav__status-bar" style="height: 0px"></uni-view
        ><uni-view class="fui-nav__header"
          ><uni-view class="fui-nav__left"
            ><uni-text
              @click="router.back()"
              class="fui-icon"
              style="color: var(--color-title-black); font-size: 1.75rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--color-title-black); font-weight: 500"
              ><span>Lv.1 基础身份认证 1/2</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="baseAuth-container"
      ><uni-view class="label"
        ><uni-text class="font-13 color-black"><span>国家地区</span></uni-text
        ><uni-view class="label-box"
          ><uni-text class="font-13 color-black font-weight"><span>HONG KONG</span></uni-text
          ><uni-image class="down-icon"
            ><div
              style="
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAANlBMVEUAAACFio+Hh4+DiI+Fh4+GiY+Fio+FiY+Fio+AiI+Gio+GiY+EiY+Dho+Fio+FiY+DiI+FiY+7aaZ0AAAAEXRSTlMA7yCAYN8w36AQv7BwSM/PkFBScp4AAACaSURBVFjD7dRBDsMgDETRMQ4USNLW979sD9BKMxFdRX4H+AvEGCmllNKdld2Csl5op4bkwUo9RJOELERGQyoSmiHa2WNbSKyAaCZ1GqgtBBsIsXRA4kE4RM46svd6hy+l45JJPqJsPOOn18BFo5LrISuVdfQS6ciKyUPlA9aHqs/uBCGWNixxbRh6ybHMa4Qd+IezDaSUUkrfPvkDLTUq2oYZAAAAAElFTkSuQmCC');
                background-position: 0% 0%;
                background-size: 100% 100%;
              "
            ></div>
            <span></span
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAANlBMVEUAAACFio+Hh4+DiI+Fh4+GiY+Fio+FiY+Fio+AiI+Gio+GiY+EiY+Dho+Fio+FiY+DiI+FiY+7aaZ0AAAAEXRSTlMA7yCAYN8w36AQv7BwSM/PkFBScp4AAACaSURBVFjD7dRBDsMgDETRMQ4USNLW979sD9BKMxFdRX4H+AvEGCmllNKdld2Csl5op4bkwUo9RJOELERGQyoSmiHa2WNbSKyAaCZ1GqgtBBsIsXRA4kE4RM46svd6hy+l45JJPqJsPOOn18BFo5LrISuVdfQS6ciKyUPlA9aHqs/uBCGWNixxbRh6ybHMa4Qd+IezDaSUUkrfPvkDLTUq2oYZAAAAAElFTkSuQmCC"
              draggable="false" /></uni-image></uni-view></uni-view
      ><uni-view class="label"
        ><uni-text class="font-13 color-black"><span>证件类型</span></uni-text
        ><uni-view class="label-box"
          ><uni-text class="font-13 color-black font-weight"><span>护照</span></uni-text
          ><uni-image class="down-icon"
            ><div
              style="
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAANlBMVEUAAACFio+Hh4+DiI+Fh4+GiY+Fio+FiY+Fio+AiI+Gio+GiY+EiY+Dho+Fio+FiY+DiI+FiY+7aaZ0AAAAEXRSTlMA7yCAYN8w36AQv7BwSM/PkFBScp4AAACaSURBVFjD7dRBDsMgDETRMQ4USNLW979sD9BKMxFdRX4H+AvEGCmllNKdld2Csl5op4bkwUo9RJOELERGQyoSmiHa2WNbSKyAaCZ1GqgtBBsIsXRA4kE4RM46svd6hy+l45JJPqJsPOOn18BFo5LrISuVdfQS6ciKyUPlA9aHqs/uBCGWNixxbRh6ybHMa4Qd+IezDaSUUkrfPvkDLTUq2oYZAAAAAElFTkSuQmCC');
                background-position: 0% 0%;
                background-size: 100% 100%;
              "
            ></div>
            <span></span
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAANlBMVEUAAACFio+Hh4+DiI+Fh4+GiY+Fio+FiY+Fio+AiI+Gio+GiY+EiY+Dho+Fio+FiY+DiI+FiY+7aaZ0AAAAEXRSTlMA7yCAYN8w36AQv7BwSM/PkFBScp4AAACaSURBVFjD7dRBDsMgDETRMQ4USNLW979sD9BKMxFdRX4H+AvEGCmllNKdld2Csl5op4bkwUo9RJOELERGQyoSmiHa2WNbSKyAaCZ1GqgtBBsIsXRA4kE4RM46svd6hy+l45JJPqJsPOOn18BFo5LrISuVdfQS6ciKyUPlA9aHqs/uBCGWNixxbRh6ybHMa4Qd+IezDaSUUkrfPvkDLTUq2oYZAAAAAElFTkSuQmCC"
              draggable="false" /></uni-image></uni-view></uni-view
      ><uni-view class="label"
        ><uni-text class="font-13 color-black"><span>姓名</span></uni-text
        ><uni-view class="label-box"
          ><uni-input class="font-13 font-weight"
            ><div class="uni-input-wrapper">
              <div class="uni-input-placeholder placeholder" style="display: none">请输入姓名</div>
              <input
                type="text"
                maxlength="140"
                enterkeyhint="done"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input></uni-view></uni-view
      ><uni-view class="label"
        ><uni-text class="font-13 color-black"><span>证件号码</span></uni-text
        ><uni-view class="label-box"
          ><uni-input class="font-13 font-weight"
            ><div class="uni-input-wrapper">
              <input
                type="text"
                maxlength="140"
                placeholder="请输入证件号码"
                enterkeyhint="done"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input></uni-view></uni-view
      ><uni-view class="label"
        ><uni-text class="font-13 color-black"><span>温馨提示：</span></uni-text
        ><uni-text class="font-12 color-gray mt-10"
          ><span
            >确保帐户资产安全，需实名认证后才能进行相关操作，请确保您所提交资料真实有效。</span
          ></uni-text
        ></uni-view
      ></uni-view
    ><uni-view class="footer-button"
      ><uni-view
        class="fui-button__wrap fui-button__flex-1"
        style="
          width: 100%;
          height: 2.75rem;
          margin: 0px;
          border-radius: 0.5rem;
          background: var(--color-gray-bg);
        "
        ><uni-button
          id=""
          class="fui-button fui-button__flex-1"
          app-parameter=""
          scope=""
          style="
            width: 100%;
            height: 2.75rem;
            line-height: 2.75rem;
            background: var(--color-gray-bg);
            border-width: 0px;
            border-color: var(--color-gray-bg);
            border-radius: 0.5rem;
            font-size: 0.875rem;
            color: var(--color-text-dark-gray);
          "
          >审核中</uni-button
        ></uni-view
      ></uni-view
    ></uni-view
  >
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
