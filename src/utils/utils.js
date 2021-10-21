export default {

    //添加歌曲到播放列表,过滤重复歌曲
    concatPlayList(newList=[],oldList=[]){
        if(Object.prototype.toString.call(newList) !== '[object Array]'){
            newList = [newList]
        }
        const arr = [...newList,...oldList]
        const map = new Map()

        for(const item in arr){
            if(!map.has(item.id)){
                map.set(item.id, item)
            }
        }
        return [...map.values()]
    }

}