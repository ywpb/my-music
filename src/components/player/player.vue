<template>
<div class="btmbar">
    <div class="player">
        <div class="left">
            <a href="javascript:;" hidefocus="true"></a>
        </div>
        <div class="right"></div>
    </div>
    <div class="bg"></div>
    <div title="播放条"></div>
    <div class="wrap">
        <div class="btns">
            <a class="prv" href="javascript:;"  hidefocus='true' title="上一首">上一首</a>
            <a class="ply j-flag" href="javascript:;"  hidefocus='true' title="播放/暂停">播放/暂停</a>
            <a class="next" href="javascript:;"  hidefocus='true' title="下一首">下一首</a>
        </div>
        <div class="play">
            <div class="word">
                <a href="name f-fl">稻香</a>
                <span class="by f-fl">
                    <span title="周杰伦">
                        <a href="javascript:;" class="" hidefocus='true'>周杰伦</a>
                    </span>
                </span>
            </div>
            <div class="m-pbar"></div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.bg, .left,.right,.left a,.btmbar .btns,.prv,.ply,.next {
        background: url('../../assets/playbar.png') no-repeat 0 9999px;
}
.btmbar{
    width: 100%;
    height: 53px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
.player{
    width: 100%;
    .left{
        position: fixed;
        bottom: 0;
        right: 50px;
        width: 50px;
        height: 67px;
        background-repeat: no-repeat;
        background-position: 0 -380px;

        a{
            position:fixed;
            bottom: 42px;
            right: 65px;
            height: 18px;
            width: 18px;
            background-position: -80px -380px;
            background-repeat: no-repeat;
        }
        a:hover{
            position:fixed;
            bottom: 42px;
            right: 65px;
            height: 18px;
            width: 18px;
            background-position: -80px -400px;
            background-repeat: no-repeat;
        }

        .selectA{
            position:fixed;
            bottom: 42px;
            right: 65px;
            height: 18px;
            width: 18px;
            background-position: -100px -380px;
            background-repeat: no-repeat;
        }
        .selectA:hover{
            position:fixed;
            bottom: 42px;
            right: 65px;
            height: 18px;
            width: 18px;
            background-position: -100px -400px;
            background-repeat: no-repeat;
        }
    }
    .right{
        position: fixed;
        bottom: 0;
        right: 0px;
        width: 50px;
        height: 53px;
        background-position: 0 0;
    }
}
.bg{
    height: 53px;
    margin-right: 100px;
    background-position: 0 0;
    background-repeat: repeat-x;
}

.btmbar .wrap{
    width: 1000px;
    height: 50px;
    position: absolute;
    left: 50%;
    top: 6px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .btns{
        display: flex;
        align-items: center;
        width: 130px;
        height: 100%;
        .prv{
            height: 30px;
            width: 30px;
            background-position: 0px -130px;
            text-indent: -9999px;
        }
        .ply{
            height: 40px;
            width: 40px;
            background-position: -0px -160px;
            text-indent: -9999px;
            padding-bottom: 8px;
        }
        .next{
            height: 30px;
            width: 30px;
            background-position: -80px -130px;
            text-indent: -9999px;
        }
        .j-flag{
            margin: 0px 10px;
        }
    } 
}

.btmbar .wrap .play{
    width: 600px;
}
</style>