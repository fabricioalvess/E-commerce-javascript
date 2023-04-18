
const botoesCategoria = document.querySelectorAll('.botaoCategoria')
botoesCategoria.forEach(botao=>{
    botao.addEventListener('click', btn =>{
        var idCategoria = btn.target.value
        filtrarProdutos(idCategoria)
    })
})

function filtrarProdutos(elemento){
    const categoria = elemento

    if(categoria == "feminino"){
        let categoriaFiltrada = produtos.filter(produto => produto.categoria == categoria)
        criandoProdutos(categoriaFiltrada)
    }
    if(categoria == "masculino"){
        let categoriaFiltrada = produtos.filter(produto => produto.categoria == categoria)
        criandoProdutos(categoriaFiltrada)
    }
    if(categoria == "adulto"){
        let categoriaFiltrada = produtos.filter(produto => produto.categoria == categoria)
        criandoProdutos(categoriaFiltrada)
    }
    if(categoria == "infantil"){
        let categoriaFiltrada = produtos.filter(produto => produto.categoria == categoria)
        criandoProdutos(categoriaFiltrada)
    }
}


