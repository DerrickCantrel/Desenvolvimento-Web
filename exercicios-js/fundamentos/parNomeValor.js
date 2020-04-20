//par Nome(id)/Valor
const Brinquedo = 'Boneca' //Contexto léxico 1 

console.log(Brinquedo)

//Apesar dos identificadores serem identicos, o contexto é diferente fazendo com que não gere conflitos;
function fabrica() {
    const Brinquedo = 'Carro' //Contexto léxico 2
    return Brinquedo //Nesse caso esse método irá retornar para o identificador local, caso ele não achasse iria procurar em contexto mais genérico;
}

console.log(fabrica())

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "José",
    idade: 24,
    peso: 50,
    endereco: {
        logradouro: 'Rua. Mosenhor Tabosa',
        numero: 222,
    }
}

console.log(cliente)