let isAtivo = false
console.log(isAtivo)

isAtivo = true //*Let é essencial quando há necessidade de alterar o valor da variável;
console.log(isAtivo)

isAtivo = 1 //Esse valor pode ser lido como um "number"
console.log(!!isAtivo) 
/*Então para saber se esse número representa verdadeiro ou falso é necessário aplicar 
 *a "!" que indica negação, e "!!" significa a anulaçãp da negação, ou seja o valor passa a ser
 *novamente a sua real atribuição lógica; 
*/

//Exemplo com "!!" para  melhor compreenção da lógica apresentada;
isAtivo = 1
console.log(!!true) 
//irá retornar verdadeiro, pois duas exclamações ("!!") gera o resultado original da setença;

console.log('Os verdadeiro...') //A ideia de utilizar o "!!" é forçar o resultado verdadeiro;
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![]) //Array
console.log(!!{}) //Objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os Falsos...')
console.log(!!0) //Valor lógico falso em JS
console.log(!!'') //String vazia
console.log(!!null) //nulo
console.log(!!NaN) //Não é número
console.log(!!undefined) //indefinido
console.log(!!(isAtivo = false)) //indenpedente se atribuição está correta a leitura será direta para ela;

console.log('pra finalizar...') // O "Ou" é "||" em JS;
console.log(!!('' || null || NaN || ' '))



