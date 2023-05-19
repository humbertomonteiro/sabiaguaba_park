
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