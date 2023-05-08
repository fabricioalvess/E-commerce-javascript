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
    
            const main = document.createElement('div')
            main.classList.add('produto-no-carrinho')
            main.dataset.id=index

                const excluirItem = document.createElement('div')
                excluirItem.classList.add('excluir-do-carrinho')
                excluirItem.setAttribute('id','btn-excluir')
                excluirItem.innerHTML= `<i class="fa-solid fa-trash" style="color: #000000;"></i>`

                const imagem = document.createElement('div')
                imagem.classList.add('imagem')
                    const srcDaImagem = document.createElement('img')
                    srcDaImagem.src = produto.img
                    imagem.appendChild(srcDaImagem)
                
            main.appendChild(excluirItem)
            main.appendChild(imagem)

                const textos = document.createElement('div')
                textos.classList.add('row-texto')
                    const descricaoDoProduto = document.createElement('div')
                    descricaoDoProduto.classList.add('descricao-do-produto')
                    const h3 = document.createElement('h3')
                    h3.innerHTML = produto.descricao
                    descricaoDoProduto.appendChild(h3)
                    textos.appendChild(descricaoDoProduto)
                    
                    const cor = document.createElement('div')
                    cor.classList.add('cor')
                        cor.innerHTML = `<h3>${produto.cor}</h3>`

                    const tamanho = document.createElement('div')
                        tamanho.classList.add('tamanho')
                        tamanho.innerHTML = `<h3>${produto.tamanho}</h3>`  

                textos.appendChild(descricaoDoProduto)
                textos.appendChild(h3)   
                textos.appendChild(cor)   
                textos.appendChild(tamanho) 

                const row = document.createElement('div')
                row.classList.add('row')
                    const quantidade = document.createElement('div')
                    quantidade.classList.add('quantidade')
                    
                        const controleMenos = document.createElement('span')
                        controleMenos.dataset.controle='-'
                        controleMenos.innerHTML = '-'

                        const inputQuantidade = document.createElement('input')
                        inputQuantidade.type = 'number'
                        inputQuantidade.dataset.contador='contador'
                        inputQuantidade.value = 1
                        
                        const controleMais = document.createElement('span')
                        controleMais.dataset.controle='+'
                        controleMais.innerHTML = '+'

                    quantidade.appendChild(controleMenos)
                    quantidade.appendChild(inputQuantidade)
                    quantidade.appendChild(controleMais)

                    const valorProduto = document.createElement('div')
                    valorProduto.classList.add('valor-do-produto')
                    valorProduto.innerHTML = 'R$: '
                    const valor = document.createElement('h2')
                    valor.classList.add('pegarValor')
                    valor.innerHTML = produto.preco
                    valorProduto.appendChild(valor)
                    

                row.appendChild(quantidade)
                row.appendChild(valorProduto)

            main.appendChild(textos)
            main.appendChild(row)

            itemNoCarrinho.appendChild(main)
        })
        var preco = document.querySelector('.pegarValor')
    
        valorTotal(preco)
        const botaoExcluirCarrinho = document.querySelectorAll('.excluir-do-carrinho')
        botaoExcluirCarrinho.forEach(elemento => {elemento.addEventListener('click', evento => excluirDoCarrinho(evento))   
    })
            valorTotal()
}

function valorTotal(param){
    const controle =  document.querySelectorAll('[data-controle]')
    controle.forEach(elemento => elemento.addEventListener('click',evento =>{
        var elementoSelecionado = evento.target.parentElement.parentElement.parentElement
        var precoProduto = elementoSelecionado.querySelector('.valor-do-produto')
        precoProduto.style.fontSize='18px';
        precoProduto.style.fontWeight = "400"; 
        precoProduto.style.color='rgb(90, 89, 89)';
       
        var numeroControle = elementoSelecionado.querySelector('[data-contador]')
       var preco = param
        preco = preco.textContent.replace(',','.')
        
        if(evento.target.innerText == '-' ){
            numeroControle.value = parseInt(numeroControle.value)-1
            if(numeroControle.value < 0){
                numeroControle.value = 0
            }
        }else if(evento.target.innerText == '+'){
             numeroControle.value = parseInt(numeroControle.value)+1
             if(numeroControle.value > 10){
                 numeroControle.value = 10
             }
         } 
         let precoAtualizadoQuantidade = 0
         precoAtualizadoQuantidade += numeroControle.value * preco
        
         precoProduto.innerHTML = precoAtualizadoQuantidade.toFixed(2)
        
    }))
}

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
