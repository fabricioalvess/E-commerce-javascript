const carrinhoDeCompra =document.querySelector('.grupo-de-elementos')
const menu = document.querySelector('.menu')
const btnCarrinhoResponsivo = document.querySelector('#mostrar-menu-responsivo')
const x = document.querySelector('.carrinho-de-compra')
botaoCarrinho.addEventListener('click',mostrarCarrinho)
btnCat.forEach(btn =>{btn.addEventListener('click', ev => sairDoCarrinho(ev))})
btnCarrinhoResponsivo.addEventListener('click', procedimentosParaMostrarCarrinhoAPartirDoMenuResponsivo)




function mostrarCarrinho(x){
    produtoNoCarrinho()
    bannerTopo.style.display="none"
    containerDeProdutos.style.display="none"
    carrinhoDeCompra.style.display="flex"  
}

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
}

x.addEventListener('click', el =>  excluirDoCarrinho(el)) 
    
function excluirDoCarrinho(x){
    let elemento = x.target.parentNode.parentElement
   elemento.remove()
    listaNoCarrinho.splice(elemento,1)
    atualizaLocalStorage()
}
    
function sairDoCarrinho(ev){
    const nomeId = ev.target.attributes[1].textContent
    const valueCategoria = ev.target.textContent
    const chave = `categoria_${valueCategoria}`
    nomeId.textContent == chave.textContent? containerDeProdutos.style.display="flex" :   carrinhoDeCompra.style.display="none"  
    carrinhoDeCompra.style.display="none"   
}

function procedimentosParaMostrarCarrinhoAPartirDoMenuResponsivo(){   
    esconderMenuResponsivo()
    mostrarCarrinho()
    barraPesquisa.style.display="none"
    menu.style.height="40px"
}

noneCarrinho()
function noneCarrinho(){
    carrinhoDeCompra.style.display="none" 
}

