//Criar um metodo para ler as propriedades de um objeto
//e exibir somente as propriedades do tipo string

const filme = {
    titulo: 'V for Vendetta',
    ano: 2005,
    diretor: 'James McTeigue',
    peronagem: 'V'
}

function exibirPropriedades(obj) {
    for(let i in obj){
        if(typeof obj[i] === 'string'){
            console.log(i, obj[i]);
        }
    }
}


//"Vi Veri Veniversum Vivus Vici". Translated as "By the power of truth, I, while living, have conquered the universe."
