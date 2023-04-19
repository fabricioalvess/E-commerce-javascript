var sobre = [
    {
    "titulo":"banner1",
    "imagem":"https://raw.githubusercontent.com/fabricioalvess/E-commerce-javascript/master/img/banner1.png"
    },
    {
    "titulo": "banner2",
    "imagem":"https://raw.githubusercontent.com/fabricioalvess/E-commerce-javascript/master/img/banner1.png"
    },
    {
    "titulo":"banner3",
    "imagem": "https://raw.githubusercontent.com/fabricioalvess/E-commerce-javascript/master/img/banner1.png"
    }
]

var atual_sobre = 0;
var ant, fre;
document.getElementById("seta_sobre_anterior").onclick = function(){
    if(atual_sobre == 0){
      ant = sobre.length - 1;    
    }else{
       ant = atual_sobre - 1;
    }
    document.getElementById("sobre_titulo").innerHTML = "<h1>" + sobre[ant].titulo + "</h1>";
    document.getElementById("sobre_imagem").innerHTML =`<img src="${sobre[ant].imagem}">`
    atual_sobre = ant;
}

document.getElementById("seta_sobre_frente").onclick = function(){
    if(atual_sobre == sobre.length - 1){
       fre =  0;    
    }else{
       fre = atual_sobre + 1;
    }
    document.getElementById("sobre_titulo").innerHTML = "<h1>"+sobre[fre].titulo + "</h1>";
    document.getElementById("sobre_imagem").innerHTML = `<img src="${sobre[fre].imagem}">`
    atual_sobre = fre;
}
