<template>
  <uni-view class="baseAuth" data-theme="dark"
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
              ><span>Lv.2 高阶身分认证 3/3</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="baseAuth-container">
      <uni-view class="label"
        ><uni-text class="font-13 color-black"><span>姓名</span></uni-text
        ><uni-view class="label-box"
          ><uni-input class="font-13 font-weight"
            ><div class="uni-input-wrapper">
              <input
                v-model="formData.userName"
                type="text"
                maxlength="140"
                enterkeyhint="done"
                placeholder="请输入您的真实姓名"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input></uni-view
      ></uni-view>
      <uni-view class="label"
        ><uni-text class="font-13 color-black"><span>证件类型</span></uni-text
        ><uni-view class="label-box" @click="showBottom = true"
          ><uni-text class="font-13 color-black font-weight"
            ><span>{{ formData.title }}</span></uni-text
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
              draggable="false"
          /></uni-image>
        </uni-view>
      </uni-view>
      <uni-view class="label"
        ><uni-text class="font-13 color-black"><span>证件号</span></uni-text
        ><uni-view class="label-box"
          ><uni-input class="font-13 font-weight"
            ><div class="uni-input-wrapper">
              <input
                v-model="formData.number"
                type="text"
                maxlength="140"
                enterkeyhint="done"
                placeholder="请输入证件号"
                class="uni-input-input"
                autocomplete="off"
              /></div></uni-input></uni-view
      ></uni-view>
      <uni-view class="label"
        ><uni-text class="font-13 color-black"><span>居住国家</span></uni-text
        ><uni-view class="label-box" @click="showBottom2 = true"
          ><uni-text class="font-13 color-black font-weight"
            ><span>{{ current == 'zh' ? action.chineseName : action.englishName }}</span></uni-text
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
              draggable="false"
          /></uni-image>
        </uni-view>
      </uni-view>
      <uni-view class="upload-label"
        ><uni-text class="font-16 color-black font-weight"><span>本人证件照正面</span></uni-text>
        <van-uploader v-model="fileList1" :after-read="afterRead1">
          <img
            v-if="fileList1.length == 0"
            class="upload-image"
            style="height: 94px"
            src="../../assets/img/b5.png"
            draggable="false"
          />
        </van-uploader>
      </uni-view>
      <uni-view class="upload-label"
        ><uni-text class="font-16 color-black font-weight"><span>本人证件照反面</span></uni-text>
        <van-uploader v-model="fileList2" :after-read="afterRead2">
          <img
            v-if="fileList2.length == 0"
            class="upload-image"
            style="height: 94px"
            src="../../assets/img/b5.png"
            draggable="false"
          /> </van-uploader
      ></uni-view>
      <uni-view class="upload-label"
        ><uni-text class="font-16 color-black font-weight"><span>本人手持证件照</span></uni-text>
        <van-uploader v-model="fileList3" :after-read="afterRead3">
          <img
            v-if="fileList3.length == 0"
            class="upload-image"
            style="height: 94px"
            src="../../assets/img/b5.png"
            draggable="false"
          /> </van-uploader
      ></uni-view>
      <uni-view class="upload-tips"
        ><uni-text class="font-13 color-black font-weight"><span>上传要求</span></uni-text
        ><uni-text class="font-13 color-gray mt-10"
          ><span>1.影片要求清晰并且本人照片</span></uni-text
        ></uni-view
      ></uni-view
    ><uni-view
      class="footer-button"
      @click="submit"
      v-if="advancedAuth == null || advancedAuth == 2"
      ><uni-view class="_button"
        ><uni-text class="font-14 color-gray font-weight"><span>确定</span></uni-text></uni-view
      ></uni-view
    ></uni-view
  >
  <CertificateCom :showBottom="showBottom" :list="certificate" @close="close" />
  <PhonePopup :showBottom="showBottom2" @close="handleClose" />
</template>
<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useUserStore } from '@/store/user'
import { storageDict } from '@/config/dict'
import { uploadImg } from '@/api/common/index.js'
import { uploadKYC } from '@/api/user'
import CertificateCom from './component/certificate.vue'
import PhonePopup from '@/components/phonePopup/index.vue'
const router = useRouter()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const current = ref(localStorage.getItem(storageDict.LANGUAGE))
const advancedAuth = computed(() => {
  return userInfo.value.detail?.auditStatusAdvanced
})
const formData = ref({
  userName: '',
  title: '',
  type: '',
  number: ''
})
const action = ref({})
const certificate = [
  { name: '身份证', type: 1 }, //身份证
  { name: '护照', type: 2 }, //护照
  { name: '驾驶证', type: 3 } //驾驶证
]
const showBottom = ref(false)
const close = (value) => {
  if (value) {
    formData.value.type = value.type
    formData.value.title = value.name
  }
  showBottom.value = false
}

const showBottom2 = ref(false)
const handleClose = (value) => {
  if (value) {
    action.value = value
  }
  showBottom2.value = false
}
const fileList1 = ref([])
const afterRead1 = (file) => {
  file.status = 'uploading'
  let formData = new FormData()
  formData.append('file', file.file)
  uploadImg(formData).then((res) => {
    res = res.data
    if (res.code == '200') {
      file.res = res.data.url
      file.status = 'success'
    } else {
      showToast(res.msg)
      fileList1.value = []
    }
  })
}
const fileList2 = ref([])
const afterRead2 = (file) => {
  file.status = 'uploading'
  let formData = new FormData()
  formData.append('file', file.file)
  uploadImg(formData).then((res) => {
    res = res.data
    if (res.code == '200') {
      file.res = res.data.url
      file.status = 'success'
    } else {
      showToast(res.msg)
      fileList2.value = []
    }
  })
}
const fileList3 = ref([])
const afterRead3 = (file) => {
  file.status = 'uploading'
  let formData = new FormData()
  formData.append('file', file.file)
  uploadImg(formData).then((res) => {
    res = res.data
    if (res.code == '200') {
      file.res = res.data.url
      file.status = 'success'
    } else {
      showToast(res.msg)
      fileList3.value = []
    }
  })
}
const submit = () => {
  if (!formData.value.userName) {
    showToast('请填写姓名')
    return
  }
  if (!formData.value.title) {
    showToast('请选择证件类型')
    return
  }
  if (!formData.value.number) {
    showToast('请填写证件号码')
    return
  }
  console.log(action.value?.englishName)

  if (!action.value?.englishName) {
    showToast('请选择居住国家')
    return
  }
  if (fileList1.value.length == 0) {
    showToast('请上传证件正面')
    return
  }
  if (fileList2.value.length == 0) {
    showToast('请上传证件反面')
    return
  }
  if (fileList3.value.length == 0) {
    showToast('请上传手持证件照')
    return
  }
  const file1 = fileList1.value[0] || {}
  let filePath1 = file1.res
  const file2 = fileList2.value[0] || {}
  let filePath2 = file2.res
  const file3 = fileList3.value[0] || {}
  let filePath3 = file3.res
  if (file1.status != 'success' || file2.status != 'success' || file3.status != 'success') {
    showToast('图片上传中,稍后重试')
    return
  }
  let params = `realName=${formData.value.userName}&idCard=${formData.value.number}&flag=2&frontUrl=${filePath1}&backUrl=${filePath2}&country=${action.value.englishName}&handelUrl=${filePath3}&cardType=${formData.value?.type}`
  uploadKYC(params).then((res) => {
    if (res.code == '200') {
      showToast('提交成功，请等待...')
    } else {
      showToast(res.msg)
    }
    router.back()
  })
}
</script>
