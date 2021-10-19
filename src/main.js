import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'

import './assets/static/iconfont.js'
import SvgIcon from '@/components/iconfont/svgIcon.vue'
Vue.component("svg-icon", SvgIcon);

import {
  Button,
  Row,
  Col,
  Container,
  Header,
  Main,
  Input,
  Card,
  Table,
  TableColumn
} from 'element-ui'

Vue.use(Button)
.use(Row)
.use(Container)
.use(Header)
.use(Main)
.use(Col)
.use(Input)
.use(Card)
.use(Table)
.use(TableColumn)

Vue.config.productionTip = false




new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
