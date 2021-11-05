<template>
    <div>
        <card>
            <div slot="header" class="playlist-header">
                <img :src="playlist.coverImgUrl" alt="coverImg" class="cover-img">
                <div class="icon-gedan">
                    <div id="cover-name">
                        <span>歌单名:{{ playlist.name }}</span>
                    </div>
                    <div id="cover-description">
                        <span>{{ playlist.description }}</span>
                    </div>
                </div>
            </div>
            <div slot="main">
                <song-list class="songlist" :songlist='songlist'></song-list>
            </div>
        </card>
    </div>
</template>

<script>
import card from '@/components/card.vue'
import {formatSongInfo} from '@/utils/song.js'
import songList from '@/components/song-list.vue'
export default {
    name:'palylist',
    components:{
        card,
        songList
    },
    data(){
        return{
            playlist:{},
            id:'',
            songlist:[]
        }
    },
    methods:{
        _formatSongs(list){
            const res = []  
            list.songs.map((item,index)=>{
                if(item.id){
                    item.license = !list.privileges[index].cp
                    res.push(formatSongInfo(item))
                }
            })
            return res;
        },

        //获取歌单
        async getPlaylistDetail(params){
            const {data:res} = await this.$http.recommend.playlistDetail(params);
            this.getAllSongs(res.playlist.trackIds)
            
            this.playlist = res.playlist     
        },

        async getAllSongs(ids){
            const sliceArr = []
            let idsAll = []
            let num = 500

            for(let i =0; i<=ids.length; i+=num){
                sliceArr.push(ids.slice(i,i+num))
            }
            for(let i=0; i<sliceArr.length; i++){
                const {data:res} = await this.$http.song.allSongs(sliceArr[i].map(value=>value.id).join(','))
                console.log(res);
                idsAll = idsAll.concat(this._formatSongs(res))
            }
            this.songlist = idsAll
        },
        goPlayList(id){
            return this.$router.push({name:'playlist',query:{id}})
        },
        async album(id){
            const {data:res} = await this.$http.song.getAlbum(id)
            console.log(res);
        }
    },
    computed:{
    },
    mounted(){
        this.id = this.$route.query.id? this.$route.query.id: 0;
        
        this.getPlaylistDetail(this.id)       
    }
}
</script>

<style lang="less" scoped>
.playlist-header{
    display: flex;
    .cover-img{
        width: 280px;
        height: 280px;
    }
    .icon-gedan{
        width: 60%;
        display: flex;
        flex-direction: column;
        text-align: center;
        #cover-name{
            font-size: 24px;
        }
        #cover-description{
            font-size: 14px;
            width: 80%;
            margin-left: 10%;
        }
    }
    
}


</style>