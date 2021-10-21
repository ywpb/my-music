export default {

    //设置播放列表
    [types.SET_PLAYLIST](content, value = null){
        content.state = value
        window.localStorage.setItem('playList',JSON.stringify(value))
    },
    [types.SET_PLAYSTATE](content,types){
        content.isPlayed = types
    },
    [types.SET_PLAYINDEX](content,index){
        content.playIndex = index
    }
}