// Grafico de Lenguajes

const aux_data = {
  "JavaScript": 44694,
  "CSS": 16512,
  "HTML": 575
}

function setLanguageStyle(lang:string): string{
  switch(lang){
    case "Astro":
      return "lang-red"
    case "HTML":
      return "lang-red"
    case "JavaScript":
      return "lang-yellow"
    case "Python":
      return "lang-blue"
    case "CSS":
      return "lang-cyan"
    case "GDScript":
      return "lang-cyan"
    default:
      return ""
  }
}

const $langsContainers = document.querySelectorAll<HTMLUListElement>(".lang-container")

$langsContainers.forEach(async ul =>{
  const path = ul.getAttribute("data-langs")
  // const res = await fetch(path ?? "")
  // if (!res.ok) return
  // const lenguajes:Record<string, number> = await res.json()
  const lenguajes:Record<string, number> = aux_data
  const lenguajes_sorted = Object.entries(lenguajes).sort((a, b) => b[1] - a[1])

  lenguajes_sorted.slice(0,3).forEach(lang => {
    const li = document.createElement("li")
    li.innerText =  lang[0]
    li.classList.add("lang")
    li.classList.add(setLanguageStyle(lang[0]))
        
    ul.appendChild(li)
  })
})