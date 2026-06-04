type CardState = "open" | "close" | "default"

const cardsControler: CardState[] = ["default", "default"]

const $cards = document.querySelectorAll<HTMLElement>("[data-dev-card]")
const $btnReset = document.getElementById("btnReset")

// Controlar estados
function controllerAllClose():void {
  for (let i = 0; i < cardsControler.length; i++){
    cardsControler[i] = "default"
  }
  if ($btnReset) $btnReset.style.opacity = "0%"
}

function controlerUpdate(index:number):void {
  if ($btnReset) $btnReset.style.opacity = "100%"
  for (let i = 0; i < cardsControler.length; i++) {
    if (i === index) {
      cardsControler[i] = "open"
    } else {
      cardsControler[i] = "close"
    }
  }
}

// UI
function cardsUpdate(): void {
  $cards.forEach((card, idx) =>{
    card.setAttribute("card-state", cardsControler[idx])
  })
}

if ($btnReset instanceof HTMLButtonElement) {
  $btnReset.addEventListener("click", ()=> {
    controllerAllClose()
    cardsUpdate()
  })
}

const isDesktop = window.matchMedia("(min-width: 769px)")

$cards.forEach(card =>{
  card.addEventListener("click", ()=>{
    if (!isDesktop.matches) return
    controlerUpdate(Number(card.getAttribute("data-dev-index")))
    cardsUpdate()    
  })
})