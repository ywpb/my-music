<template>
  <el-container>
    <el-header>
        <Header></Header>
    </el-header>
    <el-main>Main</el-main>
</el-container>
</template>

<script>
import Header from './layout/header.vue'
export default {
    name:'Main',
    components:{
      Header
    }
}
</script>

<style lang="less" scoped>
.el-header{
    height: 72px !important;
    background-color: #191919 !important;
    border-bottom:2px solid #434343;
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
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-main{
    width: 1000px;
    align-self: center;
  }
</style>