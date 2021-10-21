import Vuex from "vuex";
import Vue from "vue";
import state from './state.js'
import actions from './actions'
import mutations from "./mutations.js";


Vue.use(Vuex)


const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store;