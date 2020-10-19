const res = fizzBuzz(15);
console.log(res);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number'){
        console.log('Nao eh um numero');
    }
    if(entrada % 3 === 0 && entrada % 5 === 0) {
       return 'FizzBuzz!';
    }
    else if(entrada % 3 === 0 ) {
       return 'Fizz!';
    }
    else if(entrada % 5 === 0){
       return 'Buzz!';
    }
    else{
       return entrada;
    }
}


