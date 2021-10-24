import utils from '@/utils/utils'


//合并音乐列表
const concatPlaylist = (list,playlist=[])=>{
    return utils.concatPlayList(list)
}

//当前播放歌曲所在索引
const findIndex= (list,playlist)=>{
    return playlist.findIndex(val=>{return list.id === val.id})
}
export default {

    //播放选中歌曲
    selectPlay({commit,state},{list}){
        //合并歌曲到播放列表查看
        const playList = concatPlaylist(list,state.playList)
        commit(SET_PLAYLIST,playList)
        commit(SET_PLAYSTATE,true)
        commit(SET_PLAYINDEX,findIndex(list,state.playlist))  
    },
    addList({commit},list){
        const playList = concatPlaylist(list,state.playList)
        commit(SET_PLAYLIST,playList)
    },
    playAll({commit},list){
        const playList = concatPlaylist(list,state.playList)
        commit(SET_PLAYLIST,playList)
        commit(SET_PLAYSTATE,true)
        // commit(types.SET_PLAYINDEX, 0)
    }
}