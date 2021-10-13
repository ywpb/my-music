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
