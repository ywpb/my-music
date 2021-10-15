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
        </card>
    </div>
</template>

<script>
import {playlistDetail} from '@/api/recommend'
import {allSongs} from '@/api/song'
import card from '@/components/layout/card.vue'
export default {
    name:'palylist',
    components:{
        card
    },
    data(){
        return{
            playlist:{},
            id:'',
            allSongs:{}
        }
    },
    methods:{
        _formatSongs(list){
            console.log(list);
            const res = []
            list.songs.map((item,index)=>{
                if(item.id){
                    item.license = !list.privileges[index].cp
                    res.push()
                }
            })
        },

        //获取歌单
        async getPlaylistDetail(params){
            const {data:res} = await playlistDetail(params);
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
                const {data:res} = await allSongs(sliceArr[i].map(value=>value.id).join(','))
                idsAll = idsAll.concat(this._formatSongs(res))
            }

            
            
        }
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
        width: 120px;
        height: 120px;
    }
    .icon-gedan{
        width: 60%;
        display: flex;
        flex-direction: column;
        text-align: center;
        #cover-name{
            font-size: 20px;
        }
        #cover-description{
            font-size: 10px;
            width: 80%;
            margin-left: 10%;
        }
    }
    
}
</style>