export default {
    playList:(state)=>{
        return state.playList.length? state.playList : JSON.parse(window.localStorage.getItem('playList')) || []
    },
    playIndex:(state)=>{
        return state.playIndex || JSON.parse(window.localStorage.getItem('playIndex')) || 0
    },
    isPlayed:(state)=>{
        return state.isPlayed
    }
}