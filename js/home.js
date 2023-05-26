
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