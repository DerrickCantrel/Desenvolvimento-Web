// Uma variável "var" declarada em um bloco de código, é vísivel para todo o escopo, ou seja
// ela é Global, exceto quando criada em uma "function"; 
{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera) 
            } 
        } 
    } 
}

console.log(sera)

// A variável "var" declarada dentro de uma função fica limitada a ela, sendo apenas uma varável local;
function teste() {
    var local = 123
}

console.log(loval)