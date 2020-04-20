console.log(Math.floor(7.2)) //O "floor" abaixa o valor e "ceil" arredonda a esse valor;

const carro = {}
carro.pneu = 'Scorpion' //Através da notação "." é possível atribuir nome/valor ao object;
carro['motor'] = 'V8 Ford' //Outra forma de notação é o "['']";

console.log(carro.pneu)


function model (carro) {
    this.carro = carro //Nesse caso o "this" irá receber o atributo "carro" por parâmetro, e esse "carro" ficará vísivel para quem instaciar um objeto do tipo "model", ou seja, irá ficar público;
}

const model2 = new model('Camaro')
const model3 = new model('Mustang')

console.log(model2.carro)
console.log(model3.carro)