//USANDO DESTRUCTURING EM ARRAY;
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // Se "if" o valor "min" for maior o operador destructuring irá inverter o "min e max";
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([944]))
console.log(rand([, 878]))
console.log(rand([]))