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
                        <img :src="song.coverImgUrl+'?param=180y180'" class="image" @click='goPlayList(song.id)'>
                        <div style="padding: 14px;" @click='goPlayList(song.id)'>
                            <span>{{song.name}}</span>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-pagination
                    background
                    :page-size="50"
                    :current-page.sync='pagination.currentPage'
                    @current-change='handleCurrentChange'
                    layout="prev, pager, next"
                    :total="pagination.total">
                </el-pagination>
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
            songList:[],
            pagination:{
                limit:50,
                total:0,
                currentPage:1,      //页码
            }
        }
    },
    computed:{
        routeQuery(){
            return {
                limit:this.pagination.limit,
                offset:this.pagination.currentPage*this.pagination.limit
            }
        }
    },
    watch:{
        
    },
    methods:{
        //跳转到歌单详情页
        goPlayList(id){
            this.$router.push({name:'playlist',query:{id}})
        },
        //切换页码
        handleCurrentChange(val){
            this.getAllSongListData(this.routeQuery)
            this.getAllSongListPage(this.routeQuery)
        },

        //访问请求
        async getAllSongListData(parp){
            const {limit=50,offset=1,cat='全部'} = parp
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