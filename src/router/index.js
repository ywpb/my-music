import VueRouter from "vue-router";
import Vue from "vue";


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(localhost){
    return originalPush.call(this,localhost).catch(err => err)
}

const routes = [
    {path:'/',component:()=>import('@/view/recommend.vue')},
    {path:'/playlist',name:'playlist',component:()=>import('@/components/playlist.vue')},
    {path:'/allSongList',name:'allSongList',component:()=>import('@/view/allSongList.vue')},
    {path:'/topArtists',name:'topArtists',component:()=>import('@/view/singer/allSinger.vue')},
    {path:'/allArtistSongs',name:'allArtistSongs',component:()=>import('@/view/singer/allArtistSongs.vue'),props:route =>{{query:route.query.id}}}
]

const router  = new VueRouter({
    routes
})


export default router