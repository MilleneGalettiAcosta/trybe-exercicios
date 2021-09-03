//  Exercicio 1
// function verificaPalindrome(word){
//     for(index in word){
//         if(word[index] != word[(word.length - 1) - index]){
//           return false;
//         }
//    }
//         return true;
//   };

//    console.log (verificaPalindrome('arara'));
//    console.log (verificaPalindrome("desenvolvimento"));

// Exercicio 2
// function BiggerIndex (arrayNumbers){
//     let majorValueIndex = 0;
//     for (let index in arrayNumbers){
//         if(arrayNumbers[majorValueIndex] < arrayNumbers[index] ){
//             majorValueIndex = index;
//         }
//     }
//     return majorValueIndex;
//     };
   

// console.log(BiggerIndex([2, 3, 6, 7, 10, 1]));

// Exercicio 3
// function ShortIndex (arrayNumbers){
//     let shortValueIndex = 0;
//     for (let index in arrayNumbers){
//         if(arrayNumbers[shortValueIndex] > arrayNumbers[index] ){
//             shortValueIndex = index;
//         }
//     }
//     return shortValueIndex;
//     };

//     console.log(ShortIndex([2, 4, 6, 7, 10, 0, -3]))

// Exercicio 4
// function BiggerIndex (arrayString){
//         let biggerString = 0;
//         for (let index in arrayString){
//             if(arrayString[biggerString] > arrayString[index] ){
//                 biggerString = arrayString[index];
//             }
//         }
//         return biggerString;
//         };
       
    
//     console.log(BiggerIndex(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercicio 5
    // function inteiroMaisRepete (array){
    //     let inteiroRepete = 0;
    //     for (let index in array){
    //         if(
    //             array[inteiroRepete] === array[index]){
    //            inteiroRepete = array[index];
    //             }
    //     }
    //     return inteiroRepete;
    // };
    // console.log(inteiroMaisRepete( [2, 3, 2, 5, 8, 2, 3]));

 // Exercicio 6
    // function sumN (n){
    //     let somaDeTodos = 0;
    //     for(let i = 0; i <= n; i += 1){
    //         somaDeTodos = somaDeTodos + i;
    //     }
    //     return somaDeTodos;
    // }

    // console.log(sumN(5));

// Exercicio 7
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }
              

console.log(verificaFimPalavra('trybe','be'));
console.log(verificaFimPalavra('joaofernando','fernan'));