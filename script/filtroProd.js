const botoesCategoria = document.querySelectorAll('.botaoCategoria')

botoesCategoria.forEach(botao => {
    botao.addEventListener('click', btn =>{
        var idCategoria = btn.target.value
        bannerTopo.style.display="none" 
        filtrarProdutos(idCategoria)
})})

function filtrarProdutos(elemento){
    const categoria = elemento
    const filtro = categoria != ""?produtos.filter(p => p.categoria == categoria):''
    criandoProdutos(filtro)
}


