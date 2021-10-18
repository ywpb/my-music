import request from "@/utils/ajax";


export const allSongs = (ids) =>{
    return request({
        url:'/song/detail',
        method:'get',
        params:{
            ids:ids
        }
    })

}

export const getAlbum = (id)=>{
    return request({
        url:'/album',
        method:'get',
        params:{
            id:id
        }
    })
}