<template>
        <div>
        <layout-card>
            <span slot='header'>
                <div class="topList-header">
                    <div class="topList-name">歌手</div>
                </div>
            </span>
            <span slot="main">
                <el-row>
                    <el-col :span="25" v-for="(song,index) of songData" :key="index" >
                        <el-card :body-style="{ padding: '0px' }" >
                        <img :src="song.singerImg+'?param=180y180'" class="image" @click='goArtistSongs(song,index)'>
                        <div style="padding: 14px;" @click='goArtistSongs(song,index)'>
                            <span>{{song.singerName}}</span>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                <!--  <paging v-bind:pagination="pagination" @handleCurrentChange='handleCurrentChange'></paging> -->
            </span> 
    </layout-card>    
    </div>
</template>

<script>
import layoutCard from '@/components/card.vue'
import {getFromSinger} from '@/utils/filter'
import {mapMutations} from 'vuex'
export default {
    name:'allSinger',
    components:{
        layoutCard
    },
    data(){ 
        return {
            songData:{}
        }
    },
    methods:{
        //设置歌手信息
        ...mapMutations({
            setSingerInfor:'SET_SINGERINFOR'
        }),

        //获取全部歌手
        async getSinger(){
            const {data} = await this.$http.singer.topArtists({})
            this.songData = data.artists.map(item => {
                return getFromSinger(item)
            });
            
        },
        //进入歌手歌单页
        goArtistSongs(song,index){
            this.transmitData(index)
            this.$router.push({name:'allArtistSongs',query:{id:song.singerId}})
        },
        transmitData(index){
            const item = JSON.parse(JSON.stringify(this.songData[index]))
            this.setSingerInfor(item)
        }
    },
    mounted(){
        this.getSinger()
    }
}
</script>

<style lang="less" scoped>
.topList-header{
    display: flex;
    justify-content: space-between;
    .topList-name{
        font-size: 20px;
        font-weight: 800;
    }
    .more{
        font-size: 10px;
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
</style>