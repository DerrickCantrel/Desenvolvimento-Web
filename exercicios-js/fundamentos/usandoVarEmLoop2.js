const funcs = []
/*
    Nesse contexto a cada interação (da estrutura de repetição) o push irá adicionar a função ao array, e ele 
    deverá imprimir a variável que é "i";
*/
for (var i = 0; i < 10; i++) {
    funcs.push(function() {  
        console.log(i)
    })
    
}

funcs[2]()
funcs[6]()