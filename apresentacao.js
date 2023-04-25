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
    nome: "José",
    idade: 30,
    profissao: "professor",
}

apresentar(pessoa);

const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissao: "medico",
}

apresentar(pessoa2);

const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante",
}

apresentar(pessoa3);
