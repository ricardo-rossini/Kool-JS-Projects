//Criar uma funco que exiba todos os numeros primos
//que estiver no intervalo

function exibirNumerosPrimos(lim) {
    for(i = 2; i <= lim; i++) {
        let primo = true;
        
        for(let divisor = 2; divisor < i; divisor++) {
            if(i % divisor === 0) {
                primo = false;
                break;
            }
        }

    if(primo) console.log(i);
    }
}