import request from '@/utils/ajax.js'


export const recomSongList = ()=>{
    return request({
        url:'/personalized',
        method:'get'
    })
}
