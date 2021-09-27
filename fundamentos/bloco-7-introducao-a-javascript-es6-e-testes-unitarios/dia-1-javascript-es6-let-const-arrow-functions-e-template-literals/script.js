//1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

// //2.Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenedOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}

const ordenedArray = ordenedOddsAndEvens();

console.log(`Os números ${ordenedArray} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

// fonte de pesquisa: https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677/3

console.log(`Os números ${oddsAndEvens.sort((a,b) => a - b)} se encontram ordenados de forma crescente!`);

//  ordernar em ordem descrescente 
console.log(`Os números ${oddsAndEvens.sort((a,b) => b - a)} se encontram ordenados de forma decrescente!`);

// Ordenar em função maior - crescente
const sortedArray = (array) => {
    const sortOdds = array.sort((a,b) => a - b);
    return sortOdds;
}

const sortArray = sortedArray(oddsAndEvens);
console.log(`Os números ${sortArray} se encontram ordenados de forma crescente!`)


//  descrente só inverter a -b para b - a.

