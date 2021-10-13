import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'


import {
  Button,
  Row,
  Col,
  Container,
  Header,
  Main,
  Input
} from 'element-ui'

Vue.use(Button)
.use(Row)
.use(Container)
.use(Header)
.use(Main)
.use(Col)
.use(Input)

Vue.config.productionTip = false




new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
