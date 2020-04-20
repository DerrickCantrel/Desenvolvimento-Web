let num1 = 1
let num2 = 2

num1++ //incremento pós-fixada
console.log(num1)
--num1 //decremento pré-fixada
console.log(num2)

/* 
 * [ALERTA]: ISSO É APENAS UMA BRINCADEIRA, O FOCO A SER ALCAÇANDO É A SIMPLICIDADE DO CÓDIGO E CLAREZA, 
 * E NÃO GERAR UM CÓDIGO COMPLEXO DE SE ENTEDER.  
 * >> D E S A F I O   P A R A   S A B E R   S E   É   T R U E   O U   F A L S E <<
*/
console.log(++num1 === num2--)  
// isso ocorre por conta da ordem de prescedência, já que o decremento de "num2" só acontece depois da comparação;