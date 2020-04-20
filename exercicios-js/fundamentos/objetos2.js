console.log(typeof Object)
console.log(typeof new Object) //Instaciando um objeto apartir de uma função;
console.log(typeof Object()) //Outra forma de instaciar um objeto é criando um parâmetro;

const Cliente = function () {}
    console.log(typeof Cliente) 
    console.log(typeof new Cliente) //Da mesma forma acontece com a função ao ser instanciada;

class Produto {} //ES 2015 (ES6);
console.log(typeof Produto)
console.log(typeof new Produto) //Instaciando uma classe;