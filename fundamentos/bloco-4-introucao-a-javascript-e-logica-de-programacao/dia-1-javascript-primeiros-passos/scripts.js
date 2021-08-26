// Exercicio 1
const a = 10;
const b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
// Exercicio 2
const c = 20;
const d = 45;

if(c>d) {
  console.log("O valor c é maior");
} else {
  console.log("O valor d é maior");
}
// Exercicio 3
if(a>b && a>c) {
    console.log("A é maior")
} else if(b>a && b>c) {
    console.log("B é maior")
} else {
    console.log("C é o maior")
}
// Exercício 4
const valor = 60;

if(valor=== 60) {
    console.log("positive");
} else if(valor === 0) {
    console.log("zero");
} else {
    console.log("negative")
}
// Exercício 5
const angulo1 = 50;
const angulo2 = 40;
const angulo3 = 90;

if(angulo1+angulo2+angulo3 === 180) {
    console.log(true)
} else {
    console.log(false)
}
// Exercicio 6

// Exercicio 7
const notaDoAluno = 10;

switch(notaDoAluno) {
    case notaDoAluno >= 90:
        console.log("A");
        break;

    case notaDoAluno >= 80:
        console.log("B");
        break;

    case notaDoAluno >= 70:
        console.log("C");
        break;

    case notaDoAluno >= 60:
        console.log("D");
        break;

    case notaDoAluno >= 50:
        console.log("E");
        break;

    case notaDoAluno < 50:
        console.log("F");
        break;

        default:
            console.log("error");
}
// Exercicio 8
if(a%2||b%2||c%2) {
    console.log(true);
} else {
    console.log(false);
}

// Bônus 8
let par = false
if(a%2||b%2||c%2) {
    par = true;
};
console.log(par)

// Exercicio 9
if(a%2 !== 0||b%2 !== 0||c%2 !== 0) {
    console.log(true);
} else {
    console.log(false)
}

// Bônus 9
let impar = false
if(a%2 !==0||b%2 !==0||c%2 !==0) {
    impar = true;
};
console.log(impar);

// Exercicio 10
const custoProduto = 156;
const valorVenda = 439;

let imposto = 20*custoProduto/100;
const custoTotal = custoProduto + imposto;
let lucro = valorVenda - custoTotal;

if(custoProduto < 0 || valorVenda < 0) {
    console.log("Erro");
} else {
    console.log(lucro);
}
