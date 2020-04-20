// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //Basta chamar a função para que passe os valores como parâmetro, para serem atribuidos e somados;
imprimirSoma(2) //O valor não será somado, pois o segundo valor não foi definido "Undefined";
imprimirSoma(2, 10, 4, 5, 6) //Nesse caso só será somado os dois primeiros valores, o restante será ignorado.

// Função com retorno
function soma(a, b = 1) {
    return (a + b) //Nesse caso está sendo retornado o valor em resposta da chamada dessa função;
}

console.log(soma(2, 3))
console.log(soma(2))