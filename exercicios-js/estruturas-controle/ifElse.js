const boletimEscolar = function(nota) {
    if (nota >= 5.5) {
        console.log('Aprovado por média final ' + nota)
    } else {
        console.log('reprovado por média final ' + nota)
    }
}

boletimEscolar(0)