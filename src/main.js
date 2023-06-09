import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/vcharts.js'
import '@/assets/index.css'
import * as ECharts from 'echarts'
import VueECharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
