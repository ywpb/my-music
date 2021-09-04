import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import { Login, artistList } from '@/api'

artistList().then((data)=>{console.log(data)})

new Vue({
  render: h => h(App),
}).$mount('#app')
