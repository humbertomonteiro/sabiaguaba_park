
let count = 1

document.querySelector('#radio1').checked = true

setInterval(() => {
    nextImg()
}, 4000);

function nextImg() {
    count++

    if(count > 4) {
        count = 1
    }

    document.querySelector('#radio' + count).checked = true


}


const toggle = document.querySelector('[toggle]')
const navLinks = document.querySelector('.nav-links')

toggle.onclick = e => {
    
    navLinks.classList.toggle('show-links')
    navLinks.classList.toggle('hidden-links')
}



const entrada = document.querySelectorAll('[entrada]')
const pratos = document.querySelectorAll('[pratos]')
const bebidas = document.querySelectorAll('[bebidas]')
const frutosDoMar = document.querySelectorAll('[frutosDoMar]')
const peixes = document.querySelectorAll('[peixes]')
const sobremesas = document.querySelectorAll('[sobremesas]')



function ajax(click) {
    click.forEach(e => {
        e.onclick = () => {
            
            location.href = `/pages/menu.html`

        }
    })
}



ajax(entrada)
ajax(pratos)
ajax(bebidas) 
ajax(frutosDoMar) 
ajax(peixes) 
ajax(sobremesas) 