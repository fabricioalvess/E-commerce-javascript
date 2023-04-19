const grupoDeImagensCarrosel = document.querySelector('#grupoDeImagensCarrosel')
const lmpm = document.querySelectorAll('.boxProdutolmpm')
const bannerTopo = document.querySelector('.bannerInicial')
const containerDeProdutos = document.querySelector('.carrosel')

function criandoProdutos(produto){
    grupoDeImagensCarrosel.innerHTML=""
    produto.forEach(p =>{
        grupoDeImagensCarrosel.innerHTML +=`
            
            <div class="boxProdutoCarrosel" id="produto">
                <img src="${p.img}" alt="">
                <h2 class="tituloProduto" >${p.descricao}</h2>
                <h3 class="precoProduto"> R$ ${p.preco}</h2>
            </div>
            
            `
    })  
}



//----------------------------------------------------------------------
// function mostrarBanner(){
//     const banner = document.getElementById('bannerInicial')
//     const div = document.createElement('div')
//     div.classList.add('bannerInicial')
//     const imge = document.createElement('img')
//     imge.classList.add("ajusteOTamanhoDaImagemDoBanner")
//     imge.src="https://raw.githubusercontent.com/fabricioalvess/E-commerce-javascript/master/img/banner1.png"
//     div.appendChild(imge)
//     banner.appendChild(div)
// }
// mostrarBanner()
//----------------------------------------------------------------------

const pesquisa = document.getElementById('pesquisa')

pesquisa.addEventListener('keydown',digitandoTexto => {

   if(pesquisa.value.length >  3){
    
        mostrarTextoDigitado(digitandoTexto)
        lmpm.forEach(el => el.style.display="none")
        esconderElementos(pesquisa)
   }else{
        mostrarTextoDigitado(digitandoTexto)
        mostrarElementos(pesquisa)
   }

})

function mostrarTextoDigitado(digitandoTexto){
    console.log(digitandoTexto)
}

function mostrarElementos(){    
    bannerTopo.style.display="flex"
    lmpm.forEach(el => el.style.display="initial")
    containerDeProdutos.style.padding="0"
}

function esconderElementos(x){
    bannerTopo.style.display="none"
    lmpm.forEach(el => el.style.display="none")
    containerDeProdutos.style.paddingTop="100px"
}




