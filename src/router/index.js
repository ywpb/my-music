import VueRouter from "vue-router";
import Vue from "vue";


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(localhost){
    return originalPush.call(this,localhost).catch(err => err)
}

const routes = [
    {path:'/',component:()=>import('@/view/recommend.vue')},
    {path:'/playlist',name:'playlist',component:()=>import('@/components/playlist/playlist.vue')},
    {path:'/allSongList',name:'allSongList',component:()=>import('@/view/allSongList.vue')},
]

const router  = new VueRouter({
    routes
})


export default router