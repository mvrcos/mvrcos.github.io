// -------------------------------------- MOBILE MENU ----------------------------------//
let activeMobileMenu = document.querySelector('.nav-listMobile')
let hamburguerAnimation = document.querySelector('.hamburger--slider')
let buttonMobile = document.querySelector('#mobile')
var links = document.querySelectorAll(".nav-listMobile a");
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
links.forEach(e => e.onclick = mobile)

// --------------------------------- PROJETOS -------------------------------------------//
const projeto1 = document.querySelector('.content1')
projeto1.onclick = listaDeTarefas
function listaDeTarefas(){
    window.open("https://mvrcos.github.io/lista-de-tarefas/")
}
// ----------------------------------- VANNILA ------------------------------------------//
  import * as vanillaTilt from "https://cdn.skypack.dev/vanilla-tilt@1.7.0";
  VanillaTilt.init(document.querySelectorAll(".card"), {max: 13, speed: 500,});

