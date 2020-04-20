var numero = 1
/*
    Nesse caso o "var" não fica restrito a este bloco, somente em caso de uma "function"; 
    Ou seja, haverá uma sobreescrita porque ambos estão declarados no mesmo escopo;
*/
{
    var numero = 2  
    console.log('dentro do escopo =', numero)
}

console.log('fora do escopo =', numero)