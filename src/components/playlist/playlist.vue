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
                <div class="main">
                    <table class="table">
                    <tr class="songs-title">
                        <th></th>
                        <th>播放</th>
                        <th>歌名</th>
                        <th>歌手</th>
                        <th>专辑</th>
                    </tr>
                    <tr class="songs" v-for="(song,index) in getSongs" :key="song.id">
                        <td class="id">{{index+1}}</td>
                        <td class="play">播放</td>
                        <td class="song song-name">
                            <a href="">{{song.name}}</a>
                        </td>
                        <td class="song song-sings">
                                <a href="" v-for="ar in song.ar" :key='ar.id'>{{ar.name}}</a>
                        </td>
                        <td class="song song-album">
                            <a href="javascript:void(0);" @click='album(song.al.id)'>{{song.al.name}}</a>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
import {playlistDetail} from '@/api/recommend'
import {allSongs,getAlbum} from '@/api/song'
import card from '@/components/layout/card.vue'
import { Footer } from 'element-ui'
export default {
    name:'palylist',
    components:{
        card
    },
    data(){
        return{
            playlist:{},
            id:'',
            idsAll:[]
        }
    },
    methods:{
        _formatSongs(list){
            const res = []  
            list.songs.map((item,index)=>{
                if(item.id){
                    item.license = !list.privileges[index].cp
                    res.push(item)
                }
            })
            return res;
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

            this.idsAll = idsAll
        },
        goPlayList(id){
            return this.$router.push({name:'playlist',query:{id}})
        },
        async album(id){
            const {data:res} = await getAlbum(id)
            console.log(res);
        }
    },
    computed:{
        getSongs:function(){
            // console.log('idsAll',this.idsAll);
            const data = []
            this.idsAll.map(value=>{
                const {id,name,al,ar} = value
                data.push({id,name,al,ar})
            })
            return data
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

.main{
    width: 100%;
    display: flex;
    justify-content: center;
}


.table{
    width: 90%;
    text-align: left;
    border: 1px solid #333;
    box-sizing: border-box;
    font-size: 15px;

    tr:nth-of-type(2n+1){
        background-color: #f7f7f7;
    }
    .song-name{
        font-weight: bold;
        color: #333;
    }
    .songs-title{
        font-size: 15px;
        font-weight: normal;
        th{
            padding: 10px;
        }
    }
    .song-sings{
        display: flex;
        a{
            display: block;
        }
        a:nth-of-type(n+2)::before{
            content:"/"
        }
    }
}


</style>