
const botoesCategoria = document.querySelectorAll('.botaoCategoria')
botoesCategoria.forEach(botao=>{
    botao.addEventListener('click', btn =>{
        var idCategoria = btn.target.value
        filtrarProdutos(idCategoria)
    })
})

function filtrarProdutos(elemento){
    const categoria = elemento
    const filtro = categoria != ""?produtos.filter(p => p.categoria == categoria):alert("Categoria não encontrada!")
    criandoProdutos(filtro)
    esconderElementos()

}


