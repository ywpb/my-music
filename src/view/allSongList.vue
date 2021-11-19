<template>
    <div>
        <layout-card>
            <span slot='header'>
                <div class="topList-header">
                    <div class="topList-name">热门推荐</div>
                </div>
            </span>
            <span slot="main">
                <el-row>
                    <el-col :span="25" v-for="(song,index) in songList" :key="index" >
                        <el-card :body-style="{ padding: '0px' }" >
                        <!-- <img :src="song.coverImgUrl+'?param=180y180'" class="image" @click='goPlayList(song.id)'> -->
                         <img 
                         class="image" 
                         @click='goPlayList(song.id)'
                         v-img="song.coverImgUrl+'?param=180y180'">
                        <div style="padding: 14px;" @click='goPlayList(song.id)'>
                            <span>{{song.name}}</span>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                <paging v-bind:pagination="pagination" @handleCurrentChange='handleCurrentChange'></paging>
            </span> 
    </layout-card>    
    </div>
</template>

<script>
import layoutCard from '@/components/card.vue'
import paging from '@/components/paging.vue'
export default {
    name:'recommend',
    components:{
        layoutCard, 
        paging
    },
    data(){
        return {
            songList:[],
            pagination:{
                limit:50,
                total:0,
                currentChange:1,      //页码
            },
        }
    },
    
    watch:{
        
    },
    computed:{
        routeQuery(){
            return {
                limit:this.pagination.limit,
                offset:(this.pagination.currentChange-1)*this.pagination.limit
            }
        }
    },
    methods:{
        //跳转到歌单详情页
        goPlayList(id){
            this.$router.push({name:'playlist',query:{id}})
        },
        //切换页码
        handleCurrentChange(currentChange){
            this.pagination.currentChange = currentChange
            this.getAllSongListData(this.routeQuery)
            this.getAllSongListPage(this.routeQuery)
        },

        //访问请求
        async getAllSongListData(parp){
            const {limit=50,offset=0,cat='全部'} = parp
            const {data:{playlists,total}} = await this.$http.recommend.allSongList({limit:limit,offset:offset})
            this.songList = playlists
            this.pagination.total = total
        },

        //跳转
        getAllSongListPage(query){
            this.$router.push({
                name:'allSongList',
                query:query
            })
        }
    },
    mounted(){
        // const limit = this.$route.query.limit
        
        
        this.getAllSongListData(this.routeQuery)
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