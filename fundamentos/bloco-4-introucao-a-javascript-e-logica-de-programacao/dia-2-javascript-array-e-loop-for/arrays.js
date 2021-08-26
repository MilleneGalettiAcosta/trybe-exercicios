let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1
for(let index = 0;index < numbers.length;index += 1){
    console.log( numbers[index]);
}
// Exercicio 2
let soma = 0;
for(let index =0;index <numbers.length; index +=1) {
    soma += numbers[index];
}
console.log(soma);

// Exercicio 3
let mediaAritmetica = 0;
for(let index =0;index <numbers.length; index +=1) {
    mediaAritmetica += numbers[index]/numbers.length;
}
console.log(mediaAritmetica);

// Exercicio 4