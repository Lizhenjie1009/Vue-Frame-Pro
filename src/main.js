import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入可视化
import dataV from '@jiaminghi/data-view'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/theme/element-#0b0a3e/index.css' // 引入主题色

import 'normalize.css/normalize.css' // 全局样式格式化
import '@/styles/index.scss' // global css 全局样式

import './permission' // permission control 全局路由守卫-权限控制

// 安装
Vue.use(dataV)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
