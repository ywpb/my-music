import VueRouter from "vue-router";
import Vue from "vue";


Vue.use(VueRouter)

const routes = [
    {path:'/',component:()=>import('@/components/Main.vue')},
    {path:'/playlist/:id',component:()=>import('@/components/playlist/index.vue')}
]

const router  = new VueRouter({
    routes
})

export default router