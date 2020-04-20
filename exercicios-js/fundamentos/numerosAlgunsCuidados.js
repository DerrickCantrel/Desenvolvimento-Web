//Operações estranhas do JAVASCRIPT que daria errado em outras linguagens
console.log(7 / 0) //Javascript é uma das poucas linguagens que pode retornar "Infinity" tipo como Resultado dessa operação;
console.log("10" / 2)
//Nessa operação o javascript faz a leitura interna do valor da String;
console.log('3' + 2) //Nesse caso especifico a String ganha, já que o operador aritimético nesse sentido concatena; 
console.log("Show!" * 2) //retornar "NaN" Não é número;
console. log(0.1 + 0.7)
/*
 *O Esperado seria "0.8", porém a especificação do "JS" não suporta essa colocação do ponto flutuante;                    
 *essa especificação é seguida pela maroria das linguagens, se encontra em uma referência do IEEE. Esse
 *tipo de leitura é mais rápido;
*/
//"console.log(10.toString())" Nessa operação o "JS" não faz a leitura como a funcão "Number", retornando assim uma excessão;
