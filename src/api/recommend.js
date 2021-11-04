import request from '@/utils/ajax.js'


export const recomSongList = ()=>{
    return request({
        url:'/personalized',
        method:'get'
    })
}

//获取歌单详情
export const playlistDetail = (id) => {
    return request({
        url:'/playlist/detail',
        method:'get',
        params:{
            id:id
        }
    })
}

//获取全部歌单
export const allSongList = ({limit=10,offset=1,cat='全部'})=>{
    return request({
        url:'top/playlist',
        method:'get',
        params:{
            limit:limit,
            offset:offset,
            cat:cat
        }
    })
}