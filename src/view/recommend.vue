<template>
    <div>
        <layout-card>
            <span slot='header'>
                <div class="topList-header">
                    <div class="topList-name">热门推荐</div>
                    <div class="more">
                        <!-- <a href="">更多</a> -->
                        <router-link :to="{name:'allSongList',query:{limit:50,offset:0}}">更多</router-link>
                    </div>
                </div>
            </span>
            <span slot="main">
                <el-row>
                    <el-col :span="25" v-for="(song) in songList" :key="song.id" >
                        <el-card :body-style="{ padding: '0px' }" >
                        <img :src="song.picUrl" class="image" @click='goPlayList(song.id)'>
                        <div style="padding: 14px;" @click='goPlayList(song.id)'>
                            <span>{{song.name}}</span>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
            </span>
    </layout-card>

    <layout-card>
            <span slot='header'>
                <div class="topList-header">
                    <div class="topList-name">热门推荐</div>
                    <div class="more">
                        <a href="">更多</a>
                    </div>
                </div>
            </span>
            <span slot="main">
                <el-row>
                    <el-col :span="25" v-for="(o) in 10" :key="o" >
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
            </span>
    </layout-card>
    
    </div>
</template>

<script>
import layoutCard from '@/components/card.vue'
export default {
    name:'recommend',
    components:{layoutCard},
    data(){
        return {
            songList:[]
        }
    },
    computed:{

    },
    methods:{
        goPlayList(id){
            this.$router.push({name:'playlist',query:{id}})
        }
    },
    async mounted(){
        const {data:{result}} = await this.$http.recommend.recomSongList()
        this.songList = result.slice(0,10)
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