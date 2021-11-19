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
                        <el-card  :body-style="{ padding: '0px' }" >
                        <!-- <img :src="song.picUrl" class="image" @click='goPlayList(song.id)'> -->
                        <img 
                        class="image" 
                        @click='goPlayList(song.id)'
                        v-img="song.picUrl"
                        >
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
import topList from '@/components/top-list.vue'
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
        //跳转歌单列表
        goPlayList(id){
            this.$router.push({name:'playlist',query:{id}})
        },
        //推荐歌曲列表
        async getRecomSongList(){
            const {data:{result}} =await this.$http.recommend.recomSongList()
            this.songList = result.slice(0,10)
        },

        //推荐榜单
        getTopList(){
            this.$http.recommend.toplist().then(e=>{
                const {data:res} = e
                if(res.code !== 200){
                    return alert('数据请求失败')
                }
                return res
            }).then(async r =>{
                const top_list = r.list.slice(0,3)
                top_list.forEach(async val => {
                    const {data} = await this.$http.recommend.playlistDetail(val.id)
                });
            })
            
            
        }
        
    },
    mounted(){
        this.getRecomSongList()
        this.getTopList()
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