<template>
  <div>
        <layout-card>
            <span slot='header'>
                <div class="topList-header">
                    <div class="topList-name">歌手 -- {{singerInformation.singerName}}</div>
                    <img :src="singerInformation.singerImg+'?param=800y300'" class="image">
                </div>
            </span>
            <span slot="main">
                <song-list class="songlist" :songlist='allArtistsSongs'></song-list>
            </span> 
        </layout-card>    
    </div>
</template>

<script>
import layoutCard from '@/components/card.vue'
import songList from '@/components/song-list.vue'
import {formatSongInfo} from '@/utils/song.js'
import {mapGetters} from 'vuex'
export default {
    name:'allArtistSongs',
    components:{
       layoutCard,
       songList
    },
    data(){
        return {
            allArtistsSongs:[],
        }
    },
    computed:{
        
        ...mapGetters(['singerInformation']),
    },
    methods:{
        async getAllArtistsSongs({id}){
            const {data:{songs}} = await this.$http.singer.allArtistsSongs({id})
            songs.forEach(element => {
                this.allArtistsSongs.push(formatSongInfo(element))
            });
        }
    },
    mounted(){
        const query = this.$route.query           
        this.getAllArtistsSongs({id:query.id})
    }
}
</script>

<style lang="less" scoped>
.topList-header{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .topList-name{
        font-size: 20px;
        font-weight: 800;
        align-self: flex-start;
    }
    .more{
        font-size: 10px;
    }
    .image{
        margin: 20px;
    }
}

::v-deep .el-col-25{
    margin-left: 30px;
    width: 180px;
    height: 250px;
    img{
        width: 180px;
        height: 180px;
    }
}

.el-card{
    border-radius: 0;
    border: 0;
}

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