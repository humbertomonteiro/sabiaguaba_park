const containerCategories = document.querySelector('.container-categories')
const linksCategories = document.querySelector('[linksCategories]')

const entrada = document.querySelectorAll('[entrada]')
const pratos = document.querySelectorAll('[pratos]')
const bebidas = document.querySelectorAll('[bebidas]')
const frutosDoMar = document.querySelectorAll('[frutosDoMar]')
const peixes = document.querySelectorAll('[peixes]')
const sobremesas = document.querySelectorAll('[sobremesas]')


function ajax(click, url) {
    click.forEach(e => {
        e.onclick = () => {
            fetch(url)
                .then(resp => resp.text())
                .then(html => containerCategories.innerHTML = html)

            linksCategories.classList.remove('hidden')
            linksCategories.classList.add('links-categories')

            scroll(0, 0)
        }
    })
}



const toggle = document.querySelector('[toggle]')
const navLinks = document.querySelector('.nav-links')

toggle.onclick = e => {
    
    navLinks.classList.toggle('show-links')
    navLinks.classList.toggle('hidden-links')
}


ajax(entrada, 'entrada.html')
ajax(pratos, 'pratos.html')
ajax(bebidas, 'bebidas.html') 
ajax(frutosDoMar, 'frutosDoMar.html') 
ajax(peixes, 'peixes.html') 
ajax(sobremesas, 'sobremesas.html') 