<template>
  <el-row>
    <div id='text'></div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
</el-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less' scoped>
  @bgcolor:#f3f3f3;

  #text{
    color: black;
    .navigation {
      font-size: 12px;
    }
    .logo {
      width: 300px;
    }
}
</style>
