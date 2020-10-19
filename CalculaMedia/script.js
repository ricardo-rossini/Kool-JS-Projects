//Calcular media escolar
//obter a media a partir de um array

//de 0 a 59 = F
//de 60 a 69 = D
//de 70 a 79 = C
//de 80 a 89 = B
//de 90 a 100 = A

const array = [70, 85, 70];

function calcMedia(array) {
    let sum = 0;
    let media = 0;
    for(let valor of array) {
        sum += valor;
    }
    return Math.floor(sum / array.length);
}

function mediaAluno(med){
    const media = calcMedia(array);
    if(media <= 59) return 'Media F';
    if(media <= 69) return 'Media D';
    if(media <= 79) return 'Media C';
    if(media <= 89) return 'Media B';
    return 'Media A';
}