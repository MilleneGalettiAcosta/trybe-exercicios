
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