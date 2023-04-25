function faixaEtaria(idade){
    if (idade < 22){
        return "jovem";
    }else if (idade < 66){
        return "adulto";
    }
    else{
        return "idoso(a)"
    }
}

console.log(faixaEtaria(22));