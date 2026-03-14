import type { Song } from "./types.d.ts"
import musicData from "@/db/music.json"

const songs: Song[] = musicData

function auxGetSongInfo (id:string): Song {
  const songFind = songs.find(item => item.id === id)
  return songFind ?? {id:"", titulo:"No Encontrado", type:"", genere:"" , release:"00/00"}
}

function uiSetYtIframe (id:string):void {
  const $ytFrame = document.getElementById("ytIframe")
  if ($ytFrame instanceof HTMLIFrameElement){
    $ytFrame.src = `https://www.youtube.com/embed/${id}`
  }
}

function uiSetInfo (song:Song): void {
  const $divInfo = document.querySelector(".info")
  if ($divInfo instanceof HTMLDivElement){
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    
    const tagsDiv = document.createElement("div")
    const spanType = document.createElement("span")
    const spanGenere = document.createElement("time")

    $divInfo.innerHTML = ""
    
    h3.innerText = song.titulo
    p.innerText = song.release

    spanGenere.innerText = song.genere
    spanType.innerText = song.type

    tagsDiv.appendChild(spanGenere)
    tagsDiv.appendChild(spanType)
      
    $divInfo.appendChild(h3)
    $divInfo.appendChild(p)
    $divInfo.appendChild(tagsDiv)
  }
}

const musicList = document.querySelectorAll(".music-list")

musicList.forEach(li =>{
  //console.log(li.dataset);
  
  li.addEventListener("click",()=>{
    if (li.hasAttribute("data-yt-id")){
      const id = li.getAttribute("data-yt-id") as string
      const songData = auxGetSongInfo(id)
      
      uiSetYtIframe(id)
      uiSetInfo(songData)
    }
  })
})