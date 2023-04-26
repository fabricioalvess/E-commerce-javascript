var botaoMenuResponsivo = document.querySelector('#abrir-menu')
var mostrarMenu = document.querySelector('.menu-responsivo')
var fecharMenu = document.querySelector('#fechar-menu')

botaoMenuResponsivo.addEventListener('click', () =>{
    mostrarMenu.classList.add('ativa')
})
fecharMenu.addEventListener('click', () =>{
    mostrarMenu.classList.remove('ativa')
})

