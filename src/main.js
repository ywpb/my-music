import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'


import {
  Button,
  Row
} from 'element-ui'

Vue.use(Button)
.use(Row)

Vue.config.productionTip = false




new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
