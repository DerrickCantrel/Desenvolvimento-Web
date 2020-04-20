const nome = 'Rebeca'
const concatenacao = 'olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template) 

/* O Template String pode ser utilizado para melhorar
 * a estética do código ao fazer uma concatenação de várias
 * STRINGS, outra característica a ser notada é que ele 
 * suporta a quebra de uma linha na declaração de uma variável 
 * sem gerar erro. A sintaxe do template string: ${}, o que estiver
 * nas chaves ele irá interpolar (interpretar)

*/

//Expressões
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
    