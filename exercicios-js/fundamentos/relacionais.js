/* 
    "==" Esse elemento é um operador relacional que verifica (compara) a igualde entre dois valores; Porém só verifica os valores;
*/
console.log('01)', '1' == 1)

/*  
    Isso significa que se o primeiro elemento é estritamente igual ao segundo, ou seja,
    não é comparado somente o valor mas também o seu tipo; '1' [é uma STRING] e 1 [é um Number];
*/  
console.log('02)', '1' === 1)

/*
    Verificando se os elementos são diferentes através do operador relacional "!=" ;
*/

console.log('03)', '3' != 3) 

/*
    Comparando se os elementos são estritamentos diferentes, com "!==" ;
*/

console.log('04)', '3' !==3)

// OUTROS EXEMPLOS;

console.log('05)', 3 > 2)
console.log('06)', 3 < 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

//EXEMPLOS COM Date;

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // Nesse caso não fará diferença usar o "===", já que ambos elementos acessam o mesmo endereço de memória;
console.log('10)', d1 == d2)  
console.log('10)', d1.getTime() === d2.getTime()) // Serão iguais, pois os valores são iguais tanto o valor como o tipo;

// EXEMPLOS ADICIONAIS;
console.log('11)', undefined == null)
console.log('12)', undefined === null)