//criar uma funcao que some os todos
//os multiplos de 3 e 5 do intervalo

somar(10);

function somar(num){
    let sum = 0;
    let m3 = 0;
    let m5 = 0;
    for(let i = 0; i <= num; i++) {
        if(i % 3 === 0){
            m3 += i;
        }
        else{
            if(i % 5 === 0 ){
                m5 += i;
            }
        }
    }
    sum = m3 + m5;
    console.log(sum);
}