// Armazenando uma função em uma variável
const imprimirSoma = function {
    console.log(a + b)
} 

imprimirSoma (4, 6)

// Armazenando uma função Arrow (forma reduzido de criar uma função) em uma variável
const soma = (a, b) => {
    return (a + b)
}

console.log(4, 6)

// Retorno implícito 
const subtracao = (a, b) => a - b
console.log(subtracao(4, 6))

// Reduzindo ainda mais uma Arrow function (Em caso de um único parâmetro);
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')