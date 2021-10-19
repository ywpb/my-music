export function formatSongInfo(list){
    return {
        id:list.id,
        songName:list.name,
        songTime:list.dt,
        songSings:list.ar,
        songAlbum:list.al,
    }
}

