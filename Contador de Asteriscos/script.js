//criar uma funcao que exiba a quantidade de *
//que aquela linha possui como indice

function exibirAsterisco(lines) {
    // let pattern = '';
    // for(let i = 0; i < lines; i++) {
    //     pattern += '*';
    //     console.log(pattern);
    // }

    //a funcao acima funciona perfeitamente, porem 
    //a funcao abaixo eh bem interessante

    for(let i = 1; i <= lines; i++) {
        let pattern = '';
        for(let j = 0; j < i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}