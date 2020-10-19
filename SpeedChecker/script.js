//velocidade maxima 70 km/h
// a cada 5Km/h a mais que o limite = 1 ponto 
// se ponto for maior que 12 => 'Carteira Suspensa'

function verificaVelocidade(velocidade) {
    const velMax = 70;
    if(velocidade <= velMax) {
        console.log('OK!');
    }
    if(velocidade > 70 && velocidade < 75) {
        console.log('voce foi multado!');
    }
    if(velocidade >= 75){
        let pontos = 0;
        let velMaior = velocidade - velMax;
        pontos = Math.floor(velMaior / 5);
        console.log(`voce recebeu ${pontos} pnto na carteira`);
        if(pontos >= 12){
            console.log('Sua carteira foi suspensa');
        }
    }
}
