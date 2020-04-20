console.log('a = ', a)
var a = 2               
console.log('a = ', a)
//A variável será içada, fazendo com que o interpretador aloque o valor da variável declarada, mesmo ela tendo sido identificada após
// sua criação;

//ISSO TAMBÉM OCORRE DENTRO DE UMA FUNÇÃO:
function teste() {
    console.log('a = ', a)
    var a = 2               
    console.log('a = ', a)
}

teste()

