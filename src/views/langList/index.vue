<template>
  <uni-view class="currencyListWrap"
    ><uni-view style="height: 44px"
      ><uni-view
        class="fui-nav__bar fui-nav__bar-fixed"
        style="
          background: var(--background-primary);
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
              style="color: var(--content-primary); font-size: 1.75rem; font-weight: normal"
              ><span></span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__title"
            ><uni-text
              class="fui-nav__title-text"
              style="font-size: 16px; color: var(--content-primary); font-weight: 500"
              ><span>{{ t('selectLanguage') }}</span></uni-text
            ></uni-view
          ><uni-view class="fui-nav__right"></uni-view></uni-view></uni-view></uni-view
    ><uni-view class="fui-list__wrap" style="padding-bottom: 50px"
      ><uni-view class="fui-list__container"
        ><uni-view
          class="fui-list__border-top fui-list__border-color"
          style="left: 0px; right: 0px"
        ></uni-view>
        <uni-view
          v-for="(item, index) in languageList"
          :key="index"
          @click="setLanguage(item)"
          class="fui-list__cell fui-highlight"
          :style="{ color: current === item.dictValue ? 'var(--color-text-green)' : '' }"
          style="
            padding: 1rem;
            background: rgb(0, 0, 0);
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 0px;
          "
          >{{ item.remark
          }}<uni-view
            class="fui-cell__border-bottom fui-cell__border-color"
            style="left: 1rem; right: 0px"
          ></uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useMainStore } from '@/store/index.js'
import { storageDict } from '@/config/dict'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
const mainStore = useMainStore()
const current = ref(localStorage.getItem(storageDict.LANGUAGE))
/**
 * 设置语言
 */
const setLanguage = (item) => {
  mainStore.setLanguage(item.dictValue)
  current.value = item.dictValue
}
const languageList = mainStore.languageList
</script>
