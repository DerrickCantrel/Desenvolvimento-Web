// Novo recurso do ES2015

const Pessoa = {
    nome: 'Derrick',
    idade: 18,
    endereco: {
        logradouro: 'Rua JJ Dourado',
        numero: 111
    }
}

/*
 * Em outras palavras podemos dizer que a estrutura destructuring, irá extrair da estrutura objeto seus atributos "nome" e "idade"
*/
const { nome, idade } = Pessoa 
console.log(nome, idade)

const { nome: n, idade: i } = Pessoa // Apartir dessas variavies é possível modificar seus identificadores
console.log(n, i)

//Extraindo um atributo que não foi definido no objeto;

const { sobrenome, peso = true } = Pessoa // O atributo "peso" foi passado como "true" por padrão;
console.log(sobrenome, peso) 

//Extraindo um atributo do objeto criado dentro de outro objeto;

const { endereco: {logradouro, numero, cep}} = Pessoa
console.log(logradouro, numero, cep)