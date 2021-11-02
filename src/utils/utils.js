export function formatSongTime (duration = 0) {
    const m = (Math.floor(duration / 60) + '').padStart(2, '0')
    const s = (Math.floor(duration % 60) + '').padStart(2, '0')
    return `${m}:${s}`
}

export default {
    //添加歌曲到播放列表,过滤重复歌曲
    concatPlayList(newList=[],oldList=[]){
        if(Object.prototype.toString.call(newList) !== '[object Array]'){
            newList = [newList]
        }
        // console.log(oldList);
        const arr = [...newList,...oldList]
        
        const map = new Map()
        for(const item of arr){
            if(!map.has(item.id)){
                map.set(item.id, item)
            }
        }
        
        return [...map.values()]
    }

}