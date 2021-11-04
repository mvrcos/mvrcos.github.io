let activeMobileMenu = document.querySelector('.nav-list')
let hamburguerAnimation = document.querySelector('.hamburger--slider')
let buttonMobile = document.querySelector('#mobile')
let aberto = false

let mobile = function(){

    if(aberto === false) {
        aberto = true
        activeMobileMenu.classList.add('active')
        hamburguerAnimation.classList.add('is-active')
    }

    else if (aberto === true) {
        aberto = false
        activeMobileMenu.classList.remove('active')
        hamburguerAnimation.classList.remove('is-active')
    }
    
}

buttonMobile.onclick = mobile





