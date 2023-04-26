const grupoDeElementos = document.querySelectorAll('.boxProdutoCarrosel')
const grupoDeImagensCarrosel = document.querySelector('#grupoDeImagensCarrosel')
const bannerTopo = document.querySelector('.bannerInicial')
const containerDeProdutos = document.querySelector('.carrosel')
const botaoPesquisa = document.querySelector('#botao-pesquisa')
const pesquisa = document.getElementById('pesquisa')
const itemNoCarrinho = document.querySelector('#item-no-carrinho')
const listaNoCarrinho =  []
const botaoCarrinho = document.querySelector('#botao-carrinho')
const btnCat = document.querySelectorAll('.botaoCategoria')



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
        comprar.innerHTML="COMPRAR"
        comprar.dataset.btncomprar=index
        divPai.appendChild(imgFilho1)
        divPai.appendChild(h2Filho2)
        divPai.appendChild(h3Filho3)
        divPai.appendChild(comprar)
        divPai.dataset.produto = index
        grupoDeImagensCarrosel.appendChild(divPai)  
    }) 

    

    const dataProduto = document.querySelectorAll('[data-produto]')
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
                        esconderElementos()
                    }else{
                        produto.style.display="flex"
                    }
                }
            }else{
                for(let produto of dataProduto){
                    produto.style.display="flex"
                    mostrarElementos() 
                }
            }
        },500)  
}

function mostrarElementos(){    
    bannerTopo.style.display="flex"
    containerDeProdutos.style.padding="0"
}

function esconderElementos(){
    bannerTopo.style.display="none"
    containerDeProdutos.style.paddingTop="100px"
}

