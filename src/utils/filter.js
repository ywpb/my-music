export const getFromSinger = (data) =>{
    return {
        singerImg:data.picUrl,
        singerId:data.id,
        singerName:data.name
    }
}