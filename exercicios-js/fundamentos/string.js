const escola = "Cod3r"

console.log(escola.charAt(4)) //Essa função passa como resultado a letra que está no índice declarado "(4)";
console.log(escola.charCodeAt(3)) //Função destinada para retornar o valor da posição na tabela UNICODE;
console.log(escola.indexOf('3')) //Verifica se existe índice associado ao digíto "3" na Constante "escola";

console.log(escola.substring(1)) //Fornece o resultado apartir do índice "1", ou seja, retornará "od3r"
console.log(escola.substring(0, 3)) //Essa função apresenta o resultado do índice "0" e "3", porém ela não inclui o "3";

console.log('Escola '.concat(escola).concat("!")) //Passando 'Escola' de forma direta {Literal direto} sem armazenar em variável e concatenando;
console.log('Escola ' + escola + ("!")) //Usando esse operador aritimético em uma String, ele fará a mesma função do "concat";
console.log(escola.replace(3, 'e')) //Substitui o índice 3 pelo valor fornecido;

console.log('João,Tiago,Pedro'.split(',')) //Organiza as Strings em um Array, sendo necessário declarar um separador como: "(',')" 