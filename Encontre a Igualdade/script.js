//Igualdade de Objeto
//criar dois objetos e comparar as propriedade e posicao de memoria

//construtores
function Endereco(rua, cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}


const endereco1 = new Endereco('Otto Werner Rosel', 'Sao Carlos', '13561-568');
const endereco2 = new Endereco('Otto Werner Rosel', 'Sao Carlos', '13561-568');
const endereco3 = endereco1;

function comparaProps(endereco1, endereco2) {
    //compara se as propriedades do obejo sao iguais

    return endereco1.rua === endereco2.rua 
        && endereco1.cidade === endereco2.cidade
        && endereco1.cep === endereco2.cep

}

console.log(comparaProps(endereco1, endereco2));

function comparaEndMem(end1, end2) {
    //compara se a referencia do objeto aponta para o mesmo end de memoria
    return end1 === end2;
}

console.log(comparaEndMem(endereco1, endereco2)); // FALSE
console.log(comparaEndMem(endereco1, endereco3)); // TRUE
