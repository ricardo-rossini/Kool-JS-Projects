//Criar um objeto endereco que coontenha
//Logradouro
//Cidade
//Estado
//CEP
//exibirEndereco()

let endereco = {
    logradouro: 'Av Otto Werner Rosel, 1111 casa 532',
    cidade: 'Sao Carlos',
    estado: 'SP',
    CEP: '13561-568',
};

function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave, endereco[chave]);
    }
}
