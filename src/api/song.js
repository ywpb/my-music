import request from "@/utils/ajax";
import axios from "axios";


//获取歌单所有数据
export const allSongs = (ids='') =>{
    return request({
        url:'/song/detail',
        method:'get',
        params:{
            ids:ids
        }
    })

}

// 获取专辑歌曲
export const getAlbum = (id = '')=>{
    return request({
        url:'/album',
        method:'get',
        params:{
            id:id
        }
    })
}

//歌曲是否可用
export const checkMusic = (id = '')=>{
    return request({
        url:'/check/music',
        method:'get',
        params:{
            id:id
        }
    })
}

//获取歌曲url
export const getSongUrl = (id = '')=>{
    return request({
        url:'/song/url',
        method:'get',
        params:{
            id:id
        }
    })
}

