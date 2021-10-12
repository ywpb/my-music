import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import router from '@/router/index'
import store from '@/store/index'


import {
  Button,
  Row
} from 'element-ui'

Vue.use(Button)
.use(Row)

Vue.config.productionTip = false


Vue.use(less)


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
