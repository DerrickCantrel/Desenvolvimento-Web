function teste1(num) {
    if (num > 7)
        console.log(num)
    
    console.log('Final') // Esse bloco não está associado a condição "if", independete da condição ele irá imprimir no console;
}

teste1(9)
teste1(6)

/* 
    [CUIDADO]:Esse código foi utilizado com fins didatico, apenas para evidenciar que o uso do ";" indica o final da setença do código; 
*/
function teste2(num) {
    if (num > 7); {
        console.log(num)
    }

}

teste2(8)
teste2(4)