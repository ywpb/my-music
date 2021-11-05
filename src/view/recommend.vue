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

    <el-card class="box-card" shadow="never">
        <span slot='header'>
            <div class="topList-header">
                <div class="topList-name">榜单推荐</div>
                <div class="more">
                    <!-- <a href="">更多</a> -->
                    <router-link :to="{name:'allSongList',query:{limit:50,offset:0}}">更多</router-link>
                </div>
            </div>
        </span>
        <div class="text item box-content">
            <top-list v-for="o in 3" :key="o" ></top-list>
        </div>
    </el-card>
    
    </div>
</template>

<script>
import layoutCard from '@/components/card.vue'
import topList from '@/components/topList.vue'
export default {
    name:'recommend',
    components:{
        layoutCard,
        topList
        },
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
.box-content{
    display: flex;
    flex-direction: row;    
}

</style>