// Exercicio 1
let n = 5;
let simbolo = "*";
let linha = "";

// for(let i = 0; i < n; i += 1){
//     linha = linha + simbolo;
// };
// for(let i = 0; i < n; i += 1){
//     console.log(linha);
// };

// Exercicio 2
// for(let i = 0; i < n; i += 1){
//     linha += simbolo;
//     console.log(linha);
// }; 

// Exercicio 3
// let posicao = n 
// controlar a posição/coluna em que os asteriscos serão impressos

// criar laço de repetição de coluna/posicao que estamos na linha
// for(let ilinha = 0; ilinha <= n; ilinha += 1){
//     for(let iposicao = 0; iposicao <= n; iposicao += 1){
//         if(iposicao < posicao){
//            linha = linha + " "; 
//         } else {
//             linha += simbolo; 
//         }
//     }
//     console.log(linha);
//     linha = "";
//     posicao -= 1;  
//     }; 

// Exercicio 4 
for(let i = 0; i < n; i += 1){
        linha += simbolo;
        console.log(linha);
    }; 