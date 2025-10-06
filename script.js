// Dom Elements
let leftDiv = document.querySelector("#left");
let rightDiv = document.querySelector("#right");

// Init Div Posizions
let pos1Destra = rightDiv.getBoundingClientRect()
let pos1Sinistra = leftDiv.getBoundingClientRect()

// During Scroll the 2 Div simulate a kind of sliding door
window.addEventListener('scroll',(e) => {
    let pos2Destra = rightDiv.getBoundingClientRect()
    let spostamentoDestra = -(pos1Destra.top - pos2Destra.top)
    rightDiv.style.right = `${spostamentoDestra*2}px`

    let pos2Sinistra = leftDiv.getBoundingClientRect()
    let spostamentoSinistra = -(pos1Sinistra.top - pos2Sinistra.top)
    leftDiv.style.left = `${spostamentoSinistra*2}px`
})

