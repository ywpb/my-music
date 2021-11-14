export default {
    playList:(state)=>{
        return state.playList.length? state.playList : JSON.parse(window.localStorage.getItem('playList')) || []
    },
    playIndex:(state)=>{
        return state.playIndex || JSON.parse(window.localStorage.getItem('playIndex')) || 0
    },
    isPlayed:(state)=>{
        return state.isPlayed
    },
    singerInformation:(state)=>{
        console.log(state.singerInformation)
        return state.singerInformation ? state.singerInformation : JSON.parse(window.localStorage.getItem('singer'))
    }
}