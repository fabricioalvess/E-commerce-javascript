

function criandoProdutos(produto){
    const grupoDeImagensCarrosel = document.querySelectorAll(' .grupoDeImagensCarrosel')
    grupoDeImagensCarrosel.forEach(box =>{
    box.innerHTML += `
    
        <div class="boxProdutoCarrosel">
            <img src="${produto.img}" alt="">
            <h2 class="tituloProduto" >${produto.descricao}</h2>
            <h3 class="precoProduto"> R$ ${produto.preco}</h2>
        </div>
        
        `
})
}
criandoProdutos()
