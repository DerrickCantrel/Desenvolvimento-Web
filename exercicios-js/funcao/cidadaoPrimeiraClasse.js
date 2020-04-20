//criar função de forma literal
function fun1() {  }

//armazenar em uma váriavel
const fun2 = function () { }

//armazenar em um array
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazer em um atributo de objeto
const obj = {}
    obj.falar = function () { return "Ola"}
    console.log(obj.falar())

//passar função como parametro
function run(fun) {
    fun()
}

run(function() { console.log("Deu certo bb")})

//uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(10, 5)(5) //forma direta
const cincoMais = soma(10, 5)
cincoMais(5)