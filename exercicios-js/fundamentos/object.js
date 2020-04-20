//Por ser uma línguagem fracamente tipada, o JS torna a atribuição do OBJECT mais flexível do que as demais línguagens;
const prod1 = {} //Objeto vázio
prod1.nome = "Barra de Cereal" 
prod1.preco = 3.20
prod1['Desconto Legal'] = 0.50 //Evitar atributos com espaço;

console.log(prod1)

//Declarando os atributos na criação do OBJECT;
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

/* Object não é a mesma coisa que JSON, Tranformando OBJECT em JSON:
    '{nome: "Camisa Polo", "preco": 79.90}' 
*/

/*É POSSÍVEL CONSTRUIR UMA ESTRUTURA ANINHADA DE OBJECT;
  obj: {
        blabla: 1,
        obj: {
            blabla: 2,
        }
    }
*/