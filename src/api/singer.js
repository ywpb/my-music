import request from '@/utils/ajax.js'

export const topArtists = ({limit=50,offset=0})=>{
    return request({
        url:'/top/artists',
        method:'get',
        params:{
            limit:limit,
            offset:offset
        }
    })
}

export const allArtistsSongs = ({id=0})=>{
    return request({
        url:'/artist/songs',
        method:'get',
        params:{
            id:id
        }
    })
}