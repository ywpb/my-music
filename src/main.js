import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import getApi from '@/api/api'

import VueImg from '@/directives/lazyLoad/src'


//directive
Vue.use(VueImg, {
  loading: '',
  error: '',
  prefix: '',
  quality: 100,
  adapt: true,
  delay: 2000, // 单位ms,
  cdn: '' // 选择要使用的 CDN 服务提供商，目前仅支持 `ali` 和 `qiniu`，默认为 'qiniu'
})

import './assets/static/iconfont.js'
import SvgIcon from '@/components/iconfont/svgIcon.vue'
Vue.component("svg-icon", SvgIcon);

Vue.prototype.$http = getApi


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
  TableColumn,
  Pagination,
  Image
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
.use(Pagination)
.use(Image)

Vue.config.productionTip = false




new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
