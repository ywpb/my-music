import utils from '@/utils/utils'
import * as types from './mutation-types'


//合并音乐列表
const concatPlaylist = (list,playlist=[])=>{
    return utils.concatPlayList(list,playlist)
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
        commit(types.SET_PLAYLIST,playList)
        commit(types.SET_PLAYSTATUS,true)
        commit(types.SET_PLAYINDEX,findIndex(list,state.playList)) 
    },
    //添加歌曲到播放列表
    addList({commit},list){
        const playList = concatPlaylist(list,state.playList)
        commit(types.SET_PLAYLIST,playList)
    },

    // 播放歌曲列表里全部歌曲（清空当前播放列表）
    playAll({commit},list){
        const playList = concatPlaylist(list,state.playList)
        commit(types.SET_PLAYLIST,playList)
        commit(types.SET_PLAYSTATUS,true)
        // commit(types.SET_PLAYINDEX, 0)
    }
}