const botaoMenuResponsivo = document.querySelector('#abrir-menu')
const mostrarMenu = document.querySelector('.menu-responsivo ul')
const fecharMenu = document.querySelector('#fechar-menu')

botaoMenuResponsivo.addEventListener('click',abrirMenuResponsivo)
fecharMenu.addEventListener('click',esconderMenuResponsivo)



function abrirMenuResponsivo(){
    // mostrarMenu.classList.add('ativa')
   mostrarMenu.style.right="0"
   
}
function esconderMenuResponsivo(){
    // mostrarMenu.classList.remove('ativa')
    mostrarMenu.style.right="-320px"
}
