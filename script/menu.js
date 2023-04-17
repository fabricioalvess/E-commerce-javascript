var botaoMenuResponsivo = document.querySelector('#abrir-menu')
var mostrarMenu = document.querySelector('.menu-responsivo')
var fecharMenu = document.querySelector('#fechar-menu')

botaoMenuResponsivo.addEventListener('click', event =>{
    mostrarMenu.classList.add('ativa')
})

fecharMenu.addEventListener('click', event =>{
    mostrarMenu.classList.remove('ativa')

})

//fim menu

//inicio box do produto

