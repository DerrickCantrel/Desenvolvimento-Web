function acontece(alunos, qtdMin) {
    var pontuais = 0;

    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i] <= 0) {
            pontuais = pontuais + 1;
        }
    }

    if (pontuais >= qtdMin) {
        return true;
    } else {
        return false;
    }
}

function aberturas(aulas, qtdMin) {
    let dias = [aulas.length];
    for(var i = 0; i < aulas.length; i++) {
        dias[i] = acontece(aulas[i], qtdMin); 
    }
    return dias;
}

var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaTerca = [2, 5, 0, 0];
var alunosDaQuarta = [3, 1, 0, 15];

//console.log(aberturas([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 2));
//console.log(acontece(alunosDaSegunda, 2));

function produto(array) {
    let mult = array[0];
     
    for (var i = 0; i < array.length; i++) {
        if (array[i+1] != null) {
            mult = mult * array[i+1];
        }
    }
 
    return mult;
 }
 
//console.log(produto([2, 3, 10, 2, 5]));

function fatorial(num) {
    let aux1 = [];
    
    for(var i = 0; i <= num; i++){
        aux1[i] = i;
    }

    let mult = aux1[1];

    for (var i = 1; i < aux1.length; i++) {
        if (aux1[i+1] != null) {
            mult = mult * aux1[i+1];
        }
    }

    return mult;
}

// console.log(fatorial(10));

function maisMenos(array) {
    let positivos = 0;
    let zeros = 0;
    let negativos = 0;
    let auxArray = [];

    for(var i = 0; i < array.length; i++) {
        
        if (array[i] == 0) {
            zeros++;
        } else if (array[i] < 0) {
            negativos++
        } else {
            positivos++;
        } 
    }

    auxArray[0] = positivos/array.length;
    auxArray[1] = zeros/array.length;
    auxArray[2] = negativos/array.length;

    return auxArray;
}

//console.log(maisMenos([1]));

function escada(numeroDegraus) {
    var degrausEscada = [];
    var comparacao = numeroDegraus;

    for (let i = 1; i <= numeroDegraus; i++) {
      var degraus = " ".repeat(numeroDegraus-i)+"#".repeat(i);
      degrausEscada.push(degraus);
    }

    return degrausEscada;
}
  
console.log(escada(5));

/*
function escada(numeroDegraus){
    for (let i = 0; i < numeroDegraus; i++) {
        var temp = [];
    
        // Inclui os espaços primeiro
        let k = 0;
        for (; k < numeroDegraus - (i + 1); k++) {
            temp.push(' ');
        }
    
        for (; k < numeroDegraus; k++) {
            temp.push('#');
        }
    
        console.log(temp.join(''));
    }
}

escada(6);
*/