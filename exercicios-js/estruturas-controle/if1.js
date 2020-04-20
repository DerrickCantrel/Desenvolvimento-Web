function SoBoaNoticia(valor) {
    if(valor >= 7.0) {
        console.log('Aprovado com ' + valor)
    }
}

SoBoaNoticia(9.0)
SoBoaNoticia(4.6) // Só será exibido o valor que entra dentro da condição estabelecido na função;

/* 
   Nesse 2° exemplo teremos uma única variável, diferente do 1° caso que tinhamos uma expressão relacional. Então nesse contexto,
   independente do valor que for passado o Javascript entende que dentro da variável "valor" dever ter um valor verdadeiro ou
   falso, ou seja, automaticamente ele irá converter o valor para verdadeiro ou falso, e só irá imprimir no console se o valor for TRUE; 
*/
function SeForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

SeForVerdadeEuFalo() // Undefined implicito;
SeForVerdadeEuFalo(undefined) // Undefined Explicito;
SeForVerdadeEuFalo(null) // valor nulo;
SeForVerdadeEuFalo(NaN) // Not a Number;
SeForVerdadeEuFalo(0) // Único número que será falso;
SeForVerdadeEuFalo(-1) // True;
SeForVerdadeEuFalo({}) // Objeto será True;
SeForVerdadeEuFalo([]) // Array sem valor será true;
SeForVerdadeEuFalo([1.1, 2.3, 2.5]) // Array com valores declarados;
SeForVerdadeEuFalo(' ') // String com apenas um espaço já será true;
SeForVerdadeEuFalo('') // String vazia;