const grupoDeElementos = document.querySelectorAll('.boxProdutoCarrosel')
const grupoDeImagensCarrosel = document.querySelector('#grupoDeImagensCarrosel')
const lmpm = document.querySelectorAll('.boxProdutolmpm')
const bannerTopo = document.querySelector('.bannerInicial')
const containerDeProdutos = document.querySelector('.carrosel')

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
        divPai.appendChild(imgFilho1)
        divPai.appendChild(h2Filho2)
        divPai.appendChild(h3Filho3)
        divPai.dataset.produto = 0
        grupoDeImagensCarrosel.appendChild(divPai)
       
        
    }) 
    
    const dataProduto = document.querySelectorAll('[data-produto]')
        
    const pesquisa = document.getElementById('pesquisa')

    pesquisa.addEventListener('input',manipulaFiltragem)

    function manipulaFiltragem(){
       
        if(pesquisa.value != ''){
            for(let produto of dataProduto){
                let t = produto.querySelector('h2')
                t = t.textContent.toLowerCase()
                let filtroPesquisa = pesquisa.value.toLowerCase()
                if(!t.includes(filtroPesquisa)){
                    produto.style.display="none"
                    esconderElementos()
                    containerDeProdutos.style.paddingTop = "50px"
                    containerDeProdutos.style.height = "90vh"
                    containerDeProdutos.innerHTML = `<p><bold>Produto não encontrado</bold></p>`
                    
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
    }

}



function mostrarElementos(){    
    bannerTopo.style.display="flex"
    lmpm.forEach(el => el.style.display="initial")
    containerDeProdutos.style.padding="0"
}

function esconderElementos(){
    bannerTopo.style.display="none"
    lmpm.forEach(el => el.style.display="none")
    containerDeProdutos.style.paddingTop="100px"
}

manipulaFiltragem()
