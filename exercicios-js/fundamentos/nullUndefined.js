let valor //Não foi inicializada
console.log(valor) 

/*
 *Ao imprimir iremos nos deparar com o resultador "Undefined", isso 
 *ocorre exatamente pelo fato da váriavel não ter sido atríbuida em sua declaração.
*/

valor = null //Ausência de valor, ou seja ela não aponta para nenhum local de memória;
console.log(valor)

/*
 * console.log(valor.toString()) // erro!
*/

const produto = {} //Object sem propriedades
console.log(produto.preco) 
console.log(produto)

/*
 *Acessando o valor de "preco", será retornado Undefined. [IMPORTANTE] Nesse caso não houve erro, porque a variável 
 *"produto" está declarada, mas se tentar acessar uma propriedade de "preco", acarretará em ERRO já que "preco" não
 *estar declarado; Ex:. console.log(produto.preco.a);
*/

produto.preco = 4,60 
console.log(produto)

produto.preco = undefined //Evite atribuir undefined
console.log(!!produto.preco) //Transformando em boolean
// delete produto.preco (tirando um atributo de um objeto);
console.log(produto) //Continuirá sendo "Undefined", pois não perdeu seu atributo;

produto.preco = null //Sem preço;
console.log(!!produto.preco)
console.log(produto)