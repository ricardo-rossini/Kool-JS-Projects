//Criar uma funco que exiba todos os numeros primos
//que estiver no intervalo

function exibirNumerosPrimos(lim) {
    for(i = 2; i <= lim; i++) {
        if(numeroPrimo(i)) console.log(i);
    }
}

function numeroPrimo(i) {    
        for(let divisor = 2; divisor < i; divisor++) {
            if(i % divisor === 0) {
                return false;
            }
        }
        return true;
}