
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
        const categoriaFiltrada = produtos.filter(produto => produto.categoria == categoria)
        esconderElementos(categoriaFiltrada)
        criandoProdutos(categoriaFiltrada)
    }
    if(categoria == "masculino"){
        let categoriaFiltrada = produtos.filter(produto => produto.categoria == categoria)
        esconderElementos(categoriaFiltrada)
        criandoProdutos(categoriaFiltrada)
    }
    if(categoria == "adulto"){
        let categoriaFiltrada = produtos.filter(produto => produto.categoria == categoria)
        esconderElementos(categoriaFiltrada)
        criandoProdutos(categoriaFiltrada)
    }
    if(categoria == "infantil"){
        let categoriaFiltrada = produtos.filter(produto => produto.categoria == categoria)
        esconderElementos(categoriaFiltrada)
        criandoProdutos(categoriaFiltrada)
    }
}


