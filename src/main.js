// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index.js'  // 引用API文件
import utils from './utils/index.js' // 引用工具文件
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueI18n from 'vue-i18n'
import en from 'iview/dist/locale/en-US'
import zh from 'iview/dist/locale/zh-CN'

Vue.prototype.$api = api  // 将API方法绑定到全局
Vue.prototype.$utils = utils // 将工具方法绑定到全局

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(iView)
Vue.locale = () => {}
const messages = {
  en: Object.assign({ message: 'hello' }, en),
  zh: Object.assign({ message: '你好' }, zh)
}

const i18n = new VueI18n({
  locale: 'en',  // set locale
  messages  // set locale messages
})
// Vue.config.lang = 'en-US'
// Vue.locale('en-US', en)
// Vue.locale('zh-CN', zh)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: {App}
})
