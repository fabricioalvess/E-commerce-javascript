const carrinhoDeCompra =document.querySelector('.grupo-de-elementos')
const x = document.querySelector('.carrinho-de-compra')



botaoCarrinho.addEventListener('click', ()=>{
    bannerTopo.style.display="none"
    containerDeProdutos.style.display="none"
    
    initialCarrinho()
    produtoNoCarrinho()
    
})

function produtoNoCarrinho(){
    itemNoCarrinho.innerHTML=""
    listaNoCarrinho.forEach((produto, index)=>{
        itemNoCarrinho.innerHTML +=` 
            <div class="produto-no-carrinho" data-id="${index}" >
                <div class="excluir-do-carrinho" id="btn-excluir">
                    <i class="fa-solid fa-trash" style="color: #000000;"></i>
                </div>
                <div class="imagem">
                    <img src="${produto.img}" alt="">
                </div>
                <div class="row-texto">
                    <div class="descricao-do-produto">
                        <h3>${produto.descricao} </h3>
                    </div>
                    <div class="cor">
                        <h3>cor:${produto.cor} </h3>
                    </div>
                    <div class="tamanho">
                        <h3>tamanho: ${produto.tamanho} </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="quantidade">
                        <span>-</span>
                        <input type="number" value="${produto.quantidade}"/>
                        <span>+</span>
                    </div>
                    <div class="valor-do-produto">
                        <h2>R$:${produto.preco} </h2>
                    </div>
                </div>
            </div>
            `
           
        })
        x.parentElement.children[0].childNodes[1].childNodes[1]
        x.addEventListener('click', excluirDoCarrinho)
   
    }
    
function excluirDoCarrinho(x){
    let elemento = x.target.parentNode.parentElement
    elemento.remove()
}
    
function sairDoCarrinho(){
    btnCat.forEach(btn =>{
        btn.addEventListener('click', ev =>{
            let nomeId = ev.target.attributes[1].textContent
            let valueCategoria = ev.target.textContent
            let chave = `categoria_${valueCategoria}`
             nomeId.textContent == chave.textContent? containerDeProdutos.style.display="flex" :  carrinhoDeCompra.style.display="none"
             carrinhoDeCompra.style.display="none"
           })
    })
    
}


noneCarrinho()


