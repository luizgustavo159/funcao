function faixaEtariaFun(idade){
    if (idade < 25){
        return "jovem";
    }else if (idade < 65){
        return "adulto";
    }
    else{
        return "idoso(a)"
    }
}

function apresentar(pessoa){
    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtariaFun(pessoa.idade)} de ${pessoa.idade} anos, e sou ${pessoa.profissao}`);
}
const pessoa = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
}

apresentar(pessoa);