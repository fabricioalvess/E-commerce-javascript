var listaNoCarrinho =  []
const grupoDeElementos = document.querySelectorAll('.boxProdutoCarrosel')
const localStorageRecuperada = localStorage.getItem('listaNoCarrinho')
const grupoDeImagensCarrosel = document.querySelector('#grupoDeImagensCarrosel')
const setaFrenteBanner = document.querySelector('#seta_sobre_frente')
const botaoPesquisa = document.querySelector('#botao-pesquisa')
const setaAnteriorBanner = document.querySelector('#seta_sobre_anterior')
const pesquisa = document.getElementById('pesquisa')
const itemNoCarrinho = document.querySelector('#item-no-carrinho')
const botaoCarrinho = document.querySelector('#botao-carrinho')
const btnCat = document.querySelectorAll('.botaoCategoria')
const barraPesquisa = document.querySelector('.barra-pesquisa')
const containerDeProdutos = document.querySelector('.carrosel')
const bannerTopo = document.querySelector('.bannerInicial')



function atualizaLocalStorage(){
    localStorage.setItem('listaNoCarrinho',JSON.stringify(listaNoCarrinho))
}

if(localStorageRecuperada){
    listaNoCarrinho = JSON.parse((localStorageRecuperada))
    criandoProdutos()   
}else{
    listaNoCarrinho=[]
}


function criandoProdutos(produto){
    grupoDeImagensCarrosel.innerHTML=""
    produto.forEach((p, index) =>{
        const divPai = document.createElement('div')
        divPai.classList.add('boxProdutoCarrosel')
        const imgFilho1 = document.createElement('img')
        imgFilho1.src=p.img
        const h2Filho2 = document.createElement('h2')
        h2Filho2.classList.add('tituloProduto')
        h2Filho2.innerHTML=p.descricao
        const h3Filho3 = document.createElement('h3')
        h3Filho3.innerHTML= "$" + p.preco
        const comprar = document.createElement('span')
        comprar.innerHTML="carrinho"
        comprar.classList.add('btnCarrinho')
        comprar.dataset.btncomprar=index
        divPai.appendChild(imgFilho1)
        divPai.appendChild(h2Filho2)
        divPai.appendChild(h3Filho3)
        divPai.appendChild(comprar)
        divPai.dataset.produto = index
        grupoDeImagensCarrosel.appendChild(divPai)  
    }) 
   
    const dataProduto = document.querySelectorAll('[data-produto]')
    adicionandoProdutoEmLista(dataProduto)
   
}

function adicionandoProdutoEmLista(dataProduto){
    dataProduto.forEach(item =>{
        item.addEventListener('click' , el => {
            const img = el.target.parentElement.children[0]
            const descricao = el.target.parentElement.children[1].textContent
            const preco = el.target.parentElement.children[2].textContent
            const novoItem = {
                "descricao" : descricao,
                "preco": preco,
                "categoria":"",
                "frete": "",
                "quantidade":"",
                "tamanho": "",
                "cor":"",
                "img": img.src
            }
            itemNoCarrinho.innerHTML=""
           
            const existe = listaNoCarrinho.find(elemento => elemento.descricao === descricao)
            if(existe){
              alert('Item adicionado no carrinho!')
              
            }else{
                listaNoCarrinho.push(novoItem)           
               
            }   
            produtoNoCarrinho(listaNoCarrinho)
            atualizaLocalStorage()
        })   
    })
    buscarPelaBarraDePesquisa() 
    
}


function buscarPelaBarraDePesquisa(){
    pesquisa.addEventListener('input',()=>{
        botaoPesquisa.addEventListener('click', manipulaFiltragem )        
    })
}


function manipulaFiltragem(){
    setTimeout(
        ()=>{
            var dataProduto = document.querySelectorAll('[data-produto]')
            if(pesquisa.value != ''){
                for(let produto of dataProduto){
                    let t = produto.querySelector('h2')
                    t = t.textContent.toLowerCase()
                    let filtroPesquisa = pesquisa.value.toLowerCase()
                    if(!t.includes(filtroPesquisa)){
                        produto.style.display="none"
                        bannerTopo.style.display="none"
                    }else{
                        produto.style.display="flex"
                    }
                }
            }else{
                for(let produto of dataProduto){
                    produto.style.display="flex"
                    initialProdutos()
                }
            }
    },500)     
}

function noneProdutos(){
    containerDeProdutos.style.display="none"  
}

function initialProdutos(){
    containerDeProdutos.style.display="flex"
    containerDeProdutos.style.padding="0"  
}
function noneCarrinho(){
    carrinhoDeCompra.style.display="none"
}





