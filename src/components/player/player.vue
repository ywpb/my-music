<template>
<div class="btmbar" v-if="curSongInfo">
        <div class="player">
            <audio 
            ref="audio"
            preload='metadata'
            @canplay="canplaying"
            @playing="playSong"
            @timeupdate='updateCurrentTime'
            @ended="endedSong"
            @error="errorSong"
            :src="curSongInfo.url"
            >
            </audio>    
        <div class="left">
            <a href="javascript:;" hidefocus="true"></a>
        </div>
        <div class="right"></div>
    </div>
    <div class="bg"></div>
    <div class="wrap">
        <div class="btns">
            <a class="prv" href="javascript:;"  hidefocus='true' title="上一首" @click.stop="audioHandler('prev')">上一首</a>
            <a :class="['j-flag', playIcon]" href="javascript:;"  hidefocus='true' title="播放/暂停" @click.stop="audioHandler('play')">播放/暂停</a>
            <a class="next" href="javascript:;"  hidefocus='true' title="下一首" @click.stop="audioHandler('next')">下一首</a>
        </div>
        <!--进度条-->
        <div class="play">
            <div class="word">
                <a href="name f-fl">{{curSongInfo.songName || ''}}&nbsp;</a>
                <span class="by f-fl">
                    <span class="author" title="">
                        <a href="javascript:;" class="" hidefocus='true' v-for="song in curSongInfo.songSings" :key="song.id">{{song.name}}</a>
                    </span>
                </span>
            </div>
            <div class="m-pbar">
                <div class="cur" v-bind:style="{width:progressRatio + '%'}">
                    <!-- <div class="cur" style="width:100%"> -->
                    <span class="f-tdn">
                        <i></i>
                    </span>
                </div>
                <span class="p-timer">{{setCurrentTime}}/{{setDuration}}</span>
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
                <i>{{playList.length}}</i>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>

import {mapGetters,mapMutations} from 'vuex'
import {formatSongTime} from '@/utils/utils'
export default {
    name:'player',
    data(){
        return {
            initAudioReady:false,           //初始化音频
            isMuted:false,                   //是否静音
            currentTime:0,                   //音频当前播放时长
            duration:0,                       //音频总时长
        }
    },
    created(){
        this.setPlayList(this.playList)
    },
    computed:{
        ...mapGetters(['playList','playIndex','isPlayed']),

        //切换播放图标样式
        playIcon(){
            return this.isPlayed?'icon-audio-play':'icon-audio-pause'
        },
        //获取当前播放音乐
        curSongInfo(){
            return this.playList[this.playIndex]
        },
        //格式化当前播放时间
        setCurrentTime:function(){
            return formatSongTime(this.currentTime)
        },
        //格式化总时间
        setDuration(){
            return formatSongTime(this.duration)
        },
        //播放进度条
        progressRatio(){
            let ratio
            if(this.duration !== 0){
                ratio = this.currentTime / this.duration * 100
            }else{
                ratio = 0
            }
            
            return Math.floor(ratio * 100)/100
        }
    },
    watch:{
        //播放歌曲发生变化，重置状态
        curSongInfo(newSong,oldSong){
            if(!newSong || (oldSong && oldSong.id === newSong.id)){
                return {}
            }
            this.initAudioReady = false
            this.currentTime = 0
            this.$nextTick(()=>{
                const audio = this.$refs.audio
                if(audio){
                    audio.play()
                }
            })
        },
        //音频加载完成播放
        isPlayed(playing){
            if(!this.initAudioReady){
                return
            }

            this.$nextTick(()=>{
                const audio = this.$refs.audio
                if(audio){
                    playing?audio.play():audio.pause()
                }
            })
        }
    },
    methods:{
        ...mapMutations({
            setPlayStatus:'SET_PLAYSTATUS',
            setPlayIndex:'SET_PLAYINDEX',
            setPlayList:'SET_PLAYLIST'
        }),
        //更新当前时间
        updateCurrentTime(e){
            if(!this.initAudioReady){
                return
            }
            
            this.currentTime = e.target.currentTime
        },

        //单曲循环
        loopSong(){
            this.$refs.audio.play()
            this.$refs.audio.currentTime = 0
            this.setPlayStatus(true)
        },
        //自动播放
        endedSong(e){
            if(this.playList === 1){
                this.loopSong()
            }else{
                this.changeSong('next')
            }
        },
        //切换，上一首下一首
        changeSong(type){
            if(this.playList.length !== 1){
                // console.log(Object.prototype.toString.call(this.playIndex));
                let index = this.playIndex
                if(type ==='prev'){
                    index = index === 0 ? this.playList.length-1 : index - 1
                }
                if(type === 'next'){
                    index = index === this.playList.length-1 ? 0: index+1
                }
                this.initAudioReady = false
                
                this.setPlayIndex(index)
                this.setPlayStatus(false)
            }else{
                this.loopSong()
            }

        },
        //播放状态，暂停/开始，上一首下一首
        audioHandler(type){
            if(type==='play'){
                this.setPlayStatus(!this.isPlayed)
                this.setPlayIndex(this.playIndex)
            }else{
                this.changeSong(type)
            }
        },
        //音频播放时，初始化状态，获取音频时长
        playSong(e){
            this.initAudioReady = true
            this.duration = e.target.duration
            this.setPlayStatus(true)
        },

        //刷新页面时
        canplaying(){
            this.initAudioReady = true
        },

        //音频加载失败
        errorSong(){
            this.initAudioReady = false
            this.setPlayStatus(false)
        }
    },
    //播放进度条
    
}
</script>

<style lang="less" scoped>
.bg, .left,.right,.left a,.btmbar .btns,.prv,.ply,.next,.volume,.v-column,.v-strip,
.p-list,.icon-audio-play,.icon-audio-pause{
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
    margin: 0 auto;
    position: absolute;
    left: 20%;
    top: 6px;
    
    display: flex;
    align-items: center;
    justify-content: center;
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
        .icon-audio-play{
            height: 40px;
            width: 40px;
            background-position: -0px -160px;
            text-indent: -9999px;
            padding-bottom: 8px;
        }
        .icon-audio-pause{
            height: 40px;
            width: 40px;
            background-position: -0px -199px;
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
            margin-left: 10px;
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
                    right: -5px;
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
                right: -30px;
                top: 2px;
            }
        }
    }
    
    
}

</style>