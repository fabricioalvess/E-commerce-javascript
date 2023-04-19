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

//----------------------------------------------------------------------
function mostrarBanner(){
    const banner = document.getElementById('bannerInicial')
    const div = document.createElement('div')
    div.classList.add('bannerInicial')
    const imge = document.createElement('img')
    imge.classList.add("ajusteOTamanhoDaImagemDoBanner")
    imge.src="../img/banner1.png"
    div.appendChild(imge)
    banner.appendChild(div)
}
mostrarBanner()
//----------------------------------------------------------------------
const pesquisa = document.getElementById('pesquisa')
console.log(pesquisa)
pesquisa.addEventListener('keydown',digitandoTexto => {
    
    mostrarTextoDigitado(digitandoTexto)
})
function mostrarTextoDigitado(digitandoTexto){
  
console.log(digitandoTexto)
}

