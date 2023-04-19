
const produtos = [
    {
        "descricao" : "Camiseta Puma Basica 1",
        "preco": "99,90",
        "categoria":"masculino",
        "frete": "gratis",
        "img": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/848742/01/mod01/fnd/BRA/w/1000/h/1000/fmt/png"
    },
    {
        "descricao" : "Camiseta Quiksilver Basica",
        "preco": "99,90",
        "categoria":"adulto",
        "frete": "gratis",
        "img": "https://d2e5mvjndnxyoo.cloudfront.net/Custom/Content/Products/18/57/1857138_camiseta-m-c-wild-fills-juvenil-q471t0522_z1_637985346380202671.jpg"
    },
    {
        "descricao" : "Camiseta Oakley Basica 2",
        "preco": "99,90",
        "categoria":"masculino",
        "frete": "gratis",
        "img": "https://static.netshoes.com.br/produtos/camiseta-oakley-o-bark-masculina/14/D63-4582-014/D63-4582-014_zoom1.jpg?ts=1583425261"
    },
    {
        "descricao" : "Camiseta Nike Gola V 3",
        "preco": "99,90",
        "categoria":"masculino",
        "frete": "gratis",
        "img": "https://static.netshoes.com.br/produtos/camiseta-oakley-o-bark-masculina/14/D63-4582-014/D63-4582-014_zoom1.jpg?ts=1583425261"
    },
    {
        "descricao" : "Camiseta Quiksilver Basica",
        "preco": "49,90",
        "categoria":"infantil",
        "frete": "gratis",
        "img": "https://d2e5mvjndnxyoo.cloudfront.net/Custom/Content/Products/18/57/1857138_camiseta-m-c-wild-fills-juvenil-q471t0522_z1_637985346380202671.jpg"
    },
    {
        "descricao" : "Camiseta Oakley feminino 1",
        "preco": "69,90",
        "categoria":"feminino",
        "frete": "gratis",
        "img": "https://static.netshoes.com.br/produtos/camiseta-oakley-o-bark-masculina/14/D63-4582-014/D63-4582-014_zoom1.jpg?ts=1583425261"
    },
    {
        "descricao" : "Camiseta Oakley feminino 2",
        "preco": "39,90",
        "categoria":"feminino",
        "frete": "gratis",
        "img": "https://static.netshoes.com.br/produtos/camiseta-oakley-o-bark-masculina/14/D63-4582-014/D63-4582-014_zoom1.jpg?ts=1583425261"
    }
]
function pegarApi(){
    
    criandoProdutos(produtos)
    filtrarProdutos(produtos)
    regrasDeComparacao(produtos)
    mostrarTextoDigitado(produtos)
}
pegarApi()