function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    } 
    return soma
}
//pode passar qnts parametros quiser
console.log(soma(10.2, 9.8))