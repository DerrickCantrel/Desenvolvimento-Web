const peso1 = 1.0
const peso2 = Number('2.0') //Duas formas de declarar um valor numérico

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Teste para descobrir se o valor é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(total)
console.log(media.toFixed(2)) //forma de imprimir apenas duas casa decimais
console.log(media.toString(2)) //tranformar o valor em STRING e imprimi em um  valor binário
console.log(typeof media)
console.log(typeof Number) //"Number" com "N" é uma Função e "number" com "n" é um tipo de dado quando o valor é numérico