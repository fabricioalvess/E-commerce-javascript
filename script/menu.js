const botaoMenuResponsivo = document.querySelector('#abrir-menu')
const mostrarMenu = document.querySelector('.menu-responsivo')
const fecharMenu = document.querySelector('#fechar-menu')

botaoMenuResponsivo.addEventListener('click',abrirMenuResponsivo)
fecharMenu.addEventListener('click',esconderMenuResponsivo)



function abrirMenuResponsivo(){
    mostrarMenu.classList.add('ativa')
}
function esconderMenuResponsivo(){
    mostrarMenu.classList.remove('ativa')
}
