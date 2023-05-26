
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



window.sr = ScrollReveal({ reset: true })

sr.reveal('.header', { 
    rotate: { x: 0, y: 80, z:0 },
    duration: 2000 
})

sr.reveal('.slider', { 
    rotate: { x: 0, y: 80, z:0 },
    duration: 2000 
})

sr.reveal('.container-text', { 
    rotate: { x: 0, y: 80, z:0 },
    duration: 2000 
})

sr.reveal('.container-aboutUs', {
    rotate: { x: 0, y: 80, z:0 }, 
    duration: 2000 
})

sr.reveal('.menu', { 
    rotate: { x: 0, y: 80, z:0 },
    duration: 2000 
})

sr.reveal('.container-promotion', { 
    rotate: { x: 0, y: 80, z:0 },
    duration: 2000 
})

sr.reveal('.container-location', { 
    rotate: { x: 0, y: 80, z:0 },
    duration: 2000 
})

sr.reveal('.experience', { 
    rotate: { x: 0, y: 80, z:0 },
    duration: 2000 
})



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
            location.href = 'pages/menu.html'
        }
    })
}



ajax(entrada, 'entrada.html')
ajax(pratos, 'pratos.html')
ajax(bebidas, 'bebidas.html') 
ajax(frutosDoMar, 'frutosDoMar.html') 
ajax(peixes, 'peixes.html') 
ajax(sobremesas, 'sobremesas.html') 