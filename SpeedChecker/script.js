//velocidade maxima 70 km/h
// a cada 5Km/h a mais que o limite = 1 ponto 
// se ponto for maior que 12 => 'Carteira Suspensa'

function verificaVelocidade(velocidade) {
    const velMax = 70;
    const kmPonto = 5;
    if(velocidade <= velMax) {
        console.log('OK!');
    }
    if(velocidade > velMax && velocidade < (velMax + kmPonto)) {
        console.log('voce recebeu 1 ponto!');
    }
    if(velocidade >= (velMax + kmPonto)){
        let pontos = 1;
        let velMaior = velocidade - velMax;
        const limitePonto = 12
        pontos += Math.floor(velMaior / kmPonto);
        if(pontos >= limitePonto){
            console.log('Sua carteira foi suspensa');
        }
        else{
            console.log(`voce recebeu ${pontos} pontos na carteira`);
        }
    }
}
