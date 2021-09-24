
// 1.Crie uma função que receba um número e retorne seu fatorial.
// Como funciona o fatorial => 5! = 5 * 4 * 3 * 2 * 1 = 120

const fatorial = (number) => {
    if ( number === 0 || number === 1) {
        return 1;
    } else {
        return number * fatorial(number - 1);
    }; 
}

console.log(fatorial(5));

// 2.Bônus (opcional): tente fazer o mesmo exercício de forma recursiva 
const fatorialNumber = (number) => (number === 0 || number === 1) ? 1 : number * fatorial(number -1);

console.log(fatorialNumber(5));

// 2.Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (frase) => {
    let wordArray = frase.split(' ');
    let maxLength = 0;
    let result = '';
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
    }

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); 

// bônus Sort
const longestWord1 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord1("Antonio foi no banheiro e não sabemos o que aconteceu"));

// 4. Crie um código JavaScript com a seguinte especificação:
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .