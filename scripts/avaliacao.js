const camisas = [
    { idProduto: 1, tipo: 'Camisa', marca: 'Nike', preco: 89.9, estoque: 25 },
    { idProduto: 2, tipo: 'Camisa', marca: 'Adidas', preco: 69.9, estoque: 30 },
    { idProduto: 3, tipo: 'Camisa', marca: 'Puma', preco: 69.9, estoque: 28 },
    { idProduto: 4, tipo: 'Camisa', marca: 'New Balance', preco: 59.9, estoque: 14 },
    { idProduto: 5, tipo: 'Camisa', marca: 'Supreme', preco: 139.9, estoque: 25 },
    { idProduto: 6, tipo: 'Camisa', marca: 'Off White', preco: 259.9, estoque: 25 },
    { idProduto: 7, tipo: 'Camisa', marca: 'Gucci', preco: 484.9, estoque: 25 },
    { idProduto: 8, tipo: 'Camisa', marca: 'Ralph Lauren', preco: 224.9, estoque: 25 },
    { idProduto: 9, tipo: 'Camisa', marca: 'Calvin Klein', preco: 189.9, estoque: 25 },
    { idProduto: 10, tipo: 'Camisa', marca: 'Air Jordan', preco: 234.9, estoque: 25 }

]

const calcas = [
    { idProduto: 11, tipo: 'Calça', marca: 'Nike', preco: 89.9, estoque: 25 },
    { idProduto: 12, tipo: 'Calça', marca: 'Adidas', preco: 69.9, estoque: 30 },
    { idProduto: 13, tipo: 'Calça', marca: 'Puma', preco: 69.9, estoque: 28 },
    { idProduto: 14, tipo: 'Calça', marca: 'New Balance', preco: 59.9, estoque: 14 },
    { idProduto: 15, tipo: 'Calça', marca: 'Supreme', preco: 139.9, estoque: 25 },
    { idProduto: 16, tipo: 'Calça', marca: 'Off White', preco: 259.9, estoque: 25 },
    { idProduto: 17, tipo: 'Calça', marca: 'Gucci', preco: 484.9, estoque: 25 },
    { idProduto: 18, tipo: 'Calça', marca: 'Ralph Lauren', preco: 224.9, estoque: 25 },
    { idProduto: 19, tipo: 'Calça', marca: 'Calvin Klein', preco: 189.9, estoque: 25 },
    { idProduto: 20, tipo: 'Calça', marca: 'Air Jordan', preco: 234.9, estoque: 25 }

]

const tenis = [
    { idProduto: 21, tipo: 'Tenis', marca: 'Nike', preco: 89.9, estoque: 25 },
    { idProduto: 22, tipo: 'Tenis', marca: 'Adidas', preco: 69.9, estoque: 30 },
    { idProduto: 23, tipo: 'Tenis', marca: 'Puma', preco: 69.9, estoque: 28 },
    { idProduto: 24, tipo: 'Tenis', marca: 'New Balance', preco: 59.9, estoque: 14 },
    { idProduto: 25, tipo: 'Tenis', marca: 'Supreme', preco: 139.9, estoque: 25 },
    { idProduto: 26, tipo: 'Tenis', marca: 'Off White', preco: 259.9, estoque: 25 },
    { idProduto: 27, tipo: 'Tenis', marca: 'Gucci', preco: 484.9, estoque: 25 },
    { idProduto: 28, tipo: 'Tenis', marca: 'Ralph Lauren', preco: 224.9, estoque: 25 },
    { idProduto: 29, tipo: 'Tenis', marca: 'Calvin Klein', preco: 189.9, estoque: 25 },
    { idProduto: 30, tipo: 'Tenis', marca: 'Air Jordan', preco: 234.9, estoque: 25 }

]

const produtos = camisas.concat(calcas).concat(tenis)
var carrinho = []

function carregaHomepage() {
    let txt = ''

    for (let i = 0; i < 12; i++) {

        let item = produtos[Math.floor(Math.random() * produtos.length)]
        console.log(item)
        txt += `
        <div class="col">
        <div class="card" style="width: 18rem;" id="cardHome">
            <img src="./img/${item.tipo}.png" class="card-img-top" alt="..." id="imagemHome">
            <div class="card-body">
                <h5 class="card-title">${item.tipo} ${item.marca}</h5>
                <p class="card-text">R$${item.preco}</p>
                <div class="input-group mb-3" id="selecaoQtdHome">
                    <input type="number" class="form-control" placeholder="Quantidade" id="addProduto${item.id}"
                        aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id=""
                        title="Adicionar ao carrinho" onclick="addCarrinho(${item.idProduto})"><i class="icofont-cart-alt"></i></i></button>
                </div>
            </div>
        </div>
        </div>
        `
    }
    document.getElementById('cardsProdutosHomePage').innerHTML = txt
}

function carregaCalcas() {
    let txt = ''
    for (i in calcas) {
        txt += `
        <div class="row " id="linhaProdutosPagina">
            <div class="col-4" id="colunaImagem"><img src="./img/calça.png" alt="calça" id="imgCalcaLista"></div>
            <div class="col-4" id="colunaDados">
                Tipo: ${calcas[i].tipo}
                <br>
                Marca: ${calcas[i].marca}
                <br>
                Preço: ${calcas[i].preco}
                <br>
            </div>
            <div class="col-4">
            <div class="input-group mb-3" id="selecaoQtdCarrinho">
                <input type="number" class="form-control" placeholder="Quantidade" aria-label="" aria-describedby="button-addon2" id="addProduto${calcas[i].idProduto}" max="${calcas[i].estoque}">
                <button class="btn btn-outline-secondary" type="button" id="" onclick="addCarrinho(${calcas[i].idProduto})" title="Adicionar ao carrinho"><i class="icofont-cart-alt"></i></i></button>
              </div>
            </div>
            
      </div>
        `
    }
    document.getElementById('listaCalças').innerHTML = txt

}

function carregaCamisas() {
    let txt = ''
    for (i in camisas) {
        txt += `
        <div class="row " id="linhaProdutosPagina">
            <div class="col-4" id="colunaImagem"><img src="./img/camisa.png" alt="calça" id="imgCalcaLista"></div>
            <div class="col-4" id="colunaDados">
                Tipo: ${camisas[i].tipo}
                <br>
                Marca: ${camisas[i].marca}
                <br>
                Preço: ${camisas[i].preco}
                <br>
            </div>
            <div class="col-4">
            <div class="input-group mb-3" id="selecaoQtdCarrinho">
                <input type="number" class="form-control" placeholder="Quantidade" aria-label="" aria-describedby="button-addon2" id="addProduto${camisas[i].idProduto}" max="${camisas[i].estoque}">
                <button class="btn btn-outline-secondary" type="button" id="" onclick="addCarrinho(${camisas[i].idProduto})" title="Adicionar ao carrinho"><i class="icofont-cart-alt"></i></i></button>
              </div>
            </div>
            
      </div>
        `
    }
    document.getElementById('listaCamisas').innerHTML = txt

}

function carregaTenis() {
    let txt = ''
    for (i in tenis) {
        txt += `
        <div class="row " id="linhaProdutosPagina">
            <div class="col-4" id="colunaImagem"><img src="./img/tenis.png" alt="calça" id="imgCalcaLista"></div>
            <div class="col-4" id="colunaDados">
                Tipo: ${tenis[i].tipo}
                <br>
                Marca: ${tenis[i].marca}
                <br>
                Preço: ${tenis[i].preco}
                <br>
            </div>
            <div class="col-4">
            <div class="input-group mb-3" id="selecaoQtdCarrinho">
                <input type="number" class="form-control" placeholder="Quantidade" aria-label="" aria-describedby="button-addon2" id="addProduto${tenis[i].idProduto}" max="${tenis[i].estoque}">
                <button class="btn btn-outline-secondary" type="button" id="" onclick="addCarrinho(${tenis[i].idProduto})" title="Adicionar ao carrinho"><i class="icofont-cart-alt"></i></i></button>
              </div>
            </div>
            
      </div>
        `
    }
    document.getElementById('listaTenis').innerHTML = txt

}

function verificaEstoque(id) {
    var qtdSol = document.getElementById('addProduto'.concat(id)).value
    var produto = produtos[produtos.findIndex(x => x.idProduto === id)]
    
    if(qtdSol > produto.estoque){
        alert("Quantidade indisponível em estoque")
    }

    id = produto.idProduto
    tipo = produto.tipo
    marca = produto.marca
    preco = produto.preco
    quantidade = qtdSol


    return true;

}

function addCarrinho(id){
    if(verificaEstoque(id)){
        var itemCarrinho = {id, tipo, marca, preco, quantidade}
        carrinho.push(itemCarrinho)
        localStorage.setItem('carrinho', JSON.stringify(carrinho))

        produtos[produtos.findIndex(x => x.idProduto === id)].estoque = ((produtos[produtos.findIndex(x => x.idProduto === id)].estoque) - itemCarrinho.quantidade)
    }

    console.log(produtos[produtos.findIndex(x => x.idProduto === id)].estoque)

}

function formataCarrinho(){

    let txtCarrinho = ''
    const cart = JSON.parse(localStorage.getItem('carrinho'))
    console.log(cart)
    for (i in cart){
        
        txtCarrinho += `
        <tr id="tabela${cart[i].id}">
        <td>${cart[i].id}</td>
        <td>${cart[i].tipo} ${cart[i].marca}</td>
        <td>${cart[i].quantidade}</td>
        <td>${cart[i].preco}</td>
        <td><button type="button" class="btn btn-danger" onclick="deletaProduto(${cart[i].id}, ${cart[i].quantidade})"><i class="icofont-trash"></i></button></td>
        </tr>
        `
    }

    document.getElementsByTagName('tbody')[0].innerHTML = txtCarrinho
}

function deletaProduto(id, qtde){
    produtos[produtos.findIndex(x => x.idProduto === id)].estoque = ((produtos[produtos.findIndex(x => x.idProduto === id)].estoque) + qtde)
    document.getElementById("tabela".concat(id)).innerHTML = ''

}

function calculaTotal(){
    const cart = JSON.parse(localStorage.getItem('carrinho'))
    var subtotal = 0
    var total = 0
    for(i in cart){
        subtotal = cart[i].preco * cart[i].quantidade
        total = total + subtotal

    }

    document.getElementById("subtotal").innerHTML = `${total.toFixed(2)}`
}