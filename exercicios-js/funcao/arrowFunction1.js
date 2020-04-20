let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { //arrow function
    return 2 * a
}

dobro = a => 2 * a //function arrow com return implicito já quem retorna uma unica linha
console.log(dobro(Math.PI))

ola = () => 'Olá'
ola = _ => 'Olá' //Possui um parametro
console.log(ola)
