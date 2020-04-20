const valores = [8.5, 9.6, 7.4, 5.1] //Array
console.log(valores[0], valores[3]) //Acessando posições do array
console.log(valores[2])

valores[4] = 10 //Inserindo um valor ao índice que não havia sido declarado acima;
console.log(valores)
console.log(valores.length) //Verifica a quantidade de elementos no array;

valores.push({id: 3}, false, null, 'teste') //"push" Insere outros valores no identificador;
console.log(valores) //Array em JS é heterogêneo, permiti múltiplos valores;

console.log(valores.pop()) //Essa função retira o último valor do array;
delete(valores[0]) //Outra maneira de fazer a mesma função
console.log(valores)

console.log(typeof valores) //O Array em JS é do tipo Objeto.

