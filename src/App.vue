<template>
  <el-container>
    <el-header>
        <Header></Header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
</el-container>
</template>

<script>
import Header from '@/components/layout/header.vue'
export default {
  name: 'App',
  components:{
      Header,
    }
}
</script>

<style>
/*css 初始化 */
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, 
form, fieldset, legend, img { margin:0; padding:0; } 
fieldset, img,input,button { border:none; padding:0;margin:0;outline-style:none; }
ul, ol { list-style:none; }
input { padding-top:0; padding-bottom:0; font-family: 'Alibaba-PuHuiTi-R','Alibaba-PuHuiTi-B','Alibaba-PuHuiTi-H','Alibaba-PuHuiTi-L','Alibaba-PuHuiTi-M','Helvetica Neue','Microsoft YaHei','Helvetica','PingFang SC','Hiragino Sans GB','SimSun','sans-serif';}
select, input { vertical-align:middle; }
select, input, textarea { font-size:12px; margin:0; }
textarea { resize:none; }
img {border:0;    vertical-align:middle;}
table { border-collapse:collapse; }
body {
    font:12px/150% Arial,Verdana,"\5b8b\4f53";
    color:#666;
    background:#f3f3f3;
}
.clearfix:before,.clearfix:after{ 
    content:""; 
    display:table; 
} 
.clearfix:after{clear:both;} 
.clearfix{ 
    *zoom:1;/*IE/7/6*/ 
} 
a{color:#333; text-decoration:none; }
a:hover{color:#C81623;}
h1,h2,h3,h4,h5,h6{text-decoration:none;font-weight:normal;}
s,i,em{font-style:normal;text-decoration:none;}
.col-red{color: #C81623!important;}


/*公共类*/
.w{
    width: 1210px;margin:0 auto;
}
.fl {
    float:left
}
.fr {
    float:right
}
.al {
    text-align:left
}
.ac {
    text-align:center
}
.ar {
    text-align:right
}
.hide {
    display:none
}


.el-header{
    height: 72px !important;
    background-color: #191919 !important;
    border-bottom:2px solid #434343;
    z-index: 1000;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    width: 100%;
    overflow-x: hidden;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-main{
    width: 1200px;
    align-self: center;
  }
</style>
