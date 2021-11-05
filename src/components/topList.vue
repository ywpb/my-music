<template>
    <div class="box-card">
        <div class="box-header">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="" class="image">
            <div class="box-header-right">
                <span>榜单推荐</span>
                <div class="operation">链接</div>
            </div>
        </div>
        <div class="box-content" v-for="o in 10" :key="o">
            <div class="id">o</div>
            <div class="">音乐</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.box-card{
    width: 300px;
    height: 400px;
    margin: 0 30px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow:hidden;
    color: #303133;
}

.box-card:hover{
    -moz-box-shadow: 10px 10px 5px #888888; /* 老的 Firefox */
    box-shadow: 3px 3px 3px 3px #f3f3f3;
    transition:.3s;
}

.box-header{
    width: 100%;
    height: auto;
    padding: 10px;
    border-bottom: 1px solid #EBEEF5;
    display: flex;
    .image{
        width: 100px;
        height: 100px;
        margin: 5px 10px
    }
    .box-header-right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        span{
            font-size: 15px;
            font-weight: bold;
        }
        .operation{
            width: 100px;
            height: 40px;
            box-sizing: border-box;
            border: 1px solid black;
        }
    }
}

.box-content{
    display: flex;
    padding: 10px;
}

.box-content:nth-child(2n+1){
    background-color: #EBEEF5;
}
</style>