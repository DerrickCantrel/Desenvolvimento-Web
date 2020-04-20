function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // "||" -> Ope. relacional "OU"
    const comprarTv50 = trabalho1 && trabalho2 // "&&" -> Ope. relacional "E"
 // const comprarTv32 = !!(trabalho1 ^ trabalho2) "OU EXCLUSIVO" bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // Simulando o "OU EXCLUSIVO"
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // Criando objeto de forma direta para retornar os seguintes valores;
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))