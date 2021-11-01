<template>
<div class="btmbar">
    <div class="player">
        <div class="left">
            <a href="javascript:;" hidefocus="true"></a>
        </div>
        <div class="right"></div>
    </div>
    <div class="bg"></div>
    <div class="wrap">
        <div class="btns">
            <a class="prv" href="javascript:;"  hidefocus='true' title="上一首">上一首</a>
            <a class="ply j-flag" href="javascript:;"  hidefocus='true' title="播放/暂停">播放/暂停</a>
            <a class="next" href="javascript:;"  hidefocus='true' title="下一首">下一首</a>
        </div>
        <!--进度条-->
        <div class="play">
            <div class="word">
                <a href="name f-fl">{{player.name}}&nbsp;</a>
                <span class="by f-fl">
                    <span class="author" :title="player.author">
                        <a href="javascript:;" class="" hidefocus='true'>{{player.author}}</a>
                    </span>
                </span>
            </div>
            <div class="m-pbar">
                <div class="cur" style="width:30%">
                    <span class="f-tdn">
                        <i></i>
                    </span>
                </div>
                <span class="p-timer">00:00/{{player.timer}}</span>
            </div>
        </div>
        <!--设置-->
        <div class="ctrl">
            <!-- <div class="modes">
                <div class="loop"></div>
            </div> -->
            <div class="volume c-fl">
                <div class="v-column" style="display:none">
                </div>
            </div>
            <div class="p-list c-fl">
                <i>{{[...playList].length}}</i>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'player',
    data(){
        return {
            player:{
                author:'周杰伦',
                name:'稻香',
                timer:'00:00'
            }
        }
    },
    computed:{
        ...mapState(['playList']),
    }
}
</script>

<style lang="less" scoped>
.bg, .left,.right,.left a,.btmbar .btns,.prv,.ply,.next,.volume,.v-column,.v-strip,
.p-list{
        background: url('../../assets/playbar.png') no-repeat 0 9999px;
}
.cur,.m-pbar{
    background: url('../../assets/statbar.png') no-repeat 0 9999px;
}
.f-tdn,.f-tdn i{
    background: url('../../assets/iconall.png') no-repeat 0 9999px;
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
    left: 33%;
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
    .play{
        width: 600px;
        
        a{
            color:#f3f3f3;
        }

        .word{
            .name::after{
                content: '';
            }
        }
        .m-pbar{
            width: 500px;
            margin-bottom: 10px;
            height: 9px;
            background-position: left 0;
            position: relative;
            bottom: -5px;
            .cur{
                position: relative;
                height: 9px;
                background-position: left -66px;
                .f-tdn{
                    position: absolute;
                    right: -15px;
                    top: -7px;
                    display: block;
                    height: 24px;
                    width: 22px;
                    background-position: 0 -250px;
                }
            }
            .p-timer{
                color: #f3f3f3;
                // float: right;
                position: relative;
                right: -510px;
                top: -19px;
            }
        }
    }


    .ctrl{
        display: flex;
        align-items: center;
        .c-fl{
            margin: 0 5px;
        }
        .volume{
            width: 20px;
            height: 20px;
            background-position: -5px -250px;
            .v-column{
                width: 33px;
                height: 114px;
                background-position: -0px -503px;
                position: relative;
                bottom: 127px;
                left: -8px;
            }
        }
        .p-list{
            height: 25px;
            width: 60px;
            background-position: -45px -70px;
            color: #f3f3f3;
            i{
                position: relative;
                right: -25px;
                top: 2px;
            }
        }
    }
    
    
}

</style>