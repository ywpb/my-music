<template>
  <div>
        <!-- <layout-card>
            <span slot='header'>
                <div class="topList-header">
                    <div class="topList-name">歌手</div>
                </div>
            </span>
            <span slot="main">
                <el-row>
                    <el-col :span="25" v-for="(song,index) in songData" :key="index" >
                        <el-card :body-style="{ padding: '0px' }" >
                        <img :src="song.singerImg+'?param=180y180'" class="image" @click='goPlayList(song.id)'>
                        <div style="padding: 14px;" @click='goPlayList(song.singerId)'>
                            <span>{{song.singerName}}</span>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
            </span> 
        </layout-card>     -->
    </div>
</template>

<script>
import layoutCard from '@/components/card.vue'
export default {
    name:'allArtistSongs',
    components:{
       layoutCard 
    },
    data(){
        return {

        }
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