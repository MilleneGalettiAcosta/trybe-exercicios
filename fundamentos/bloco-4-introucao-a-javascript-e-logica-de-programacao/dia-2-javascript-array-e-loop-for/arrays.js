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
if(mediaAritmetica > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

//Exercicio 5
let maior = numbers[0]
for(let index =1; index < numbers.length;index +=1){
     if(numbers[index] > maior) {
         maior = numbers[index];
     }
}
console.log(maior);

// Exercicio 6
let numeroImpar= 0;

for(let index =0; index < numbers.length; index +=1){
if(numbers[index] % 2 !== 0){
    numeroImpar += 1;
     }
}

 if(numeroImpar===0){
     console.log("nenhum valor ímpar encontrado");
 } else {
     console.log(numeroImpar);
 }

// Exercicio 7