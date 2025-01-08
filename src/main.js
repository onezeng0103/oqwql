import './assets/css/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { setupI18n } from './locales/index.js'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import { Icon } from 'vant'
import 'vant/lib/index.css'
import { useTradeStore } from '@/store/trade/index'
import { useMainStore } from '@/store/index.js'
import NoData from './components/noData/index.vue'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.component('NoData', NoData)
app.use(router)
app.use(Vant)
app.use(Icon)
// 获取币种列表
const tradeStore = useTradeStore()
const mainStore = useMainStore()
// 获取平台地址 获取平台配置 币种列表 语言列表
Promise.all([
  mainStore.getPlatFormConfig(),
  mainStore.getSettingConfig(),
  tradeStore.getCoinList()
]).then(async () => {
  const currentLanguage = mainStore.languageList.filter((item) => item.isDefault === 'Y')
  // 判断语言列表中是否存在缓存语言 若不存在 使用默认语言
  let defaultLanguage = mainStore.language || ''
  if (!defaultLanguage && currentLanguage.length) {
    defaultLanguage = currentLanguage[0].dictValue || 'en'
  }
  const i18n = await setupI18n(defaultLanguage)
  app.use(i18n)
  app.mount('#app')
})
