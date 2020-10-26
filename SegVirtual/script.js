const botao = document.getElementById('verifica');

function podeEntrar() {
    const convJessica = ['Andre', 'Willian', 'Marcia', 'Luiza'];
    let convidado = document.getElementById('nome').value;
    let anfitriao = document.getElementById('inviter').value;
    let res = document.querySelector('.res');
    res.innerHTML = 'Pesquisando...';
    if(anfitriao === 'Jessica') {
        for(co of convJessica) {
            if(convidado === co){
                res.innerHTML = '<h1>Voce pode entrar</H1>'
            }
            else {
                res.innerHTML = '<h1>Voce NAO pode entrar</H1>'
            }
        }
    }
    else{
        res.innerHTML = '<h1>Voce NAO pode entrar</H1>'
    }
}