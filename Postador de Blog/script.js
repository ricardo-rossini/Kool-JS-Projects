//criar um objeto que faca postagens em um blog
/*
* Titulo da Postagem
* Mensagem 
* Autor
* Visualizacoes
* comentarios
* Autor do comentario
* estaAoVivo 
*/

let postagem = {
    titulo: 'Heavy',
    mensagem: 'Onono nono onon',
    autor: 'ze luiz',
    visualizacoes: 48,
    comentarios : [
        {autor: 'chico', mensagem: 'metaaaaaal'},
        {autor: 'lana', mensagem: 'emoooooooo'}
    ],
    estaAoVivo : true
}

console.log(postagem);

function Postagem (titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem1 = new Postagem('Goth', "Booooooooooo", "Darks");
console.log(postagem1);
