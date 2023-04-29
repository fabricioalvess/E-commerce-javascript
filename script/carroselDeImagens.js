var sobre = [
    {
        "titulo":"banner1",
        "imagem":"https://raw.githubusercontent.com/fabricioalvess/E-commerce-javascript/master/img/banner1.png"
    },
    {
        "titulo": "banner2",
        "imagem":"https://raw.githubusercontent.com/fabricioalvess/E-commerce-javascript/master/img/banner2.png"
    },
    {
        "titulo":"banner3",
        "imagem": "https://raw.githubusercontent.com/fabricioalvess/E-commerce-javascript/master/img/banner3.png"
    }
]
const x = document.querySelectorAll('.xxx')
const setaAnterior = document.getElementById("seta_sobre_anterior")
const setaFrente = document.getElementById("seta_sobre_frente")
const sobreTitulo = document.getElementById("sobre_titulo")
const sobreImagem = document.getElementById("sobre_imagem")


    
    

 






var atual_sobre = 0;
var ant, fre;

setaAnterior.addEventListener('click',voltar)
setaFrente.addEventListener('click', frente)


function voltar(){
    if(atual_sobre == 0){
        ant = sobre.length - 1;    
      }else{
         ant = atual_sobre - 1;
      }
      sobreTitulo.innerHTML = "<h1>" + sobre[ant].titulo + "</h1>";
      sobreImagem.innerHTML =`<img src="${sobre[ant].imagem}">`
      atual_sobre = ant; 
}

function frente(){
    if(atual_sobre == sobre.length - 1){
        fre =  0;    
     }else{
        fre = atual_sobre + 1;
     }
    sobreTitulo.innerHTML = "<h1>"+sobre[fre].titulo + "</h1>";
    sobreImagem.innerHTML = `<img src="${sobre[fre].imagem}">`
    atual_sobre = fre;
}


