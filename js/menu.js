const containerCategories = document.querySelector('.container-categories')
const linksCategories = document.querySelector('[linksCategories]')

const entrada = document.querySelectorAll('[entrada]')
const pratos = document.querySelectorAll('[pratos]')
const bebidas = document.querySelectorAll('[bebidas]')
const frutosDoMar = document.querySelectorAll('[frutosDoMar]')
const peixes = document.querySelectorAll('[peixes]')
const sobremesas = document.querySelectorAll('[sobremesas]')

const h2 = document.querySelector('.h2')


function ajax(click, url) {
    click.forEach(e => {
        e.onclick = () => {
            fetch(url)
                .then(resp => resp.text())
                .then(html => containerCategories.innerHTML = html)

            linksCategories.classList.remove('hidden')
            linksCategories.classList.add('links-categories')
            h2.style.display = 'none'
            containerCategories.style.position = 'relative'
            containerCategories.style.zIndex = '-1'

            scroll(0, 0)
        }
    })
}



ajax(entrada, 'entrada.html')
ajax(pratos, 'pratos.html')
ajax(bebidas, 'bebidas.html') 
ajax(frutosDoMar, 'frutosDoMar.html') 
ajax(peixes, 'peixes.html') 
ajax(sobremesas, 'sobremesas.html') 



const toggle = document.querySelector('[toggle]')
const navLinks = document.querySelector('.nav-links')

toggle.onclick = e => {
    
    navLinks.classList.toggle('show-links')
    navLinks.classList.toggle('hidden-links')
}


const divAudio = document.querySelector('.div-audio')
const audio = document.querySelector('[audio]')
const iconAudio = document.querySelector('.icon-audio')

divAudio.onclick = () => {
    const audioPlay = audio.getAttribute('audio')
    console.log(typeof(audioPlay))

    if(audioPlay === 'true') {
        audio.classList.remove('hidden')
        audio.setAttribute('audio', 'false')

        iconAudio.classList.add('fa-volume-xmark')
        iconAudio.classList.remove('fa-volume-high')

    } else if (audioPlay === 'false') {
        audio.classList.add('hidden')
        audio.setAttribute('audio', 'true')

        iconAudio.classList.remove('fa-volume-xmark')
        iconAudio.classList.add('fa-volume-high')

    }
}