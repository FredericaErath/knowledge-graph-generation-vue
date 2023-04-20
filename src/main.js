import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vssue from 'vssue'
import 'vssue/dist/vssue.css'
import GithubV3 from '@vssue/api-github-v3'
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false
Vue.use(Vssue, {
  // 设置要使用的平台 api
  api: GithubV3,
  // 在这里设置你使用的平台的 OAuth App 配置
  owner: 'FredericaErath',
  repo: 'vssue-demo',
  clientId: '62f86f680639f0cfda1c',
  clientSecret: '451bd9c253c1392bd6c5c657bf6d3514da3eded2', // 只有在使用某些平台时需要
})
Vue.use(router)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
