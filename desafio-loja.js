let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]
<<<<<<< HEAD
let clienteAmanda = [
    {produto: 'Calça jeans clara', valor: 130.0},
    {produto: 'Blusa simples', valor: 35.0}]
let clienteJu = [
    {produto: 'Tênis casual preto', valor: 120.0}]
=======
>>>>>>> b145781d637ee46e3204c56189c09e138d2dd1ec

let valorTotal = [] 
let descontoAplicado = [] 

<<<<<<< HEAD

=======
>>>>>>> b145781d637ee46e3204c56189c09e138d2dd1ec
function calcularDesconto(valor) {
    if (valor >= 200.0) {
        descontoAplicado.push(valor * 0.5)
    } else if (valor >= 100.0) {
        descontoAplicado.push(valor * 0.2)
    } else if (valor >= 80.0) {
        descontoAplicado.push(valor * 0.1)
    } else if (valor >= 50.0) {
        descontoAplicado.push(valor * 0.05)
<<<<<<< HEAD
    }
=======
    } 
>>>>>>> b145781d637ee46e3204c56189c09e138d2dd1ec
}

function realizarCompra(comprasDaCliente) {

    let quantidadeDeProdutos = comprasDaCliente.length

<<<<<<< HEAD
        comprasDaCliente.forEach(item => {
            valorTotal.push(item.valor)
            calcularDesconto(item.valor)
=======
    comprasDaCliente.forEach(item => {
        valorTotal.push(item.valor)
        calcularDesconto(item.valor)
>>>>>>> b145781d637ee46e3204c56189c09e138d2dd1ec
    })

    valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)
    descontoAplicado = descontoAplicado.reduce((acumulador, atual) => acumulador + atual)
    let valorFinal = valorTotal - descontoAplicado
    let dataDaCompra = new Date()

    let notaFiscal = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`,
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }
<<<<<<< HEAD
    
=======
>>>>>>> b145781d637ee46e3204c56189c09e138d2dd1ec

    if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
<<<<<<< HEAD
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua próxima compra'
=======
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua prõxima compra'
>>>>>>> b145781d637ee46e3204c56189c09e138d2dd1ec
        })
    } else {
        return console.table(notaFiscal)
    }
}

<<<<<<< HEAD

realizarCompra(clienteLilit)
realizarCompra(clienteAmanda)
realizarCompra(clienteJu)




=======
realizarCompra(clienteLilit)
>>>>>>> b145781d637ee46e3204c56189c09e138d2dd1ec
