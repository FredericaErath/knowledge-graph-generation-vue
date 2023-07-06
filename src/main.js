import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import GithubV3 from '@vssue/api-github-v3'
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false
Vue.use(router)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')