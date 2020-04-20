let numero = 1
{
    let numero = 2
    console.log('Dentro do escopo =', numero)
}
console.log('fora do escopo = ', numero)

/*
    Embora ambos tenham o mesmo identificador não podem coexistir, pois não estão definidos no mesmo escopo; caso a 
    variável não seja encontrada dentro do escopo definido pelo bloco de código, automaticamente será usada o valor do
    identificador de fora, como nesse exemplo:
    
        let numero = 1
        {
            let numero = 2
            console.log('Dentro do escopo =', numero)
        }
        console.log('fora do escopo = ', numero)
    

*/