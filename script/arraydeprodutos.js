
const produtos = [
    {
        
        "descricao" : "Camiseta Puma Basica 1",
        "preco": "99,90",
        "categoria":"masculina",
        "frete": "gratis",
        "quantidade":"1",
        "tamanho": "m",
        "cor":"branca",
        "img": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/848742/01/mod01/fnd/BRA/w/1000/h/1000/fmt/png"
    },
    {
        
        "descricao" : "Camiseta Quiksilver ",
        "preco": "99,90",
        "categoria":"adulto",
        "frete": "gratis",
        "quantidade":"1",
        "tamanho": "m",
        "cor":"branca",
        "img": "https://static.netshoes.com.br/produtos/camiseta-oakley-o-bark-masculina/14/D63-4582-014/D63-4582-014_zoom1.jpg?ts=1583425261"
    },
    {
        
        "descricao" : "Camiseta Oakley Basica 2",
        "preco": "99,90",
        "categoria":"masculina",
        "frete": "gratis",
        "quantidade":"1",
        "tamanho": "m",
        "cor":"branca",
        "img": "https://static.netshoes.com.br/produtos/camiseta-oakley-o-bark-masculina/14/D63-4582-014/D63-4582-014_zoom1.jpg?ts=1583425261"
    },
    {
        
        "descricao" : "Camiseta Nike Gola V 3",
        "preco": "99,90",
        "categoria":"masculina",
        "frete": "gratis",
        "quantidade":"1",
        "tamanho": "m",
        "cor":"branca",
        "img": "https://static.netshoes.com.br/produtos/camiseta-oakley-o-bark-masculina/14/D63-4582-014/D63-4582-014_zoom1.jpg?ts=1583425261"
    },
    {
        
        "descricao" : "Camiseta Quiksilver Basica",
        "preco": "49,90",
        "categoria":"infantil",
        "frete": "gratis",
        "quantidade":"1",
        "tamanho": "m",
        "cor":"branca",
        "img": "https://d2e5mvjndnxyoo.cloudfront.net/Custom/Content/Products/18/57/1857138_camiseta-m-c-wild-fills-juvenil-q471t0522_z1_637985346380202671.jpg"
    },
    {
        
        "descricao" : "Short Legging Feminino",
        "preco": "69,90",
        "categoria":"feminino",
        "frete": "gratis",
        "quantidade":"1",
        "tamanho": "m",
        "cor":"branca",
        "img": "https://static.netshoes.com.br/produtos/short-legging-feminino-meia-coxa-cos-alto-pala-dupla-fitnes-academia-suplex-shortinho-leg-roupa/10/7I4-0044-010/7I4-0044-010_zoom1.jpg?ts=1664525238&"
    },
    {
        
        "descricao" : "Camiseta Jeans manga longa ",
        "preco": "55,90",
        "categoria":"feminino",
        "frete": "gratis",
        "quantidade":"1",
        "tamanho": "m",
        "cor":"branca",
        "img": "https://static.netshoes.com.br/produtos/camisa-jeans-manga-longa-aishty-core-feminina/62/S93-0269-162/S93-0269-162_zoom2.jpg?ts=1678119312&ims=326x"
    }
]


function pegarApi(){
    criandoProdutos(produtos)
    manipulaFiltragem(produtos)   
}
pegarApi()




const endpointDaAPI = "db.json"
getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}