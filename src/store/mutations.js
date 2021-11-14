import * as types from './mutation-types'

export default {

    //设置播放列表
    [types.SET_PLAYLIST](content, value = null){
        content.playList = value
        window.localStorage.setItem('playList',JSON.stringify(value))
    },

    //是否播放
    [types.SET_PLAYSTATUS](content,val = null){
        content.isPlayed = val
    },

    //当前音乐所在位置
    [types.SET_PLAYINDEX](content,index = 0){
        content.playIndex = index
        window.localStorage.setItem('playIndex',index)
    },
    
    //歌手信息
    [types.SET_SINGERINFOR](content,item={}){
        content.singerInformation = item
        window.localStorage.setItem('singer',JSON.stringify(item))
    }
}