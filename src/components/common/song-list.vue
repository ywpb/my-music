<template>
        <table class="table">
                <tr class="list-header">
                    <th class="columnIndex"></th>
                    <th class="columnSong">歌名</th>
                    <th class="columnSing">歌手</th>
                    <th class="columnAlbum">专辑</th>
                    <th class="columnTime">时长</th>
                </tr>
                <tr class="list-scroll" v-for="(song,index) in songlist" :key="song.id">
                    <td class="columnIndex" @click="songPlay(song)">
                        <div class="songlist-index">{{index+1}}</div>
                        <svg-icon iconname="icon-bofang" class="columnPlay">
                        </svg-icon>
                    </td>
                    
                    <td class="columnSong text-overflow song-name">
                        <a href="">{{song.songName}}</a>
                    </td>
                    <td class="columnSing text-overflow song-sings">
                            <a href="" v-for="(ar,index) in song.songSings" :key='index'>{{ar.name}}</a>
                    </td>
                    <td class="columnAlbum song-album">
                        <a href="javascript:void(0);" @click='album(song.songAlbum.id)'>{{song.songAlbum.name}}</a>
                    </td>
                    <td class="columnTime">{{song.songTime}}</td>
                </tr>
        </table>
</template>

<script>
import {formatSongInfo,formatSongDetails} from '@/utils/song.js'
import {mapMutations,mapActions} from 'vuex'
export default {
    name:'songList',
    props:{
        songlist:{
            type:Array,
            required:true
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        
        //单独播放音乐
        songPlay(song){
            let list = formatSongDetails(song)
            this.selectPlay({list})
        },

        ...mapActions(['selectPlay']),    
    }
}
</script>

<style lang="less" scoped>
.table{
    width: 100%;
    .list-header{
        display: flex;
        line-height: 20px;
        border-bottom: 1px solid #EBEEF5;
        font-weight: bold;
        color: #999;
        text-align: left;
        padding: 5px;
    }
    .list-scroll{
        display: flex;
        line-height: 25px;
        padding: 5px;
        font-size: 15px;
        text-align: left;
        .text-overflow{
            width: 80%;
            overflow: hidden;
            // white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    
    .columnIndex{
        width: 80px;
        text-align: center;
        
        &:hover{
            .songlist-index{
                display: none;
            }
            .columnPlay{
                display: block;
            }
        }
    }
    .songlist-index{
        display: inline-block;
    }
    .columnPlay{
        font-size: 25px;
        display: none;
        text-align: center;
        position: relative;
        left: 28px;
        color: red;
    }
    .columnSong{
        flex: 1.5;
        
    }
    .columnSing{
        flex: 2;
    }
    .columnAlbum{
        flex: 1;
    }
    .columnTime{
        flex: .5;
    }
}

</style>