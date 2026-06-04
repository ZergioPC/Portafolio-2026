import type { Song } from "./types.d.ts"
import musicData from "@/db/music.json"

const songs: Song[] = musicData
let currentId: string | null = null

function auxGetSongInfo(id: string): Song {
  const songFind = songs.find(item => item.id === id)
  return songFind ?? { id: "", titulo: "No Encontrado", type: "", genere: "", release: "00/00" }
}

function uiSetYtIframe(id: string): void {
  const $ytFrame = document.getElementById("ytIframe")
  if ($ytFrame instanceof HTMLIFrameElement) {
    $ytFrame.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
  }
  showLoading(true)
}

function uiSetInfo(song: Song): void {
  const $title = document.getElementById("infoTitle")
  const $release = document.getElementById("infoRelease")
  const $tags = document.getElementById("infoTags")

  if ($title && $title.innerText === song.titulo) return

  if ($title) $title.innerText = song.titulo
  if ($release) $release.innerText = song.release

  if ($tags) {
    $tags.innerHTML = ""
    const spanGen = document.createElement("span")
    spanGen.className = "tag"
    spanGen.innerText = song.genere
    const spanType = document.createElement("span")
    spanType.className = "tag"
    spanType.innerText = song.type
    $tags.appendChild(spanGen)
    $tags.appendChild(spanType)
  }
}

function setActiveItem(id: string): void {
  document.querySelectorAll(".music-list").forEach(li => {
    li.classList.toggle("active", li.getAttribute("data-yt-id") === id)
  })
}

function loadSong(id: string): void {
  if (id === currentId) return
  currentId = id
  uiSetYtIframe(id)
  uiSetInfo(auxGetSongInfo(id))
  setActiveItem(id)
}

const $loading = document.getElementById("ytLoading")

function showLoading(show: boolean): void {
  if ($loading) {
    $loading.classList.toggle("visible", show)
  }
}

function setupIframe(): void {
  const $iframe = document.getElementById("ytIframe")
  if ($iframe instanceof HTMLIFrameElement) {
    $iframe.addEventListener("load", () => showLoading(false))
  }
}

function setupSongList(): void {
  document.querySelectorAll(".music-list").forEach(li => {
    li.addEventListener("click", () => {
      const id = li.getAttribute("data-yt-id")
      if (id) loadSong(id)
    })

    li.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        li.click()
      }
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
  setupIframe()
  setupSongList()

  if (songs.length > 0) {
    loadSong(songs[0].id)
  }
})
