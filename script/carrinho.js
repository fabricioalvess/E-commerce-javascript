

function produtoNoCarrinho(x){
    
    x.forEach((produto, index)=>{
        
        itemNoCarrinho.innerHTML +=`
           
            <div class="produto-no-carrinho" data-id="${index}" >
                <div class="excluir-do-carrinho">
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
           

            </div>
            `
        })
        
}
