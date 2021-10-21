function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  export default class song{
    constructor({
        id,
        songName,
        songTime,
        songSings,
        songAlbum,
        url
    }){
        this.id = id,
        this.songName = songName,
        this.songTime = songTime,
        this.songSings = songSings,
        this.songAlbum = songAlbum,
        this.url = url
    }
  }
export function formatSongInfo(list){
    return new song({
        id:String(list.id),
        songName:list.name,
        songTime:millisToMinutesAndSeconds(list.dt),
        songSings:list.ar,
        songAlbum:list.al,
        url:`https://music.163.com/song/media/outer/url?id=${list.id}.mp3`
    })
}
