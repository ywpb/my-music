<template>
    <el-row type="flex" class="row-bg" justify="center">
        <router-link to="/" class="logo"><img src="@/assets/music.png" alt="logo"></router-link>
        <el-col :span="2" v-for="menu in menuList" :key="menu.name"><router-link :to='{path:menu.path,query:menu.query}'><span>{{ menu.name }}</span></router-link></el-col>
        
        <div style="margin-top: 5px;">
            <el-input placeholder="请输入内容" v-model="search" class="input-with-select" >
            <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>

        <el-col :span="2">
            <router-link to="/" class="login" ><el-button type="primary" round>登录</el-button></router-link>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name:'Header',
    data(){
        return {
            search:'',
            menuList:[
                {
                    name:'发现音乐',
                    path:'/'
                },
                {
                    name:'全部歌单',
                    path:'/allSongList',
                    query:{
                        limit:50,
                        offset:0
                    }
                },{
                    name:'全部歌手',
                    path:'/topArtists',
                    query:{
                        limit:50,
                        offset:0
                    }
                },{
                    name:'排行榜',
                    path:'/'
                },{
                    name:'新碟上架',
                    path:'/'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
img{
    height: 50px;
    margin-right: 40px;
}
.el-row{
    width: 1100px;
    margin: 0 auto;
}
.el-col{
    height: 72px !important;
    a{
        display: block;
        color:#fff;
        font-size: 16px;
        font-family: 'Alibaba-PuHuiTi-R';
        height: 72px;
        padding: 0px 20px;
    }
}
.el-col-2{
    width: auto !important;
}

.el-input{
    margin-left: 20px;
    ::v-deep .el-input__inner{
    height: 35px;
    }
}
.login{
    margin-top: 5px;
    margin-left: 20px;
}
</style>
