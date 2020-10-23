//Criar um array de objtos de faixa de preco

//Primeira Opcao
let faixas = [
    {tooltip: 'ate R$ 700,00', minimo: 0, maximo: 700},
    {tooltip: 'e R$ 700,00 ate R$ 1.000,00', minimo: 700, maximo: 1000},
    {tooltip: 'acima de R$ 1.000,00', minimo: 1000, maximo: 999999999}
];

//Segunda Opcao => usando Factory Function

function criaFaixas(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixas('ate R$ 700', 0, 700),
    criaFaixas('de R$ 700 a R$ 1.000,00', 700, 1000),
    criaFaixas('acima de R$ 1000', 1000, 700000000)
];

//Terceira Opcao => CONSTRUTOR

function Faixas(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    criaFaixas('ate R$ 700', 0, 700),
    criaFaixas('de R$ 700 a R$ 1.000,00', 700, 1000),
    criaFaixas('acima de R$ 1000', 1000, 700000000)
];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);