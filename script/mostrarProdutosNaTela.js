const grupoDeImagensCarrosel = document.querySelector('#grupoDeImagensCarrosel')

function criandoProdutos(produto){
    grupoDeImagensCarrosel.innerHTML=""
    produto.forEach(p =>{
        grupoDeImagensCarrosel.innerHTML +=`
            
            <div class="boxProdutoCarrosel">
                <img src="${p.img}" alt="">
                <h2 class="tituloProduto" >${p.descricao}</h2>
                <h3 class="precoProduto"> R$ ${p.preco}</h2>
            </div>
            
            `
    })  
}
