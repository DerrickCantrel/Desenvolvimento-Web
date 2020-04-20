/*
    -> Obs: Deve tomar cuidado com a sintaxe, pois o elemento destructuring utiliza a mesma forma de criar um array
    para extrair os elementos de sua estrutra;
*/

const [a] = [10] //criando um Array de uma posição;
console.log(a) //Variável "a" criada que recebe o valor da primeira posição do Array;

/*
    -> Isso é uma forma de você pegar múltiplos elementos e extrair dessa estrutura, e atribui a várias variáveis
    em uma única atribuição;
*/

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //Criando vários elemento em uma única chamada;
console.log(n1, n3, n5, n6) // "n2" e "n4" foram pulados ou ignorados,e no caso do "n5" irá retornar "Undefined";

/*
    -> Desistruturação aninhada de um Array;
*/

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
