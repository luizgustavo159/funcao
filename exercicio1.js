const pessoa = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.4
}
function apresentar(pessoa){
    console.log(`Ola! meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade}, ${pessoa.altura}m de altura
    e sou ${pessoa.profissao}`)
}

apresentar(pessoa);